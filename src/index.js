const fs = require('fs'); //modulo para manejar archivos
const path = require('path'); //modulo para manejar rutas de archivos

//ruta al archivo tasks.json
const tasksFilePath = path.join(__dirname,'../data/task.json');

//funcion para leer las tareas desde el archivo JSON
function readTask(){
    if(!fs.existsSync(tasksFilePath)){
        return [];//si el archivo no existe, devuelve un array vacio
    }
    const data = fs.readFileSync(tasksFilePath,'utf8');
    //convierte el contenido del archivo (cadena de texto en formato JSON) en un objeto/array javasCript
    return JSON.parse(data);
}
//funcion para añadir una tarea
function addTask(description){
    //llamamos a la funcion que obtiene el array de tareas existentes
    const tasks = readTask();
    const newTask = {//creamos un objeto que representa la tarea con sus propiedades
        id:tasks.length+1, //id unico
        description, //descripcion de la tarea
        status: 'todo', //estado inicial
        createdAt: new Date().toISOString(), //fecha de creacion
        updatedAt: new Date().toISOString() //fecha de actualizacion
    }
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Tarea añadida exitosamente (ID: ${newTask.id})`);
}

//funcion para guardar las tareas  en el archivo JSON
function saveTasks(tasks){
    //escribe los datos e el archivo task.json
    //convierte el array de tareas en una cadena de texto en formato json
    fs.writeFileSync(tasksFilePath,JSON.stringify(tasks,null,2));
}

//funcion para listar todas las tareas
function listTask(filterStatus = null){
    const tasks = readTask();
    if(tasks.length ===0){
        console.log('no hay tareas.');
        return;
    }
    let filteredTasks =tasks;
    if(filterStatus){//filtramos por el estatus proporcionado
        filteredTasks = tasks.filter(task => task.status === filterStatus);
    }
    filteredTasks.forEach(task =>{
        console.log(`ID: ${task.id},
            Description: ${task.description},
            Estatus: ${task.status},
            Fecha de Creacion: ${task.createdAt},
            Fecha de Actualizacion: ${task.updatedAt}`)

    });

}


//funcion para actualizar una tarea
function updateTask(id,newDescription){
    const tasks = readTask();
    const task = task.find(task => task.id === parseInt(id));
    if(!task){
        console.log(`Error: no se encontró una tarea con el ID ${id}`);
        return;
    }
    task.description  = newDescription;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Tarea Actualizada Exitosamente (ID: ${id})`);
}

//funcion para eliminar una tarea
function deleteTask(id){
    const tasks = readTask();
    //filtramos las tareas, excluyendo la que coincide con el id
    const updateTasks = tasks.filter(task => task.id !==parseInt(id));
    //verifica si se elimino alguna tarea
    if(updateTask.length === tasks.length){
        console.log(`Error: no se encontro una tarea con el id ${id}.`);
    }
    //guardamos las tareas actualizadas en el archivo Json
    saveTasks(updateTask);
    console.log(`Tarea eliminada exitosamente (ID: ${ID}.`);
}

//funcion para marcar una tarea como realizada
function markDone(id){
    const tasks = readTask();
    const task = tasks.find(task => task.id === parseInt(id));
    if(!task){
        console.log(`Error: no se encontró una tarea con el ID ${id}`);
        return;
    }
    task.status = 'Done';
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Tarea marcada como COMPLETADA (ID: ${id})`);
}

//funcion para marcar una tarea como enprogreso
function markInProgress(id){
    const tasks = readTask();
    const task = tasks.find(task => task.id === parseInt(id));
    if(!task){
        console.log(`Error: no se encontró una tarea con el ID ${id}`);
        return;
    }
    task.status = 'In-Progress';
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Tarea marcada como En-prgogreso (ID: ${id})`);
}

//manejo de comandos CLI
const args = process.argv.slice(2); //ignora los primeros 2 argumentos (node y elscript)
const command = args[0]; //el primer argumento es el comando (add, list,update)

switch (command){
    case 'add':
        const description = args[1];
        if(!description){
            console.log('Error: Debes proporcionar una descripcion valida');
        }else{
            addTask(description);
        }
        break;
    case 'list':
        const filterstatus = args[1];
        listTask(filterstatus);
        break;
    case 'update':
        const updateId = args[1];
        const newDescription  = args[2];
        if(!updateId || !newDescription){
            console.log('Error: Debes proporcionar un id y una nueva descripcion valida');
        }else{
            updateTask(updateId,newDescription);
        }
        break;
    case 'delete':
        const deleteId = args[1];
        if(!deleteId){
            console.log('Error: debes proporcionar un id.');
        }else{
            deleteTask(deleteId);
        }
        break;
    case 'mark-in-progress':
        const inProgres = args[1];
        if(!inProgres){
            console.log('Error: debes proporcionar un id');
        }else{
            markInProgress(inProgres);
        }
        break;
    case 'mark-done':
        const doneId = args[1];
        if(!doneId){
            console.log('Error: debes proporcionar un id');
        }else{
            markDone(doneId);
        }
        break;
    default:
        console.log('Comando no reconocido. Usa: add,list,update,delete,mark-in-progres,mark-done.');

}