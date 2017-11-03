import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZipcodeService } from '../zipcode.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ZipcodeService]
})
export class HomePageComponent implements OnInit {
  zipcodes: Observable<any[]>;

  constructor(private router: Router, private zipcodeService: ZipcodeService) { }

  ngOnInit() {
    this.zipcodes = this.zipcodeService.getZipcodes();
  }

}
