import {
  Component,
  ElementRef,
  Input,
  NgModule,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal') modal: any;

  // Taking in Modal Title
  @Input() modalTitle: string = 'Modal Title';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}


  /*
  Opening the
  Modal
  */
  openModal() {
    this.modalService.open(this.modal).result.then((result) => {
      // Dont Do Anything
    }, result => {
      // Dont Do Anything
    })
  }

  /*
  Closing the
  Modal
  */
  closeModal() {
    this.modalService.dismissAll();
  }

}
