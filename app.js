const success = (position) => {
	const latitude = position.coords.latitude
	const longitude = position.coords.longitude

	document.getElementById(
		'location'
	).textContent = `Latitude: ${latitude}, Longitude: ${longitude}`

	findClosestBreak(latitude, longitude)
}

function error() {
	document.getElementById('location').textContent =
		'Unable to retrieve your location'
}

navigator.geolocation.getCurrentPosition(success, error)

const findClosestBreak = (latitude, longitude) => {
	let spotID = document.getElementById('spotID').value
}

const fetchSurfReport = (spotID) => {
	fetch(
		`https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${spotID}&days=16&intervalHours=1`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			displaySurfReport(data)
		})
		.catch((error) => {
			console.log(error)
		})
	document.getElementById('surfReport').textContent = surfReport
	makeDecision(surfReport) //& Decide thumbs up or thumbs down
}

const makeDecision = (report) => {
	// todo - logic to decide if the user should go surfing or not
	//& assuming for now that a rating of GOOD is a go
	if (report.includes('"key": "GOOD"')) {
		document.getElementById(surfDecision).textContent = '👍 GTG!!'
	} else {
		document.getElementById(surfDecision).textContent =
			'👎 Back to the couch brah!!'
	}
}
