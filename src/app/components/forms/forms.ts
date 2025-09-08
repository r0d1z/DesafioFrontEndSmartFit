import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnits } from '../../services/get-units';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnits
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit(): void {
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(
        (location) => location.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
  }

  onClean(): void {
    console.log('clear');
    this.formGroup.reset();
  }
}
