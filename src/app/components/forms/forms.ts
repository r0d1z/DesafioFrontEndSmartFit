import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnits } from '../../services/get-units';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {
  results: string[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnits
  ) {}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe((data) => {
      console.log(data);
    });
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
  }

  onSubmit(): void {
    console.log('submit');
    console.log(this.formGroup.value);
  }
  onClean(): void {
    console.log('clear');
    this.formGroup.reset();
  }
}
