import { FC, useState } from 'react' 

import Hotel from "../../Hotel/Hotel"
import SortButton from '../../SortButton/SortButton'
import { HotelProps } from "../../Hotel/Hotel.props"
import { SortButtonType } from '../../SortButton/SortButton.props'

import './FavoriteSection.css'

const FavoriteSection: FC = () => {

	const [SortType, setSortType] = useState<'Rating' | 'Cost' | 'null'>('null')
	const [isReverse, setIsReverse] = useState<boolean>(false)

	const ratingProps:SortButtonType = {
		isSort: SortType === 'Rating',
		isReverse: isReverse,
		childern: 'Рейтинг',
		onSetSort: () => toogleSort('Rating'),
	}

	const costProps:SortButtonType = {
		isSort: SortType === 'Cost',
		isReverse: isReverse,
		childern: 'Цена',
		onSetSort: () => toogleSort('Cost'),
	}

	const toogleSort = (targetSortType: 'Rating' | 'Cost') => {
		if (SortType === targetSortType) {
			setIsReverse(!isReverse)
		} else {
			setSortType(targetSortType)
			setIsReverse(false)
		}
	}

	const hotel: HotelProps = {
		isFavorite: false,
		name: 'Moscow Marriott Grand Hotel',
		rating: 4,
		startDate: '28 June, 2020',
		qtyDays: 1,
		price: 23924
	}

	const favHotelList: HotelProps[] = [
		hotel,
		hotel,
		hotel,
		hotel,
	]

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
				{favHotelList.map((hotel, idx) => <Hotel  props={hotel} className={'favorite__hotel'} key={idx} />)}
			</div>
		</div>
	)
}

export default FavoriteSection