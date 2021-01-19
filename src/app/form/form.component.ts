import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'app/models/animal';
import { Ordre } from 'app/models/ordre';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public animalModifie : Animal; 
  @Input() public modeEdition : boolean;


  @Output()
  private demandeAjout : EventEmitter<any>;
  @Output()
  private demandeModification : EventEmitter<any>;

  public animalAAjouter : Animal;
  public nom : string;
  public ordre : Ordre;
  public image : string;

  constructor() {
    this.demandeAjout = new EventEmitter<any>(); }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.modeEdition) {
      this.nom = this.animalModifie.getNom();
      this.ordre = this.animalModifie.getOrdre();
      this.image = this.animalModifie.getImage();
    }
  }
  ajoutAnimal(ajoutForm): void {
    if(this.modeEdition) {
      let animalModifie = new Animal(this.ordre, this.nom, this.image);
      this.demandeAjout.emit(this.animalModifie);
    } else { // Mode création
    this.animalAAjouter = new Animal(this.ordre, this.nom, this.image);
    this.demandeAjout.emit(this.animalAAjouter);
  }
  ajoutForm.reset();
  }

}
