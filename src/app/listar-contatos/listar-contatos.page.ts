import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ContatosService } from '../services/contatos';
import { FirebaseService } from '../services/firebase';
import { ContatoItemComponent } from '../contato-item/contato-item.component';

@Component({
  selector: 'app-listar-contatos',
  standalone: true,
  imports: [IonicModule, CommonModule, ContatoItemComponent],
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
})
export class ListarContatosPage implements OnInit {

  usuariosApi: any[] = [];
  usuariosFirebase: any[] = [];


  constructor(
    private contatosService: ContatosService,
    private firebaseService: FirebaseService
  ) { }

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
