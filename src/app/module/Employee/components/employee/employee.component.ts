import {
  Employee
} from './../../models/Employee.model';
import {
  TableActionEmit
} from './../../../../shared/models/table-action.model';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  IconListItem
} from 'src/app/shared/models/table-action.model';
import {
  ModalComponent
} from 'src/app/shared/components/modal/modal.component';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  NgbAlert
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // View Childs
  @ViewChild('editRecordModal') editRecordModal: any;
  @ViewChild('deleteRecordModal') deleteRecordModal: any;


  // Employee Column List
  employeeColumnList = ['#', 'Name', 'Age', 'Email Id', 'Desgination'];

  // Employee Value Property
  employeeValueProperty = ['id', 'name', 'age', 'emailId', 'designation'];

  // Employee List
  employeeList: Employee[] = [];

  // Employe Edit Form
  employeeEditForm!: FormGroup;

  // Alert Type
  alertType: string;

  // Alert Message
  alertMessage: string;

  // Alert
  isAlert: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {}



  /*
  Adds New Employee
  to the list
  */
  addEmployee() {

    // Create Employee
    let employee = new Employee(Math.floor(Math.random() * 100) + 1, 'Nikhil Radhakrishnan', 'nikhilpops@gmail.com', 'Senior Project Engineer', 27);

    // Create the Icons
    employee.TableAction!.iconList.push(this.generateIcons('Edit', 'fa fa-user-edit'));
    employee.TableAction!.iconList.push(this.generateIcons('Delete', 'fa fa-trash')); // <i class="fas fa-trash"></i>

    // Push the Employee Obj
    this.employeeList.push(employee);

  }



  /*
  Generate Icon List
  and Return
  (Made as function so that in future
  can be scaled)
  */
  generateIcons(iconName: string, iconClassName: string): IconListItem {
    return {
      iconClassName,
      iconName
    };
  }



  /*
  Receving the action from
  the table component
  */
  getEmittedAction(actionPayload: TableActionEmit) {

    switch (actionPayload.actionName) {

      case 'Edit':
        this.editEmployeeRecord(actionPayload.payload);
        break;

      case 'Delete':
        this.deleteEmployeeRecord(actionPayload.payload);
        break;
    }
  }



  /*
  Fired when clicking
  on edit
  */
  editEmployeeRecord(employee: Employee) {

    // Initalize the form
    this.initEmployeeEditForm(employee);

    // Open the Modal
    this.editRecordModal.openModal();

  }



  /*
  Intialize the edit form
  group
  */
  initEmployeeEditForm(employee: Employee) {
    this.employeeEditForm = this.fb.group({
      id: [employee.id],
      name: [employee.name, Validators.required],
      emailId: [employee.emailId, Validators.required],
      designation: [employee.designation, Validators.required],
      age: [employee.age, Validators.required]
    });
  }


  /*
  Updating Employee Records
  */
  updateEmployeeRecord() {

    // Get the Values
    let updatedObj: Employee = this.employeeEditForm.value;

    // Get the record from the Employee List
    let employee = this.findRecordById(updatedObj.id);

    // Update the Record
    employee = Object.assign(employee, updatedObj);

    // Close the Modal
    this.cancelModal(this.editRecordModal);
  }



  /*
  Fired when deleting a
  employee
  */
  deleteEmployeeRecord(employee: Employee) {

    // Initalize the form
    this.initEmployeeEditForm(employee);

    // If Employee List has 1 record then show alert or show popup
    this.employeeList.length === 1 ? this.showAlert('danger', 'You cannot delete the last record !') : this.deleteRecordModal.openModal();

  }


  /*
  Fired When delete
  is clicked
  */
  removeEmployeeRecord() {

    // Get Record
    let recordToBeDeleted: Employee = this.employeeEditForm.value;

    // Find the Index
    let recordToBeDeletedIndex = this.findRecordIndexById(recordToBeDeleted.id);

    // Delete the Record
    this.employeeList.splice(recordToBeDeletedIndex, 1);

    // Close the Modal
    this.cancelModal(this.deleteRecordModal);

  }



  /*
  Fired When cancelling
  the modal
  */
  cancelModal(modal ? : any) {

    // Open the Modal
    modal.closeModal();

    // Reset the Form
    this.employeeEditForm.reset();

  }




  /*
  Form Control Names
  */
  get name() {
    return this.employeeEditForm.get('name');
  }

  get emailId() {
    return this.employeeEditForm.get('emailId');
  }

  get designation() {
    return this.employeeEditForm.get('designation');
  }

  get age() {
    return this.employeeEditForm.get('age');
  }




  /*
  Utility
  Method
  needs to be moved to different class
  */
  findRecordIndexById(id: number) {
    return this.employeeList.findIndex(employee => employee.id === id);
  }

  findRecordById(id: number) {
    return this.employeeList.find(employee => employee.id === id);
  }

  showAlert(type: string, message: string) {

    // Configure Alert
    this.alertType = type;
    this.alertMessage = message;

    // Show Alert
    this.isAlert = true;

  }

  closeAlert() {
    this.isAlert = false;
  }


}
