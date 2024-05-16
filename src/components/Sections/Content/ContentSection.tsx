import { FC } from 'react'

import Hotel from "../../Hotel/Hotel"
import { HotelProps } from "../../Hotel/Hotel.props"

import './ContentSection.css'

const ContentSection: FC = () => {

	const hotel: HotelProps = {
		isFavorite: false,
		name: 'Moscow Marriott Grand Hotel',
		rating: 4,
		startDate: '28 June, 2020',
		qtyDays: 1,
		price: 23924
	}

	const hotelList: HotelProps[] = [
		hotel,
		hotel,
		hotel,
		hotel,
		hotel,
		hotel,
		hotel,
	]

	const swiperItems: string[] = [
		'../../../../public/swiper-1.jpg',
		'../../../../public/swiper-2.jpg',
		'../../../../public/swiper-3.jpg',
		'../../../../public/swiper-4.jpg',
	]

	return (
		<div className="section content__section wrapper">
			<div className="content__header flex">
				<h2 className="content__title flex">
					Отели 
					<div></div>
					Москва
				</h2>
				<p className="content__date">07 июля 2020</p>
			</div>
			<div className="swiper flex">
				{swiperItems.map((path, idx) => <img src={path} alt="" key={idx} />)}
			</div>
			<div className="content__wrapper flex">
				<p className="content__qty-favorite">Добавлено в Избранное: <span>3</span> отеля</p>
				<div className="hotel__list scrollbar flex">
					{hotelList.map((hotel, idx) => <Hotel props={hotel} className={'content__hotel'} key={idx}/>)}
				</div>
			</div>
		</div>
	)
}

export default ContentSection