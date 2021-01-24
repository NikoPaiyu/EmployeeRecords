import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableActionEmit } from '../../models/table-action.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // Columns For the Table
  @Input() tableColumnList: string[] = [];

  // Property For the Value
  @Input() tablePropertyValueList: any[] = [];

  // Values For the Table
  @Input() tableValueList: any[] = [];

  // If Table Actions are required
  @Input() isAction: boolean = false;

  // Outputing the action
  @Output() iconAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableColumnList);
  }


  /*
  Emitting Payload to the parent
  whenever the action gets
  clicked
  */
  emitAction(payload: any, actionName: string){
    this.iconAction.emit(new TableActionEmit(payload,actionName));
  }

}
