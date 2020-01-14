import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Soin} from '../_model/Soin';
import {TraitementService} from '../_services/traitement.service';
import * as constantes from '../_animation/pageTransition';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-soins',
  templateUrl: './soins.page.html',
  styleUrls: ['./soins.page.scss'],
})
export class SoinsPage implements OnInit {

  constructor(
      private router:Router,
      public traitementService:TraitementService,
      private nativeTransition:NativePageTransitions
  ) {
  }

  async ngOnInit() {
    await this.traitementService.getSoins();
  }

  goToDetail(soin:Soin){
    this.traitementService.currentSoin=soin;
    this.nativeTransition.slide(constantes.nativeTransitionOptionsLeft400);
    this.router.navigateByUrl('/tabs/soins/detail');
  }
}


