document.addEventListener('DOMContentLoaded', function () {
  const nameElement = document.querySelector('.profile-name');
  const usernameElement = document.querySelector('.profile-username');
  const repositoriesElement = document.getElementById('repositories');
  const followersElement = document.getElementById('followers');
  const followingElement = document.getElementById('following');
  const profileLinkElement = document.querySelector('.profile-link');
  const profileAvatarElement = document.querySelector('.profile-avatar');

  fetch('https://api.github.com/users/moferaisreal')
    .then((response) => response.json())
    .then((data) => {
      nameElement.textContent = data.name;
      usernameElement.textContent = data.login;
      repositoriesElement.textContent = data.public_repos;
      followersElement.textContent = data.followers;
      followingElement.textContent = data.following;
      profileLinkElement.href = data.html_url;
      profileAvatarElement.src = data.avatar_url;
    });
});
