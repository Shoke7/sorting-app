import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-numbers-form',
  templateUrl: './numbers-form.component.html',
  styleUrls: ['./numbers-form.component.css'],
})
export class NumbersFormComponent implements OnInit {
  form: FormGroup;
  sortedArray: any[] = [];
  loading: boolean = false;
  labels: String[] = ["Number 1:","Number 2:","Number 3:","Number 4:","Number 5:"]

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nr1: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^[0-9]*$')],
        updateOn: 'change',
      }),
      nr2: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^[0-9]*$')],
        updateOn: 'change',
      }),
      nr3: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^[0-9]*$')],
        updateOn: 'change',
      }),
      nr4: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^[0-9]*$')],
        updateOn: 'change',
      }),
      nr5: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^[0-9]*$')],
        updateOn: 'change',
      }),
    });
  }

  //this method resets form input values
  resetForm() {
    this.form.reset();
    this.sortedArray = [];
  }

  //this method sorts the inserted numbers from lowest to highest
  numberSorter = () => {
    this.sortedArray = [];
    const nr1 = this.form.get('nr1')?.value;
    const nr2 = this.form.get('nr2')?.value;
    const nr3 = this.form.get('nr3')?.value;
    const nr4 = this.form.get('nr4')?.value;
    const nr5 = this.form.get('nr5')?.value;
    this.sortedArray.push(nr1, nr2, nr3, nr4, nr5);
    this.sortedArray.sort((a, b) => a - b);
    this.loading = false;
  };

  //this method adds 10s delay to the numberSorter() method & also triggers loading animation
  resultWithDelay = () => {
    this.sortedArray = [];
    this.loading = true;
    setTimeout(() => {
      this.numberSorter();
    }, 10000);
  };
}
