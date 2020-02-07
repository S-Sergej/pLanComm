import axios from "axios";


const errorHandler = err => {
   console.error(err);
  throw err;
};
/*const Axios = axios.create({
  baseURL: 'http://localhost:3000',
   other custom settings 
}); 
*/

export default {
  handleUpload(file) {
    console.log('file to be handled: ', file);
    return axios.post('api/usereditor/upload', file)
      .then(res => res.data)
      .catch((err)=> errorHandler(err));
  }
}