# node-js-sample

A simple Node.js app using docker and connected with customized mysql database container


## Documentation

Run `docker-compose` command which will run docker-compose.yml file. Docker will first build cstomzied mysql image and node js image using code 
provided and then run docker containers respectively . 

All sqlscripts related to table creation and poulating data resides in sqlscripts directory


## Query Api:

To check node api's run

> curl -i localhost:8000 (After running `docker-compose`) 

You should get `Hello World` printed in your console.





