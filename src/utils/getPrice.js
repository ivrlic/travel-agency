// getting price range when stay dates are not chosen
export function getPriceRange(arr) {
  let minPrice = arr[0].pricePerNight || 0
  let maxPrice = arr[0].pricePerNight || 0

  // searching for min and max price in an array (pricelistInEuros)
  arr.forEach(element => {
    if (element.pricePerNight > maxPrice) {
      maxPrice = element.pricePerNight
    }
    if (element.pricePerNight < minPrice) {
      minPrice = element.pricePerNight
    }
  })
  // if maxPrice and minPrice are the same then take one value, else take a price range
  const priceRange = minPrice === maxPrice ? `€${minPrice}` : `€${minPrice} - €${maxPrice}`

  return priceRange
}


// getting a total price after stay dates are chosen
export function getPrice(pricelistInEuros, startDate, endDate){

  let totalPrice = 0;

  pricelistInEuros.forEach(price => {
    const { intervalStart, intervalEnd, pricePerNight } = price;

    const start = new Date(intervalStart);
    const end = new Date(intervalEnd);
    // setting dates to midnight in order to calculate correctly with startDate and endDate
    start.setHours(0, 0, 0, 0)
    end.setHours(0, 0, 0, 0)

    if(startDate && endDate){
      // setting dates to midnight in order to calculate correctly
      startDate.setHours(0, 0, 0, 0)
      endDate.setHours(0, 0, 0, 0)

        // case 1: if stay dates are in the one intervalPrice
        if (startDate >= start && endDate <= end) {
          const numberOfNights = (endDate - startDate) / (1000 * 60 * 60 * 24);
          const intervalPrice = numberOfNights * pricePerNight;
          totalPrice += intervalPrice;

        // case 2a: if stay dates are in more than one intervalPrice
        // first substract startDate from the end of the priceInterval 
        } else if (startDate >= start && startDate < end && endDate > end) {
          const numberOfNights = (end - startDate) / (1000 * 60 * 60 * 24);
          const intervalPrice = numberOfNights * pricePerNight;
          totalPrice += intervalPrice;
        // case 2b: then substract start priceInterval from the endDate        
        } else if (startDate < start && endDate >= start) {
          const numberOfNights = (endDate - start) / (1000 * 60 * 60 * 24);
          const intervalPrice = numberOfNights * pricePerNight;
          totalPrice += intervalPrice;
        }
    }
  });

  return totalPrice;
}