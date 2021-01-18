import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'app/models/animal';
import { Ordre } from 'app/models/ordre';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  /* @Input() public animal : Animal; */

  @Output()
  private demandeAjout : EventEmitter<any>;

  public animalAAjouter : Animal;
  public nom : string;
  public ordre : Ordre;
  public image : string;

  constructor() {
    this.demandeAjout = new EventEmitter<any>(); }

  ngOnInit(): void {
  }
  ajoutAnimal(): void {
    this.animalAAjouter = new Animal(this.ordre, this.nom, this.image);
    this.demandeAjout.emit(this.animalAAjouter);
  }

}
