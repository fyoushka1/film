import React from 'react';

import "./DescRow.scss"

const DescRow = ({left__item, right__item}) => {
	return (
		<div className="row">
			<div className="row__left">{left__item}</div>
			<div className="row__right">{right__item}</div>
		</div>
	);
};

export default DescRow;
