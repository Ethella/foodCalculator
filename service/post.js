const api_key = 'guIXeN6QWLJyERZayC29cBM6lfesjLH2GzaI9t4S';
const BACKEND_URL = `https://api.nal.usda.gov/`;
import _ from 'lodash';

export const post = async (endpoint, body) => {

    /* set fetch options post with credentials include */
    const myHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    body.api_key = api_key;
    const myFetchOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    /* fetch the data then return the data with promise */
    const Url = `${BACKEND_URL}${endpoint}?api_key=${api_key}` ;

    /* Extra data for Rollbar record */
    const data = await fetch(Url, myFetchOptions).then((res) => res.json()).catch((err) => {

        throw new Error(err);
    });

    if (!_.isEmpty(data.error)){
        throw new Error(data);
    }

    return data;
};

