import axios from "axios";

export async function api(method, url, params) {

    // method === 'POST' && axios({
    //     method: `${method}`,
    //     url: `${url}`,
    //     data: {},
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: 'Bearer ' + 'varToken'
    //     }
    // });

    // if (method === 'GET') {
    //     // result = await axios({
    //     //     method: 'get',
    //     //     url: `${url}`,
    //     //     headers: {
    //     //         // Authorization: 'Bearer ' + 'varToken'
    //     //     }
    //     // })
    //     const fetchData = await axios.get(url)
    //         .then(data => data);
    //     return fetchData
    // }

    let result;
    result = await axios(url, {
        method: method,
        params: params
    })
    return result.data
}



export function abortApi() {
    const controller = new AbortController();
    controller.abort()
}