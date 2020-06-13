import { Response, Request} from "express";

class IndexController {
    public index(req:Request , res:Response ){
        //res.send('Hi!');
        res.render('index', {title: 'Hello Word'})
    }
}

//export default const indexController = new IndexController();
export const indexController = new IndexController();      