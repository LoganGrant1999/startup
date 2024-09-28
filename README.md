# FanVote

## Elevator Pitch
FanVote brings the excitement of live sports to your fingertips by letting you vote in real-time on who you think will win upcoming and ongoing games. Whether it's soccer, basketball, or any other major sport, users can see live updates, engage in friendly competition with others, and track the accuracy of their predictions. FanVote transforms sports watching into an interactive experience, making it fun to see how your votes stack up against your friends and the rest of the world. 

## Design Sketches
**Sign In Page**
![Sign-in Page](./Images/sign-in.png)
**Vote Page**
![Vote Page](./Images/vote-page.png)

## Key Features
- Secure login over HTTPS
- Ability to select team to vote for
- Display of live and upcoming games to choose from
- Streak of correct games predicted displayed on leaderboard to all users in real time
- Unique user profiles**
- User results persistently stored on their profile
- Real time voting results displayed after vote is placed
- Game Data Auytomatically fetched from [third party API](https://developer.sportradar.com/getting-started/docs/coverage-information)

## Technologies Overview
- **HTML**
    - Will provide structure for login page and voting page
- **CSS**
    - Will provide styling for application to ensure that it displays correctly on varying screen types
    - Will enable good spacing, color choice, and contrast
- **JavaScript**
    - Provides login, choice display, enables voting, displays votes to other users, backend endpoint calls
- **React**
    - Single page application with views componentized and reactive to users actions
    - Framework ties together HTML, CSS, and Javascript for interactive frontend
- **Service**
    - Backend Service endpoints for retrieving votes, submitting votes, and retrieving correct vote streak
    - Displays upcoming and live sports games using the [SportsRadar](https://developer.sportradar.com/getting-started/docs/coverage-information) service
- **DB/Login** 
    - Stores users, votes, and correct prediction streak in database
    - Users can register and login 
    - Credentials are stored in a database
    - Authentication required in order to vote/start a prediction streak
- **WebSocket**
    - When a user votes, their vote is shown to all users. There is also a leaderboard displaying the 3 longest active correct prediction streak

# HTML Deliverable

For this deliverable, I built out the structure of my application using HTML.

- **HTML Pages**: My application contains 3 HTML pages. There is a login page where users can
create an account or login. It also contains a description of FanVote. There is a predictions page where users
can see upcoming games, a prediction streak leader board, their account name, a navigation menu, a sports picture banner, and they can place their votes for who they think will win each game. There is also an account page where users can see their prediction history, the email they registered their account with, another sports banner picture, and a navigation menu. 
- **HTML Tags**: All three pages use html tags properly, including BODY, NAV, MAIN, HEADER, FOOTER
- **Links**: The login page automatically links to the predictions page. There is a navigation menu on the predictions and accounts pages that links to the home/login page, the predictions page, and the accounts page.I've also included a link to my github repository at the bottom of each page. 
- **Text**: Each of the prediction choices is represented by a textual description. There is also a textual description of what FanVote is on the login page. 
- **Third Party Service Calls**: Each of image of an upcoming game is a placeholder of a third party service call that will be used to populate upcoming sports games to be voted on from [SportsRadar](https://developer.sportradar.com/getting-started/docs/coverage-information)
- **Images**: There are 2 different sports banner images, one on the predictions page and one on the account page.
- **DB/Login**: An input box and submit button are provided for login. The prediction history on the account page represents data pulled from the database and displayed to the user.
- **WebSocket**: The leader board on the predicitons page shows where a websocket will be used to show a leaderboard in real time of the longest correct prediction streaks.