import React, {useEffect, useState} from 'react';
import DescRow from "../../components/DescRow/DescRow";

import "./Film.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesDetails,fetchMoviesCast} from "../../redux/actions/movies";

const Film = () => {
	const  dispatch =  useDispatch()
	const {movies,cast} = useSelector(({movies}) =>{
		return{
			movies:movies.itemsDetl,
			cast:movies.cast.cast
		}
	})
	console.log(cast)
	useEffect(() => {
		const id = localStorage.getItem('id')
		dispatch(fetchMoviesDetails(id))
		dispatch(fetchMoviesCast(id))
	},[])
	return (
		<div className="film">
			<div className="container-min">
				<div className="film__inner">
				<div className="film__left">
					<img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="poster" className="film__poster"/>
				</div>
				<div className="film__middle">
					<h1 className="title">
						{movies.title}
					</h1>
					<h3 className="original__title">
						{movies.original_title}
					</h3>
					<h3 className="film__middle-title">О фильме:</h3>
					<div className="film__middle-inner">
						<DescRow left__item={'Дата выпуска'} right__item={movies.release_date} $/>
						<DescRow left__item={'Бюджет'} right__item={`${movies.budget} $`}/>
						<DescRow left__item={'Слоган'} right__item={movies.tagline} $/>
						<DescRow left__item={'Кассовые сборы'} right__item={`${movies.revenue} $`}/>
						<DescRow left__item={'Длительность фильма'} right__item={`${movies.runtime} мин.`}/>
						<DescRow left__item={'Жанр'} right__item={movies.genres &&
							movies.genres.map(item => (
							item.name + ", "
						))}/>
					</div>
				</div>
					<div className="film__right">
						<div className="rating">
							{movies.vote_average}
						</div>
						<button className="important">
							Добавть в избранное
						</button>
					</div>
				</div>
				<div className="cast">
					<h2 className="cast__title">
						Актеры:
					</h2>
					<div className="cast__inner">
						{cast &&
							cast.map(item => (
								<div className="cast__item">
									{item.name + ", "}
								</div>
							))
						}
					</div>
				</div>
			</div>
			</div>
	);
};

export default Film;
