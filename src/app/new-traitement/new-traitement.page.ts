import { Component, OnInit } from '@angular/core';
import {IonItemSliding} from '@ionic/angular';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';
import {Question} from '../_model/Question';

@Component({
  selector: 'app-new-traitement',
  templateUrl: './new-traitement.page.html',
  styleUrls: ['./new-traitement.page.scss'],
})
export class NewTraitementPage implements OnInit {
  /*
  public typeDouleur:string='annuler';
  public tete:boolean=false;
  public dos:boolean=false;
  public epaule:boolean=false;
  public coude:boolean=false;
  public main:boolean=false;
  public bassin:boolean=false;
  public genou:boolean=false;
  public pied:boolean=false;*/
  public listeDouleur:Array<Question>;


  constructor(
      public router:Router,
      public traitementService:TraitementService,
  ) {

  }

  async ngOnInit() {
    //on liste tous les code initiaux
    await this.traitementService.getQuestions();
    this.listeDouleur = await this.traitementService.listeQuestion.filter(question => question.code==null);
    console.log("this.listeDouleur")
    console.log(this.listeDouleur)
  }

  analyse(choix:string){
    this.traitementService.typeDouleur(choix);
  }

  /*
  typeDouleurC(resp,slide:IonItemSliding){
    this.typeDouleur=resp;
    slide.close();
    console.log(this.typeDouleur=='chronique')
  }

  teteC(resp,slide:IonItemSliding){
    this.tete==resp?this.tete=null:this.tete=resp;
    slide.close();
  }

  dosC(resp,slide:IonItemSliding){
    this.dos==resp?this.dos=null:this.dos=resp;
    slide.close();
  }

  epauleC(resp,slide:IonItemSliding){
    this.epaule==resp?this.epaule=null:this.epaule=resp;
    slide.close();
  }

  coudeC(resp,slide:IonItemSliding){
    this.coude==resp?this.coude=null:this.coude=resp;
    slide.close();
  }

  mainC(resp,slide:IonItemSliding){
    this.main==resp?this.main=null:this.main=resp;
    slide.close();
  }

  bassinC(resp,slide:IonItemSliding){
    this.bassin==resp?this.bassin=null:this.bassin=resp;
    slide.close();
  }

  genouC(resp,slide:IonItemSliding){
    this.genou==resp?this.genou=null:this.genou=resp;
    slide.close();
  }

  piedC(resp,slide:IonItemSliding){
    this.pied==resp?this.pied=null:this.pied=resp;
    slide.close();
  }*/

}
