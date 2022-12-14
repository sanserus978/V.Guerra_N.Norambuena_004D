import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciarSesionProfesorPage } from './iniciar-sesion-profesor.page';

describe('IniciarSesionProfesorPage', () => {
  let component: IniciarSesionProfesorPage;
  let fixture: ComponentFixture<IniciarSesionProfesorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarSesionProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarSesionProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
