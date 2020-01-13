import { Injectable } from '@angular/core';
import {Soin} from '../_model/Soin';
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class SoinsService {

  public listeSoin:Array<Soin>;
  public currentSoin:Soin;

  constructor(public storage:Storage) {
  }

  //on récupère la liste des soins dans le storage
  async getSoins(){
    if(this.listeSoin==null){
      await this.storage.get("robotkine:listeSoin").then(async data =>{
        this.listeSoin = await data;
      });
    }
  }

}
