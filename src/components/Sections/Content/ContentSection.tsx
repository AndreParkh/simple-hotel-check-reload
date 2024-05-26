import { FC } from 'react'
import { useSelector } from 'react-redux'

import Hotel from "../../Hotel/Hotel"
import { HotelProps } from "../../Hotel/Hotel.props"
import { formatDate } from '../../../Functions/FormatDate'
import type { RootState } from '../../../Redux/store'

import './ContentSection.css'
import { isEqualHotels } from '../../../Functions/Helpers'

const ContentSection: FC = () => {

	const state = useSelector((state: RootState) => state.hotels)
	const searchParams = state.searchParams
	const hotelsStore = state.hotels
	const favHotelsStore = state.favorite

	const swiperItems: string[] = [
		'../../../../public/swiper-1.jpg',
		'../../../../public/swiper-2.jpg',
		'../../../../public/swiper-3.jpg',
		'../../../../public/swiper-4.jpg',
	]

	const hotels: HotelProps[] = hotelsStore.map((hotelInfo) => {
		const isFav = favHotelsStore.reduce((acc, favHotel) => acc = acc || isEqualHotels(favHotel, hotelInfo), false)
		return {isFavorite: isFav, hotelInfo}
	})

	return (
		<div className="section content__section wrapper">
			<div className="content__header flex">
				<h2 className="content__title flex">
					Отели 
					<div />
					{searchParams.location}
				</h2>
				<p className="content__date">{formatDate(searchParams.checkInDate).DDMonthYYYY}</p>
			</div>
			<div className="swiper flex">
				{swiperItems.map((path, idx) => <img src={path} alt="" key={idx} />)}
			</div>
			<div className="content__wrapper flex">
				<p className="content__qty-favorite">Добавлено в Избранное: <span>{favHotelsStore.length}</span> отеля</p>
				<div className="hotel__list scrollbar flex" >
					{state.isLoading === 'pending' && <span>Загрузка...</span>}
					{state.isLoading === 'rejected' && <span>Ошибка при загрузке...</span>}
					{state.isLoading === 'fulfilled' && hotels.map((hotel, idx) => <Hotel props={hotel} className={'content__hotel'} key={idx}/>)}
				</div>
			</div>
		</div>
	)
}

export default ContentSection