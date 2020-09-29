import L from 'leaflet'

// Constantes.
const initialLat = -34.9187
const initialLng = -57.956
const mapLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const Map = ({selector, onClick, addSearch}) => {
  // Private variables.
  let map = initialize()

  // Public variable.
  let marker

  // Private functions.
  const initialize = () => {
    map = L.map(selector).setView([initialLat, initialLng], 13)
    L.tileLayer(mapLayerUrl).addTo(map)

    if (addSearch) {
      addSearchControl()
    }

    map.onclick = onClick ? onClick : ({latlng}) => { addMarker(latlng) }
  
    return map
  }

  const addSearchControl = () => {
    L.control.scale().addTo(map)
    let searchControl = new L.esri.Controls.Geosearch().addTo(map)
  
    let results = new L.LayerGroup().addTo(map)
  
    searchControl.on('results', (data) => {
      results.clearLayers()
  
      if (data.results.length > 0) {
        addMarker(data.results[0].latlng)
      }
    })
  }

  // Public functions.
  const addMarker = ({lat, lng}) => {
    if (marker) marker.remove()
  
    marker = L.marker([lat, lng]).addTo(map)
  }

  return {
    marker: marker,
    addMarker: addMarker
  }
}

export default Map
