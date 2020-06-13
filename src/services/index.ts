import fetch from "node-fetch";

class Services {
    public async marsPhotos() {
        const options = {
            method: 'GET',
            //body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        };
        let res = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY',options);
        return res.json();
    }


}
//export default const indexController = new IndexController();
export const services = new Services();      