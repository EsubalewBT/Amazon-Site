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
      
      <CircleLoader color="#121212"  />
    </div>
  )
}

export default Loader
