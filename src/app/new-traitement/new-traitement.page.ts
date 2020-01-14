import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';
import {Question} from '../_model/Question';
import { NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';
import * as constantes from '../_animation/pageTransition';

@Component({
  selector: 'app-new-traitement',
  templateUrl: './new-traitement.page.html',
  styleUrls: ['./new-traitement.page.scss'],
})
export class NewTraitementPage implements OnInit {

  public listeDouleur:Array<Question>;


  constructor(
      public router:Router,
      public traitementService:TraitementService,
      private nativePageTransitions: NativePageTransitions
  ) {

  }

  async ngOnInit() {
    //on liste tous les code initiaux
    await this.traitementService.getQuestions();
    this.listeDouleur = await this.traitementService.listeQuestion.filter(question => question.code==null);
  }

  analyse(choix:string){
    this.traitementService.typeDouleur(choix).then( async data => {
      if(data){
        this.nativePageTransitions.flip(constantes.nativeTransitionOptionsLeft400);
        this.router.navigateByUrl('question');
      }
    });
  }

}
