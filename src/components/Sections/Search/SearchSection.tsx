import { FC, useState } from 'react'

import { createRequest, fetchRequest } from '../../../Functions/Fetch'
import { createCheckOutDate, formatDate } from '../../../Functions/FormatDate'

import './SearchSection.css'

const SearchSection: FC = () => {
	const [location, setLocation] = useState<string>('Москва')
	const [checkInDate, setCheckInDate] = useState<string>(formatDate(Date.now()).YYYYMMDD)
	const [daysQty, setDaysQty] = useState<number>(1)

	const checkOutDate = createCheckOutDate(checkInDate, daysQty)

	const formatedCheckInDate = formatDate(checkInDate)
	const formatedCheckOutDate = formatDate(checkOutDate)

	const request = createRequest(formatedCheckInDate.YYYYMMDD, formatedCheckOutDate.YYYYMMDD, location)

	// let json: JSON
	let hotelArr : Promise<any>
	
	const callFetchRequest = (request:string, event: any) => {
		hotelArr = fetchRequest(request, event)
	}

	return (
		<div className="search__section section">
			<form className="search__form flex">
				<label className="label search__label flex">
					Локация
					<input 
						className="input search__input" 
						type="text" 
						defaultValue={location}
						onChange={(e) => setLocation(e.target.value)} />
				</label>
				<label className="label search__label flex">
					Дата заселения
					<input 
						className="input search__input" 
						type="Date" 
						defaultValue={checkInDate} 
						onChange={(e) => setCheckInDate(e.target.value)} />
				</label>
				<label className="label search__label flex">
					Количество дней
					<input 
						className="input search__input" 
						type="number" 
						defaultValue={daysQty} 
						onChange={(e) => setDaysQty(Number(e.target.value))} />
				</label>
				<button className="button" type='submit' onClick={(e) => callFetchRequest(request, e)}>Найти</button>
			</form>
		</div>
	)
}



export default SearchSection