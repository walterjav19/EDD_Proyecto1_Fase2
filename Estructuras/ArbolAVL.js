export class NodeArbol{
    constructor(value){
        this.value=value
        this.izquierda=null
        this.derecha=null
        this.altura=0
    }
}

export class Estudiante{
    constructor(nombre,carnet,password){
        this.nombre=nombre
        this.carnet=carnet
        this.password=password
    }
}

export class ArbolAvl extends NodeArbol {
    constructor(value) {
      super(value);
    }
  
    insertar(estudiante) {
      if (estudiante.carnet < this.value.carnet) {
        if (this.izquierda === null) {
          this.izquierda = new ArbolAvl(estudiante);
        } else {
          this.izquierda.insertar(estudiante);
        }
      } else {
        if (this.derecha === null) {
          this.derecha = new ArbolAvl(estudiante);
        } else {
          this.derecha.insertar(estudiante);
        }
      }
      this.actualizarAltura();
      this.balancear();
    }
  
    actualizarAltura() {
      const alturaIzq = this.izquierda ? this.izquierda.altura : -1;
      const alturaDer = this.derecha ? this.derecha.altura : -1;
      this.altura = Math.max(alturaIzq, alturaDer) + 1;
    }
  
    balancear() {
      const balance = this.factorBalance();
      if (balance > 1) {
        if (this.izquierda && this.izquierda.factorBalance() < 0) {
          this.izquierda.rotacionIzquierda();
        }
        this.rotacionDerecha();
      } else if (balance < -1) {
        if (this.derecha && this.derecha.factorBalance() > 0) {
          this.derecha.rotacionDerecha();
        }
        this.rotacionIzquierda();
      }
    }
  
    factorBalance() {
      const alturaIzq = this.izquierda ? this.izquierda.altura : -1;
      const alturaDer = this.derecha ? this.derecha.altura : -1;
      return alturaIzq - alturaDer;
    }
  
    rotacionIzquierda() {
      const temp = new ArbolAvl(this.value);
      temp.izquierda = this.izquierda;
      temp.derecha = this.derecha.izquierda;
      this.value = this.derecha.value;
      this.izquierda = temp;
      this.derecha = this.derecha.derecha;
      this.actualizarAltura();
      this.izquierda.actualizarAltura();
      this.derecha.actualizarAltura();
    }
  
    rotacionDerecha() {
      const temp = new ArbolAvl(this.value);
      temp.izquierda = this.izquierda.derecha;
      temp.derecha = this.derecha;
      this.value = this.izquierda.value;
      this.izquierda = this.izquierda.izquierda;
      this.derecha = temp;
      this.actualizarAltura();
      this.izquierda.actualizarAltura();
      this.derecha.actualizarAltura();
    }

    inOrden() {
        if (this.izquierda !== null) {
          this.izquierda.inOrden();
        }
        console.log(this.value);
        if (this.derecha !== null) {
          this.derecha.inOrden();
        }
      }
    
      preOrden() {
        console.log(this.value);
        if (this.izquierda !== null) {
          this.izquierda.preOrden();
        }
        if (this.derecha !== null) {
          this.derecha.preOrden();
        }
      }
    
      postOrden() {
        if (this.izquierda !== null) {
          this.izquierda.postOrden();
        }
        if (this.derecha !== null) {
          this.derecha.postOrden();
        }
        console.log(this.value);
      }

  }

