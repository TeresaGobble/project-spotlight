import React from 'react';
import Dropdowns from './Dropdowns';

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const App = () => {

  return (
    // <div>
    //   <h2>This is from the App component!</h2>
    //   <MapContainer center={[51.505, -0.09]} zoom={13}>
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Marker position={[51.505, -0.09]}>
    //       <Popup>
    //         A pretty CSS3 popup. <br /> Easily customizable.
    //       </Popup>
    //     </Marker>
    //   </MapContainer>
    // </div>
    <div className="map">
      <h1>this is from the appp component</h1>
      <Dropdowns />
    </div>
  )
}

export default App;