import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCadastroComponent } from './itens-cadastro.component';

describe('ProdutosCadastroComponent', () => {
  let component: ItensCadastroComponent;
  let fixture: ComponentFixture<ItensCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
