import Axios from 'axios';
import { BASE_URL } from '../../constants/constants';

export const dataCall = {
	getCategoriesData,
	getProductsList,
};

function getCategoriesData(callback) {
	(async () => {
		const res = await Axios.get(BASE_URL + '/homemenucategories/v1.0.1?device_type=mob');
		callback(res.data);
	})();
}

function getProductsList(categoryId, callback) {
	(async () => {
		const res = await Axios.get(BASE_URL + '/catalog/v1.0.1?category_id=' + categoryId);
		callback(res.data);
	})();
}
