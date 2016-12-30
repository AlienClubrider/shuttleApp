import { Component, AfterViewInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 implements AfterViewInit {
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
        this.papaSeen = papaSeen = data[0].checked;
        this.papa = papa = data[0].clicked;
        this.crowSeen = crowSeen = data[1].checked;
        this.crow = crow = data[1].clicked;
        this.freshSeen = freshSeen = data[2].checked;
        this.fresh = fresh = data[2].clicked;
        this.apartSeen = apartSeen = data[3].checked;
        this.apart = apart = data[3].clicked;
        this.chapSeen = chapSeen = data[4].checked;
        this.chap = chap = data[4].clicked;
        this.robSeen = robSeen = data[5].checked;
        this.rob = rob = data[5].clicked;



        // console.log(this.papa);
      });



  }



  clicked(num) {

    this.shuttle.update(num, {
      "clicked": "#32db64"
    });

    this.shuttle.update(num, {
      "seen": "visible"
    });
  }

}
