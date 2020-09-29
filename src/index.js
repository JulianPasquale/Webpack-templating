import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom.
import './styles.css'
import Map from '../../Map.js'

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
  const map = Map({
    selector: 'mapid',
    addSearch: true
  })
  const form = document.getElementById('create-user-form')

  form.onsubmit = (event) => submitHandler(event, map.marker)
}
