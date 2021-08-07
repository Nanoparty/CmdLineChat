# CmdLineChat

### Summary

This is a command line chat application. Multiple users can communicate by text through the command line by connecting to a node server.

### Motivation

This project was to build a quick example of what I could do with node.js, express and websockets.

### How to Run

First you need to run the server. This can be run locally or on a web server.
Inside the messaging_api.js file you need to set the URL constant. 
If you are running locally set it to 'localhost', if you are running it on a web server input the public IPv4 
ex. ec2-**-***-**-***.us-east-2.compute.amazonaws.com.
Default PORT value is 3000 but can be changed.

Next you need to run the client. Client takes one argument for chatroom username
ex. node client Jeffery

![image](https://user-images.githubusercontent.com/39596241/128610920-15d343e7-c8e8-40d6-b8af-1e3a5c855caa.png)


