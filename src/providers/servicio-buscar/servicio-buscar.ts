import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfiguracionMaypiProvider } from '../configuracion-maypi/configuracion-maypi';
import { Establecimiento } from '../../models/establecimieto.interface';
/*
  Generated class for the ServicioBuscarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioBuscarProvider {

  linkGeneral: string;
  rutaEstableciemtos: string;
  establecimientos: Array<Establecimiento>;

  constructor(public http: Http, public configuracionMaypi: ConfiguracionMaypiProvider) {
    this.linkGeneral = this.configuracionMaypi.getLinkGeneral();
    this.rutaEstableciemtos = "Establecimiento/GetEstablecimientos";
  }

  getAllEstablecimientosPorCrierio(criterio) {
    return new Promise(resolve => {
      let params = { clave: criterio, latitud: "", longitud: "" };
      this.http.get(this.linkGeneral + this.rutaEstableciemtos, { params: params}).subscribe(data => {
        this.establecimientos = data.json();
        resolve(this.establecimientos);
      });
    })
  }
}
