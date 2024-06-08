import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";


@Injectable()

export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let token = localStorage.getItem("token")

        
        if(token !== null && token !== undefined){
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer "+token
                }            
            })
    }
    let requisicaoLogin = req.clone()
    if(requisicaoLogin.url.match("http://localhost:9090/auth/login")){

    }

        return next.handle(req).pipe(
            tap((result:HttpEvent<any>) => {
                if(result instanceof HttpResponse){
                    if (result.url?.match("http://localhost:9090/auth/login")) {
                        localStorage.setItem("token",result.body.token)
                    }    
                }
                console.log(result)}),
            catchError((error: HttpErrorResponse) => {

                if(error.status === 401 || error.status === 403){
                    localStorage.removeItem("token");
                }
                return throwError(() => error)
            }
        ))
    }
}