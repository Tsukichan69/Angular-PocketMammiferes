import { Component, OnInit } from '@angular/core';
import { Animal } from 'app/models/animal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tabAnimaux : Array<Animal>; // = Animal[];

  public ornithorynque: Animal;
  public lapin: Animal;
  public chat: Animal;
  public kangourou: Animal;
  public vache: Animal;

  constructor() {
    this.ornithorynque = new Animal("Monotrèmes", "Ornithorynque", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FxuRvw3WQDkc%2Fmaxresdefault.jpg&f=1&nofb=1");
    this.lapin = new Animal("Lagomorphes", "Lapin", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4C6eiULamSW7ce_D3anVPgHaHa%26pid%3DApi&f=1");
    this.chat = new Animal("Carnivores", "Chat", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r6S5AKv5OICLrJ1I1BoASwHaJE%26pid%3DApi&f=1");
    this.kangourou = new Animal("Marsupiaux", "Kangourou","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JRj6YO1IyBOetAUKrVmBoQAAAA%26pid%3DApi&f=1");
    this.vache = new Animal("Ruminants", "Vache", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.46z0U6lfrJT5ei7Tz3c5sQHaD5%26pid%3DApi&f=1");

    this.tabAnimaux = [];
    this.tabAnimaux.push(this.ornithorynque,this.lapin, this.chat, this.kangourou, this.vache)
    //Possibilité de mettre : this.tabAnimau[this.ornithorynque, this.lapin]
  }
  
  ngOnInit(): void {
  }
  
  demandeSuppressionAnimal(AnimalAsupprimer : Animal) {
    let positionAnimalDansTab = this.tabAnimaux.indexOf(AnimalAsupprimer);
    this.tabAnimaux.splice(positionAnimalDansTab,1);
  }
  demandeAjout(animalAAjouter : Animal) {
    this.tabAnimaux.push(animalAAjouter);
  }
}
