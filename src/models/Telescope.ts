
import mongoose, { Schema, model } from 'mongoose';

export interface Telescope extends mongoose.Document {
    brand: string;
    serie: string;
    mount_types: string;
};


const TelescopeSchema = new Schema({
    brand: String,
    serie: String,
    mount_types: String
});


export default model<Telescope>('Telescope', TelescopeSchema);