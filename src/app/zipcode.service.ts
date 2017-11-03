import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ZipcodeService {

  zipcodes: Observable<any[]>;

  constructor(private database: AngularFirestore) {

    this.zipcodes = database.collection('zipcodes').valueChanges();
  }
  getZipcodes(){
    return this.zipcodes;
  }
  getZipcode(zipCode: string){
    return this.database.doc('zipcodes/' + zipCode).valueChanges();
  }
  addNew(zipcode){
    this.database.collection('zipcodes').add(zipcode)
  }

}
