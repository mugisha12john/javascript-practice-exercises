// async function fetchNamesOfAllPublicRepos(username) {
//     let repo = await fetch(`https://api.github.com/users/${username}/repos`);
//     if (!repo.ok) {
//         throw new Error(`Repositories for user ${username} not found`);
//     }
//     let repoData = await repo.json();
//     return repoData;
// }
// fetchNamesOfAllPublicRepos("mugisha12john")
// .then(res=> console.log(res.length))
// .catch(console.error);
// export { fetchNamesOfAllPublicRepos };

//fetch all public repo names of a user with pagination handling
async function fetchNamesOfAllPublicRepos(username) {
  const PER_PAGE = 100;
  let page = 1;
  let allRepos = [];

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${PER_PAGE}&page=${page}`
      );
      if (!response.ok) {
        return [];
      }
      const data = await response.json();
      if (data.length === 0) break;
      allRepos.push(...data.map(repo => repo.name));
      page++;
    }

    return allRepos;
  } catch {
    return [];
  }
}

fetchNamesOfAllPublicRepos("iampava")
  .then(a => console.log(a.length));
export { fetchNamesOfAllPublicRepos };