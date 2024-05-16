import { FC } from "react"

import Header from "../components/Sections/Header/Header"
import SearchSection from "../components/Sections/Search/SearchSection"
import FavoriteSection from "../components/Sections/Favorite/FavoriteSection"
import ContentSection from "../components/Sections/Content/ContentSection"

const MainPage: FC = () => {

	return (
		<>
			<Header />
			<div className="container main-wrapper grid">
				<div className="side__wrapper wrapper flex">
					<SearchSection />
					<FavoriteSection />
				</div>
				<ContentSection />
			</div>
		</>
	)

}

export default MainPage