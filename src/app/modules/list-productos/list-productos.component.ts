import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.sass']
})
export class ListProductosComponent implements OnInit {

  productos: any[] = [];
   
  constructor(private _productoService: ProductoService ) { 
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
this._productoService.getProductos().subscribe(data =>{
 this.productos = [];
  data.forEach((element:any) => {
   this.productos.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 console.log(this.productos);
});
  }


  eliminarProducto(id: string){
    this._productoService.eliminarProducto(id).then(() =>{
      console.log('Producto eliminado exitosamente');
    }).catch(error =>{
      console.log(error);
    })
  }




}
