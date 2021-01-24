import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ModalComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports : [HeaderComponent,CardComponent,ModalComponent,TableComponent,NgbModule]
})
export class SharedModule { }
