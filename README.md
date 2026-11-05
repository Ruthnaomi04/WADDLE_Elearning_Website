# WADDLE E-Learning Website (Front-End Demo)

A responsive starter website based on the WADDLE Curriculum Overview presentation. It includes a custom duck-inspired brand treatment, sign-up/login/logout, a learner dashboard, four curriculum modules, lesson pages, practice quizzes, progress tracking, and quick-reference resources.

## Run in VS Code
1. Extract `WADDLE_Elearning_Website.zip`.
2. Open the extracted folder in VS Code.
3. Open `index.html` in your browser, or install the **Live Server** extension and choose **Open with Live Server**.
4. Create an account on the sign-up tab, then log out and log back in to test the flow.

## Files
- `index.html` — page structure and authentication screens
- `style.css` — responsive design and visual styling
- `app.js` — demo authentication, lessons, quizzes, and progress tracking

## Important demo limitations
- This is a **front-end prototype**. Accounts and progress are saved in the current browser using `localStorage`.
- Passwords are stored in browser storage for demonstration only. **Do not use real passwords or deploy this as a production login system.**
- Real multi-user authentication requires a backend/auth provider (for example Firebase Authentication or Supabase Auth), secure password handling, and database rules.
- The curriculum text is a starter expansion based on the topics visible in the provided WADDLE presentation. Your instructor may need to review the lesson wording and assessment questions.
- The duck emoji is a temporary logo mark. Replace it with your final custom SVG/PNG logo if you have one.
- Google Fonts requires an internet connection; system fallback fonts are used if unavailable.

## Suggested 7–8 hour build plan
1. 30 min — extract files, run locally, check the design.
2. 60 min — test sign-up/login/logout and responsive layout.
3. 2 hours — revise lesson content and quiz answers to match your teacher's required curriculum.
4. 1 hour — test progress tracking, module filtering, and resources.
5. 1 hour — polish colors, logo, and typography.
6. 1–2 hours — prepare screenshots, presentation/demo script, and fix bugs.

## Possible next upgrades
- Real authentication and user database
- Admin/teacher dashboard to add lessons
- Certificate after completing modules
- Downloadable PDF handouts
- Quiz attempts and scores saved per learner
- Accessibility review and deployment
