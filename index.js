const animeInfo = document.querySelector('#anime-info')


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cd7649ce63msh2a0f91ab425013cp15287ejsnc08f338eed8c',
    'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
  }
};


async function getAnime(e) {
  e.preventDefault()
  const { value } = e.target.anime
  fetch(`https://animes5.p.rapidapi.com/?q=${value}&limit=15`, options)
    .then(response => response.json())
    .then(data => {
      showOnScreen(data)
    })
    .catch(err => console.error(err));
}


function showOnScreen(data) {
  animeInfo.textContent = ''
  for (let i = 0; i < data.animes.length; i++) {
    const animeContainer = document.createElement('div')
    animeContainer.classList.add('anime-container')
    const animeTitle = document.createElement('h2')
    const animeImage = document.createElement('img')
    animeTitle.textContent = data.animes[i].title
    animeImage.src = data.animes[i].main_picture.medium

    animeContainer.append(animeTitle, animeImage)
    animeInfo.append(animeContainer)
  }

}
