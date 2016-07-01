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

  //Definir Proyectos

  var proyectoSnippo = {
    nombre:'Snippo',
    descripcion:'Snippo es una herramienta web que administra fragmentos o grupos de fragmentos de código(también conocidos como snippets). Snippo tiene un editor de código para crear y editar los snippets.',
    estado:'Iniciado',
    fotoURL:'http://celulafis.epn.edu.ec/wp-content/uploads/2016/05/Snippo-2-900x300.png'
  }
  var proyectoNativeScript = {
    nombre:'NativeScript',
    descripcion:'NativeScript es una plataforma de código abierto para la creación de aplicaciones móviles nativas, donde todas y cada una de las plataformas APIs nativas están disponibles en JavaScript. En lugar de hacer una compilación cruzada o cargar contenido en una vista Web, NativeScript usa los componentes nativos y accede a las APIs nativas directamente.',
    estado:'Iniciado',
    fotoURL:'http://celulafis.epn.edu.ec/wp-content/uploads/2016/05/Nativescript.png'
  }
  var proyectoSecret = {
    nombre:'Secret of the Lost Keys',
    descripcion:'Secret of the Lost Keys es un videojuego de plataformas de acción-aventura,  donde el jugador toma el rol de un legendario caballero que se embarca en la aventura de recuperar un grupo de armas legendarias que fueron creadas por un misterioso alquimista, todo esto con el fin de poder ganar  la guerra que enfrenta su pueblo en contra de un ejército de monstruos, los cuales son la manifestación física de las pesadillas de los habitantes de su reino, las cuales cobraron vida gracias a la magia oscura de un ser misterioso conocido solamente como Reg.',
    estado:'Iniciado',
    fotoURL:'http://celulafis.epn.edu.ec/wp-content/uploads/2016/05/Screenshot1-900x300.png'
  }

  //funciones

  var crearIntegrante = function (integrante) {

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

  var crearProyecto = function (proyecto) {

    Proyecto
      .create(proyecto)
      .exec(function (err, proyectoCreado) {
      if (err) {
        console.log('Error');
      } else {
        console.log('Proyecto creado correctamente: ');
        console.log(proyectoCreado)
      }
    });

  }

  var crearDatos = function () {

    crearIntegrante(integranteAdrian);
    crearIntegrante(integranteCarlos);
    crearIntegrante(integranteJose);

    crearProyecto(proyectoSnippo);
    crearProyecto(proyectoNativeScript);
    crearProyecto(proyectoSecret);

  }



  crearDatos()
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
