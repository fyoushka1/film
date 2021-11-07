import React,{useState,useEffect} from 'react';
import FilmCard from "../../components/FilmCard/FilmCard";

import "./Home.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../redux/actions/movies";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {

	const dispatch = useDispatch()

	const [page, setPage] = useState(1)

	const {filters} = useSelector(({filters}) =>{
		return{
			filters:filters.sortBy
		}
	})
	useEffect(() => {
		dispatch(fetchMovies(filters, page))
	},[filters, page])
	const {movies} = useSelector(({movies}) =>{
		return{
			movies:movies.items
		}
	})

	return (
		<div className="home">
			<div className="container">
			<div className="home__header">
				<h1 className="home__title">Все фильмы:</h1>
				<Filter/>
			</div>
				<div className="film__wrapper">
					{movies &&
						movies.map((data) => (
							<FilmCard key = {data.id} data = {data}/>
						))
					}
				</div>
				<Pagination page = {page} setPage = {setPage}/>
			</div>
		</div>
	);
};

export default Home;
