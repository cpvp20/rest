const express = require('express');
const router = express.Router();

//1. Suma - Recibe en el body un JSON en ese objeto solo hay un tag “nums” 
//que será un arreglo con todos los números que deben de sumar.
router.route('/suma').post((req, res) => {
    let nums = req.body.nums;
    let acc = 0;
    for (i = 0; i < nums.length; i++) {
        acc = acc + nums[i];
    }
    res.json({ 'respuesta': acc });
});

//2. Resta - Recibe en el body un JSON en ese objeto hay 2 tags “numToSubs” 
//que contiene el numero al cual hay que restarle los números que vienen en el tag “nums” 
//que será un arreglo con todos los números.
router.route('/resta').post((req, res) => {
    let numToSubs = req.body.numToSubs;
    let nums = req.body.nums;

    let acc = numToSubs;
    for (i = 0; i < nums.length; i++) {
        acc = acc - nums[i];
    }
    res.json({ 'respuesta': acc });
});

//3. Multiplica - Recibe en el body un JSON en ese objeto solo hay un tag “nums” que será
// un arreglo con todos los números que deben de multiplicar.
router.route('/multiplica').post((req, res) => {
    let nums = req.body.nums;

    let acc = 1;
    for (i = 0; i < nums.length; i++) {
        acc = acc * nums[i];
    }
    res.json({ 'respuesta': acc });
});
//4. Divide - Recibe en el body un JSON en ese objeto hay 2 tags “numToDiv” que 
//contiene el numero al cual hay que dividirlo entre todos los números que vienen en el 
//tag “nums” que será un arreglo.
router.route('/divide').post((req, res) => {
    let numToDiv = req.body.numToDiv;
    let nums = req.body.nums;

    let acc = numToDiv;
    for (i = 0; i < nums.length; i++) {
        acc = acc / nums[i];
    }
    res.json({ 'respuesta': acc });
});

//5. Free - Recibe en el body un JSON en ese objeto solo hay un tag “operation” que será un string 
//con una operación completa usando los siguientes operadores (* / - +). 
//Un ejemplo del string que recibirán "56 * 10 - 8 * 15 / 5 + 8" 
//debe de ejecutarse la operación por orden de operadores de izquierda a derecha.
router.route('/free').post((req, res) => {
    let operation = req.body.operation;

    let acc = eval(operation)
    res.json({ 'respuesta': acc });
});

//1 metodo GET Autores - Regresa un JSON con 2 tags “autor1" y “autor2” con el nombre completo de cada integrante.
router.route('/autores').get((req, res) => {
    let response = { "autor1": "Mariana Chavez Medina", "autor2": "Carolina Perez-Vargas Pinson" };
    res.json(response);
});

module.exports = router;