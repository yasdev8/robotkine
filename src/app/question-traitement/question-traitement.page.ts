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
    this.traitementService.analyseQuestion('question',choix);
  }

  //on revient à la page précédente
  async retour(){
    this.traitementService.retourQuestion('question');
  }

}
