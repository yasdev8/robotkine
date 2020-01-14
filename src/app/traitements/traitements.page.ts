import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';
import {Traitement} from '../_model/Traitement';
import * as constantes from '../_animation/pageTransition';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.page.html',
  styleUrls: ['./traitements.page.scss'],
})
export class TraitementsPage implements OnInit {

  constructor(
      public router:Router,
      public traitementService:TraitementService,
      private nativeTransition:NativePageTransitions
  ) { }

  ngOnInit() {
  }

  //cette méthode se lance à chaque ouverture de l'écran, on récupère la liste des traitements
  async ionViewWillEnter(){
    await this.traitementService.getTraitements();
  }

  goToDetail(traitement:Traitement){
    this.traitementService.currentTraitement=traitement;
    this.nativeTransition.slide(constantes.nativeTransitionOptionsLeft400)
    this.router.navigateByUrl('/tabs/traitements/detail');
  }
}
