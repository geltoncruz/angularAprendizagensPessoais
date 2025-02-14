import { Injectable, inject } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AutenticaoServico } from "./auth.service";

@Injectable({providedIn: 'root'})
export class authGuard implements CanActivate {
  private autenticacaoServico = inject(AutenticaoServico);
  private roteador = inject(Router);

  canActivate(): boolean {
    if(!this.autenticacaoServico.estaAutenticado()){
      this.roteador.navigate(['/login']);
      return false;
    }
      return true; 
  }
}