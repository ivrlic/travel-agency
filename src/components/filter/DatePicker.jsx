import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {

  const startMinDate = new Date(2024, 0, 1);
  const maxDate = new Date(2024, 11, 31);
  const endMinDate = new Date(startDate)
  // endDate is at least one day after startDate
  endMinDate.setDate(endMinDate.getDate() + 1);

  return (
    <div className="date-picker-cont flex-justify-center">
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date)
          // if startDate is greater or equal to endDate, endDate gets null value
          if (date >= endDate) {
            setEndDate(null);
          }
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={startMinDate}
        maxDate={maxDate}
        dateFormat="yyyy-MM-dd"
        placeholderText="Start Date"
        className="date-picker"
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={endMinDate}
        maxDate={maxDate}
        dateFormat="yyyy-MM-dd"

        placeholderText="End Date"
        className="date-picker"
      />
    </div>
  );
}

export default DateSelector;