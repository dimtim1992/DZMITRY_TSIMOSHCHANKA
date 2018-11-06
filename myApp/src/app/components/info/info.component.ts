import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../../server/user';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  providers: [HttpService],
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  show = true;
  users: User[] = [];
  error: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData().subscribe(
      (data: User[]) => this.users = data,
      error => {this.error = error.message; console.log(error); }
    );
  }
}
