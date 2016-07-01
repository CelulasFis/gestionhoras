/**
 * Integrante.js
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
    profesion: {
      type: 'string',
      enum: ['Estudiante', 'Egresado', 'Independiente', 'Graduado'],
      required: true
    },
    universidad: {
      type: 'string'
    },
    trabajoActual: {
      type: 'string'
    },
    integrantes: {
      collection: 'integrantesdeproyecto',
      via: 'idIntegrante'
    },
    entregables: {
      collection: 'entregable',
      via: 'idIntegrante'
    }
  }
};
