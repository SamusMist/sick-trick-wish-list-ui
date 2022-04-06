const fetchApi = {
  getData(url) {
    return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Cannot load data. Try again')
      } else {
        return response.json()
      }
    })
  }
}

export default fetchApi
