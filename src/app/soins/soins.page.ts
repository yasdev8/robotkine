import {Component, OnInit} from '@angular/core';
import {SoinsService} from '../_services/soins.service';
import {Router} from '@angular/router';
import {Soin} from '../_model/Soin';

@Component({
  selector: 'app-soins',
  templateUrl: './soins.page.html',
  styleUrls: ['./soins.page.scss'],
})
export class SoinsPage implements OnInit {

  constructor(
      private router:Router,
      public soinService:SoinsService
  ) {
  }

  async ngOnInit() {
    await this.soinService.getSoins();
  }

  goToDetail(soin:Soin){
    this.soinService.currentSoin=soin;
    this.router.navigateByUrl('/tabs/soins/detail');
  }
}


