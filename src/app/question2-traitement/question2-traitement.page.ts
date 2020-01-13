import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';

@Component({
  selector: 'app-question2-traitement',
  templateUrl: './question2-traitement.page.html',
  styleUrls: ['./question2-traitement.page.scss'],
})
export class Question2TraitementPage implements OnInit {

  constructor(
      public router:Router,
      public traitementService:TraitementService
  ) { }

  ngOnInit() {
  }

  //analyse de la réponse et de la suite
  async analyse(choix:string){
    let nextQuestion:boolean;
    await this.traitementService.analyseReponse(choix).then(async nextQuestion =>{
      //oui on passe à la question suivante
      if(nextQuestion){
        this.router.navigateByUrl('/tabs/new-traitement/question');
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
