/**
 * Proyecto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,
  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'text'
    },
    estado: {
      type: 'string',
      enum: ['Iniciado', 'Terminado'],
      defaultsTo: 'Iniciado',
      required: true
    },
    fotoURL: {
      type: 'string'
    },
    integrantes: {
      collection: 'integrantesdeproyecto',
      via: 'idProyecto'
    },
    entregables: {
      collection: 'entregable',
      via: 'idProyecto'
    }
  }
};
