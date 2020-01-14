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
      public traitementService:TraitementService,
  ) { }

  ngOnInit() {
  }

  //analyse de la réponse et de la suite
  async analyse(choix:string){
    this.traitementService.analyseQuestion('question2',choix);
  }

  //on revient à la page précédente
  async retour(){
    this.traitementService.retourQuestion('question2');
  }

}
