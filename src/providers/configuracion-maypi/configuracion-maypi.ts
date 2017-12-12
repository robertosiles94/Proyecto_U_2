import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfiguracionMaypiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfiguracionMaypiProvider {

  linkGeneral: string = "https://maypi.000webhostapp.com/"

  constructor(public http: Http) {
    
  }

  getLinkGeneral() {
    return this.linkGeneral;
  }

}
