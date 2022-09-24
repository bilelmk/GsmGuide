import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { latLng, LeafletMouseEvent, marker, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import { Location } from "../../../../core/models/location";
import { LocationService } from "../../../../core/services/http/location.service";
import { Helpers } from "../../../../shared/helpers/helpers";

@Component({
  selector: 'app-gsm-location-modal',
  templateUrl: './gsm-location-modal.component.html',
  styleUrls: ['./gsm-location-modal.component.scss']
})
export class GsmLocationModalComponent implements OnInit {

  form: FormGroup;

  map: L.Map;

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ,
    ],
    zoom: 9,
    center: latLng(36.731937, 10.242248)
  };
  layer = [
    marker([36.731937, 10.242248])
  ] ;

  location: Location = new Location() ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmLocationModalComponent>,
              private snackbarService: SnackbarService,
              private locationService: LocationService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      address: new FormControl("", Validators.required),
    });
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }

  setMarker(event: LeafletMouseEvent) {
    this.layer = [marker([event.latlng.lat, event.latlng.lng])] ;
    this.location.longitude = event.latlng.lng
    this.location.latitude = event.latlng.lat
  }


  ngOnInit(): void {
  }

  add() {
    this.location.address = this.form.value.address ;
    this.spinnerService.activate()
    this.locationService.add(this.location).subscribe(
      res => {
        Helpers.addToArray(res , this.data.array)
        this.matDialogRef.close();
        this.snackbarService.openSnackBar('Boutique ajouté avec succès', 'success');
        this.spinnerService.deactivate()
      },
      error => {
        this.spinnerService.deactivate()
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        console.log(error)
      }
    )
  }
}
