import { FC } from "react"

import StarSvg from "../../assets/StarSVG/StarSvg"
import HotelIcon from "../../assets/HotelIcon/HotelIcon"
import { FavoriteSvg } from "../../assets/FavoriteSvg/FavoriteSvg"
import { HotelPropsType } from "./Hotel.props"

import cn from 'classnames'

import './Hotel.css'

const Hotel: FC<HotelPropsType>= ({props, className}) => {

	const ratingInStars = []

	for (let i = 0; i < 5; i++) {
		const isActive = i < props.rating
		ratingInStars.push(<StarSvg className={ cn('hotel__star',{'hotel__star-active': isActive})} />)
	}

	return (
		<div className= {className + ' hotel selector flex'}>
			<HotelIcon />
			<div className="icon__wrapper flex">
				<FavoriteSvg className={cn('hotel__fav_btn', {'hotel__fav_btn-active': props.isFavorite}) } />
				<h4 className="hotel__name">{props.name}</h4>
				<p className="hotel__date">{props.startDate.toString()} - {props.qtyDays.toString()} дней</p>
				<div className="hotel__info">
					<div className="hotel__rating flex">
						{...ratingInStars}
					</div>
					<p className="hotel__price"> <span>Price:</span> {props.price.toString()} ₽</p>
				</div>
			</div>
		</div>
	)
}

export default Hotel