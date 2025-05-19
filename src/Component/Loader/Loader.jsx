import React from 'react'
import {CircleLoader} from 'react-spinners'
function Loader() {
  return (
    <div
    
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}>
      
      <CircleLoader color="#36d7b7"  />
    </div>
  )
}

export default Loader
