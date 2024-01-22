
# LangPal

LangPal is a language learning quiz format website that provides an interactive platform for users to enhance their language skills through quizzes. The website offers a variety of quizzes for different programming languages, allowing users to test and improve their knowledge in a gamified format.


## Note

- I have not Commit my .env file because of privacy reasons but one can create a .env file. 
- In that file add a variable MONGO_URI = "Your_mongo_collection_path" to get access of database.
- I am attaching the Langs collection file which you can add in your LangPal database to access the quiz question set

## Installation

Fork LangPal Project to your local Desktop

Frontend Installation

```bash
  1. cd client
  2. npm i 
  3. npm run start
```

Backend Installation

```bash
  1. cd server
  2. npm i
  3. set MONGO_URI in .env file
  4. npm run dev
``` 
## Features

- Landing Page: The initial landing page where users can learn about LangPal.
- Get Started: Click on "Get Started" to proceed to the login/sign-up page.
- Login/SignUp: During sign-up, users are prompted to select their preferred language.
- Dashboard: After logging in, users will have access to the dashboard with sections for profile, quizzes, leaderboard, and settings.

- Profile: View language learning progress.
- Quiz: Participate in quizzes for various programming languages.
- Leaderboard: Check the rankings of various users.
- Settings: Perform basic account-related actions like updating password, resetting courses, logout.

