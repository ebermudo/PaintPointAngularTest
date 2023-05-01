import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  @Input() selectedUser: User = {} as User;
  @Input() isModalOpen = false;
  @Output() 
  isModalDismissed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

}
