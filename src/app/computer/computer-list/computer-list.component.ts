import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/computer.service';
import { Computer } from '../computer';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {
  computers: Computer[] = [];

  constructor( private computerService: ComputerService) { }

  ngOnInit(): void {
    console.log(this.computerService.getComputer().subscribe(res => this.computers = res))
    
  }

}
