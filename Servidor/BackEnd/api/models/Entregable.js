/**
* Entregable.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema:true,
  attributes: {
    descripcion:{
      type:'text',
      required:true
    },
    horas:{
      type:'integer',
      required:true
    },
    semanaEntrega:{
      type:'string'
    },
    idIntegrante: {
      model: 'integrante',
      required: true
    },
    idProyecto: {
      model: 'proyecto',
      required: true
    }

  }
};

