import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloBlockComponent } from './titulo-block.component';

describe('TituloBlockComponent', () => {
  let component: TituloBlockComponent;
  let fixture: ComponentFixture<TituloBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloBlockComponent]
    });
    fixture = TestBed.createComponent(TituloBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
