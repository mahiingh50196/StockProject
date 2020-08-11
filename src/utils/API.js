import Constants from './Constants';

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const postApiCall = (endPoint, params, successCallback, errorCallback) => {
  Constants.axiosInstance
    .post(endPoint, params)
    .then((response) => {
      console.log('res ', response);
      successCallback(response);
    })
    .catch((error) => {
      console.warn(error.config);
      if (error.message === 'Network Error') {
        console.warn('No Internet');
      }
      if (error.code === 'ECONNABORTED') {
        console.warn('No Data Found');
      }
      errorCallback(error);
    });
};
/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const getApiCall = (endPoint, params, successCallback, errorCallback) => {
  Constants.axiosInstance
    .get(endPoint, params)
    .then((response) => {
      console.log('Success: ', response);
      successCallback(response);
    })
    .catch((error) => {
      if (error.message === 'Network Error') {
        console.warn('No Internet');
      }
      if (error.code === 'ECONNABORTED') {
        console.warn('No Data Found');
      }
      errorCallback(error);
    });
};

export default {postApiCall, getApiCall};
