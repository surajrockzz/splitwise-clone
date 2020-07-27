import { handleSignUpResource } from "../resources/signupResource";
/**
 * used for sign up
 * @param {*} queryParams
 */
const handleSignUpService = async (queryParams) => {
  let response = await handleSignUpResource(queryParams);
  return response.data;
};

export { handleSignUpService };
