import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class AutenticaoServico {

  private http = inject(HttpClient);
  private roteador = inject(Router);
  private usarioSubject = new BehaviorSubject<any>(null);
  user$ = this.usarioSubject.asObservable();

  conectar(credencias: {email: string; password: string}) {
    return this.http.post<{token: string}>('/api/auth/login', credencias)
     .subscribe(resposta => {
      localStorage.setItem('token', resposta.token);
      this.roteador.navigate(['/painel']);
      });
  }

  desconectar() {
    localStorage.removeItem('token');
    this.usarioSubject.next(null);
    this.roteador.navigate(['/logar']);
  }

  obterToken(): string | null {
    return localStorage.getItem('token');
  }

  estaAutenticado(): boolean {
    return !!this.obterToken();
  }

} 