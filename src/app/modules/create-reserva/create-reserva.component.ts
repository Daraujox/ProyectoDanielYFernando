import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.sass']
})
export class CreateReservaComponent implements OnInit {
createReserva:FormGroup;
submitted = false;
cargando = false;
id: string | null;
textoReserva='Agregar Reserva';

pasar: any[] = [];

  constructor(private fb: FormBuilder, 
    private _reservaService: ReservaService,
    private router: Router,
    private aRoute: ActivatedRoute) { 
    this.createReserva = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      npersona: ['', Validators.required],
      cedula: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      articulo: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.actualizarR();
    this.prueba();
  }

  prueba(){
    this._reservaService.prueba().subscribe(data => {
      this.pasar = [];
      data.forEach((element:any) => {
       this.pasar.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
       })
      });
      console.log(this.pasar);
    });
  }

  agregarEditarReserva(){
    this.submitted = true;
    if(this.createReserva.invalid){
      return;
    }

    if(this.id === null){
      this.agregarReserva();
    }else{
      this.editarReserva(this.id)
    }

  }

agregarReserva(){
  const reserva: any={
    nombre: this.createReserva.value.nombre,
    tipo: this.createReserva.value.tipo,
    npersona: this.createReserva.value.npersona,
    cedula: this.createReserva.value.cedula,
    fecha: this.createReserva.value.fecha,
    hora:this.createReserva.value.hora,
    articulo:this.createReserva.value.articulo,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
  } 
  this.cargando = true;
  this._reservaService.agregarReserva(reserva).then(() =>{
    console.log('usuario registrado con exito')
    this.router.navigate(['/reservas'])
  }).catch(error =>{
    console.log(error);
    this.cargando = false;
  })
}

editarReserva(id: string){
 

  const reserva: any={
    nombre: this.createReserva.value.nombre,
    tipo: this.createReserva.value.tipo,
    npersona: this.createReserva.value.npersona,
    cedula: this.createReserva.value.cedula,
    fecha: this.createReserva.value.fecha,
    hora:this.createReserva.value.hora,
    articulo:this.createReserva.value.articulo,
    fechaActualizacion: new Date()
  } 
 this.cargando = true;
  this._reservaService.actualizarReserva(id, reserva ).then(()=>{
    this.cargando = false;
    this.router.navigate(['/reservas'])
  })

}


actualizarR(){
  this.textoReserva='Editar Reserva';
  if(this.id !== null){
    this.cargando = true;
    this._reservaService.getReserva(this.id).subscribe(data =>{
     this.cargando = false; 
      console.log(data)
      this.createReserva.setValue({
      nombre: data.payload.data()['nombre'],
      tipo: data.payload.data()['tipo'],
      npersona: data.payload.data()['npersona'],
      cedula: data.payload.data()['cedula'],
      fecha:data.payload.data()['fecha'],
      hora:data.payload.data()['hora'],
      articulo:data.payload.data()['articulo']
      })
    })
  }
}


}
