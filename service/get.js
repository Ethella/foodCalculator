import _ from 'lodash';
const api_key = 'guIXeN6QWLJyERZayC29cBM6lfesjLH2GzaI9t4S';
const BACKEND_URL = `https://${api_key}@api.nal.usda.gov/`;

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

    if (data.status === 'ok'){
        return data;
    }

    throw new Error(data);

};
