# Sidekicker Coding Challenge

## Setup
* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Execute tasks: `docker-compose exec <container_name> <cmd>`. 
  * e.g. `docker-compose exec coding-challenge-backend php artisan migrate`

## Development
* React frontend: http://localhost
* Lumen backend: http://localhost:8000


# Coding Challenge
Rendering data from data base on the webpage.
The job title sshould be clickable.
details should be rendered when job title is clicked.

## Part One
## Step 1: clone the repository

## Step 2: Installing Docker Engine

## Step 3: Installing php
### installing php with two components: 
* mod-php
* php-MySQL

## Step 4: Installing MySQL
### MySQL secure installation:
* Creating a password for MySQL
### Workbench installation for MySQL:

## Step 4: Running the project using docker-compose up
### Installing docker
### Challenge: Running the project using docker compose
### Creating docker machine using virtual box - Failed
* Installing docker machine
* Tried to start docker machine - failed
* installing Virtual box - falied
### Challenge: Running frontend and database successfully
### Starting docker compose using sudo
* web server run successfully
* backend run successfully
* frontend run failed
* database run failed

frontend was running in another location. So, I tried to stop it.

### Stoped apache2 using (systemctl stop apache2.service)
* web server run successfully
* backend run successfully
* frontend run successfully
* database run failed

### Challenge: Running database successfully
### Stoped MySQL
I stoped MySQL using (sudo service mysql stop) and tryied to run the project. 

* web server run successfully
* backend run successfully
* frontend run successfully
* database run successfully.

## Step 4: Start and Connect MySQL
### Challenge: MySQL cannot connect
The error says that MySQL cannot connect thtough socket. So, I've tried to fix it with recreating socket file - failed

### Connecting MySQL using password
MySQL connected.

## Step 5: Making a schema and a table in MySQL workbench.
I've made a database named coding-challenge-db 

## Step 5: Importing csv file to MySQL workbench
I imported jobs.csv file into the workbech.

## Step 6: Making frontend
I've used app.js file for making a simple structure for frontend

## Step 7: Connecting backend with database
I've used fetch for connecting backend with database and stred the database data in a variable named result.

## Step 8: Making backend route

## Step 9: Getting data from backend to the frontend
* I've used an empty object for sending data from database to it.
* I've defined a handle click to give the job details while clicking on the job title.

## Step 10: 
I used fetch for connecting to the backend file, and get the response as a json file. Then, send it to the front as job title, date, location and so on - failed






