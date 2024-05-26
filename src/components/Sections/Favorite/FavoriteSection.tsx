import { FC, useState } from 'react' 
import { useSelector } from 'react-redux'

import Hotel from "../../Hotel/Hotel"
import SortButton from '../../SortButton/SortButton'
import { RootState } from '../../../Redux/store'
import { HotelProps } from "../../Hotel/Hotel.props"
import { SortButtonType } from '../../SortButton/SortButton.props'

import './FavoriteSection.css'

const FavoriteSection: FC = () => {
	const [sortType, setSortType] = useState<'Rating' | 'Cost' | 'null'>('null')
	const [isReverse, setIsReverse] = useState<boolean>(false)

	const favHotelStore = useSelector((state: RootState) => state.hotels.favorite)

	const ratingProps:SortButtonType = {
		isSort: sortType === 'Rating',
		isReverse: isReverse,
		childern: 'Рейтинг',
		onSetSort: () => toogleSort('Rating'),
	}

	const costProps:SortButtonType = {
		isSort: sortType === 'Cost',
		isReverse: isReverse,
		childern: 'Цена',
		onSetSort: () => toogleSort('Cost'),
	}

	const toogleSort = (targetSortType: 'Rating' | 'Cost') => {
		if (sortType === targetSortType) {
			setIsReverse(!isReverse)
		} else {
			setSortType(targetSortType)
			setIsReverse(false)
		}
	}

	const sortedFavHotelList = [...favHotelStore].sort((a, b) => {
		if (sortType === 'Cost') {
			return  isReverse ? b.price - a.price : a.price - b.price
		} else if (sortType === 'Rating') {
			return  isReverse ? b.stars - a.stars : a.stars - b.stars
		} else {
			return 0
		}
	})

	const favHotelList: HotelProps[] = sortedFavHotelList.map((hotelInfo) => {
		return {isFavorite: true, hotelInfo}
	})


	return (
		<div className="section favorite__section">
			<h3 className="favorite__title">
				Избранное
			</h3>
			<div className="favotite__btns flex">
				<SortButton Props={ratingProps} />
				<SortButton Props={costProps} />
			</div>
			<div className="favorite__list scrollbar flex">
				{favHotelList.length === 0 && <span>Нет избранных отелей</span> }
				{favHotelList.length > 0 && favHotelList.map((hotel, idx) => <Hotel  props={hotel} className={'favorite__hotel'} key={idx} />)}
			</div>
		</div>
	)
}

export default FavoriteSection