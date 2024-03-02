function Amenties({
  amenities,
  setAmenities
}) {

  // function that changes value (true or false) of amenities' property (option) 
  const handleAmenitiesChange = (option) => {
    setAmenities(prevState => ({...prevState, [option]: !prevState[option]}))
  }

  return (
    <div className="amenities-cont">
        {/* checkboxes:
        to select which amenities the accommodation have. */}
        <label>
          <input 
            type="checkbox" 
            checked={amenities.airConditioning} 
            onChange={() => handleAmenitiesChange("airConditioning")} />
          Air conditioning
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={amenities.parkingSpace} 
            onChange={() => handleAmenitiesChange("parkingSpace")} />
          Parking space
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={amenities.pets} 
            onChange={() => handleAmenitiesChange("pets")} />
          Pets allowed
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={amenities.pool} 
            onChange={() => handleAmenitiesChange("pool")} />
          Swimming pool
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={amenities.wifi} 
            onChange={() => handleAmenitiesChange("wifi")} />
          WiFi
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={amenities.tv} 
            onChange={() => handleAmenitiesChange("tv")} />
          TV
        </label>
      </div>  
    )
}

export default Amenties