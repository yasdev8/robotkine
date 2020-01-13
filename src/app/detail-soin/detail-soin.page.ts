import { Component, OnInit } from '@angular/core';
import {SoinsService} from '../_services/soins.service';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import {AlertController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-soin',
  templateUrl: './detail-soin.page.html',
  styleUrls: ['./detail-soin.page.scss'],
})
export class DetailSoinPage implements OnInit {

  constructor(
      public soinService:SoinsService,
      public youtube:YoutubeVideoPlayer,
      public alertController: AlertController,
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
    this.router.navigateByUrl('/tabs/soins');
  }

}
