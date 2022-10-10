function registroProductos(){
  
<form action="">
<h1>Formulario de registros</h1>

<div>

id Producto : <input type="text"  name="idProducto" /> <br />
id Categoria : <input type="text"  name="idCategoria" /> <br />
codigo: <input type="text"  name="codigo" /> <br />
nombre: <input type="text"  name="nombre" /> <br />
precio venta: <input type="text"  name="precioVenta" /> <br />
stock: <input type="text"  name="stock" /> <br />
descripcion : <input type="text"  name="idescripcion" /> <br />
imagen: <input  type="file"  name="imagen" /> <br />
estado: <input type="text"  name="estado" /> <br />

<button>Registrar</button>
<button>Cancelar</button>

</div>

</form>


}

export default registroProductos ; 
