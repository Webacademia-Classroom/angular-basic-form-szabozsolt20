import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditComponent } from '../app/page/customer-edit/customer-edit.component';

import { customers } from './customers';
import { CustomerService } from '../app/service/customer.service';
import { of } from 'rxjs';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CustomerEditComponent,
      ],
      providers: [{
        provide: CustomerService,
        useValue: {
          get: () => of( customers[0] ),
        }
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get customer', (done) => {
    component.customer$.subscribe((customer) => {
      expect(customer).toEqual(customers[0]);
      done();
    });

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('customer name should correct', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const name = fixture.debugElement.nativeElement.querySelector(
      'form input[name="name"]'
    );
    expect(name.value).toEqual(customers[0].name);
  });

  it('customer email should correct', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const email = fixture.debugElement.nativeElement.querySelector(
      'form input[name="email"]'
    );
    expect(email.value).toEqual(customers[0].email);
  });

  it('customer address should correct', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const address = fixture.debugElement.nativeElement.querySelector(
      'form input[name="address"]'
    );
    expect(address.value).toEqual(customers[0].address);
  });

  it('customer ip should correct', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const ip = fixture.debugElement.nativeElement.querySelector(
      'form input[name="ip_address"]'
    );
    expect(ip.value).toEqual(customers[0].ip_address);
  });
});
