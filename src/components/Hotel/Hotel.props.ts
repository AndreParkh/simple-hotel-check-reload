
export interface HotelProps {
	isFavorite: boolean,
	hotelInfo: hotelInfo
}

export interface hotelInfo {
	name: string,
	stars: number,
	checkIn: string,
	qtyDays: number,
	price: number
}

export interface HotelPropsType {
	props: HotelProps,
	className: string
}