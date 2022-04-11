import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private employeeService: ServicesService) { }
  public data :any;
  public EmpForm!: FormGroup;
  public submitted = false;
  public EventValue = 'Save';

  ngOnInit(): void {
    this.getdata();

    this.EmpForm = new FormGroup({
      empId: new FormControl(null),
      empName: new FormControl("", [Validators.required]),
      empContact: new FormControl("", [Validators.required]),
      empEmail: new FormControl("", [Validators.required]),
      empAddress: new FormControl("", [Validators.required]),
    })
  }
  getdata() {
    this.employeeService.getData().subscribe((data) => {
      this.data = data;
    })
  }
  deleteData(id:number) {
    this.employeeService.deleteData(id).subscribe((data) => {
      this.data = data;
      this.getdata();
    })
  }
  Save() {
    // alert(this.EmpForm.value.empId);
    
    if (this.EmpForm.value.empId == null) {
      this.submitted = true;

      if (this.EmpForm.invalid) {
        return;
      }
      this.employeeService.postData(this.EmpForm.value).subscribe((data) => {
        this.data = data;
        this.resetFrom();

      })
    } 
    else {
      this.submitted = true;

      if (this.EmpForm.invalid) {
        return;
      }
      this.employeeService.putData(this.EmpForm.value.empId, this.EmpForm.value).subscribe((data) => {
        this.data = data;
        this.resetFrom();
      })
    }
  }


  EditData(Data:any) {
    this.EmpForm.controls['empId'].setValue(Data.empId);
    this.EmpForm.controls['empName'].setValue(Data.empName);
    this.EmpForm.controls['empContact'].setValue(Data.empContact);
    this.EmpForm.controls['empEmail'].setValue(Data.empEmail);
    this.EmpForm.controls['empAddress'].setValue(Data.empAddress);
    this.EventValue = 'Update';
  }

  resetFrom() {
    this.getdata();
    this.EmpForm.reset();
    this.EventValue = 'Save';
    this.submitted = false;
  }
}