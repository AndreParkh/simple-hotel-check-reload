
export interface HotelProps {
	isFavorite: Boolean,
	name: String,
	rating: number,
	startDate: String,
	qtyDays: Number,
	price: Number
}

export interface HotelPropsType {
	props: HotelProps,
	className: string
}