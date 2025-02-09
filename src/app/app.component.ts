import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from './services/translate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private traducaoServico: TranslateService){}

  mudarIdioma(Idioma:string){
    this.traducaoServico.definirIdioma(Idioma);
  }
}
