import Filters from "./components/filter/Filters.jsx";
import Header from "./components/Header.jsx"
import AccommodationList from "./components/AccommodationList.jsx"
import { useState } from "react";


function App() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [isMinNumberOfGuests, setIsMinNumberOfGuests] = useState("true");
  const [amenities, setAmenities] = useState({
    airConditioning: false,
    parkingSpace: false,
    pets: false,
    pool: false,
    wifi: false,
    tv: false
  })

  return (
      <div>
        <Header />
        <Filters 
          numberOfGuests={numberOfGuests}
          setNumberOfGuests={setNumberOfGuests}
          setIsMinNumberOfGuests={setIsMinNumberOfGuests}
          isMinNumberOfGuests={isMinNumberOfGuests}
          amenities={amenities}
          setAmenities={setAmenities}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          />
        <AccommodationList 
          numberOfGuests={numberOfGuests}
          isMinNumberOfGuests={isMinNumberOfGuests}
          amenities={amenities}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
  )
}

export default App
