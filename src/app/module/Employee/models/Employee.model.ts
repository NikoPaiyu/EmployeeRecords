import { TableActionIcons } from './../../../shared/models/table-action.model';


export class Employee {

  // Employee Properties
  id: number;
  name: string;
  emailId: string;
  designation: string;
  age: number;

  constructor(id: number,name: string,emailId: string,desgination: string,age: number){
    this.id = id;
    this.name = name;
    this.emailId = emailId;
    this.age = age;
    this.designation = desgination;
  }

  // Intializing it here
  TableAction ?: TableActionIcons = new TableActionIcons();

}
