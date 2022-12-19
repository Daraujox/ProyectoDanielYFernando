import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.sass']
})
export class CreateProductoComponent implements OnInit {
createProducto: FormGroup;
submitted = false;
loadding = false;
id: string | null;
texto = 'Agregar Productos';
  constructor(private fb: FormBuilder,
    private _productoService: ProductoService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.createProducto = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
    this.editar();
  }

  agregarEditarProducto(){
    this.submitted = true;
    if(this.createProducto.invalid){
      return;
    }
    if(this.id ===null){
      this.agregarproducto();
    }else{
      this.editarproducto(this.id);
    }
}

agregarproducto(){
  const producto: any = {
    nombre: this.createProducto.value.nombre,
    codigo: this.createProducto.value.codigo,
    precio: this.createProducto.value.precio,
    descripcion:this.createProducto.value.descripcion,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
}

  this.loadding = true;
  this._productoService.agregarProducto(producto).then(()=>{
    console.log('Producto Registrado con exito');
    this.loadding = false;
    this.router.navigate(['/listarproductos']);
  }).catch(error =>{
    console.log(error);
    this.loadding = false;
  })
}


editarproducto(id: string){
  this.loadding = true;
  const producto: any = {
    nombre: this.createProducto.value.nombre,
    codigo: this.createProducto.value.codigo,
    precio: this.createProducto.value.precio,
    descripcion:this.createProducto.value.descripcion,
     
    fechaActualizacion: new Date()
}
  this._productoService.actualizarproducto(id, producto).then(() =>{
    this.loadding = false;
    this.router.navigate(['/listarproductos']);
  })
}



editar(){
  if(this.id !== null){
    this.texto = 'Editar Productos';
    this.loadding = true;
    this._productoService.getproducto(this.id).subscribe(data =>{
      this.loadding = false;
      console.log(data);
      this.createProducto.setValue({
      nombre: data.payload.data()['nombre'], 
      codigo: data.payload.data()['codigo'], 
      precio: data.payload.data()['precio'], 
      descripcion: data.payload.data()['descripcion']
      })
    })
}
}



}
