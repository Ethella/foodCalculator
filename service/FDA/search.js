import { post } from '../post';

export const searchFood = async (food) => {

    const endpoint = 'fdc/v1/search';

    const body = { generalSearchInput: food };

    return await post(endpoint, body);
};
