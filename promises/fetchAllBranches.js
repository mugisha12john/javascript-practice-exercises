async function fetchBranchNames(username, repo) {
  try {
    const PER_PAGE = 100;
    let page = 1;
    let allBranch = [];

    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repo}/branches?per_page=${PER_PAGE}&page=${page}`
      );

      if (!response.ok) {
        return [];
      }

      const result = await response.json();

      if (result.length === 0) {
        break;
      }

      allBranch.push(...result.map((brnch) => brnch.name));
      page++;
    }

    return allBranch;
  } catch (error) {
    console.error("Error fetching branches:", error);
    return [];
  }
}

fetchBranchNames("mugisha12john", "capgemini-clone-tailwindCss")
  .then((branches) => console.log(branches))
  .catch(console.error);

export { fetchBranchNames };
