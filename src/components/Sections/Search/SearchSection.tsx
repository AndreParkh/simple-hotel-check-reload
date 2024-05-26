import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { formatDate } from '../../../Functions/FormatDate'
import { AppDispatch } from '../../../Redux/store'
import { searchParams } from './SearchSection.props'
import { requestHotels, setSearhParams } from '../../../Redux/hotels/hotelSlice'

import './SearchSection.css'

const SearchSection: FC = () => {
	const [location, setLocation] = useState<string>('Москва')
	const [checkInDate, setCheckInDate] = useState<string>(formatDate(Date.now()).YYYYMMDD)
	const [daysQty, setDaysQty] = useState<number>(1)
	
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {onClickHandler(searchParams)}, [])

	const searchParams: searchParams = {
		location, 
		checkInDate, 
		daysQty
	}

	
	const  onClickHandler = (searchParams: searchParams, event?:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (event) event.preventDefault();
		
		dispatch(setSearhParams(searchParams))
		dispatch(requestHotels(searchParams))
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
						min={1}
						max={99}
						defaultValue={daysQty} 
						onChange={(e) => Number(e.target.value) > 0 ? setDaysQty(Number(e.target.value)): null} />
				</label>
				<button className="button" type='submit' onClick={(e) => onClickHandler(searchParams, e)}>Найти</button>
			</form>
		</div>
	)
}

export default SearchSection