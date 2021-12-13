const Courses = () => {
    return(
    <div>
        <section class="form-register">
    <h4>Formulario Registro</h4>
    <input className="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
    <input className="controls" type="text" name="apellido" id="apellidos" placeholder="Ingrese su Apellido"/>
    <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
    <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña"/>
    <a className="botons" href="./Profile.js">Registrarme</a>
    <p>Estoy de acuerdo con:<a className="link" href="terminis.html"> Terminos y condiciones</a></p>
    <p><a className="link" href="iniciar.html">¿Ya tengo Cuenta?</a></p>
    </section>
    </div>)
    }

    export default Courses