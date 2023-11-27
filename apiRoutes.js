const baseURL = 'https://services.surfline.com/kbyg/spots/forecasts/'

export const waveURL = (spotID) => {
	return `${baseURL}wave?spotId=${spotID}&days=16&intervalHours=1`
}

export const ratingURL = (spotID) => {
	return `${baseURL}rating?spotId=${spotID}&days=16&intervalHours=1&correctedWind=false`
}

export const windURL = (spotID) => {
	return `${baseURL}wind?spotId=${spotID}&days=16&intervalHours=1&corrected=false`
}

export const tidesURL = (spotID) => {
	return `${baseURL}tides?spotId=${spotID}&days=16`
}

export const weatherURL = (spotID) => {
	return `${baseURL}weather?spotId=${spotID}&days=16&intervalHours=1`
}

export const ALA_MOANA_PARK_SPOT = '5842041f4e65fad6a770889c'
