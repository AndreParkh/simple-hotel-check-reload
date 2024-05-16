import classNames from "classnames"
import { FC } from "react"

import { SortButtonProps } from "./SortButton.props"

import './SortBurron.css'

const SortButton: FC<SortButtonProps> = ({Props}) => {

	const cnSortBtn = classNames('rating__btn sort__btn flex', {'sort-active': Props.isSort })
	const cnArrayUp = classNames('sort__arrow arrow_up', {'sort-active': !Props.isReverse && Props.isSort })
	const cnArrayDown = classNames('sort__arrow arrow_down', {'sort-active': Props.isReverse && Props.isSort})

	return(
		<div className={cnSortBtn} onClick={() => Props.onSetSort()}>
			<p>{Props.childern}</p>
			<div className="sort__arrows flex">
				<div className={cnArrayUp}></div>
				<div className={cnArrayDown}></div>
			</div>
		</div>
	)
}

export default SortButton