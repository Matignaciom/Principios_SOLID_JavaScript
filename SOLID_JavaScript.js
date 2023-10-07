/*
Los principios SOLID son un conjunto de cinco principios de diseño de software que ayudan a escribir código más limpio, modular y mantenible.
Aquí te explicaré cada uno de estos principios con ejemplos de código en JavaScript, acompañados de comentarios para que sean comprensibles.
*/

// 1. Principio de Responsabilidad Única (Single Responsibility Principle - SRP):
// Este principio establece que una clase debe tener una sola razón para cambiar. En otras palabras, una clase debe tener una única responsabilidad.

// Mal ejemplo
class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    calcularImpuestos() {
      // Cálculos de impuestos
    }
  
    generarInforme() {
      // Generación de informe
    }
  }
  
  // Buen ejemplo
  class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    calcularImpuestos() {
      // Cálculos de impuestos
    }
  }
  
  class GeneradorInforme {
    generarInforme(empleado) {
      // Generación de informe
    }
  }
  
  // En el ejemplo mejorado, hemos separado las responsabilidades de calcular impuestos y generar informes en clases distintas.
  
  // 2. Principio de Abierto/Cerrado (Open/Closed Principle - OCP):
  // Este principio establece que las clases deben ser abiertas para extensión pero cerradas para modificación.
  // Es decir, puedes agregar nuevas funcionalidades sin cambiar el código existente.
  
  // Mal ejemplo
  class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  }
  
  class CalculadoraArea {
    calcularArea(rectangulo) {
      return rectangulo.ancho * rectangulo.alto;
    }
  }
  
  // Buen ejemplo
  class Forma {
    calcularArea() {}
  }
  
  class Rectangulo extends Forma {
    constructor(ancho, alto) {
      super();
      this.ancho = ancho;
      this.alto = alto;
    }
  
    calcularArea() {
      return this.ancho * this.alto;
    }
  }
  
  class Circulo extends Forma {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  }
  
  // En el ejemplo mejorado, creamos una clase base `Forma` que define un método `calcularArea()`, y luego extendemos esta clase para crear nuevas formas sin modificar el código existente.
  
  // 3. Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP):
  // Este principio establece que los objetos de una subclase deben poder sustituirse por objetos de la clase base sin afectar la integridad del programa.
  
  // Mal ejemplo
  class Pajaro {
    volar() {
      // Lógica de vuelo
    }
  }
  
  class Pinguino extends Pajaro {
    // Los pingüinos no pueden volar
  }
  
  // Buen ejemplo
  class Ave {
    volar() {}
  }
  
  class Pajaro extends Ave {
    volar() {
      // Lógica de vuelo de los pájaros
    }
  }
  
  class Pinguino extends Ave {
    // Puedes dejar este método vacío ya que los pingüinos no pueden volar
  }
  
  // En el ejemplo mejorado, hemos asegurado que la subclase `Pinguino` no cambie el comportamiento de la clase base `Ave` en términos de volar.
  
  // 4. Principio de Segregación de Interfaces (Interface Segregation Principle - ISP):
  // Este principio establece que una clase no debe verse obligada a implementar métodos que no necesita.
  
  // Mal ejemplo
  class Trabajador {
    trabajar() {
      // Realizar trabajo
    }
  
    tomarDescanso() {
      // Tomar descanso
    }
  }
  
  // Buen ejemplo
  class Trabajador {
    trabajar() {
      // Realizar trabajo
    }
  }
  
  class Empleado extends Trabajador {
    tomarDescanso() {
      // Tomar descanso
    }
  }
  
  // En el ejemplo mejorado, hemos dividido la interfaz en clases más pequeñas, de modo que las clases que implementan `Trabajador` solo tienen que preocuparse por los métodos que son relevantes para ellas.
  
  // 5. Principio de Inversión de Dependencia (Dependency Inversion Principle - DIP):
  // Este principio establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino que ambas deben depender de abstracciones.
  
  // Mal ejemplo
  class Lampara {
    encender() {
      // Encender la lámpara
    }
  }
  
  class Interruptor {
    constructor(lampara) {
      this.lampara = lampara;
    }
  
    activar() {
      this.lampara.encender();
    }
  }
  
  // Buen ejemplo
  class Dispositivo {
    activar() {}
  }
  
  class Lampara extends Dispositivo {
    activar() {
      // Encender la lámpara
    }
  }
  
  class Interruptor {
    constructor(dispositivo) {
      this.dispositivo = dispositivo;
    }
  
    activar() {
      this.dispositivo.activar();
    }
  }
  // En el ejemplo mejorado, hemos introducido una clase base `Dispositivo` y hemos hecho que tanto `Lampara` como `Interruptor` dependan de esta abstracción en lugar de depender directamente entre sí.
  
  // Estos ejemplos de código en JavaScript ilustran los principios SOLID en acción, ayudando a crear un código más limpio, modular y mantenible.
