import React from 'react';
import './style.css';

class categories extends React.Component {
	categoryClickHandler = (event, categoryName) => {
		this.props.categoryHandler(event.target.parentElement.id, categoryName);
	};

	render() {
		const { categoriesData } = this.props;
		let categoriesList;
		if (categoriesData.length > 0) {
			categoriesList = categoriesData.map((item, index) => {
				return (
					<div
						className="col-md-2 col-sm-2 col-xs-2"
						key={index}
						id={item.category_id}
						onClick={(event) => this.categoryClickHandler(event, item.category_name)}
					>
						<img className="cat-img-container" alt="loading" src={item.category_image}></img>
						<div className="cat-name">{item.category_name}</div>
					</div>
				);
			});
		}
		return (
			<div className="cat-main-container">
				<div className="row">{categoriesList}</div>
			</div>
		);
	}
}

export default categories;
