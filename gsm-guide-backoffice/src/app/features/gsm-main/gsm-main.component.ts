import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsm-main',
  templateUrl: './gsm-main.component.html',
  styleUrls: ['./gsm-main.component.scss']
})
export class GsmMainComponent implements OnInit {

  routes = [
    {
      type: "route",
      route : "admins" ,
      name : "Listes des admins" ,
      icon : "manage_accounts" ,
    },
    {
      type: "route",
      route : "clients" ,
      name : "Listes des clients" ,
      icon : "people",
    },
    {
      type: "route",
      route : "repairers" ,
      name : "Listes des réparateurs" ,
      icon : "construction",
    },
    {
      type: "route",
      route : "requests" ,
      name : "Demandes" ,
      icon : "subject",
    },
    {
      type: "route",
      route : "categories" ,
      name : "Catégories",
      icon : "widgets",
    },
    {
      type: "route",
      route : "marks" ,
      name : "Marques" ,
      icon : "phone_android",
    },
    {
      type: "route",
      route : "models" ,
      name : "Modéles" ,
      icon : "dialpad",
    },
    {
      type: "button",
      handler : this.logout.bind(this) ,
      name : "Se déconnecter" ,
      icon : "logout"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  logout(){

  }

}
