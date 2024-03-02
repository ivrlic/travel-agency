import Amenties from "./Amenties"
import DateSelector from "./DatePicker"
import GuestsNumber from "./GuestsNumber"

function Filters ({
  numberOfGuests, 
  setNumberOfGuests, 
  setIsMinNumberOfGuests, 
  isMinNumberOfGuests,
  amenities,
  setAmenities, 
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) {

  return (
    <div className="filters-cont">
      <DateSelector 
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <GuestsNumber 
        numberOfGuests={numberOfGuests} 
        setNumberOfGuests={setNumberOfGuests} 
        setIsMinNumberOfGuests={setIsMinNumberOfGuests}
        isMinNumberOfGuests={isMinNumberOfGuests}
      />

      <Amenties 
        amenities={amenities}
        setAmenities={setAmenities} 
      />
    </div>
  )
}

export default Filters
