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
      name : "Demandes de réparation" ,
      icon : "subject",
    },
    {
      type: "route",
      route : "marks" ,
      name : "Marques" ,
      icon : "phone_android",
    },
    {
      type: "route",
      route : "parts" ,
      name : "Listes des piéces" ,
      icon : "settings_input_composite",
    },
    {
      type: "route",
      route : "locations" ,
      name : "Listes des boutiques" ,
      icon : "store",
    },
    {
      type: "route",
      route : "actualities" ,
      name : "Actualités" ,
      icon : "newspaper",
    },
    {
      type: "route",
      route : "shortcuts" ,
      name : "Aliases" ,
      icon : "move_up",
    },
    {
      type: "route",
      route : "sms" ,
      name : "Sms Service" ,
      icon : "sms",
    },
    // {
    //   type: "route",
    //   route : "statistics" ,
    //   name : "Statistiques" ,
    //   icon : "bar_chart",
    // },
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
