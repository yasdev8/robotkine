import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTraitementPage } from './new-traitement.page';

describe('NewTraitementPage', () => {
  let component: NewTraitementPage;
  let fixture: ComponentFixture<NewTraitementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTraitementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
