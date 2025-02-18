import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from './servicos/translate.service';
import { TranslateModule } from '@ngx-translate/core';
import { AutenticaoServico } from './nucleo/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  estaAutenticado: boolean = false;
  private autenticaoServico = inject(AutenticaoServico);

  constructor(private traducaoServico: TranslateService) {
    this.autenticaoServico.user$.subscribe(usuario => {
      this.estaAutenticado = !!usuario;
    });
  }

  desconectar() {
    this.autenticaoServico.desconectar();
  }
  
  conectar() {
    const credenciais = {email:'gelton.cruz@gmail.com', password: '123456'};
    this.autenticaoServico.conectar(credenciais);
  }

  mudarIdioma(Idioma: string) {
    this.traducaoServico.definirIdioma(Idioma);
  }
}
