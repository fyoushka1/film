import React, {useEffect, useState} from 'react';

import "./FilmCard.scss"
import {Link} from "react-router-dom";
import Modal from "../Modal/Modal";
import {fetchMoviesDetails} from "../../redux/actions/movies";
import {useDispatch} from "react-redux";

const FilmCard = ({data}) => {
	const dispatch = useDispatch()
	const onClickMoviesDetails = (id) => {
		dispatch(fetchMoviesDetails(id))
		localStorage.setItem('id', JSON.stringify(id))
	}

	const [modalActive, setModalActive] = useState(false)
	return (
		<>
		<div className="filmCard" onClick={() => setModalActive(true)}>
			<div className="filmCard__img-wrapper">
				<img src={data.backdrop_path === null ?
					"https://avatars.mds.yandex.net/get-autoru-vos/1894023/61931bfe5d45bd46d36e9a8ee8523170/1200x900":
					`https://image.tmdb.org/t/p/w500${data.backdrop_path}`
				} alt="poster" className="filmCard__img"/>
			</div>
			<span className={data.vote_average > 6 ? "filmCard__rating-high" : data.vote_average > 5 ? "filmCard__rating-medium" : "filmCard__rating-low" } >{data.vote_average}</span>
			<h3 className="filmCard__title">
				{data.title}
			</h3>
		</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className="description">
					<div className="description__content">
						<span onClick={() => setModalActive(false)} className="close">x</span>
						<img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" className="description__img"/>
						<div className="description__block">
							<h1 className="description__title">
								{data.title}
							</h1>
							<h3 className="description__title-origin">
								{data.original_title}
							</h3>
							<p className="description__date">
								Дата выпуска: {data.release_date}
							</p>
							<p className="description__text">
								<span>Описание:</span> <br/>
								{data.overview}
							</p>
							<Link to = "/film">
								<button className="btn__more" onClick={() => onClickMoviesDetails(data.id)} >
									Узнать больше о фильме
								</button>
							</Link>
						</div>
					</div>
				</div>
			</Modal>

		</>
	);
};

export default FilmCard;
