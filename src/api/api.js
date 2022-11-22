import axios from 'axios'

const APPLICATION_JSON_TYPE = "application/json"

function getAxiosInstance() {
    return axios.create({
        baseUrl: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': APPLICATION_JSON_TYPE
        }
    });
}

const artWorkApi = getAxiosInstance();

class Service {
    constructor(){
        this.axios = artWorkApi;
    }

    getGalleryInformation = async (artId)  => {

        return await this.axios.get(`${artId}`).then((response) => response.data)
     
     }
}


const instance = new Service();

export default GalleryApiCall;
