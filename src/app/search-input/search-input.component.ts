import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() onSearchTextChange = new EventEmitter<string>();
  private searchText = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearchInputChange(event: any) {
    // event.target.value
    this.onSearchTextChange.emit(event.target.value);
  }

}
