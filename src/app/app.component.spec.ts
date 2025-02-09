import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translate = TestBed.inject(TranslateService);
    translate.setTranslation('pt', { 
      'TITULO': 'angularAprendizagensPessoais'
    });
    translate.setDefaultLang('pt');
    translate.use('pt');
  });

  it('deve criar o aplicativo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deve ter a traducao do titulo correta`, (realizadoFn) => {
    translate.get('TITULO').subscribe((resposta) => {
      expect(resposta).toEqual('angularAprendizagensPessoais');
      realizadoFn();
    });
  });

  it('Deve renderizar o título', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compilado = fixture.nativeElement as HTMLElement;
    expect(compilado.querySelector('h2')?.textContent).toContain('angularAprendizagensPessoais');
  });
});
