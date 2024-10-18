# Development Essentials

## Course Introduction
- Well rounded software engineers are Capable, Creative, Collaborative, and Christlike

## AWS Account
- Create AWS account. We will use this for EC2 (Server), EC2 Elastic IP (Keep IP address between reboots), Route 53 (Domain name & DNS records)

## Git
- Git is the world's most popular version control system, created by Linus Torvalds
- git -- version in the terminal will show you what version of git is installed on your machine
- Git allows you to 1. track versions of files in a directory and 2. allows you to clone all of those versions to a different location

- Initializing a git directory in terminal:
    - mkdir gitdirectory
    - cd playingWithGit
    - git init
- Listing all files in terminal from new git directory
    - ls -la
- Create a new file in git directory using terminal and check status to see what git is doing
    - echo hello world > hello.txt
    - git status
- Usually you add Git to all files in a directory. You do this in terminal. This will stage the file(s) to be committed to the Git repository
    - git add .
    - git status
- You then can commit the file changes into the directory in the terminal. You do this and we leave a meaningful comment about the commit using the -m parameter
    - git commit -m "meaningful message"
    - git status (this will show you that the working tree is clean, there are no commits to be made)
- You can commit multiple files at once. You only will commit the ones that you've staged. You don't have to stage all files with changes in a commit. You can automatically stage and modify all files with changes using -a in the terminal.
    - echo goodbye world > hello.txt
    - git commit -am "changed greeting to reflect mood"
- You can view the versions of the files in the Git repository with git log. THis will display commits and comments.
    - git log


