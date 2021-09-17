create table tipousuario(
idtipousuario serial primary key,
descripcion varchar(50)--afiliado, no afiliado, empleado
	
);
create table usuario(
	idusuario serial primary key,
	nombre varchar(100) not null unique,
	idtipousuario integer not null,
	numerodocumento varchar(8),
	direccion varchar (150),
	fecharegistro date,
		foreign key ( idtipousuario) references  tipousuario (idtipousuario)

);

create table descuento(
iddescuento serial primary key,
idtipousuario integer not null,
descripcion varchar(100),
porcentaje integer,
cantidad integer	
);


create table factura(
	idfactura serial primary key,
	idusuario integer not null,
	fechafactura date,
	estado varchar(50),
	totalfactura numeric (5,2),
	totaldescuento numeric(5,2),
	foreign key ( idusuario) references  usuario (idusuario)
);

create table producto (
idproducto  serial primary key,
nombre varchar(150) not null,
preciounitario numeric(5,2),
tipoproducto varchar(50),
stock integer not null
);
create table detallefactura (
iddetalle  serial primary key ,
idfactura integer not null  ,
idproducto integer not null  ,
cantidad  integer not null,
	preciototal numeric(5,2),
		foreign key ( idproducto) references  producto (idproducto),
			foreign key ( idfactura) references  factura (idfactura)


);
commit;
  