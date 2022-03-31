import React from "react"

const Circles = ({selectedCircle, handleCircleSelect}) => {
  return (
    <section className="Circles">
      {selectedCircle.map((selectedCircle, idx) => (
        <div
        className={selectedCircle ? 'selected' : ''}
        onClick={() => handleCircleSelect(idx)}
        >{idx + 1}</div>

      ))}
    </section>
  )
}

export default Circles