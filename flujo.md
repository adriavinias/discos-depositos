## Flujo de la Aplicación de Gestión de Depósitos (Simplificado)

### 1. Gestión de Productos en Depósito
- **Registrar nuevo producto:**
  - Ingresar datos del cliente (nombre, contacto).
  - Ingresar datos del producto (nombre, categoría, precio, cantidad).
  - Guardar información.
- **Modificar datos del producto:**
  - Buscar producto por cliente o nombre.
  - Editar datos (precio, descripción, categoría).
  - Registrar cambio como movimiento informativo (sin modificar inventario).

---

### 2. Gestión de Ventas (Único método para modificar inventario)
- **Registrar una venta:**
  - Seleccionar producto vendido.
  - Ingresar cantidad vendida.
  - Actualizar inventario automáticamente (reducir cantidad disponible).
  - Registrar movimiento:
    - Fecha.
    - Producto.
    - Cantidad vendida.
    - Usuario que registró la venta.
  - Calcular monto a pagar al cliente.

---

### 3. Gestión de Pagos
- **Consultar saldo del cliente:**
  - Verificar monto total acumulado por ventas.
- **Registrar un pago:**
  - Seleccionar cliente.
  - Ingresar monto pagado y método de pago.
  - Actualizar historial de pagos.
- **Consultar historial de pagos:**
  - Ver lista de pagos realizados (fecha y monto).

---

### 4. Historial de Movimientos
- **Registrar movimientos automáticamente:**
  - Venta registrada → Reducción de inventario.
  - Edición de producto → Cambio informativo (sin afectar cantidades).
- **Consultar movimientos:**
  - Ver lista completa con detalle:
    - Fecha.
    - Tipo de movimiento.
    - Usuario que lo realizó.

---

### Roles y Accesos
- **Administrador (Usuario):**
  - Gestión completa de productos, ventas, pagos y movimientos.

