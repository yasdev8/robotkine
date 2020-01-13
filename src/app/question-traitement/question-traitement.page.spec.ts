import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionTraitementPage } from './question-traitement.page';

describe('QuestionTraitementPage', () => {
  let component: QuestionTraitementPage;
  let fixture: ComponentFixture<QuestionTraitementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTraitementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionTraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
