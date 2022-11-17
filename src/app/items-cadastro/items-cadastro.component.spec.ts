import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCadastroComponent } from './items-cadastro.component';

describe('ProdutosCadastroComponent', () => {
  let component: ItemsCadastroComponent;
  let fixture: ComponentFixture<ItemsCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
