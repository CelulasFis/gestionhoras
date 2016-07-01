/**
 * IntegrantesDeProyecto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,
  attributes: {
    esCoordinador: {
      type: 'string',
      enum: ['Coordinador', 'Integrante'],
      required: true,
      defaultsTo: 'Integrante'
    },
    idIntegrante: {
      model: 'integrante',
      required: true
    },
    idProyecto: {
      model: 'proyecto',
      required: true
    }
  },
  beforeCreate: function (valores, cb) {
    IntegrantesDeProyecto
      .findOne({
        idIntegrante: valores.idIntegrante,
        idProyecto: valores.idProyecto
      })
      .exec(function (err, IntegrandesDeProyectoEncontrado) {
        if (err) {
          console.log('Error');
        } else {
          if (IntegrandesDeProyectoEncontrado) {
            cb('Error ya es Integrante');
          } else {
            cb();
          }
        }
      });
  }

};
