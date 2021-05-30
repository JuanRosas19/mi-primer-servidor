const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.send('Hola mundo');
});

router.get('/prueba', (req, res) =>  {
    res.send('Esta es otra pagina');
});

router.get('/pagina', (req, res) =>  {
    res.send('<h1>Tambien se puede diseñar los mensajes</h1>');
});

module.exports = router;