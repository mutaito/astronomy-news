import { Response, Request } from "express";
import { services } from "../services";


class SpaceController {

    public async marsPhotos(req: Request, res: Response):Promise<void>{
        
        const marsPhotos = await services.marsPhotos();     
        res.render('space/',
            {
                items: marsPhotos.photos
            }
        )
    }
}
//export default const indexController = new IndexController();
export const spaceController = new SpaceController();      