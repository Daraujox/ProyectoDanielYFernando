import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private firestore: AngularFirestore) { }
  agregarReserva(reserva: any): Promise<any> {
    return this.firestore.collection('reservas').add(reserva);
  }

  getReservas(): Observable<any>{
    return this.firestore.collection('reservas', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarReserva(id: string): Promise<any>{
    return this.firestore.collection('reservas').doc(id).delete();
  }

  getReserva(id: string): Observable<any>{
    return this.firestore.collection('reservas').doc(id).snapshotChanges();
  }

actualizarReserva(id: string, data:any): Promise <any>{
  return this.firestore.collection('reservas').doc(id).update(data);
}

prueba(): Observable<any>{
  return this.firestore.collection('productos').snapshotChanges();
}



}
