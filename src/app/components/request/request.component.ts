import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoteModel } from 'src/app/models/note';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {

  public noteForm = this._fb.group({
    id: [''],
    flightNumber: ['', Validators.required],
    course: ['', Validators.required],
    planeBrand: ['', Validators.required],
    expenses: [0, Validators.required],
    passengersCount: [0, Validators.required],
  })

  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
    ) { }


  save() {
    this._calculationService.add(this.noteForm.value as NoteModel, Entity.REQUEST);
    location.reload();

  }

}
