# 🎁 Amigo Secreto

Este proyecto es una aplicación simple en JavaScript que permite a los usuarios ingresar una lista de amigos y luego sortear aleatoriamente el nombre de un "amigo secreto". 

## 📌 Funcionalidades
- Agregar nombres a una lista de amigos.
- Mostrar la lista de amigos en pantalla.
- Sortear aleatoriamente un amigo secreto.
- Ocultar la lista de amigos después del sorteo.

## 🚀 Tecnologías Utilizadas
- **HTML** → Para la estructura del sitio web.
- **CSS** → Para los estilos y diseño responsivo.
- **JavaScript** → Para la lógica del sorteo y la manipulación del DOM.

## 📂 Estructura del Proyecto
```
📦 AmigoSecreto
├── 📄 index.html   # Página principal
├── 📄 style.css    # Estilos CSS
├── 📄 app.js       # Lógica de la aplicación
└── 📄 README.md    # Documentación del proyecto
```

## 🔧 Configuración y Uso
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/CarlosCalMen/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Escribe los nombres de los amigos y presiona "Añadir".
4. Cuando hayas agregado todos los nombres, haz clic en "Sortear amigo" para ver el resultado.

## 🖥 Capturas de Pantalla
_Aquí las pantallas del programa en funcionamiento._

<!-- Inserta una imagen aquí   ![Pantalla Principal width 50% height 50%](assets/pantalla_de_inicio.png) -->

_PANTALLA DE INICIO._
<img src ='assets/pantalla_de_inicio.png' width= 50%  height =50%>

_PANTALLA DE ERROR._
<img src ='assets/error_debe_agregar_nombre.png' width= 50%  height =50%>

_PANTALLA AGREGANDO AMIGOS._
<img src ='assets/agregando_amigos.png' width= 50%  height =50%>

_PANTALLA DE RESULTADO DE SORTEO._
<img src ='assets/amigo_sorteado.png' width= 50%  height =50%>


## 📜 Explicación del Código

### `app.js`
- **`agregarAmigo()`** → Agrega un nombre al array `amigos` y actualiza la lista en la interfaz.
- **`actualizarListaAmigos()`** → Muestra la lista de amigos en la pantalla.
- **`sortearAmigo()`** → Selecciona aleatoriamente un amigo y muestra el resultado ocultando la lista.

## 🎯 Mejoras Futuras
- Permitir eliminar amigos de la lista antes de sortear.
- Agregar una opción para reiniciar el sorteo.
- Implementar almacenamiento local para guardar la lista de amigos.

## 🤝 Contribuciones
Si deseas mejorar el proyecto, ¡siéntete libre de hacer un fork y enviar un pull request! 🚀

## 📜 Licencia
Este proyecto está bajo la licencia MIT. Puedes utilizarlo y modificarlo libremente.

