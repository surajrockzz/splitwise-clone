import {handleAuthenticationResource} from '../resources/loginResource';
/**
 * used for authentication 
 * @param {*} queryParams 
 */
const handleAuthenticationService =  async (queryParams) => {
     let response = await handleAuthenticationResource(queryParams);
     return response.data;
}

export {handleAuthenticationService};