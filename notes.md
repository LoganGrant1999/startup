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
- Every commmit has a unique idewtifier that is generated by hashing the file along with the timestamp using the SHA algorithm. You can always refer to a specific commit in your version history using its SHA. Do this in terminal with the checkout command. this will take you back to a previous version of the file
    - git checkout d43b07b8890f(example SHA)
- You can easily go back to the most recent version using checkout master in the terminal
    - git checkout master
- You can use diff and HEAD to compare differences between committs. HEAD by default is the commit you're currently looking at. You can use HEAD~ and the numerical distance from the HEAD that you want to look at.
    - git diff HEAD HEAD~1
- Git supports the ability to branch your code. This allows you to work on variations of the code while still allowing progress on the main branch. For example, if you wanted to work on a new feature named A without interrupting work on the master branch, you would use the git branch A command to create a new branch named A, then start working on the new branch with the git checkout A command. Now commits can be done to either the master branch or the A branch. When you want to combine the work done on both branches, you checkout the master branch and execute git merge A. If you decide you want to abandon the new feature, then you just don't ever merge it back into the master branch.
- Be aware that if you store large binary files (images or videos), you will make a copy each time you commit and could use significant storage doing so. 

