import { Injectable } from "@angular/core";
import { TranslateService as TranslateCore } from "@ngx-translate/core";

@Injectable({providedIn: 'root'})
export class TranslateService {
  constructor(private translateService: TranslateCore){
    this.translateService.setDefaultLang('pt');
  }

  definirIdioma(idioma: string){
    this.translateService.use(idioma);
    localStorage.setItem('idioma', idioma);
  }

  /**
   * Recupera o idioma atual armazenado no localStorage. Se nenhum idioma for encontrado, retorna 'pt' como idioma padrão.
   *
   * @returns {string} O idioma atual armazenado no localStorage, ou 'pt' se nenhum idioma for encontrado.
   */

  obterIdiomaAtual(): string {
    return localStorage.getItem('idioma') || 'pt';
  }

}
