import { Component, OnInit } from '@angular/core';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import {AlertController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {TraitementService} from '../_services/traitement.service';

@Component({
  selector: 'app-detail-soin',
  templateUrl: './detail-soin.page.html',
  styleUrls: ['./detail-soin.page.scss'],
})
export class DetailSoinPage implements OnInit {

  constructor(
      public traitementService:TraitementService,
      public youtube:YoutubeVideoPlayer,
      public alertController: AlertController,
      public navCtrl:NavController,
      private router:Router,
      ) { }

  ngOnInit() {
  }

  async lectureYoutube(youtureId:string){

    if(navigator.onLine) {
      this.youtube.openVideo(youtureId);
    } else {
      const alert = await this.alertController.create({
        header: "Pas d'internet",
        message: "Veuillez vous connecter à internet pour visualiser la video",
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  back() {
    this.navCtrl.back();
  }

}
