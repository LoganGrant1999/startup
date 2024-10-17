# Github Repository Pushing and Pulling
###### In this excercise I learned how to create a repository in Github and in VS code, and how to push and pull changes between the two locations. I also created a [ReadMe file](https://github.com/LoganGrant1999/startup/blob/main/README.md).

# AWS EC2 
###### In this exercise I created an elastic server. I now have a [website](http://98.83.84.147/). This is the command to remote shell I used to connect my server to my computer:  ssh -i [key pair file] ubuntu@[ip address]. That was entered in the terminal. Elastic websites can be turned on and off and will keep the same IP address. Nonelastic websites will have a different public url each time they are turned off and on


## AWS HTTPS, TLS, and web Certificates

This exercise covers setting up Caddy to obtain HTTPS and TLS web certificates for a domain.

**Steps**

1. **Connect to your server**
    * ssh -i [key pair file] ubuntu@[yourdomainnamehere]
2. **Navigate to your home directory**
    * cd ~
3. **Edit the Caddyfile**
    * vi Caddyfile
4. 
**Caddyfile Configuration**
* Change to the correct url/domain
5. **Hit Esc, :, wq to exit the editor**
6. **sudo service caddy restart**

**Midterm Notes**


