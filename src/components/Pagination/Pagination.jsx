import React from 'react';

import "./Pagination.scss"
const Pagination = ({page, setPage}) => {

	return (
		<div className="pagination">
			<button disabled={page === 1} className="pagination__btn" onClick={() => setPage(page - 1)}>
				Прошлая страница
			</button>
			<button  className="pagination__btn" onClick={() => setPage(page + 1)}>
				 Следущая страница
			</button>
		</div>
	);
};

export default Pagination;
