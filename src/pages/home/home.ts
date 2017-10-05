import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabs:any;
  constructor(public navCtrl: NavController) {
    this.cargarTabs();
  }

  cargarTabs() {
    this.tabs = [
      { titulo: "Inicio", component: "InicioPage", icon: 'home' },
      { titulo: "Buscar", component: "BuscarPage", icon: 'search' },
      { titulo: "Destacados", component: "DestacadoPage", icon: 'flame' },
      { titulo: "Eventos", component: "EventosPage", icon: 'calendar' },
      { titulo: "Explorar", component: "ExplorarPage", icon: 'md-list-box' }
  ];
  }

}
