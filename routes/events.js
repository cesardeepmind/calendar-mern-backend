/**
 * Events Routes
 *  /api/events
 */

const {Router} = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {isDate} = require('../helpers/isDate');


const router = Router();

const { getEventos,
        crearEvento,
        actualizarEvento,
        borrarEvento
} = require("../controllers/events");


// Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);


// Obtener eventos
router.get('/' ,getEventos);


//crear nuevo eventos
router.post('/',
[  
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de fin es obligatoria').custom(isDate),
    validarCampos
]
,crearEvento);


//actualizar eventos
router.put('/:id', actualizarEvento);


//borrar evento
router.delete('/:id', borrarEvento);


module.exports = router;