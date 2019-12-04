import { Injectable } from '@angular/core';
import { Response, Http} from '@angular/http';
import { Router } from '@angular/router';
import { HeadersUtil } from '../pages/constants/HeaderUtil';
import { AppSettings } from '../pages/constants/AppSettings';
import 'rxjs/Rx';
import { Employee } from '../pages/model/employee';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  findAll() {
    const headers = HeadersUtil.getHeaders();
    console.log('Entro al get  !!!' );
    return this.http.get(AppSettings.API_ENDPOINT )
    .map((res: Response) => res.json());
  }

  findById(idEmployee: string) {
    const headers = HeadersUtil.getHeaders();
    console.log('Entro al get  !!!' + idEmployee);
    return this.http.get(AppSettings.API_ENDPOINT + '/' + idEmployee)
    .map((res: Response) => res.json());
  }

}
