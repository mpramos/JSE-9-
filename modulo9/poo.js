class Persona {
    constructor(nombre,apellido,edad=18,pais='Bolivia',ciudad='La Paz'){
       this.nombre=nombre
       this.apellido= apellido
       this.edad=edad
       this.pais=pais
       this.ciudad=ciudad
       this.puntuacion=0
       this.habilidades= []
}
 obtenerNombreCompleto(){
    let nombreCompleto= this.nombre + ' ' + this.apellido
    return nombreCompleto
 }
 get getPuntuacion(){
    return this.puntuacion
 }
 get getHabilidades(){
    return this.habilidades
 }
 set setPuntuacion(puntuacion){
    this.puntuacion+=puntuacion
 }
 set setHabilidades(habilidad){
    this.habilidades.push(habilidad)
 }
 getInformacionPersona(){
    let nombreCompleto = this.obtenerNombreCompleto()

    let habilidades = this.habilidades.length > 0 && this.habilidades.slice(0,this.habilidades.length-1).join(', ')+` y ${this.habilidades[this.habilidades.length-1]}`

    let formatoHabilidades= habilidades ? `El sabe ${habilidades}`:''

    let informacion= `${nombreCompleto} tiene ${this.edad}. El vive en ${this.ciudad} , ${this.pais}. ${formatoHabilidades}`
    return informacion
}
}
console.log(Persona);

let persona1 = new Persona('Mario','Sanchez',28)
console.log(persona1.obtenerNombreCompleto());
persona1.setHabilidades='HTML'
persona1.setHabilidades='CSS'
persona1.setHabilidades='JavaScript'
persona1.setPuntuacion=1
persona1.setPuntuacion=2
console.log(persona1.getHabilidades);
console.log(persona1.getPuntuacion);
console.log(persona1.getInformacionPersona());
 class Estudiante extends Persona {
    decirAlgo(){
        return 'Hola a todos soy un estudiante';
    }
 }
 let estudiante1 = new Estudiante('Juana','Ramirez',30,'Colombia','Bogota')
 console.log(estudiante1);
 console.log(estudiante1.decirAlgo());