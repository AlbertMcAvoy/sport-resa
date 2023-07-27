import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Session} from "../../../domain/Session";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  sessions: Session[];

  session: Session;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({sessions, session}) => {
      this.sessions = sessions;
      this.session = session;
    })
  }
}
