import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';

@Component({
  selector: 'app-question-traitement',
  templateUrl: './question-traitement.page.html',
  styleUrls: ['./question-traitement.page.scss'],
})
export class QuestionTraitementPage implements OnInit {

  constructor(
      public router:Router,
      public traitementService:TraitementService,
  ) { }

  ngOnInit() {
  }

  //analyse de la réponse et de la suite
  async analyse(choix:string){
    let nextQuestion:boolean;
    await this.traitementService.analyseReponse(choix).then(async nextQuestion =>{
      //oui on passe à la question suivante
      if(nextQuestion){
        this.router.navigateByUrl('/tabs/new-traitement/question2');
        console.log('question')
      //Non on est à la dernière question et on passe à l'analyse
      } else {
        //TODO
        //this.router.navigateByUrl('/tabs/traitements/detail');
        console.log('analyse')
      }
    });
  }

}
