import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSoinPage } from './detail-soin.page';

describe('DetailSoinPage', () => {
  let component: DetailSoinPage;
  let fixture: ComponentFixture<DetailSoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
