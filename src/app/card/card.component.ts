import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() urlImagem = '';
}
