app/
│
├── (tabs)/
│   ├── _layout.tsx        # Configuración del Tab Navigator.
│   ├── index.tsx          # Pantalla principal (Dashboard).
│   ├── products.tsx       # Pantalla para gestionar productos.
│   ├── sales.tsx          # Pantalla para registrar ventas.
│   ├── payments.tsx       # Pantalla para gestionar pagos.
│   └── history.tsx        # Pantalla para consultar historial de movimientos.
│
├── components/
│   ├── ProductCard.tsx    # Componente para mostrar productos.
│   ├── SaleForm.tsx       # Componente para registrar una venta.
│   ├── PaymentForm.tsx    # Componente para registrar un pago.
│   └── HistoryList.tsx    # Componente para listar movimientos o pagos.
│
├── contexts/
│   ├── AuthContext.tsx    # Contexto para la autenticación.
│   ├── ProductContext.tsx # Contexto para gestionar productos.
│   ├── SaleContext.tsx    # Contexto para gestionar ventas.
│   └── PaymentContext.tsx # Contexto para gestionar pagos.
│
├── utils/
│   ├── firebase.ts        # Configuración de Firebase.
│   ├── validations.ts     # Validaciones (usando Zod, por ejemplo).
│   └── helpers.ts         # Funciones auxiliares generales.
│
├── styles/
│   ├── globalStyles.ts    # Estilos globales.
│   ├── colors.ts          # Definición de colores.
│   └── typography.ts      # Estilos de tipografía.
│
├── assets/
│   ├── images/            # Imágenes estáticas.
│   └── icons/             # Iconos para la app.
│
├── navigation/
│   ├── RootNavigator.tsx  # Configuración de navegación principal.
│   └── TabNavigator.tsx   # Configuración de las pestañas.
│
└── app.config.ts          # Configuración general de la app.
