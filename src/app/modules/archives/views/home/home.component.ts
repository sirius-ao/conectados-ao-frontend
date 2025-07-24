import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
   dtOptions: DataTablesModule = {};

  usuarios = [
    { nome: 'Jemilson', telefone: '921006782' },
    { nome: 'Ana', telefone: '921006783' }
  ];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
}
