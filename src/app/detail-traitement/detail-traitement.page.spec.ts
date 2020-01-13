import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTraitementPage } from './detail-traitement.page';

describe('DetailTraitementPage', () => {
  let component: DetailTraitementPage;
  let fixture: ComponentFixture<DetailTraitementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTraitementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
