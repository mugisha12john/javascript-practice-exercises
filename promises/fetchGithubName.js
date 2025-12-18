async function fetchGitHubName(username) {
  try {
    let user = await fetch(`https://api.github.com/users/${username}`);
    if (!user.ok) {
      throw new Error(`User ${username} not found`);
    }
    let data = await user.json();
    return data.name;
  } catch (error) {
    console.error(error);
    return null
  }
}
fetchGitHubName("addyosmani")
  .then((res) => console.log(res || "No name found"))
  .catch((error) => console.log(error));
export { fetchGitHubName };
