const mongoose = require('mongoose');

const { mongodb } = require('./keys');

class MongoDataBase {

    constructor() {
        this.connect();
    }

    async connect(): Promise<void> {
        console.log("connect····················");
        const db = await mongoose.connect(mongodb.URI, {
            useNewUrlParser: true
        });
        if (!db) {
            console.log('Error DB')
        }else{
            console.log('Mongo Ok')
        }
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