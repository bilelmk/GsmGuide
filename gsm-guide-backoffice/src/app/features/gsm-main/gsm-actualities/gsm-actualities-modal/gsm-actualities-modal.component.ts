import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { Helpers } from "../../../../shared/helpers/helpers";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { ActualityService } from "../../../../core/services/http/actuality.service";

@Component({
  selector: 'app-gsm-actualities-modal',
  templateUrl: './gsm-actualities-modal.component.html',
  styleUrls: ['./gsm-actualities-modal.component.scss']
})
export class GsmActualitiesModalComponent implements OnInit {

  form: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = null;
  fileToReturn ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmActualitiesModalComponent>,
              private snackbarService: SnackbarService ,
              private actualityService: ActualityService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      displayOrder: new FormControl("", Validators.required),
      content:  new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onPickImage(event : any){
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileToReturn = Helpers.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
    )
  }

  add() {
    this.spinnerService.activate() ;
    const data =  new FormData()
    data.append('image' , this.fileToReturn)
    data.append('actuality' , new Blob([JSON.stringify(this.form.value)], {type: 'application/json'}));

    this.actualityService.add(data).subscribe(
      res => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Actualités ajouté avec succès','success') ;
        this.spinnerService.deactivate() ;
        this.matDialogRef.close()
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate() ;
        console.log(error)
      }
    )
  }
}
