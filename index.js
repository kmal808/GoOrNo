import { serve, File } from 'bun'
import {
	waveURL,
	ratingURL,
	windURL,
	tidesURL,
	weatherURL,
} from './apiRoutes.js'

const server = Bun.serve({
	port: 3030,
	fetch(req) {
		const { pathname, searchParams } = new URL(req.url)

		//% setting root path/route
		if (pathname === '/') {
			return new File('./index.html', {
				Headers: {
					'Content-Type': 'text/html',
				},
			})
		}

		//% Handle the /wave route
		if (pathname === '/wave') {
			const spotID = searchParams.get('spotId')
			if (!spotID) {
				return new Response('Spot ID is required', { status: 400 })
			}
			return fetchSurfData(waveURL(spotID))
		}

		//% Handle the /rating route
		if (pathname === '/rating') {
			const spotID = searchParams.get('spotId')
			if (!spotID) {
				return new Response('Spot ID is required', { status: 400 })
			}
			return fetchSurfData(ratingURL(spotID))
		}

		//% Handle the /wind route
		if (pathname === '/wind') {
			const spotID = searchParams.get('spotId')
			if (!spotID) {
				return new Response('Spot ID is required', { status: 400 })
			}
			return fetchSurfData(windURL(spotID))
		}

		//% Handle the /tides route
		if (pathname === '/tides') {
			const spotID = searchParams.get('spotId')
			if (!spotID) {
				return new Response('Spot ID is required', { status: 400 })
			}
			return fetchSurfData(tidesURL(spotID))
		}

		//% Handle the /weather route
		if (pathname === '/weather') {
			const spotID = searchParams.get('spotId')
			if (!spotID) {
				return new Response('Spot ID is required', { status: 400 })
			}
			return fetchSurfData(weatherURL(spotID))
		}

		return new Response('Not Found', { status: 404 })
	},
})

console.log(`Listening on http://localhost:${server.port} ...`)

async function fetchSufreport(apiURL) {
	try {
		const response = await fetch(apiURL)
		if (!response.ok) {
			throw new Error('HTTP error! status: ${response.status}')
		}
		const data = await response.json()
		return new Response(data, {
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		return new Response(`Error fetching surf reporrt: ${error.message}`, {
			status: 500,
		})
	}
}
