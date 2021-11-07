const initialState = {
	items: [],
	itemsDetl: [],
	cast: [],
	isReady: false,
}
const movies = (state = initialState, action) =>{
	switch (action.type) {
		case 'SET_MOVIES':
			return{
				...state,
				items:action.payload,
				isReady: true,
			}
		case 'SET_MOVIES_DETAILS':
			return {
				...state,
				itemsDetl:action.payload,
			}
		case 'SET_MOVIES_CAST':
			return {
				...state,
				cast:action.payload,
			}
		case 'ISREADY':
			return {
				...state,
				isReady: action.payload
			}
		default:
			return state
	}
}
export default movies
