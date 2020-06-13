import { Router} from 'express';
import {telescopesController} from '../controllers/TelescopesController';

class TelescopesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', telescopesController.index);
        this.router.get('/add', telescopesController.renderForm);
        this.router.post('/add', telescopesController.save);
    }

}

const telescopesRoutes:Router = new TelescopesRoutes().router;
export default telescopesRoutes;
/*
router.get('/', telescopesController.index); 
router.get('/add', telescopesController.renderForm); 
router.post('/add2 ', telescopesController.save);*/
//export default router;