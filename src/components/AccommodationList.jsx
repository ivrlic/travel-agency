import fetchData from "../hooks/fetchData.js"
import Accommodation from "./Accommodation.jsx"

function AccommodationList ({
  numberOfGuests, 
  isMinNumberOfGuests, 
  amenities,
  startDate,
  endDate
}) {

  const {units, loading, error} = fetchData()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  // 1. filter
  // filtering units by number of guests
  const filteredUnitsByGuestNum = 
    numberOfGuests === ""
    ? units
    : isMinNumberOfGuests === "true"
    ? units.filter((unit) => unit.capacity >= Number(numberOfGuests))
    : units.filter((unit) => unit.capacity === Number(numberOfGuests))

  // 2. filter
  // filtering filteredUnitsByGuestNum by amenities
  const filteredUnitsByAmenities = filteredUnitsByGuestNum.filter(unit => {
    for (let option in amenities) {
      if (amenities[option] && !unit.amenities[option]) {
        return false;
      }
    }
    return true;
  });

  // 3. filter
  // filtering filteredUnitsByAmenities by dates
  const filteredUnitsByDates = filteredUnitsByAmenities.filter(unit => {
    if(startDate && endDate){
        return unit.availableDates.some(date => {
          const intervalStart = new Date(date.intervalStart);
          const intervalEnd = new Date(date.intervalEnd);
 
          return startDate.setHours(0, 0, 0, 0) >= intervalStart.setHours(0, 0, 0, 0) && endDate < intervalEnd;
        });
    } 
    else return unit
  });

  const accommodationListHtml = filteredUnitsByDates.map(unit => {
    const {
      title,
      image, 
      capacity, 
      beachDistanceInMeters, 
      amenities, 
      pricelistInEuros} = unit

    return (<Accommodation 
            key={unit.id}
            title={title}
            image={image}
            capacity={capacity}
            beachDistanceInMeters={beachDistanceInMeters}
            amenities={amenities}
            pricelistInEuros={pricelistInEuros}
            startDate={startDate}
            endDate={endDate}
          />)
  })


  return (
    <div className="accommmodation-list-cont">
      {accommodationListHtml}
    </div>
  )
}

export default AccommodationList