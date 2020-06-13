import { Router} from 'express';
import {spaceController} from '../controllers/SpaceController';

class SpaceRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', spaceController.marsPhotos);
    }

}

const spaceRoutes:Router = new SpaceRoutes().router;
export default spaceRoutes;