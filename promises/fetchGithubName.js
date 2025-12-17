async function fetchGitHubName(username) {
  let user = await fetch(
    `https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((ans) => console.log(ans.name))
    .catch((err) => console.log(err));
}
// fetchGitHubName("mugisha12john");
export { fetchGitHubName };
