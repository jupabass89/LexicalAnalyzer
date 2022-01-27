import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  acceptance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A', weight: 'A', acceptance: 0},
  {position: 2, name: 'B', weight: 'B', acceptance: 1},
  {position: 3, name: 'C', weight: 'A', acceptance: 0},
  {position: 4, name: 'D', weight: 'E', acceptance: 1},
  {position: 5, name: 'E', weight: 'A', acceptance: 0},
  {position: 3, name: 'C', weight: 'A', acceptance: 0},
  {position: 4, name: 'D', weight: 'E', acceptance: 1},
  // {position: 5, name: 'E', weight: 'A', acceptance: 0},
  // {position: 1, name: 'A', weight: 'A', acceptance: 0},
  // {position: 2, name: 'B', weight: 'B', acceptance: 1},
  // {position: 3, name: 'C', weight: 'A', acceptance: 0},
  // {position: 4, name: 'D', weight: 'E', acceptance: 1},
  // {position: 5, name: 'E', weight: 'A', acceptance: 0},
  // {position: 3, name: 'C', weight: 'A', acceptance: 0},
  // {position: 4, name: 'D', weight: 'E', acceptance: 1},
  // {position: 5, name: 'E', weight: 'A', acceptance: 0},
  // {position: 1, name: 'A', weight: 'A', acceptance: 0},
  // {position: 2, name: 'B', weight: 'B', acceptance: 1},
  // {position: 3, name: 'C', weight: 'A', acceptance: 0},
  // {position: 4, name: 'D', weight: 'E', acceptance: 1},
  // {position: 5, name: 'E', weight: 'A', acceptance: 0},
  // {position: 3, name: 'C', weight: 'A', acceptance: 0},
  // {position: 4, name: 'D', weight: 'E', acceptance: 1},
  // {position: 5, name: 'E', weight: 'A', acceptance: 0},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'acceptance'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */