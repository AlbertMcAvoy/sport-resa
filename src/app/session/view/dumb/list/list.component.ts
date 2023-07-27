import {Component, Input} from '@angular/core';
import {Session} from "../../../domain/Session";

@Component({
  selector: 'app-session-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() sessions: Session[];
}
