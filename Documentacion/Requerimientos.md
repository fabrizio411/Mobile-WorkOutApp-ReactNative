# REQUERIMIENTOS
## Generalidades
- Se va a usar una unidad especifica segun el tipo de ejercicio. En el documento se hablara de "Reps" como general.
- ww = Working Weight. El peso que se usara para calcular los pesos de las series en la modalidad de "fuerza".


## Programa Semanal
- El programa semanal es una funcion en la cual el usuario podra agregar sus rutinas a un dia en especifico de la semana.
- Llegado el dia de la semana se podra ubicar y mostrar la rutina seleccionada para ese dia.
- El usuario podra editar este programa y podra agregar tantas rutinas por dia como desee.
- Al completar un enetremaiento cualquiera se indicara con un tick en el dia correspondiente en el programa semanal.


## Modalidades de los Ejercicios
- Las modalidades van a poder elejirse al agregar un ejercicio a la rutina.
- Variara la forma de registro y las indicaciones al inicar la rutina.

### Modalidad libre (default)
- Esta modalidad dejara un campo libre para registrar el peso y las Reps del ejercicio en cada Set.
- No propondra ninguna funcionalidad de indicacion de peso o repeticiones a realizar.

### Modalidad de fuerza
- Modalidad para adquisicion de fuerza.
- Esta modalidad impondra los sets del ejercicio en 4.
- Consiste en un metodo que segun el ww indicara las repeticiones y el peso de cada una de las series.
- Usara el ww de ese ejercicio como peso base, y lo ira modificando. El ww inicial lo indicara el usuario al elejir la modalidad.
#### Primer Set
- Reps = 10.
- Weight = (50 * ww / 100)  ||  50% del ww.
#### Segundo Set
- Reps = 6.
- Weight = (75 * ww / 100)  ||  75% del ww.
#### Tercer Set
- Reps = maximo.
- Weight = ww.
#### Cuarto Set
- Reps = maximo.
- El peso en el cuarto set sera modificado segun los las repeticiones registradas en el tercer set.
- Weight (dependiendo de las repeticiones del tercer set):
    0 - 2 reps => weigth -= 5kg
    3 - 5 reps => weigth -= 2.5kg
    6 - 10 reps => weigth += 2.5kg
    11... reps => weigth += 5kg
#### Modificaicon de ww
- El ww se modificara segun las repeticiones registradas del cuarto set.
- ww: 
    0 - 3 reps => ww -= 5kg
    4 - 6 reps => ww
    7 - 10 reps => ww += 2.5kg
    11... reps => ww += 5kg
    


## Paginas
### Menu o header
- El menu estara ubicado en la parte inferior de la pantalla.
- Botones de accesibilidad:
    Home.
    Rutinas.
    Perfil.


### Pagina Principal
- Boton para Body Weight.
- Programa semanal.
- Rutinas del dia.
#### Pagina Programa Semanal
- Visualizacion del programa dividido por dias.
- Boton de edicion en cada dia para modificar rutinas de ese dia.
#### Pagina Body Weight
- Grafico de medidas.
- Display de datos de peso ordenados segun la fecha.
- Boton para agregar medidas.


### Pagina Rutinas
- Boton para crar una rutina nueva.
- Display de todas las rutinas del usuario. Orden: ultima agregada a la primera.
- Boton para iniciar una rutina.
#### Pagina Visualizacion de Rutina
- Boton para editar la rutina.
- Boton para iniciar la rutina.
- Display de los datos de la rutina:
    Ejercicio.
    Sets-Reps-Rest.
    Modalidad (clasica, fuerza, etc)
- Boton para eliminar la rutina.
#### Pagina Creacion de Rutina
- Formulario con titulo de la rutina, y capacidad para agregar o borrar ejercicios. Datos requeridos: Titulo, Sets, Reps Goal.


### Pagina Perfil
- Boton para Configuracion.
- Carta del perfil: 
    Foto de perfil.
    Nombre de usuario.
    Fecha de creacion.
- Estadisticas generales:
    Mejor peso.
    Racha semanal.
    Mejor ejercicio.
    Cantidad de entrenamientos.
- Boton para estadisticas de ejercicios.