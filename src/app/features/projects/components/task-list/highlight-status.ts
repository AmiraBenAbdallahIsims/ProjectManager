import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]'
})
export class HighlightStatus implements OnChanges {

  @Input('appHighlightStatus') status!: string;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.setBorderColor();
  }

  private setBorderColor() {
    // retirer toutes les classes de bordure possibles
    this.el.nativeElement.classList.remove('border-l-amber-400', 'border-l-blue-400', 'border-l-emerald-400');

    // ajouter la classe correspondant au statut
    switch (this.status) {
      case 'En attente':
        this.el.nativeElement.classList.add('border-l-amber-400');
        break;
      case 'En cours':
        this.el.nativeElement.classList.add('border-l-blue-400');
        break;
      case 'Terminé':
        this.el.nativeElement.classList.add('border-l-emerald-400');
        break;
      default:
        // aucune couleur si statut inconnu
        break;
    }
  }
}
