import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AutenticaoServico } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AutenticaoServico);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const token = this.authService.obterToken();
      if(token) {
        const clone = req.clone({setHeaders: { Authorization: `Bearer ${token}`}})
        return next.handle(clone);
      }
      return next.handle(req);
  }
}