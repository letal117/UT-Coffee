var express = require('express');
var router = express.Router();
const { createDetallePedido, readDetallePedido, updateDetallePedido, deleteDetallePedido } = require('../model/DetallePedido'); 

router.get('/:id', async function(req, res, next) {
  try {
    const pedido = await readDetallePedido(parseInt(req.params.id));
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el pedido' });
  }
});

router.put('/actualizar/:id', async function(req, res, next) {
  try {
    const pedidoActualizado = await updateDetallePedido(parseInt(req.params.id), req.body);
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pedido' });
  }
});

router.post('/create', async function(req, res, next) {
  try {
    const nuevoPedido = await createDetallePedido(req.body.fecha, req.body.estado, req.body.usuarioId); 
    res.json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
});

router.delete('/eliminar/:id', async function(req, res, next) {
  try {
    const pedidoEliminado = await deleteDetallePedido(parseInt(req.params.id));
    res.json(pedidoEliminado);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el pedido' });
  }
});

module.exports = router;