import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailWithService } from './email-with-service';

describe('EmailWithService', () => {
  let component: EmailWithService;
  let fixture: ComponentFixture<EmailWithService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailWithService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailWithService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
