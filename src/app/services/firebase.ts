import { Injectable } from '@angular/core';
import { Database, ref, onValue, push } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) {}

  addContato(contato: any) {
    const contatosRef = ref(this.db, 'contatos');
    return push(contatosRef, contato);
  }

  getContatos(): Observable<any[]> {
    return new Observable((observer) => {
      const contatosRef = ref(this.db, 'contatos');

      onValue(contatosRef, snapshot => {
        const data = snapshot.val() || {};
        const lista = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        observer.next(lista);
      }, error => {
        observer.error(error);
      });
    });
  }
}
