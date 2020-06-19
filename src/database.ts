const mongoose = require('mongoose');

const { mongodb } = require('./keys');

class MongoDataBase {

    constructor() {
        this.connect();
    }
    /**
     * Test
     */
    async connect(): Promise<void> {
        mongoose.connect(mongodb.URI, {
            useNewUrlParser: true
        }).then((db: any) => {
            //console.log(db);
            console.log('MongoDB is connected');
        })
            .catch((err: any) => {
                console.error(err);
            })
    }

}
export const mongoDataBase = new MongoDataBase();