import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperiorUsuarioComponent } from './menu-superior-usuario.component';

describe('MenuSuperiorUsuarioComponent', () => {
  let component: MenuSuperiorUsuarioComponent;
  let fixture: ComponentFixture<MenuSuperiorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSuperiorUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSuperiorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
