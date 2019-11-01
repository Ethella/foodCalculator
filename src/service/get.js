import _ from 'lodash';
import { BACKEND_URL } from '../constants/key';

export const get = async (endpoint) => {

    const myHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    // set fetch options get with credentials include
    const myFetchOptions = {
        headers: myHeaders,
        method: 'GET'
    };

    const Url = BACKEND_URL + endpoint;

    //fetch the data then return the data with promise
    const data = await fetch(Url, myFetchOptions).then((res) => res.json()).catch((err) => {

        throw new Error(err);
    });

    if (!_.isEmpty(data.error)){
        throw new Error(data);
    }

    return data;

};
