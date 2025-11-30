import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ContatosService } from '../services/contatos';
import { FirebaseService } from '../services/firebase';
import { ContatoItemComponent } from '../contato-item/contato-item.component';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { listOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-listar-contatos',
  standalone: true,
  imports: [IonicModule, CommonModule, ContatoItemComponent, RouterModule],
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
})
export class ListarContatosPage implements OnInit {

  usuariosApi: any[] = [];
  usuariosFirebase: any[] = [];


  constructor(
    private contatosService: ContatosService,
    private firebaseService: FirebaseService,
  ) { 
    addIcons({ listOutline, addCircleOutline }); 
  }

 ngOnInit() {
  this.listarUsuariosApi();
  this.listarUsuariosFirebase();
}


  listarUsuariosApi() {
    this.contatosService.getUsuarios().subscribe({
      next: (data) => this.usuariosApi = data,
      error: (error) => console.error('Erro ao carregar usuários', error)
    });
  }

  listarUsuariosFirebase() {
  this.firebaseService.getContatos().subscribe({
    next: (data) => {
      this.usuariosFirebase = data;
      console.log('Usuarios Firebase:', data);
    },
    error: (err) => {
      console.error('Erro ao listar usuários do Firebase:', err);
    }
  });
}


}
