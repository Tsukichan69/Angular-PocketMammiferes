import { Ordre } from "./ordre";

export class Animal {
	private ordre : Ordre;
	private nom : string;
	private image : string;

	constructor(ordre: Ordre, nom : string, image :string) {
		this.ordre = ordre;
		this.nom = nom;
		this.image = image;
	}
	getOrdre() : Ordre {
		return this.ordre;
	}
	getNom() : string {
		return this.nom;
	}
	getImage() : string {
		return this.image;
	}
	setNom(nouveauNom) : string {
		this.nom = nouveauNom;
		return this.nom;
	}
}
