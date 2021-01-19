import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'app/models/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  @Input() public animal : Animal;

  @Output()
  private demandeSuppression : EventEmitter<any>;
  
  @Output ()
  private demandeEdition : EventEmitter<any>;

  constructor() {
    this.demandeSuppression = new EventEmitter<any>();
  }
  ngOnInit(): void {
  }
  supprimerAnimal() {
    this.demandeSuppression.emit();
  }
  editerAnimal() {
    this.demandeEdition.emit();
  }
}
