import axios from "axios";
import { serverUrl } from "../Routes/routes";
const signUpUrl = "signup";

/**
 * used for authentication
 * @param {*} queryParams
 */
const handleSignUpResource = async (queryParams) => {
  let response = await axios.post(`${serverUrl}/${signUpUrl}`, {
    ...queryParams,
  });
  console.log(typeof response.status);
  if (response.status === 200) {
    console.log(response);
    return response;
  }
};

export { handleSignUpResource };
