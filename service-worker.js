self.addEventListener("install", e => {
    console.log("Service Worker instalado");
  });
  
  self.addEventListener("fetch", e => {
    // Permite que funcione sin conexión si luego lo mejoras
  });
  