import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms implements OnInit {
  results: string[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  }

  onSubmit(): void {
    console.log("submit");
    console.log(this.formGroup.value);
  }
  onClean(): void {
    console.log("clear");
    this.formGroup.reset();
  }

}
