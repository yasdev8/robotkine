import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Question2TraitementPage } from './question2-traitement.page';

describe('Question2TraitementPage', () => {
  let component: Question2TraitementPage;
  let fixture: ComponentFixture<Question2TraitementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2TraitementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Question2TraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
