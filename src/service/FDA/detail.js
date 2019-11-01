import { get } from '../get';
import { API_KEY } from '../../constants/key';

export const foodDetail = async (foodId) => {

    const endpoint = `fdc/v1/${foodId}?api_key=${API_KEY}`;

    return await get(endpoint);
};
