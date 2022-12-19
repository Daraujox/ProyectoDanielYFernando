import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.sass']
})
export class ReservasComponent implements OnInit {
  reservas: any[] = [];
  constructor(private _reservaService: ReservaService) { 
    
  }

  ngOnInit(): void {
    this.getReservas();
  }
    
  getReservas(){
    this._reservaService.getReservas().subscribe(data =>{
      this.reservas = [];
      data.forEach((element:any) => {
     this.reservas.push({
      id: element.payload.doc.id,
      ...element.payload.doc.data()
     })
      });
        console.log(this.reservas);
    });
  }


  eliminarReserva(id: string){
    this._reservaService.eliminarReserva(id).then(()=>{
      console.log('Reserva eliminada con exito')
    }).catch(error =>{
      console.log(error);
    })
  }

}
