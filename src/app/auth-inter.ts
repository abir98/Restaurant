import { HttpHandler, HttpInterceptor,HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BackendService } from "./services/backend.service";

@Injectable()
export class AuthInter implements HttpInterceptor {
    constructor(private service : BackendService){}
    intercept(req :HttpRequest<any>,next:HttpHandler){
      const authtoken = this.service.getToken();
      const authreq = req.clone({
          headers : req.headers.set("Authorization","Bearer "+authtoken)
      })
        return next.handle(authreq)
    }
}
