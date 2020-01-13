import {Soin} from './Soin';

export interface Traitement {
    titre:string;
    date:Date;
    listeSoin:Array<Soin>;
}
