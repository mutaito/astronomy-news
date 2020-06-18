const mongoose = require('mongoose');

const { mongodb } = require('./keys');

class MongoDataBase {

    constructor() {
        this.connect();
    }

    async connect(): Promise<void> {
        const db = await mongoose.connect(mongodb.URI, {
            useNewUrlParser: true
        });
        console.log(db);
        /*.then((db:any) => {
            //console.log(db);
            console.log('DB is connected');
        })
        .catch((err:any) => {
            console.error(err);
        });*/
    }

    disconec(){
        
    }

}
export const mongoDataBase = new MongoDataBase();