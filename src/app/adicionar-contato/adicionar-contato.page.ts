import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { listOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-adicionar-contato',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
})
export class AdicionarContatoPage {

  contato = {
    name: '',
    email: ''
  };

  constructor(private firebaseService: FirebaseService) { 
    addIcons({ listOutline, addCircleOutline }); 
   }

  adicionarContato() {
    this.firebaseService.addContato(this.contato)
      .then(() => {
        alert('Contato adicionado com sucesso!');
        this.contato = { name: '', email: '' };
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao adicionar contato.');
      });
  }
}
