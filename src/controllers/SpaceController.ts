import { Response, Request } from "express";
import { services } from "../services";
class SpaceController {
    public async marsPhotos(req: Request, res: Response){
        //const result = await services.marsPhotos();
        //console.log(JSON.stringify(result))
        //res.send(result);
    }
}
//export default const indexController = new IndexController();
export const spaceController = new SpaceController();      