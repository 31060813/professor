import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProfessorDataSource } from './professor-datasource';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../models/professor';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProfessorDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
    professores: Professor[];
    constructor(private service: ProfessorService) { }

  ngOnInit() {
    this.dataSource = new ProfessorDataSource(this.paginator, this.sort);
    this.listarProfessores();
  }

  listarProfessores(): void {
    this.service.getListaProfessor().subscribe(
      (res) => {
        this.professores = res; 
        console.log("professores: ", this.professores)
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err)); 
      }
    );
  }

}
