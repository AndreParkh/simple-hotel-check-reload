import { hotelInfo } from "../components/Hotel/Hotel.props"

export const formatePrice = (price: number | string): string => {
	let result: string
	let substr: string
	
	if (typeof price == 'number') {
		result = Math.floor(price).toString()
	} else {
		result = price
	} 

	if (result.length > 3) {
		substr = result.slice(0, -3) 
		result = result.slice(-3) 
		return `${formatePrice(substr)} ${result}`
	} else {
		return result
	}
}

export const isEqualHotels = (hotel1: hotelInfo, hotel2: hotelInfo): boolean => {

	return hotel1.checkIn === hotel2.checkIn
			&& hotel1.name === hotel2.name
			&& hotel1.price === hotel2.price
			&& hotel1.qtyDays === hotel2.qtyDays
			&& hotel1.stars === hotel2.stars
  };