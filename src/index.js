import 'bootstrap/dist/css/bootstrap.min.css'

// Custom.
import './styles.css'
// import Map from './components/Map.js'

const submitHandler = (event, marker) => {
  if (!marker) {
    event.preventDefault()
    alert('Debes seleccionar una ubicación en el mapa.')
  }
  else {
    latlng = marker.getLatLng()
    document.getElementById('lat').setAttribute('value', latlng.lat)
    document.getElementById('lng').setAttribute('value', latlng.lng)
  }
}

window.onload = () => {
  // const map = Map({
  //   selector: 'mapid',
  //   addSearch: true
  // })
  // const form = document.getElementById('js-creation-form')

  // form.onsubmit = (event) => submitHandler(event, map.marker)
}
