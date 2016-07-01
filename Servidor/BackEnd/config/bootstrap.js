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

  let integranteAdrian = {
    nombre: 'Adrian Eguez',
    profesion: 'Estudiante',
    universidad: ,
    trabajoActual:
  }
  let integranteCarlos = {
    nombre: 'Carlos Mantilla',
    profesion: 'Egresado',
    universidad: ,
    trabajoActual:
  }
  let integranteJose = {
    nombre: 'Jose Carrillo',
    profesion: 'Graduado',
    universidad: ,
    trabajoActual:
  }


  let crearDatos = function () {

    crearIntegrantes(integranteAdrian);
    crearIntegrantes(integranteCarlos);
    crearIntegrantes(integranteJose);

  }

  let crearIntegrantes = function (integrante) {

    Integrante
      .create(integrante)
      .exec(function (err, integranteCreado) {
        if (err) {
          console.log('Error');
        } else {
          console.log('Integrante creado correctamente: ' + integranteCreado);
        }
      });

  }

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
