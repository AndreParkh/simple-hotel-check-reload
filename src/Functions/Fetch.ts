export const createRequest = (checkInDate:string, checkOutDate:string, location:string) : string=> {
	// return new URL(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=5`)
	return `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=5`
}

// export async function fetchRequest(request:string, event:any) {
// 	if (event) event.preventDefault();

// 	let response = await fetch(request);

// 	if (response.ok) {
// 	  // если HTTP-статус в диапазоне 200-299
// 	  return await response.json().then(data => data);
// 	} else {
// 	  alert("Ошибка HTTP: " + response.status);
// 	}
// }