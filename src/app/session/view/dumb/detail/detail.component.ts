import {Component, Input} from '@angular/core';
import {Session} from "../../../domain/Session";

@Component({
  selector: 'app-session-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() session: Session;

  book() {
    alert("Vous allez reserver !");
  }
}
