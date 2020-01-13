import { Injectable } from '@angular/core';
import {Question} from '../_model/Question';
import {Storage} from "@ionic/storage";
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Traitement} from '../_model/Traitement';
import {QuestionSoin} from '../_model/QuestionSoin';
import {Soin} from '../_model/Soin';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  public codeQuestion:string;
  public currentQuestion:Question;
  public currentSoin:Soin;
  public currentTraitement:Traitement;
  public listeQuestion:Array<Question>;
  public listeQuestionSoin:Array<QuestionSoin>;
  public listeTraitement:Array<Traitement>=[];
  public listeSoin:Array<Soin>;

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

  //on récupère la liste des soins dans le storage
  async getSoins(){
    if(this.listeSoin==null){
      await this.storage.get("robotkine:listeSoin").then(async data =>{
        this.listeSoin = await data;
      });
    }
  }

  //on récupère la liste des questionSoin dans le storage
  async getQuestionSoin(){
    if(this.listeQuestionSoin==null){
      await this.storage.get("robotkine:listeQuestionSoin").then(async data =>{
        this.listeQuestionSoin = await data;
      });
    }
  }

  //on récupère la liste des questions dans le storage
  async getTraitements(){
    if(this.listeTraitement==null){
      await this.storage.get("robotkine:listeTraitement").then(async data =>{
        //on récupère la liste des traitements
        data==null?this.listeTraitement=[]:this.listeTraitement = await data;
      });
    }
  }

  //methode qui lance la premiere question
  async typeDouleur(choix:string){
    //TODO
    if(choix=='D'){
      this.codeQuestion = await choix;
      this.currentQuestion = await this.listeQuestion.find(question => question.code == this.codeQuestion);
      this.router.navigateByUrl('question')
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
      //on crée le traitement
      this.codeQuestion= await this.codeQuestion+reponse;
      //on vérifie si la liste questionSoin est chargée
      if(this.listeQuestionSoin==null){
        await this.getQuestionSoin();
      }
      //on récupère la liste des soins lié à la réponse
      let questionSoin:QuestionSoin = this.listeQuestionSoin
          .find(questionSoin => questionSoin.codeQuestion == this.codeQuestion);

      //on initialise le traitement
      this.currentTraitement = await this.initializeTraitement();
      //on crée la constante pour avoir le forEach avant la suite
      const start = async () => {
        if(this.listeSoin==null){
          await this.getSoins();
        }
        for(let i=0;i<questionSoin.codeSoin.length;i++){
          //on récupère la liste de soin
          await this.currentTraitement.listeSoin.push(this.listeSoin
              .find(soin => soin.code == questionSoin.codeSoin[i]));
        }

        //on ajoute le traitement à la liste
        this.listeTraitement.unshift(this.currentTraitement);
        this.saveListeTraitement();
      };

      start();

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

      //on initialise un traitement fictif pour l'avis medecin
      this.currentTraitement = await this.initializeTraitement();
      this.currentTraitement.titre = 'avis medecin';

      //on ajoute le traitement à la liste
      await this.listeTraitement.unshift(this.currentTraitement);
      this.saveListeTraitement();

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

  //on initialise un traitement
  initializeTraitement() {
    let traitement = new class implements Traitement {
      titre:string;
      date:Date;
      listeSoin:Array<Soin>;
    };

    traitement.date= new Date();
    //TODO : standardiser un titre
    if(this.codeQuestion.substring(0,1) == 'D'){
      traitement.titre = 'Traitement du dos';
    } else if(this.codeQuestion.substring(0,1) == 'T'){
      traitement.titre = 'Traitement de la tête ou la nuque';
    } else if(this.codeQuestion.substring(0,1) == 'E'){
      traitement.titre = "Traitement de l'épaule";
    } else if(this.codeQuestion.substring(0,1) == 'C'){
      traitement.titre = 'Traitement du coude';
    } else if(this.codeQuestion.substring(0,1) == 'M'){
      traitement.titre = 'Traitement de la main ou du poignet';
    } else if(this.codeQuestion.substring(0,1) == 'H'){
      traitement.titre = 'Traitement de la hanche ou du bassin';
    } else if(this.codeQuestion.substring(0,1) == 'G'){
      traitement.titre = 'Traitement du genou';
    } else if(this.codeQuestion.substring(0,1) == 'P'){
      traitement.titre = 'Traitement du pied ou de la cheville';
    }
    traitement.listeSoin=[];

    return traitement;
  }

  //enregistrer la liste des traitements
  saveListeTraitement(){
    this.storage.set("robotkine:listeTraitement",this.listeTraitement);
  }

}
