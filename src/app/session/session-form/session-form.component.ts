import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Session } from '../session'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {
  session: Session;
  success: boolean = false;
  id: number;
  constructor(
    private service : SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
    this.session = new Session();
  }

  ngOnInit(): void {

    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id)
        this.service.getSessionById(this.id).subscribe( response => this.session = response)
    })
    

  }
  onSubmit(){
    if(this.session.id){
        this.service.atualizar(this.session)
          .subscribe(res => {
            this.success = true
          })
        
    }
    else{
      this.service.salvar(this.session)
      .subscribe( res =>{
        this.success = true;
        this.session = res;
      });
    }

  }

}
