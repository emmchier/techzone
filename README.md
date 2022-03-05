## Getting Started

1- Crear template de NEXT JS con TypeScript:

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

2- Correr proyecto:

```bash
npm run dev
# or
yarn dev
```

3- Limpiar código base:

- Mover carpeta "service" al root. Cambiar nombre del archivo por "service". Se usará para la API. Vaciar contenido del archivo.
- Cambiar nombre a archivo de carpeta "styles" por "globalStyles.tsx". Agregar "theme.tsx".
- En "public" crear carpeta "images". Agregar "hero-desktop.png" + "metadata.png". Ver en FIGMA.
- Crear carpeta "components" en root. Crear carpeta "atomic-design" y agregarle carpetas de "atoms", "molecules", "organisms".
- Crear carpeta "common". Agregar carpetas "footer", "layout", "navbar", "page". Ver códigos.
- En "pages". Limpiar "index.tsx". Crear "404.tsx". Ajustar \_app.tsx + ver código.
- Correr proyecto y que todo funcione.
- Commit.

3- Styled Components

# with npm

npm install --save styled-components

# with yarn

yarn add styled-components
