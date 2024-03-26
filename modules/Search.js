const moduleName = 'Search'

// Ma barre de recherche
// - Récupérer la ville saisie
// - A partir de la saisie, trouver la latitude et la longitude de la ville
// - Si la ville n'existe pas, afficher un message d'erreur au visiteur
// - BONUS : Suggestions de villes à partir de la saisie (P = Paris)

class Search {

  constructor() {
    // Il sert à définir les variables, les propriétés
    this.input = document.querySelector('.js-search-input')
    this.form = document.querySelector('.js-search-form')
    this.cities = []
    // Et à lancer les fonctions, les méthodes
    this.init()
  }

  init() {
    // Il sert à lancer les fonctions, les méthodes
    this.getCities()
    this.watchUserInput()
  }

  watchUserInput() {
    // Il sert à écouter les événements
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      this.getLatLong()
    })
  }

  getLatLong() {
    const name = this.input.value
    const cityData = this.getCityData(name)
    if (cityData) {
      console.log('ok', cityData)
      const lat = cityData.lat
      const long = cityData.lng
      console.log(lat, long)
    } else {
      alert('la ville n\'existe pas')
    }
    console.log(name)
    console.log(this.cities.length)
  }

  getCities() {
    fetch('../data/france-cities.json')
      .then(response => response.json())
      .then(data => {
        this.cities = data
      })
  }

  getCityData(userCityName) {
    const cityData = this.cities.find(cityObject => cityObject.city.toLowerCase() === userCityName.toLowerCase())
    console.log(cityData)
    return cityData
  }
}

export { Search }