import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'person-add-outline',
      name: 'registro',
      redirectTo: '/registro'
    },
    {
      //<ion-icon name="pulse-outline"></ion-icon>
      icon: 'pulse-outline',
      name: 'servicios',
      redirectTo: '/servicios'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
