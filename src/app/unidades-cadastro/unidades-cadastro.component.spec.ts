import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesCadastroComponent } from './unidades-cadastro.component';

describe('UnidadesCadastroComponent', () => {
  let component: UnidadesCadastroComponent;
  let fixture: ComponentFixture<UnidadesCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
