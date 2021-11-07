import React, {useState} from 'react';

import "./Filter.scss"
import {useDispatch} from "react-redux";
import {setSortBy} from "../../redux/actions/filters";
const Filter = () => {

	const dispatch = useDispatch()

	const handleChange=(e) => {
		dispatch(setSortBy(e.target.value))
	}


	return (
		<form className="form__select">
				<label htmlFor="sort_by">Сортировать по:</label>
				<select onChange={handleChange} className="select" id="sort_by">
					<option value="popularity.desc">Популярные по убыванию</option>
					<option value="popularity.asc">Популярные по возрастанию</option>
					<option value="release_date.desc">Дата выпуска по убыванию</option>
					<option value="release_date.asc">Дата выпуска по возростанию</option>
				</select>
		</form>
	);
};

export default Filter;
