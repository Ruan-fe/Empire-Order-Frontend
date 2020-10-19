import { Component, OnInit } from '@angular/core';
import { Session } from '../../session/session';
import { SessionService } from '../../session.service';
import { Computer } from '../computer';
import { ComputerService } from 'src/app/computer.service';
@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.css']
})
export class ComputerFormComponent implements OnInit {

  sessions: Session[] = [];
  computer: Computer;
  success: boolean = false;
  constructor(private sessionService: SessionService, private computerService : ComputerService ) { 
    this.computer = new Computer();
  }

  ngOnInit(): void {
    this.sessionService.getSession().subscribe(res => this.sessions = res);
  }
  onSubmit(){
    if(!this.computer.id){
      this.computerService.salvar(this.computer).subscribe(res => {this.computer = res; this.success = true;})
      console.log(this.computer)
    }
  }
}
