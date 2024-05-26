import { FC } from "react"

import StarSvg from "../../assets/StarSVG/StarSvg"
import HotelIcon from "../../assets/HotelIcon/HotelIcon"
import { FavoriteSvg } from "../../assets/FavoriteSvg/FavoriteSvg"
import { HotelPropsType } from "./Hotel.props"

import cn from 'classnames'

import './Hotel.css'
import { formatDate } from "../../Functions/FormatDate"
import { formatePrice } from "../../Functions/Helpers"
import { useDispatch } from "react-redux"
import { toggleFavorite } from "../../Redux/hotels/hotelSlice"

const Hotel: FC<HotelPropsType> = ({props, className}) => {
	

	const ratingInStars = []
	const { hotelInfo } = props

	for (let i = 0; i < 5; i++) {
		const isActive = i < hotelInfo.stars
		ratingInStars.push(<StarSvg className={ cn('hotel__star',{'hotel__star-active': isActive})} />)
	}

	// const checkIsFavorite = () => {
	// 	state.favorite.map(hotel => hotel )
	// }

	const dispatch =  useDispatch()
	return (
		<div className= {className + ' hotel selector flex'}>
			<HotelIcon />
			<div className="icon__wrapper flex">
				<FavoriteSvg className={cn('hotel__fav_btn', {'hotel__fav_btn-active': props.isFavorite})} onClick = {() => dispatch(toggleFavorite(props))} /> 
				<h4 className="hotel__name">{hotelInfo.name}</h4>
				<div className="hotel__date flex">
					{formatDate(hotelInfo.checkIn).DDMonthYYYY} 
					<div/>
					{hotelInfo.qtyDays.toString()} дней
				</div>
				<div className="hotel__info">
					<div className="hotel__rating flex">
						{...ratingInStars}
					</div>
					<p className="hotel__price"> <span>Price:</span> {formatePrice(hotelInfo.price)} ₽</p>
				</div>
			</div>
		</div>
	)
}

export default Hotel

