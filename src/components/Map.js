// import L from 'leaflet'
// import * as esri from 'esri-leaflet'
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'

// // Constantes.
// const initialLat = -34.9187
// const initialLng = -57.956
// const mapLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

// const Map = ({selector, onClick, addSearch}) => {
//   // Private functions.
//   const initialize = () => {
//     let map = L.map(selector).setView([initialLat, initialLng], 13)
//     L.tileLayer(mapLayerUrl).addTo(map)

//     // if (addSearch) {
//     //   addSearchControl(map)
//     // }

//     map.onclick = onClick ? onClick : ({latlng}) => { addMarker(latlng) }
  
//     return map
//   }

//   const addSearchControl = (map) => {
//     L.control.scale().addTo(map)
//     const provider = new OpenStreetMapProvider();

//     new GeoSearchControl({provider}).addTo(map);
  
//     map.on('geosearch/showlocation', (data) => {
//       if (data.results.length > 0) {
//         addMarker(data.results[0].latlng)
//       }
//     })
//   }

//   // Public functions.
//   const addMarker = ({lat, lng}) => {
//     if (marker) marker.remove()
  
//     marker = L.marker([lat, lng]).addTo(map)
//   }

//   // Private variables.
//   let map = initialize()

//   // Public variable.
//   let marker

//   return {
//     marker: marker,
//     addMarker: addMarker
//   }
// }

// export default Map
