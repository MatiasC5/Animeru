const animeInfo = document.querySelector('#anime-info')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd7649ce63msh2a0f91ab425013cp15287ejsnc08f338eed8c',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

async function getAnime(e) {
  e.preventDefault()
  const { value } = e.target.anime
  const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${value}&sortBy=ranking&sortOrder=asc`;
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      showOnScreen(data)
      console.log(data.data[0]);
    })
    .catch(err => console.error(err));
}

function showOnScreen(data) {
  animeInfo.textContent = ''
  for (let i = 0; i < data.data.length; i++) {
    const animeContainer = document.createElement('div')
    animeContainer.classList.add('anime-container')
    const animeTitle = document.createElement('h2')
    const animeImage = document.createElement('img')
    animeTitle.textContent = data.data[i].title
    animeImage.src = data.data[i].image

    animeContainer.append(animeTitle, animeImage)
    animeInfo.append(animeContainer)
  }

}
