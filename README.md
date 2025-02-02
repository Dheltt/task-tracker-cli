Task Tracker CLI

English Version 🇺🇸

Description

Task Tracker is a simple command-line interface (CLI) application that helps you manage your tasks efficiently. You can add, update, delete tasks, and mark them as in-progress or done. Tasks are stored in a JSON file.

Features

Add, update, and delete tasks

Mark tasks as To Do, In Progress, or Done

List all tasks or filter them by status

Data persistence using a JSON file

No external libraries required

Installation & Usage

Clone the repository:

git clone https://github.com/Dheltt/task-tracker-cli.git
cd task-tracker-cli

Run the application using Node.js:

node src/index.js <command>

Available Commands

# Add a task
node src/index.js add "Buy groceries"

# Update a task
node src/index.js update 1 "Buy groceries and cook dinner"

# Delete a task
node src/index.js delete 1

# Mark a task as in-progress
node src/index.js mark-in-progress 1

# Mark a task as done
node src/index.js mark-done 1

# List all tasks
node src/index.js list

# List tasks by status
task-cli list todo
task-cli list in-progress
task-cli list done

Versión en Español 🇪🇸

Descripción

Task Tracker es una aplicación de línea de comandos (CLI) que te ayuda a gestionar tus tareas de manera eficiente. Puedes agregar, actualizar, eliminar tareas y marcarlas como en progreso o completadas. Las tareas se almacenan en un archivo JSON.

Características

Agregar, actualizar y eliminar tareas

Marcar tareas como Por Hacer, En Progreso o Completadas

Listar todas las tareas o filtrarlas por estado

Persistencia de datos con un archivo JSON

No requiere librerías externas

Instalación y Uso

Clona el repositorio:

git clone https://github.com/Dheltt/task-tracker-cli.git
cd task-tracker-cli

Ejecuta la aplicación con Node.js:

node src/index.js <comando>

Comandos Disponibles

# Agregar una tarea
node src/index.js add "Comprar víveres"

# Actualizar una tarea
node src/index.js update 1 "Comprar víveres y cocinar la cena"

# Eliminar una tarea
node src/index.js delete 1

# Marcar una tarea como en progreso
node src/index.js mark-in-progress 1

# Marcar una tarea como completada
node src/index.js mark-done 1

# Listar todas las tareas
node src/index.js list

# Listar tareas por estado
node src/index.js list todo
node src/index.js list in-progress
node src/index.js list done

License

This project is licensed under the ISC License.