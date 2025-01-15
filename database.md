Clientes/Suppliers
- ID (clave primaria)
- Nombre
- Contacto (teléfono, email)

Productos
- ID (clave primaria)
- Nombre
- Categoría
- Precio
- Cantidad disponible
- Cliente/Supplier ID (clave foránea, relación con Clientes/Suppliers)

Ventas
- ID (clave primaria)
- Fecha
- Producto ID (clave foránea, relación con Productos)
- Cantidad vendida
- Cliente/Supplier ID (clave foránea, relación con Clientes/Suppliers)
- Usuario ID (clave foránea, relación con Usuarios)

Pagos
- ID (clave primaria)
- Fecha
- Monto
- Cliente/Supplier ID (clave foránea, relación con Clientes/Suppliers)
- Método de pago

Movimientos
- ID (clave primaria)
- Fecha
- Tipo de movimiento (venta, modificación)
- Producto ID (clave foránea, relación con Productos)
- Cliente/Supplier ID (clave foránea, relación con Clientes/Suppliers)
- Usuario ID (clave foránea, relación con Usuarios)

Usuarios
- ID (clave primaria)
- Nombre
- Rol (administrador, etc.)