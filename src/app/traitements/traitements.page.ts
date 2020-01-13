import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';
import {Soin} from '../_model/Soin';
import {Traitement} from '../_model/Traitement';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.page.html',
  styleUrls: ['./traitements.page.scss'],
})
export class TraitementsPage implements OnInit {

  constructor(
      public router:Router,
      public traitementService:TraitementService,
  ) { }

  ngOnInit() {
  }

  //cette méthode se lance à chaque ouverture de l'écran, on récupère la liste des traitements
  async ionViewWillEnter(){
    await this.traitementService.getTraitements();
    console.log("getTraitement")
  }

  goToDetail(traitement:Traitement){
    this.traitementService.currentTraitement=traitement;
    console.log("this.traitementService.listeTraitement")
    console.log(this.traitementService.listeTraitement);
    console.log("traitement")
    console.log(traitement);

    this.router.navigateByUrl('/tabs/traitements/detail');
  }
}
