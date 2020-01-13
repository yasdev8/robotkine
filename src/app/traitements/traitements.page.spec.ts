import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraitementsPage } from './traitements.page';

describe('TraitementsPage', () => {
  let component: TraitementsPage;
  let fixture: ComponentFixture<TraitementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraitementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
