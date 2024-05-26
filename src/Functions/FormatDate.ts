

const formatDate = (dateStr: string | number |  Date) => {

	const date: Date = new Date(dateStr)
	const day = date.getDate()
	const month = date.getMonth() + 1 	//Отчет начинается с 0 
	const monthName = date.toLocaleString('ru', { month: 'long' })
	const year = date.getFullYear()

	const YYYYMMDD = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
	const DDMMYYYY = `${day} ${month} ${year}`
	const DDMonthYYYY = `${day} ${monthName} ${year}`

	return {
		YYYYMMDD,
		DDMMYYYY,
		DDMonthYYYY
	}
}

const createCheckOutDate = (checkInDate: string, daysQty: number) => {
	const checkIn = new Date(checkInDate) 
	const checkOut = new Date()

	checkOut.setDate(checkIn.getDate() + daysQty)
	console.log(checkOut) 
	return formatDate(checkOut)
}

export { formatDate, createCheckOutDate }