import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';
import {Soin} from '../_model/Soin';
import * as constantes from '../_animation/pageTransition';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-detail-traitement',
  templateUrl: './detail-traitement.page.html',
  styleUrls: ['./detail-traitement.page.scss'],
})
export class DetailTraitementPage implements OnInit {

  constructor(
      public router:Router,
      public traitementService:TraitementService,
      private nativeTransition:NativePageTransitions
  ) { }

  ngOnInit() {
  }

  goToDetail(soin:Soin){
    this.traitementService.currentSoin=soin;
    this.nativeTransition.slide(constantes.nativeTransitionOptionsLeft400);
    this.router.navigateByUrl('/tabs/soins/detail');
  }

  //on revient à la page précédente
  async retour(){
    this.nativeTransition.slide(constantes.nativeTransitionOptionsRight400);
    this.router.navigateByUrl('/tabs/traitements')
  }

}
