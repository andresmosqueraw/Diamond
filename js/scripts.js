const formulario = document.getElementById("formulario");
        const inputs = document.querySelectorAll("#formulario input");

        const expresiones = {
            nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            contraseña: /^.{8,12}$/, // 8 a 12 digitos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        }

        const campos = {
            nombre: false,
            apellido: false,
            email: false,
            emailagain: false,
            contraseña: false
        }

        const validarFormulario = (e) => {
            switch (e.target.name) {
                case "nombre":
                    if(expresiones.nombre.test(e.target.value) == true){
                        campos["nombre"] = true;
                    }
                    else{
                        campos["nombre"] = false;
                    }
                break;
                case "apellido":
                    if(expresiones.nombre.test(e.target.value) == true){
                        campos["apellido"] = true;
                    }
                    else{
                        campos["apellido"] = false;
                    }
                break;
                case "email":
                    validarEmail2();
                break;
                case "emailagain":
                    validarEmail2();
                break;
                case "contraseña":
                    if(expresiones.nombre.test(e.target.value) == true){
                        campos["contraseña"] = true;
                    }
                    else{
                        campos["contraseña"] = false;
                    }
                break;
            }
        }

        const validarEmail2 = () => {
            const inputEmail1 = document.getElementById("email");
            const inputEmail2 = document.getElementById("emailagain");

            if(inputEmail1.value !== inputEmail2.value){
                campos["email"] = false;
                campos["emailagain"] = false;
            }
            else {
                campos["email"] = true;
                campos["emailagain"] = true;
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("keyup", validarFormulario);
            input.addEventListener("blur", validarFormulario);
        });

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            if(campos.nombre && campos.apellido && campos.email && campos.emailagain && campos.contraseña){
                formulario.reset();

                alert("REGISTRO EXITOSO");
            }
            else {
                alert("ERROR. COMPLETA CORRECTAMENTE EL REGISTRO");
            }
        });