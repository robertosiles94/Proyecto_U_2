import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps';
import { Establecimiento } from '../../models/establecimieto.interface';
import { Platform } from 'ionic-angular';

declare var google: any;

@IonicPage({
  segment: 'informacion-establecimiento/:idEstablecimiento'
}
)
@Component({
  selector: 'page-informacion-establecimiento',
  templateUrl: 'informacion-establecimiento.html',
})
export class InformacionEstablecimientoPage {

  @ViewChild('mapa') mapElement: ElementRef;
  map: any;
  est: Establecimiento;
  latLng: LatLng;
  id: number;
  esMovil: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps, public platform: Platform) {
    this.est = this.navParams.data;
    this.latLng = new LatLng(this.est.Latitud, this.est.Longitud);
    this.esMovil = this.platform.is('ios') || this.platform.is('android');
  }

  ionViewDidLoad() {
    if (this.esMovil) {
      this.cargarMapa();
      this.moverCamara(this.latLng);
    } else {
      this.initMap();
    }
    this.añadirMarcador(this.latLng);
  }

  moverCamara(latLng) {
    this.map.moveCamera({
      target: latLng
    });
  }

  cargarMapa() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.est.Latitud,
          lng: this.est.Longitud
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = this.googleMaps.create('map', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.moverCamara(this.latLng);
        this.añadirMarcador(this.latLng);
      })
      .catch(error => {
        console.log(error);
      });
  }

  añadirMarcador(latLng) {
    if (this.esMovil) {
      this.map.addMarker({
        title: this.est.Nombre,
        icon: 'blue',
        animation: 'DROP',
        position: latLng
      });
    } else {
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map
      });
    }
  }

  initMap() {
    let mapOptions = {
      center: this.latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
