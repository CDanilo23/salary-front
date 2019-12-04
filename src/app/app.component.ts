import { Component, OnInit } from '@angular/core';
import { Employee } from './pages/model/employee';
import { EmployeeService } from './services/employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: Employee[] = [];
  emp: Employee = null;
  idEmployee: any;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = [];
  }

  getAllInfoOfEmployees() {
    this.employeeService.findAll().subscribe(p => {
      this.employees = p as Employee[];
    } );
  }

  getInfoOfEmployee() {
   if ( this.idEmployee == null || this.idEmployee === '') {
      this.getAllInfoOfEmployees();
   } else {
      this.employeeService.findById(this.idEmployee).subscribe(p => {
        this.emp = p as Employee;
        this.employees = [];
        this.employees[0] = this.emp;
      } );
   }
  }
}
