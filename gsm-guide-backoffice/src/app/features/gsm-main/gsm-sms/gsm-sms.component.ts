import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SmsService } from "../../../core/services/http/sms.service";

@Component({
  selector: 'app-gsm-sms',
  templateUrl: './gsm-sms.component.html',
  styleUrls: ['./gsm-sms.component.scss']
})
export class GsmSmsComponent implements OnInit {

  error = false ;
  loading = false ;

  form: FormGroup;

  stats ;

  constructor(private spinnerService: SpinnerService ,
              private smsService: SmsService,
              private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      content: new FormControl("", Validators.required),
      sender: new FormControl("", Validators.required),
      numbers: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.getUsage()
  }

  getUsage() {
    this.loading = true ;
    this.spinnerService.activate()
    this.smsService.getUsage().subscribe(
      res => {
        console.log(res)
        this.loading = false ;
        this.spinnerService.deactivate()
        this.stats = res?.partnerContracts?.contracts[0]?.serviceContracts[0]?.availableUnits
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  get numbers() {
    return this.form.controls["numbers"] as FormArray;
  }

  deleteNumber(lessonIndex: number) {
    this.numbers.removeAt(lessonIndex);
  }

  addNumber() {
    const numbers = this.formBuilder.group({
      number: ['', Validators.required],
    });
    this.numbers.push(numbers);
  }

  sendMulti(){
    this.spinnerService.activate();
    let smss = {
      numbers: this.form.value.numbers,
      content: this.form.value.content
    }
    // this.smsService.sendMulti(smss).subscribe(
    //   res => {
    //     this.spinnerService.deactivate();
    //     this.getUsage()
    //   },
    //   err => {
    //     this.spinnerService.deactivate();
    //     console.log(err)
    //   }
    // )
  }
}
