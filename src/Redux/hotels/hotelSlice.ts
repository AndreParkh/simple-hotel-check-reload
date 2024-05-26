import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createRequest } from '../../Functions/Fetch';
import { isEqualHotels } from '../../Functions/Helpers';
import { createCheckOutDate, formatDate } from '../../Functions/FormatDate';
import type { searchParams } from './../../components/Sections/Search/SearchSection.props';
import type { hotelInfo, HotelProps } from './../../components/Hotel/Hotel.props';


export interface State {
	isAuthenticated: boolean,
	isLoading: 'pending' | 'fulfilled' | 'rejected' | null,
	searchParams: searchParams
	hotels: hotelInfo[]
	favorite: hotelInfo[]
}

// const hotel: hotelInfo = {
// 	name: 'Moscow Marriott Grand Hotel',
// 	stars: 5,
// 	checkIn: '2024-05-23',
// 	qtyDays: 1,
// 	price:  10543
// }
// const hotel2: hotelInfo = {
// 	name: 'Golden Ring Hotel',
// 	stars: 5,
// 	checkIn: '2024-05-23',
// 	qtyDays: 1,
// 	price: 11621
// }
const initialState: State = {
	isAuthenticated: false,
	isLoading: null,
	searchParams: {
		location: '',
		checkInDate: '',
		daysQty: 0
	},
	hotels: [],
	favorite: []
}


export const requestHotels = createAsyncThunk(
	'hotels/requestHotels',
	async (props: searchParams) => {

		const formatedCheckOutDate = createCheckOutDate(props.checkInDate, props.daysQty)
		const formatedCheckInDate = formatDate(props.checkInDate)
		// const formatedCheckOutDate = formatDate(checkOutDate)
	
		const request = createRequest(formatedCheckInDate.YYYYMMDD, formatedCheckOutDate.YYYYMMDD, props.location)

		let response = await fetch(request);
		return await response.json()
	}
)

export const hotelSlice = createSlice({
	name: 'hotels',
	initialState,
	reducers: {
		setSearhParams: (state, action) => {
			state.searchParams = action.payload
		},
		toggleFavorite: (state, action) => {
			
			const targetHotel:HotelProps = {...action.payload}
			if (targetHotel.isFavorite) {
				state.favorite = state.favorite.filter((favHotel) => !isEqualHotels(favHotel, targetHotel.hotelInfo))
			} else {
				state.favorite.push(targetHotel.hotelInfo)
			}
		},
		setAuthentication: (state, action)  => {
			state.isAuthenticated = action.payload
		}
	}, 
	extraReducers: (builder) => {
		builder
			.addCase(
				requestHotels.pending,
				(state) => {
					state.isLoading = 'pending'
					console.log()
				}
			)
			.addCase(
				requestHotels.fulfilled,
				(state, action) => {
					const hotels = action.payload

					state.isLoading = 'fulfilled'
					state.hotels = [] 
					// console.log(hotels)

					hotels.map( (hotel: any) => {
						const {hotelName, stars, priceFrom} = hotel
						const hotelInfo:hotelInfo = {
							name: hotelName,
							stars,
							checkIn: state.searchParams.checkInDate,
							qtyDays: state.searchParams.daysQty,
							price: Math.floor(priceFrom)
						}
						state.hotels.push(hotelInfo)
					})
				}
			)
			.addCase(
				requestHotels.rejected,
				(state, action) => {
					state.isLoading = 'rejected'
					console.error(action.error)
				}
			)
	}
})

export const { setSearhParams, toggleFavorite, setAuthentication } = hotelSlice.actions
export default hotelSlice.reducer