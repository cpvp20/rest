# rest

Deben de crear un REST Service con las siguientes características:


5 metodos POST  
1. Suma - Recibe en el body un JSON en ese objeto solo hay un tag “nums” que será un arreglo con todos los números que deben de sumar.
2. Resta - Recibe en el body un JSON en ese objeto hay 2 tags “numToSubs” que contiene el numero al cual hay que restarle los números que vienen en el tag “nums” que será un arreglo con todos los números.
3. Multiplica - Recibe en el body un JSON en ese objeto solo hay un tag “nums” que será un arreglo con todos los números que deben de multiplicar.
4. Divide - Recibe en el body un JSON en ese objeto hay 2 tags “numToDiv” que contiene el numero al cual hay que dividirlo entre todos los números que vienen en el tag “nums” que será un arreglo.
5. Free - Recibe en el body un JSON en ese objeto solo hay un tag “operation” que será un string con una operación completa usando los siguientes operadores (* / - +). Un ejemplo del string que recibirán “56 * 10 - 8 * 15 / 5 + 8" (siempre va a haber un espacio entre los dígitos y los operadores) debe de ejecutarse la operación por orden de operadores de izquierda a derecha.

Estos métodos deben de responder un JSON con solo un tag “respuesta”.

 

1 metodo GET
Autores - Regresa un JSON con 2 tags “autor1" y “autor2” con el nombre completo de cada integrante.

Para probar sus endpoints pueden usar PostMan una herramienta para hacer peticiones.

