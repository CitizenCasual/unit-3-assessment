import React from "react";

const CircleSelector = ({selectedCircle, handleCircleSelect}) => {
  return (
    <section className="CircleSelector">
      {selectedCircle.map((selectedCircle, idx) => (
          <button 
          onClick={() => handleCircleSelect(idx)}
          className= {selectedCircle ? 'selected' : ''}
          >
            {selectedCircle
              ? `Circle ${idx + 1} Selected`
              : `Select Circle ${idx + 1}`
            } 
            </button>
      ))}
    </section>
  )
}

export default CircleSelector