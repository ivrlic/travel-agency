import { useState } from "react"
import { getPrice, getPriceRange } from "../utils/getPrice.js"
import formatDate from "../utils/formatDate.js"
import Modal from "./Modal.jsx"

function Accommodation({
  title, 
  image, 
  capacity, 
  beachDistanceInMeters, 
  amenities, 
  pricelistInEuros,
  startDate,
  endDate
}) {

  const [moreInfo, setMoreInfo] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const price = getPrice(pricelistInEuros, startDate, endDate)
  const priceRange = getPriceRange(pricelistInEuros)

  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = formatDate(endDate)

  // closing modal
  function handleModal(){
    setIsBooked(false)
  }

  return (
    <div className="accommodation-cont">
      <img src={image} alt="a private accomodation image" />
      <p><strong>Title: </strong>{title}</p>
      <p><strong>Capacity: </strong>{capacity}</p>
      {beachDistanceInMeters && <p><strong>Nearest beach: </strong>{beachDistanceInMeters} m</p>}

      {!moreInfo && (
        <button onClick={()=>setMoreInfo(true)}>More Info</button>
      )}
      
      {moreInfo && (
        <div>
            <p><strong>AMENITIES: </strong></p>
            <div className="amenities">
              <p><strong>AirConditioning: </strong>{amenities.airConditioning  && "Yes" || "No"}</p>
              <p><strong>ParkingSpace: </strong>{amenities.parkingSpace && "Yes" || "No"}</p>
              <p><strong>Pets: </strong>{amenities.pets && "Yes" || "No"}</p>
              <p><strong>Pool: </strong>{amenities.pool && "Yes" || "No"}</p>
              <p><strong>TV: </strong>{amenities.tv && "Yes" || "No"}</p>
              <p><strong>Wifi: </strong>{amenities.wifi && "Yes" || "No"}</p>
            </div>

            {(!startDate || !endDate) && 
              <div>
                <p className="price"><strong>Price per Night: </strong>{priceRange}</p>
                <p className="notice">Please select your stay dates to view the exact price and finalize your reservation.</p>
              </div>}
            {startDate && endDate && 
              <div>
                <p className="price"><strong>Total Price: </strong>{price}</p>
                <button className="book-btn" onClick={()=>setIsBooked(!isBooked)}>Book Now</button>
              </div>
              }
            <button onClick={()=>setMoreInfo(false)}>Less Info</button>
        </div>
      )}

      {isBooked && 
        <Modal 
          title={title}
          formattedStartDate={formattedStartDate}
          formattedEndDate={formattedEndDate}
          capacity={capacity}
          price={price}
          handleModal={handleModal}
        />
      }

    </div>
  )
}

export default Accommodation