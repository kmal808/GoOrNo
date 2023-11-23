navigator.geolocation.getCurrentPosition(success, error)

function success(position) {
	const latitude = position.coords.latitude
	const longitude = position.coords.longitude

	document.getElementById(
		'location'
	).textContent = `Latitude: ${latitude}, Longitude: ${longitude}`
	fetchSurfReport(latitude, longitude) //todo - placeholder for the api call to get the surf report
}

function error() {
	document.getElementById('location').textContent =
		'Unable to retrieve your location'
}

function fetchSurfReport(latitude, longitude) {
	// todo - fetch the surf report from the api based on the users location
	//* mock up below
	document.getElementById('surfReport').textContent = surfReport
	makeDecision(surfReport) //& Decide thumbs up or thumbs down
}

function makeDecision(report) {
	// todo - logic to decide if the user should go surfing or not
	//& assuming for now that if the waves are above 5ft then it's a thumbs up
	if (report.includes('5ft')) {
		document.getElementById(surfDecision).textContent = '👍 GTG!!'
	} else {
		document.getElementById(surfDecision).textContent =
			'👎 Back to the couch brah!!'
	}
}
