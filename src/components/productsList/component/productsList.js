import React from 'react';
import Button from '../../general/button';
import Label from '../../general/labels';
import './style.css';

class productsList extends React.Component {
	render() {
		const { productsData, viewMoreFlag } = this.props;
		let productList1, productList2;
		if (productsData && productsData.length > 0) {
			productList1 = productsData.map((item, index) => {
				if (index <= 2) {
					return (
						<div className="col-md-4 row no-margin" key={index}>
							<div className="col-md-12 center-align">
								<img alt="loading" src={item.image_urls['x300']}></img>
							</div>
							<Label className="col-md-12">{item.name}</Label>
							<div className="col-md-12 center-align mr-top-5">
								<span className="prod-final-price">₹ {item.final_price}</span>
								<span className="prod-price">₹ {item.price}</span>
								{item.weight > 0 ? (
									<span className="prod-weight">
										({item.weight}
										{item.weight_unit})
									</span>
								) : (
									''
								)}
							</div>
							<div className="col-md-12 center-align mr-top-5">
								{item.is_in_stock ? (
									<Button background="rgb(79, 207, 100)">ADD TO CART</Button>
								) : (
									<Button background="#b0b0b0">OUT OF STOCK</Button>
								)}
							</div>

							{item.rating ? (
								<div className="prod-rating">
									{item.rating} <i className="fa fa-star" aria-hidden="true"></i>
								</div>
							) : (
								''
							)}
						</div>
					);
				}
			});
			productList2 = productsData.map((item, index) => {
				if (index > 2) {
					return (
						<div className="col-md-4 row no-margin" key={index}>
							<div className="col-md-12 center-align">
								<img alt="loading" src={item.image_urls['x300']}></img>
							</div>
							<Label className="col-md-12">{item.name}</Label>
							<div className="col-md-12 center-align mr-top-5">
								<span className="prod-final-price">₹ {item.final_price}</span>
								<span className="prod-price">₹ {item.price}</span>
								{item.weight > 0 ? (
									<span className="prod-weight">
										({item.weight}
										{item.weight_unit})
									</span>
								) : (
									''
								)}
							</div>
							<div className="col-md-12 center-align mr-top-5">
								{item.is_in_stock ? (
									<Button background="rgb(79, 207, 100)">ADD TO CART</Button>
								) : (
									<Button background="#b0b0b0">OUT OF STOCK</Button>
								)}
							</div>

							{item.rating ? (
								<div className="prod-rating">
									{item.rating} <i className="fa fa-star" aria-hidden="true"></i>
								</div>
							) : (
								''
							)}
						</div>
					);
				}
			});
		}

		return (
			<div className="productsListContainer">
				<div className="row">
					{productList1}
					{viewMoreFlag ? null : productList2}
				</div>
			</div>
		);
	}
}

export default productsList;
