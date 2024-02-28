import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerService } from '../../service/customer.service';

import { customers } from '../../../test/customers';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomersComponent,
        CommonModule,
      ],
      providers: [{ provide: CustomerService, useValue: {
        list: customers,
        getAll: () => of(customers)
      } }],
    });
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ipinput should exist', () => {
    const ipinput = fixture.debugElement.nativeElement.querySelector(
      'input.form-control'
    );
    expect(ipinput).toBeTruthy();
  });

  it('ipFilter signal should exist', () => {
    expect(component.ipFilter).toBeTruthy();
    expect(typeof component.ipFilter.set).toBe('function');
  });

  it('ip pipe should work', () => {
    const ipinput = fixture.debugElement.nativeElement.querySelector(
      'input.form-control'
    );

    ipinput.value = '231.';
    ipinput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const row = fixture.debugElement.nativeElement.querySelectorAll(
        'tbody tr:first-child td'
      );

      expect(row[0]).toMatch(/7/);
    });
  });

});
