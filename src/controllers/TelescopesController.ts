import { Response, Request } from "express";
import TelescopeModel, {Telescope} from '../models/Telescope';

class TelescopesController {
    public async index(req: Request, res: Response){
        try{
            const result = await TelescopeModel.find({});
            const telescopes = result;
            console.log(telescopes);
            res.render('telescopes/index', {
                title: 'Telescopes List',
                telescopes
            });
        }catch(e){
            console.log(e);
        }
        
    }

    public renderForm(req: Request, res: Response): void {
        console.log("dfasfd");
        res.render('telescopes/form', {
            title: 'Add A Telescope'
        });
    }

    public async save(req: Request, res: Response) {
        //res.send('Hi!');
        console.log("df4444444444asfd");
        const { brand, serie, mount_types } = req.body;
        const telescope: Telescope = new TelescopeModel({
            brand, serie, mount_types
        });
        await telescope.save();
        res.redirect('/telescopes');
    }
}
//export default const indexController = new IndexController();
export const telescopesController = new TelescopesController();      