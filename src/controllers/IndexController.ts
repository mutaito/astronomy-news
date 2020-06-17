import { Response, Request} from "express";

class IndexController {
    public index(req:Request , res:Response ):void{
        res.render('index', {title: 'Hello Word'})
    }
}
export const indexController = new IndexController();      