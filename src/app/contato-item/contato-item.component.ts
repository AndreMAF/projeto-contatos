import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato-item',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './contato-item.component.html',
  styleUrls: ['./contato-item.component.scss'],
})
export class ContatoItemComponent {

  @Input() user: any;
}
