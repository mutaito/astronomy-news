import fetch from "node-fetch";
const { nasaApi } = require('../keys');

interface IPhotos {
    id: number;
    sol: number;
    camara: ICamera;
    img_src:string;   
    earth_date:string;
}

interface ICamera {
    id: number;
    name: string;
    rover_id: number,
    full_name: string
}

interface IMarsResponse {
    photos: IPhotos[];
}

class Services {
    public async marsPhotos():Promise<IMarsResponse> {
        const options = {
            method: 'GET',
            //body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        };
        let res = await fetch(nasaApi, options);
        if (!res.ok) {
            throw new Error('Cant get mars photos')
        }
        return res.json() as Promise<IMarsResponse>
    }
}
//export default const indexController = new IndexController();
export const services = new Services();      