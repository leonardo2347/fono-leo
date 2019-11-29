import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela03Page } from './tela03.page';

describe('Tela03Page', () => {
  let component: Tela03Page;
  let fixture: ComponentFixture<Tela03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
