import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Establecimiento } from '../../models/establecimieto.interface';
import { ServicioBuscarProvider } from '../../providers/servicio-buscar/servicio-buscar';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  establecimientos: any;
  numero: number;
  criterio: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioBuscar: ServicioBuscarProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.buscarEstablecimientosPorCriterio();
  }

  buscarEstablecimientosPorCriterio() {
    let loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();
    this.servicioBuscar.getAllEstablecimientosPorCrierio(this.criterio).then((data) => {
      this.establecimientos = data;
      this.establecimientos = this.establecimientos.Establecimientos;
      loader.dismiss();
    }).catch(erro => {
    });
  }

  abrirInformacionEstablecimiento(est) {
    //var establecimiento = {
      //IdEstablecimiento: 1,
      //Nombre: "Panchita",
      //Calificacion: 3,
      //Latitud: -17.393835,
      //Longitud: -66.156946,
      //Descripcion: "Un lugar donde se venden pollos a la mejor calidad de la ciudad de cochabmaba",
      //Telefonos: [4444444,5555555]
    //}  
    this.navCtrl.push('InformacionEstablecimientoPage', est);
  }
}
