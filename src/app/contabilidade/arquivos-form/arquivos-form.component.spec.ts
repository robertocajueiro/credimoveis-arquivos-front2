import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosFormComponent } from './arquivos-form.component';

describe('ArquivosFormComponent', () => {
  let component: ArquivosFormComponent;
  let fixture: ComponentFixture<ArquivosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
