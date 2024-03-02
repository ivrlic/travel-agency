import React from 'react'

function Modal({
  title,
  formattedStartDate,
  formattedEndDate,
  capacity,
  price,
  handleModal
}) {

  return (
    <div className="modal-bckg">
    <div className="modal">
      <p>You have successfully booked {title} accommodation.</p>
      <p>DETAILS:</p>
      <div className="book-details">
        <p>Dates of stay: {formattedStartDate} - {formattedEndDate}</p>
        <p>Number of persons: {capacity}</p>
        <p>Total price: €{price}</p>
      </div>  
      <button onClick={handleModal}>YEAH!</button>
    </div>
  </div>
  )
}

export default Modal