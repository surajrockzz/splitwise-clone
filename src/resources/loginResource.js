import axios from 'axios';
import {serverUrl} from '../Routes/routes';
const loginUrl = 'login';

/**
 * used for authentication 
 * @param {*} queryParams 
 */
const handleAuthenticationResource = async (queryParams) => {
    let response = await axios.post(`${serverUrl}/${loginUrl}`, {...queryParams});
    console.log(typeof(response.status))
    if (response.status === 200) {
        console.log(response);
        return response;
    }
}

export {handleAuthenticationResource};