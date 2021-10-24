const linksSocialMedia = {
  github: '1xGuGaAzevedox1',
  youtube: 'channel/UCuZ43ShX-DtSgv-iGscI3lA',
  facebook: 'gustavo.azevedo.1848816',
  instagram: 'guga.azevedo_',
  twitter: '_GuGa_Azevedo_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      /*userName.textContent = data.name*/
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
