import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    let authSerice = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authSerice.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
