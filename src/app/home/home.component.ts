import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Blueprint} from '../models/common';

const BLUEPRINTS_URL = 'https://run.mocky.io/v3/9ac6fd1c-e636-4f54-9764-5941632338c7';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private bluePrints: Array<Blueprint> = [];
  private searchResult: Array<Blueprint> = [];
  private isLoading = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // initial
    this.isLoading = true;
    this.http.get(BLUEPRINTS_URL).toPromise().then((data: Array<Blueprint>) => {
      this.bluePrints = [...data];
      this.searchResult = [...data];
    }).finally(() => {
      this.isLoading = false;
    });
  }

  searchInputChange(searchText: string) {
    console.log(searchText);
    if (!searchText.trim()) {
      this.searchResult = this.bluePrints;
    } else {
      this.searchResult = this.bluePrints.filter((bluePrint) => {
        return bluePrint.name.toLowerCase().search(searchText.trim().toLowerCase()) > -1;
      });
    }
  }
}
