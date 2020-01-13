import { Injectable } from '@angular/core';
import {Question} from '../_model/Question';
import {Storage} from "@ionic/storage";
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  public codeQuestion:string;
  public currentQuestion:Question;
  public listeQuestion:Array<Question>;


  constructor(
      public storage:Storage,
      public router:Router,
      public alertController: AlertController,
    ) {
    //on récupère la liste des question
    this.getQuestions();
  }

  //on récupère la liste des questions dans le storage
  async getQuestions(){
    if(this.listeQuestion==null){
      await this.storage.get("robotkine:listeQuestion").then(async data =>{
        this.listeQuestion = await data;
      });
    }
  }

  //methode qui lance la premiere question
  async typeDouleur(choix:string){
    //TODO
    if(choix=='D'){
      this.codeQuestion = await choix;
      this.currentQuestion = await this.listeQuestion.find(question => question.code == this.codeQuestion);
      this.router.navigateByUrl('/tabs/new-traitement/question')
    } else {
      const alert = await this.alertController.create({
        header: 'DESOLE',
        message: "Pas de traitement pour le moment ...",
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  //méthode qui permet de prendre en compte la réponse à la question
  async analyseReponse(reponse:string){
    //on regarde si on lance l'analyse
    if((this.currentQuestion.resultAction!=null)
        &&(this.currentQuestion.resultAction.find(choix =>
            (choix.code == reponse)&&(choix.titre == 'analyse')))){
      //le choix est présent dans le final, on lance donc l'analyse
      const alert = await this.alertController.create({
        header: 'ANALYSE',
        message: "l'analyse est en cours ...",
        buttons: ['OK']
      });
      await alert.present();

      return false;

    } else if((this.currentQuestion.resultAction!=null)
        &&(this.currentQuestion.resultAction.find(choix =>
            (choix.code == reponse)&&(choix.titre == 'avis')))) {

      //le choix est présent dans le final, on demande l'avis du médecin
      const alert = await this.alertController.create({
        header: 'AVIS MEDECIN',
        message: "votre pathologie nécessite l'avis d'un médecin ...",
        buttons: ['OK']
      });
      await alert.present();

      return false;
    } else {
      //on continue les question
      this.codeQuestion = await this.codeQuestion + reponse;
      this.currentQuestion = await this.listeQuestion.find(question => question.code == this.codeQuestion);
      return true;
    }
  }

}
