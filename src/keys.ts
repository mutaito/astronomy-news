export const mongodb = {
    //"URI": "mongodb://192.168.43.147:9000/test"
    "URI": process.env.MONGO_URL 
}

export const nasaApi = {
    "URI": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY" 
}