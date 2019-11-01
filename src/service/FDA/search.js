import { post } from '../post';
import { API_KEY } from '../../constants/key';

export const searchFood = async (food) => {

    const endpoint = `fdc/v1/search?api_key=${API_KEY}`;

    const body = { generalSearchInput: food };

    return await post(endpoint, body);
};
