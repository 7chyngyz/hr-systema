import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private cs: CookieService,
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.cs.check("auth")) {
            const token = this.cs.get("auth")

            const cloneReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })

            return next.handle(cloneReq);
        }
        return next.handle(req);
    }
}