import { TestBed } from '@angular/core/testing';

import { CustomerService } from '../app/service/customer.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { customers } from './customers';
import { Customer } from '../app/model/customer';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the getAll method', () => {
    expect(typeof service.getAll).toBe('function');
  });

  it('getAll method should return a list of customers', () => {
    service.apiUrl = '/data';

    service.getAll().subscribe( list => {
      expect(list).toEqual(customers);
    });
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('GET');

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});
