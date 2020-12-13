import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { dataCall } from '../../dataCalls/dataCalls';
import { VIEW_MORE, VIEW_LESS } from '../../../constants/constants';
import Categories from '../../categories';
import ProductsList from '../../productsList';
import './style.css';

class home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heading: '',
			categoriesList: {},
			productsList: {},
			currentCategory: '',
			viewMoreFlag: true,
		};
	}

	componentDidMount() {
		dataCall.getCategoriesData((result) => {
			this.setState({
				heading: result.heading,
				categoriesList: result.category_list,
				productsList: result.product_list.products,
				currentCategory: result.category_list[0].category_name,
			});
		});
	}

	categoryClickHandler = (categoryId, categoryName) => {
		dataCall.getProductsList(categoryId, (result) => {
			this.setState({
				currentCategory: categoryName,
				productsList: result.products,
			});
		});
	};

	viewMoreHandler = () => {
		this.setState({
			viewMoreFlag: !this.state.viewMoreFlag,
		});
	};

	render() {
		const { heading, categoriesList, productsList, currentCategory, viewMoreFlag } = this.state;
		return (
			<>
				<div className="main-heading">{heading}</div>
				<Categories
					heading={heading}
					categoriesData={categoriesList}
					categoryHandler={this.categoryClickHandler}
				></Categories>
				<ProductsList productsData={productsList} viewMoreFlag={viewMoreFlag}></ProductsList>
				<div className="center-align view-more-container">
					<button className="btn-view-more" onClick={this.viewMoreHandler}>
						{viewMoreFlag ? VIEW_MORE : VIEW_LESS}
					</button>
				</div>
				<div className="change-cat-container">
					<span className="show-label">Showing for</span>
					<span className="current-category cur-pointer">{currentCategory}</span>
					<span className="show-label right-align cur-pointer">change</span>
				</div>
			</>
		);
	}
}

export default home;
