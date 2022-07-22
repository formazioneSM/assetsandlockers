import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Armadietti {
  id: number;
  name: string;
  cancelletto:string;
  s: string;
  p:number;
  possessore:string;
  periodo:string;
  codiceChiave:string;
  note:string;
}

const ELEMENT_DATA: Armadietti[] = [
  {id: 1, name: '1A',           cancelletto: '1', s: 'A',p:12,possessore:'Mario Rossi',periodo:'un giorno', codiceChiave:'123ABC456DEF',note:'nota'},
  {id: 2, name: '3A',           cancelletto: '3', s: 'A',p:12,possessore:'Ivana Gialli',periodo:'un giorno', codiceChiave:'123ABC456DEF',note:'nota'},
  {id: 3, name: 'Cancelleria',  cancelletto: '6', s: 'L',p:11,possessore:'GSI',periodo:'due giorni', codiceChiave:'123ABC456DEF',note:'nota'},
  {id: 4, name: '2I',           cancelletto: '6', s: 'I',p:12,possessore:'Antonio Verdi',periodo:'tre giorni', codiceChiave:'123ABC456DEF',note:'nota'},
  {id: 5, name: '3B',           cancelletto: '2', s: 'B',p:12,possessore:'',periodo:'un giorno', codiceChiave:'123ABC456DEF',note:'nota'},
  {id: 6, name: '4C',           cancelletto: '3', s: 'C',p:12,possessore:'Giuseppe Gialli',periodo:'un giorno', codiceChiave:'123ABC456DEF',note:'nota'},
  
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', '#', 's','p','possessore','periodo','codiceChiave','note'];
  dataSource = ELEMENT_DATA;

 

  ngOnInit(){
    
  }


}






