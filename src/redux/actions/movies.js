import axios from "axios";

export const isReady = (payload) => ({
	type: 'ISREADY',
	payload,
})


export const fetchMovies = (sortBy, page) => (dispatch) => {
	dispatch(isReady(false))
	axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=091ce49caa34adc3b155d23836d7be97&language=ru-RU&sort_by=${sortBy}&page=${page}&primary_release_date.gte=1990-01-01&vote_average.gte=3&vote_count.gte=1500`)
		.then(({data}) => {
			dispatch(setMovies(data.results))
		})
}
export const fetchMoviesDetails = (id) => (dispatch) => {
	axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=091ce49caa34adc3b155d23836d7be97&language=ru-RU`)
		.then(({data}) => {
			dispatch(setMoviesDetails(data))
		})
}
export const fetchMoviesCast = (id) => (dispatch) => {
	axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=091ce49caa34adc3b155d23836d7be97&language=ru-RU`)
		.then(({data}) => {
			dispatch(setMoviesCast(data))
		})
}

export const setMovies = (items) => ({
	type:'SET_MOVIES',
	payload:items,
})
export const setMoviesDetails = (items) => ({
	type:'SET_MOVIES_DETAILS',
	payload:items,
})
export const setMoviesCast = (items) => ({
	type:'SET_MOVIES_CAST',
	payload:items,
})

