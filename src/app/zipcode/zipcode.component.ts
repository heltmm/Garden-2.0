import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZipcodeService } from '../zipcode.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css'],
  providers: [ZipcodeService]
})
export class ZipcodeComponent implements OnInit {

  zipcode: any;


  constructor(private router: Router, private zipcodeService: ZipcodeService) { }

  ngOnInit() {
    this.zipcode = this.zipcodeService.getZipcode("1001")
    console.log(this.zipcode)
  }

}
