import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AutenticaoServico {

  private http = inject(HttpClient);
  private roteador = inject(Router);
  private usarioSubject = new BehaviorSubject<any>(null);
  user$ = this.usarioSubject.asObservable();

  conectar(credenciais: { email: string; password: string }) {
    const urlApi = 'http://localhost:3000/usuarios';
    this.http.get<{ email: string; password: string, token: string }[]>(`${urlApi}/?email=${credenciais.email}`)
      .subscribe(resposta => {
        if (resposta.length > 0) {
          const usuario = resposta[0];
          localStorage.setItem('token', usuario.token);
          this.usarioSubject.next(usuario.token);
        }
      });
  }

  desconectar() {
    localStorage.removeItem('token');
    this.usarioSubject.next(null);
  }

  obterToken(): string | null {
    return localStorage.getItem('token');
  }

  estaAutenticado(): boolean {
    return !!this.obterToken();
  }

} 