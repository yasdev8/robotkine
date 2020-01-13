import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoinsPage } from './soins.page';

describe('SoinsPage', () => {
  let component: SoinsPage;
  let fixture: ComponentFixture<SoinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoinsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
