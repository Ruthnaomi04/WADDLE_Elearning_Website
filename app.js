const courses = [
  {
    id: 1,
    title: "Professional Office Communication & Ethics",
    description: "Learn professional communication, workplace behavior, and ethics.",
   doc: "modules/MODULE-1.pdf",
    lesson: `Learning Objectives

• Understand professional communication.
• Practice respectful workplace behavior.
• Recognize the importance of confidentiality and ethics.`
  },
  {
    id: 2,
    title: "Business Document Processing & Records Management",
    description: "Understand document preparation, filing, and record organization.",
      doc: "modules/MODULE-2.pdf",
    lesson: `Learning Objectives

• Identify common business documents.
• Understand filing and record management.
• Learn why accurate documentation matters.`
  },
  {
    id: 3,
    title: "Digital Workplace Productivity Tools",
    description: "Explore digital tools used for office tasks and collaboration.",
      doc: "modules/MODULE-3.pdf",
    lesson: `Learning Objectives

• Identify common digital productivity tools.
• Understand digital collaboration.
• Practice responsible handling of digital files.`
  },
  {
    id: 4,
    title: "Workplace Efficiency & Career Readiness",
    description: "Develop time management, teamwork, and career preparation skills.",
       doc: "modules/MODULE-4.pdf",
    lesson: `Learning Objectives

• Apply basic time management strategies.
• Understand teamwork and accountability.
• Prepare for professional opportunities.`
  }
];

// ===== SUPABASE =====
const SUPABASE_URL = "https://hhoadbrwqdjiaxjczdhi.supabase.co";
const SUPABASE_KEY = "sb_publishable_hao5Mni3U9W04WI9vuZZeg_ANeLmTO6";
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let authMode = "login";
let currentCourse = null;
let currentUser = null;   // { id, email, name }
let progressCache = [];   // mga course id na tapos na

// Kinukuha ang naka-login na user at ang progress niya mula sa Supabase
async function loadUserData() {
  const { data: sessionData } = await db.auth.getSession();
  const user = sessionData.session ? sessionData.session.user : null;

  if (!user) {
    currentUser = null;
    progressCache = [];
    return;
  }

  currentUser = {
    id: user.id,
    email: user.email,
    name: (user.user_metadata && user.user_metadata.full_name) || user.email
  };

  const { data, error } = await db.from("progress").select("course_id");
  progressCache = error ? [] : data.map(row => row.course_id);
}

function getUsers() {
  return currentUser ? [currentUser] : [];
}

function getSession() {
  return currentUser ? currentUser.email : null;
}

function getProgress(email) {
  return progressCache;
}

// Ginagawang embed link ang normal na link ng Google Docs
function toDocPreview(url) {
  const match = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
  return match
    ? "https://docs.google.com/document/d/" + match[1] + "/preview"
    : url;
}

function setAuthMode(mode) {
  authMode = mode;

  document.getElementById("loginTab").classList.toggle(
    "active", mode === "login"
  );
  document.getElementById("signupTab").classList.toggle(
    "active", mode === "signup"
  );

  document.getElementById("nameLabel").classList.toggle(
    "hidden", mode === "login"
  );
  document.getElementById("fullName").classList.toggle(
    "hidden", mode === "login"
  );

  document.getElementById("fullName").required = mode === "signup";
  document.getElementById("authTitle").textContent =
    mode === "login" ? "Welcome back!" : "Create your account";
  document.getElementById("authSubtitle").textContent =
    mode === "login"
      ? "Log in to continue learning."
      : "Join WADDLE and start learning today.";
  document.getElementById("authSubmit").textContent =
    mode === "login" ? "Log In" : "Create Account";

  document.getElementById("authMessage").textContent = "";
}

document.getElementById("authForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const message = document.getElementById("authMessage");
  const button = document.getElementById("authSubmit");

  // ----- SIGN UP -----
  if (authMode === "signup") {
    if (!name) {
      message.textContent = "Please enter your full name.";
      return;
    }

    button.disabled = true;
    message.textContent = "Creating your account...";

    const { data, error } = await db.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    });

    button.disabled = false;

    if (error) {
      message.textContent = error.message.toLowerCase().includes("already")
        ? "This email is already registered. Please log in."
        : error.message;
      return;
    }

    // Walang bagong identity = naka-register na ang email
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      message.textContent = "This email is already registered. Please log in.";
      return;
    }

    // Para bumalik sa Log In screen pagkatapos mag-sign up
    if (data.session) {
      await db.auth.signOut();
    }

    setAuthMode("login");
    document.getElementById("email").value = email;
    document.getElementById("password").value = "";
    message.textContent = "Account created! You can now log in.";
    return;
  }

  // ----- LOG IN -----
  button.disabled = true;
  message.textContent = "Logging in...";

  const { error } = await db.auth.signInWithPassword({ email, password });

  button.disabled = false;

  if (error) {
    message.textContent = error.message.toLowerCase().includes("confirm")
      ? error.message
      : "Incorrect email or password.";
    return;
  }

  message.textContent = "";
  await openDashboard();
});

async function openDashboard() {
  await loadUserData();

  if (!currentUser) return;

  document.getElementById("authSection").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("logoutBtn").classList.remove("hidden");
  document.getElementById("userName").textContent = currentUser.name;

  showHome();
}

async function logout() {
  await db.auth.signOut();

  currentUser = null;
  progressCache = [];
  currentCourse = null;

  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("authSection").classList.remove("hidden");
  document.getElementById("logoutBtn").classList.add("hidden");
  document.getElementById("lessonPanel").classList.add("hidden");
  document.getElementById("coursesArea").classList.add("hidden");
  document.getElementById("homeArea").classList.remove("hidden");
  document.getElementById("password").value = "";

  setAuthMode("login");
  document.getElementById("authMessage").textContent =
    "You have logged out.";
}

function showHome() {
  document.getElementById("aboutSection").classList.add("hidden");

  if (getSession()) {
    document.getElementById("authSection").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("lessonPanel").classList.add("hidden");
    document.getElementById("coursesArea").classList.add("hidden");
    document.getElementById("homeArea").classList.remove("hidden");

    document.getElementById("dashboard").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    document.getElementById("authSection").classList.remove("hidden");
    document.getElementById("authSection").scrollIntoView({
      behavior: "smooth"
    });
  }
}

function showCourses() {
  document.getElementById("aboutSection").classList.add("hidden");

  if (getSession()) {
    document.getElementById("authSection").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("lessonPanel").classList.add("hidden");
    document.getElementById("homeArea").classList.add("hidden");
    document.getElementById("coursesArea").classList.remove("hidden");
    renderCourses();
  } else {
    document.getElementById("authSection").classList.remove("hidden");
    document.getElementById("authSection").scrollIntoView({
      behavior: "smooth"
    });
  }
}

function showAbout() {
  document.getElementById("authSection").classList.add("hidden");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("aboutSection").classList.remove("hidden");

  document.getElementById("aboutSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function renderCourses() {
  const email = getSession();
  if (!email) return;

  const completed = getProgress(email);
  const grid = document.getElementById("courseGrid");

  grid.innerHTML = courses.map(course => {
    const isDone = completed.includes(course.id);
    const progress = isDone ? 100 : 0;

    return `
      <article class="course-card">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="progress-track">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <small>${isDone ? "Completed" : "Not started"} · ${progress}%</small>
        <button class="primary" onclick="openLesson(${course.id})">
          ${isDone ? "Review Lesson" : "Start Learning"}
        </button>
      </article>
    `;
  }).join("");
}

function openLesson(id) {
  currentCourse = courses.find(course => course.id === id);

  if (!currentCourse) return;

  const modulePdf = document.getElementById("modulePdf");

  if (modulePdf) {
    if (currentCourse.doc) {
      const previewUrl = toDocPreview(currentCourse.doc);

      modulePdf.innerHTML = `
        <h3>Module Learning Material</h3>
        <p>Read the complete module below.</p>
        <a href="${currentCourse.doc}" target="_blank" rel="noopener">
          Open in Google Docs ↗
        </a>
        <iframe
          src="${previewUrl}"
          width="100%"
          height="600"
          style="border: 1px solid #d8e5dc; border-radius: 12px; margin-top: 12px;"
          title="Module document">
        </iframe>
      `;
    } else {
      modulePdf.innerHTML = `
        <h3>Module Learning Material</h3>
        <p>The module material will be available soon.</p>
      `;
    }
  }

  document.getElementById("homeArea").classList.add("hidden");
  document.getElementById("coursesArea").classList.add("hidden");
  document.getElementById("lessonPanel").classList.remove("hidden");
  document.getElementById("lessonTitle").textContent = currentCourse.title;
  document.getElementById("lessonDescription").textContent =
    currentCourse.description;
  document.getElementById("lessonContent").textContent =
    currentCourse.lesson;
  document.getElementById("lessonMessage").textContent = "";

  const completed = getProgress(getSession());
  document.getElementById("completeBtn").textContent =
    completed.includes(id)
      ? "✓ Lesson Completed"
      : "Mark Lesson as Completed ✓";

  document.getElementById("lessonPanel").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

async function completeLesson() {
  if (!currentCourse || !currentUser) return;

  const message = document.getElementById("lessonMessage");

  if (!progressCache.includes(currentCourse.id)) {
    const { error } = await db.from("progress").insert({
      user_id: currentUser.id,
      course_id: currentCourse.id
    });

    if (error) {
      message.textContent = "Could not save progress. Please try again.";
      return;
    }

    progressCache.push(currentCourse.id);
  }

  message.textContent = "Great job! Your lesson progress has been saved.";
  document.getElementById("completeBtn").textContent =
    "✓ Lesson Completed";

  renderCourses();
}

// Ibalik ang login session kapag binuksan ulit ang page
(async function init() {
  await loadUserData();

  if (currentUser) {
    await openDashboard();
  } else {
    setAuthMode("login");
  }
})();