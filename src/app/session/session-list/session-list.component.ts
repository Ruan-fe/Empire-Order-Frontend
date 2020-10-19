import { Component, OnInit } from '@angular/core';
import { Session } from '../session'
import { SessionService } from '../../session.service'

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessionSelecionada: Session;
  msgSucesso: string;
  sessions: Session[] = [];
  constructor(private service : SessionService) { }

  ngOnInit(): void {
    this.service.getSession().subscribe(res => this.sessions = res)
  }
  preparaDelecao(session: Session){
    this.sessionSelecionada = session;
  }
  deletarSession(){
    this.service.deleteById(this.sessionSelecionada).subscribe(res=> {
      this.msgSucesso = "Deletado com sucesso" 
      this.ngOnInit()})
    
  }

}
