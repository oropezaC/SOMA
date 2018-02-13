import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaGrupoComponent } from './baja-grupo.component';

describe('BajaGrupoComponent', () => {
  let component: BajaGrupoComponent;
  let fixture: ComponentFixture<BajaGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
