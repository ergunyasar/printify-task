/* tslint:disable:no-string-literal */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Blueprint } from '../models/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private bluePrintID = '';
  private bluePrint: Blueprint;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(params => {
      this.bluePrintID = params['id'];

      this.http.get(`https://run.mocky.io/v3/2a343350-d27f-461f-af63-c2247cde3251?id=${this.bluePrintID}`)
        .toPromise().then((bluePrint: Blueprint) => {
        this.bluePrint = {...bluePrint};
        console.log(bluePrint);
      });
    });

    // fetch details here

  }

}
