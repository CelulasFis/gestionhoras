/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  //Definir Integrantes

  var integranteAdrian = {
    nombre: 'Adrian Eguez',
    profesion: 'Estudiante',
    universidad: 'Escuela Politécnica Nacional',
    trabajoActual:'Pasante'
  }
  var integranteCarlos = {
    nombre: 'Carlos Mantilla',
    profesion: 'Egresado',
    universidad: 'Escuela Politécnica Nacional',
    trabajoActual:'Pasante'
  }
  var integranteJose = {
    nombre: 'Jose Carrillo',
    profesion: 'Graduado',
    universidad: 'Escuela Politécnica Nacional',
    trabajoActual:'Profesor EPN'
  }


  var crearDatos = function () {

    crearIntegrantes(integranteAdrian);
    crearIntegrantes(integranteCarlos);
    crearIntegrantes(integranteJose);

  }

  var crearIntegrantes = function (integrante) {

    Integrante
      .create(integrante)
      .exec(function (err, integranteCreado) {
        if (err) {
          console.log('Error');
        } else {
          console.log('Integrante creado correctamente: ');
          console.log(integranteCreado)
        }
      });

  }

  crearDatos()
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
