function GuestsNumber({  
  numberOfGuests, 
  setNumberOfGuests, 
  setIsMinNumberOfGuests, 
  isMinNumberOfGuests
}) {

  return (
    <div className="guests-num-cont">
      {/* dropdown list:
      to select number of guests */}
      <div className="flex-justify-center margin-bottom-05">
        <label htmlFor="numberOfGuests">Number of Guests:</label>
        <select 
          id="numberOfGuests" 
          value={numberOfGuests} 
          onChange={(e) => setNumberOfGuests(e.target.value)}>
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>
      </div>

      {/* radio options:
      to choose whether the number of guests is minimum
      or exactly equal to the accommodation capacity */}
      <div className="guests-num-cond-cont flex-column flex-align-center">
        <label>
          <input
            type="radio"
            name="guestsFilter"
            value="true"
            checked={isMinNumberOfGuests === "true"}
            onChange={(e) => setIsMinNumberOfGuests(e.target.value)}
          />
          Min Guests
        </label>
        <label>
          <input
            type="radio"
            name="guestsFilter"
            value="false"
            checked={isMinNumberOfGuests === "false"}
            onChange={(e) => setIsMinNumberOfGuests(e.target.value)}
          />
          Exact Guests
        </label>
      </div>
    </div>  
  )
}

export default GuestsNumber