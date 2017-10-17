import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFilmComponent } from './cart-film.component';

describe('CartFilmComponent', () => {
  let component: CartFilmComponent;
  let fixture: ComponentFixture<CartFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
