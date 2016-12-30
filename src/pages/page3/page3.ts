import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 implements AfterViewInit {

  shuttle: FirebaseListObservable<any>;

  papa: any;
  crow: any;
  fresh: any;
  apart: any;
  chap: any;
  rob: any;
  papaSeen: any;
  crowSeen: any;
  freshSeen: any;
  apartSeen: any;
  chapSeen: any;
  robSeen: any;


  constructor(public navCtrl: NavController, af: AngularFire) {
    this.shuttle = af.database.list('/shuttleApp');






  }

  ngAfterViewInit() {
    this.fake();
  }

  fake() {

    this.shuttle.subscribe(
      data => {
        var papa, crow, fresh, apart, chap, rob;
        var papaSeen, crowSeen, freshSeen, apartSeen, chapSeen, robSeen;
        this.papaSeen = papaSeen = data[0].seen;
        this.papa = papa = data[0].dclicked;
        this.crowSeen = crowSeen = data[1].seen;
        this.crow = crow = data[1].dclicked;
        this.freshSeen = freshSeen = data[2].seen;
        this.fresh = fresh = data[2].dclicked;
        this.apartSeen = apartSeen = data[3].seen;
        this.apart = apart = data[3].dclicked;
        this.chapSeen = chapSeen = data[4].seen;
        this.chap = chap = data[4].dclicked;
        this.robSeen = robSeen = data[5].seen;
        this.rob = rob = data[5].dclicked;


        // console.log(this.papa);
      });



  }



  clicked(num) {

    this.shuttle.update(num, {
      "checked": "visible"
    });

    this.shuttle.update(num, {
      "dclicked": "#32db64"
    });

  }

  clear(num) {

    this.shuttle.update(num, {
      "checked": "hidden"
    });

    this.shuttle.update(num, {
      "dclicked": "#387ef5"
    });

    this.shuttle.update(num, {
      "clicked": "#387ef5"
    });

    this.shuttle.update(num, {
      "seen": "hidden"
    });

  }

}
