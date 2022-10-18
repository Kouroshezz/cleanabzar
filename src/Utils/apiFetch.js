import axios from "axios";

let result;
export async function api(method, url) {

    method === 'POST' && axios({
        method: `${method}`,
        url: `${url}`,
        data: {},
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + 'varToken'
        }
    });

    if (method === 'GET') {
        // result = await axios({
        //     method: 'get',
        //     url: `${url}`,
        //     headers: {
        //         // Authorization: 'Bearer ' + 'varToken'
        //     }
        // })
        result = await axios.get(url)
            .then(data => data)
        return result

    }
}



export function abortApi() {
    const controller = new AbortController();
    controller.abort()
}