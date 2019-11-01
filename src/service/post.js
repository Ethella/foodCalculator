import { BACKEND_URL } from '../constants/key';
import _ from 'lodash';

export const post = async (endpoint, body) => {

    /* set fetch options post with credentials include */
    const myHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    const myFetchOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    /* fetch the data then return the data with promise */
    const Url = `${BACKEND_URL}${endpoint}` ;

    /* Extra data for Rollbar record */
    const data = await fetch(Url, myFetchOptions).then((res) => res.json()).catch((err) => {

        throw new Error(err);
    });

    if (!_.isEmpty(data.error)){
        throw new Error(data);
    }

    return data;
};

