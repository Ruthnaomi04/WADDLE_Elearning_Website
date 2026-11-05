/* ===== WADDLE Quiz Nest + Module Lock + E-Certificate =====
   I-load pagkatapos ng app.js at planner.js:
     <script src="app.js"></script>
     <script src="planner.js"></script>
     <script src="quiz.js"></script>
*/
(function () {
  var TF = ["True", "False"];
  var LETTERS = ["A", "B", "C", "D"];
  var CERT_FILES = [
    "certificate-template.png.png",
    "certificate-template.png",
    "images_quiz/certificate-template.png"
  ];

  /* ================= QUIZZES ================= */
  var QUIZZES = {
    1: {
      id: "module1",
      passScore: 15,
      title: "Quick Knowledge Check",
      subtitle: "Workplace Ethics & Etiquette Assessment",
      instructions: "Choose the correct answer for each question.",
      questions: [
        { part: "PART I. MULTIPLE CHOICE", q: "What is the primary responsibility of an office administrator?",
          options: ["Managing office tasks, records, schedules, and resources", "Handling only customer complaints", "Making all company decisions independently", "Managing personal activities during working hours"], answer: 0 },
        { q: "Which is an essential element of a professional business email?",
          options: ["An informal greeting and unclear subject", "A clear subject line, polite greeting, and professional closing", "Unnecessary personal information", "Abbreviations in every sentence"], answer: 1 },
        { q: "Which email type is used to request information about a company's products or services?",
          options: ["Apology email", "Follow-up email", "Inquiry email", "Introduction email"], answer: 2 },
        { q: "What does active listening mean in workplace communication?",
          options: ["Interrupting the speaker", "Ignoring the speaker's concerns", "Preparing a response without listening", "Giving full attention and asking questions when necessary"], answer: 3 },
        { q: "Which action demonstrates professional ethics?",
          options: ["Sharing confidential records with unauthorized people", "Acting honestly and responsibly", "Hiding mistakes from supervisors", "Using company information for personal benefit"], answer: 1 },
        { q: "An employee accidentally receives confidential client information. What should the employee do?",
          options: ["Share it with coworkers for entertainment", "Post it in a public group", "Protect the information and report the mistake through the proper channel", "Save it for personal use"], answer: 2 },
        { q: "Which office administration responsibility involves organizing appointments, meetings, and events?",
          options: ["Scheduling and Coordination", "Correspondence Management", "Compliance and Legal Awareness", "Office Supplies and Resource Management"], answer: 0 },
        { q: "Which skill allows an office administrator to create documents, analyze data, and prepare presentations using office software?",
          options: ["Problem-Solving and Decision-Making", "Technical Proficiency", "Organizational Skills", "Communication Skills"], answer: 1 },
        { q: "Which email type is sent to establish a professional connection with a new contact or potential business partner?",
          options: ["Request Email", "Apology Email", "Follow-Up Email", "Introduction Email"], answer: 3 },
        { q: "Which situation is an example of a conflict of interest in the workplace?",
          options: ["Following the organization's standard procedures", "Treating employees fairly when assigning tasks", "Giving special treatment to a family member in a work-related decision", "Keeping client records private"], answer: 2 },

        { part: "PART II. TRUE OR FALSE", q: "Proofreading helps ensure that a business email has correct grammar, clear information, and the correct recipients.", options: TF, answer: 0 },
        { q: "Employees should respect their colleagues' personal boundaries and avoid unnecessary messages outside working hours.", options: TF, answer: 0 },
        { q: "Record-keeping and documentation help maintain organized and accurate office information.", options: TF, answer: 0 },
        { q: "A professional business email should have a clear subject line, proper greeting, organized message, and professional closing.", options: TF, answer: 0 },
        { q: "An office administrator should always use instant messaging for all workplace concerns, regardless of the message or situation.", options: TF, answer: 1 },
        { q: "Workplace communication etiquette includes using a respectful tone and practicing active listening.", options: TF, answer: 0 },
        { q: "Employees may access confidential client or employee information even without authorization as long as they do not share it with others.", options: TF, answer: 1 },
        { q: "Following company policies and respecting privacy are important parts of professional ethics and confidentiality.", options: TF, answer: 0 },

        { part: "PART III. IMAGE-BASED ASSESSMENT", q: "Which image demonstrates active listening during a workplace conversation?",
          options: [
            { img: "images_quiz/q19-a.png", text: "An employee looking at their phone while a colleague is speaking." },
            { img: "images_quiz/q19-b.png", text: "An employee interrupting a colleague before they finish explaining." },
            { img: "images_quiz/q19-c.png", text: "An employee giving full attention to a colleague and asking relevant questions." },
            { img: "images_quiz/q19-d.png", text: "An employee turning away while a colleague is discussing an important task." }
          ], answer: 2 },
        { q: "Which image shows respectful communication between coworkers?",
          options: [
            { img: "images_quiz/q20-a.png", text: "An employee calmly discussing a concern with a colleague." },
            { img: "images_quiz/q20-b.png", text: "An employee shouting at a coworker during a disagreement." },
            { img: "images_quiz/q20-c.png", text: "An employee laughing at a colleague's mistake." },
            { img: "images_quiz/q20-d.png", text: "An employee ignoring a coworker's question." }
          ], answer: 0 }
      ]
    },

    2: {
      id: "module2",
      passScore: 15,
      title: "Filing Systems & Document Classification Test",
      subtitle: "Business Document Processing & Records Management",
      instructions: "Choose the correct answer for each question.",
      questions: [
        { part: "PART I. MULTIPLE CHOICE", q: "How should an individual name such as Nicole E. De Guzman be indexed according to the curriculum?",
          options: ["Nicole, De Guzman, E.", "De Guzman, Nicole E.", "E., Nicole, De Guzman", "Guzman, Nicole E."], answer: 1 },
        { q: "How are records arranged in a numeric filing system?",
          options: ["By document color", "By employee preference", "By assigned numbers in ascending order", "By document length"], answer: 2 },
        { q: "Which memo heading identifies the intended recipients?",
          options: ["FROM", "DATE", "SUBJECT", "TO"], answer: 3 },
        { q: "What is the main purpose of a business memorandum?",
          options: ["To communicate internal announcements, updates, and instructions", "To advertise personal products", "To replace all filing systems", "To record only customer payments"], answer: 0 },
        { q: "Which file name follows the recommended digital naming convention?",
          options: ["Memo FINAL NEW", "2026-10-20_Memo_AuditSchedule_v1.pdf", "Document123", "Latest Memo Updated"], answer: 1 },
        { q: "Which platform is mentioned in the curriculum for cloud-based document storage?",
          options: ["Microsoft Paint", "Calculator", "Google Drive", "Windows Clock"], answer: 2 },
        { q: "Confidential digital records should only be accessible to authorized individuals who need them.", options: TF, answer: 0 },
        { q: "Version control helps prevent confusion between different versions of a document.", options: TF, answer: 0 },
        { q: "What is the purpose of records retention in records management?",
          options: ["To keep every document permanently", "To establish schedules for keeping, archiving, and disposing of records", "To delete all inactive files immediately", "To avoid organizing business documents"], answer: 1 },
        { q: "What should an employee do before filing a business document?",
          options: ["Inspect the document and identify its main name, subject, date, or reference number", "Place it in any available folder", "Remove its important information", "Give it to another employee without checking"], answer: 0 },
        { q: "How should a compound surname such as De La Cruz be indexed?",
          options: ["Cruz, De La", "John, De La Cruz", "De La Cruz, John A.", "La Cruz, John A."], answer: 2 },
        { q: "What is the purpose of cross-referencing in records management?",
          options: ["To remove duplicate documents", "To change the document's original information", "To prevent employees from accessing records", "To help locate physical and cloud files through an index"], answer: 3 },
        { q: "Which memo section provides the reason for writing the memorandum?",
          options: ["DATE", "Opening", "FROM", "SUBJECT"], answer: 1 },
        { q: "What should be included in the body of a business memo?",
          options: ["Personal stories unrelated to the topic", "Only the sender's name", "Relevant facts, instructions, deadlines, and supporting details", "Unnecessary information and unrelated announcements"], answer: 2 },
        { q: "Which folder arrangement follows the recommended digital folder hierarchy?",
          options: ["Year > Department > Sub-Category > File", "File > Year > Department > Sub-Category", "Department > File > Year > Sub-Category", "Sub-Category > File > Department > Year"], answer: 0 },

        { part: "PART II. TRUE OR FALSE", q: "Alphabetic filing arranges records according to names or titles.", options: TF, answer: 0 },
        { q: "Business names are always indexed by the first name of the owner, even if no individual name appears in the business name.", options: TF, answer: 1 },
        { q: "Employees should update the index or tracking log when required after filing a document.", options: TF, answer: 0 },
        { q: "Important digital records should be backed up according to the organization's procedures.", options: TF, answer: 0 },
        { q: "Confidential records may be shared with anyone as long as the files are stored in Google Drive.", options: TF, answer: 1 }
      ]
    },

    3: {
      id: "module3",
      passScore: 15,
      title: "Office Software Shortcuts & Features Quiz",
      subtitle: "Office Software Assessment",
      instructions: "Choose the correct answer for each question.",
      questions: [
        { part: "PART I. MULTIPLE CHOICE", q: "Which Microsoft Excel function adds the values in cells B2 through B4?",
          options: ["=SORT(B2:B4)", "=SUM(B2:B4)", "=FILTER(B2:B4)", "=COUNTNAME(B2:B4)"], answer: 1 },
        { q: "What is a cell in a spreadsheet?",
          options: ["A complete worksheet", "A vertical group of data", "The intersection of a row and a column", "A presentation slide"], answer: 2 },
        { q: "What is the purpose of a digital calendar?",
          options: ["To schedule meetings, set reminders, and manage appointments", "To calculate office expenses", "To format business letters", "To organize physical filing cabinets"], answer: 0 },
        { q: "Before sending a meeting invitation, what should the organizer check?",
          options: ["Only the meeting title", "Only the organizer's name", "The color of the calendar", "The date, time, time zone, and participants' availability"], answer: 3 },
        { q: "Which is a characteristic of an effective business presentation?",
          options: ["Crowded slides with very small text", "Clear text, readable fonts, organized information, and appropriate visuals", "Unrelated images on every slide", "Inconsistent formatting throughout"], answer: 1 },
        { q: "Which application is primarily used to prepare and format text documents?",
          options: ["Microsoft Excel", "Google Calendar", "Microsoft Word", "Microsoft PowerPoint"], answer: 2 },

        { part: "PART II. TRUE OR FALSE", q: "Spreadsheet sorting arranges data according to a selected field, while filtering displays records that meet chosen conditions.", options: TF, answer: 0 },
        { q: "Important office files should be saved in appropriate formats and protected when they contain confidential information.", options: TF, answer: 0 },
        { q: "Excel can be used to track office supplies, calculate costs and manage budgets.", options: TF, answer: 0 },
        { q: "Employees can use digital calendars to organise their meetings, set reminders and manage appointments.", options: TF, answer: 0 },
        { q: "Invitations should be sent out for meetings without checking if people are available.", options: TF, answer: 1 },
        { q: "The sort function allows you to sort your data into order by a particular field. The filter function allows you to filter your data so it only shows the data that meets certain criteria.", options: TF, answer: 0 },
        { q: "A good business presentation would have too much text on each slide.", options: TF, answer: 1 },
        { q: "Word is used to create and organise documents in the office. Powerpoint is used to create presentations.", options: TF, answer: 0 },
        { q: "Excel can be used to manage office data and perform calculations using formulae.", options: TF, answer: 0 },
        { q: "Digital calendars can only be used to view dates.", options: TF, answer: 1 },
        { q: "When sorting and filtering data in Excel it enables users to manage their data and easily find particular information.", options: TF, answer: 0 },
        { q: "A good business presentation should have too much text and irrelevant pictures.", options: TF, answer: 1 },
        { q: "Microsoft Word is often used to create and edit documents in the office.", options: TF, answer: 0 },

        { part: "PART III. IMAGE-BASED ASSESSMENT", q: "Which image shows how to use Microsoft Excel to calculate the total amount of money spent on office costs?",
          options: [
            { img: "images_quiz/m3-q20-a.jpg.jfif", text: "Image of Microsoft Excel with the SUM formula" },
            { img: "images_quiz/m3-q20-b.jpg.jfif", text: "Image of Microsoft Excel with an empty spreadsheet." },
            { img: "images_quiz/m3-q20-c.jpg.jfif", text: "Image of Microsoft PowerPoint with a presentation." },
            { img: "images_quiz/m3-q20-d.jpg.jfif", text: "Image of Microsoft Word with a document." }
          ], answer: 0 }
      ]
    },

    4: {
      id: "module4",
      passScore: 15,
      title: "Office Priority & Career Readiness Quiz",
      subtitle: "Workplace Efficiency & Career Readiness",
      instructions: "Choose the correct answer for each question.",
      questions: [
        { part: "PART I. MULTIPLE CHOICE", q: "What is the primary purpose of time management?",
          options: ["To postpone difficult tasks", "To avoid deadlines", "To plan tasks and use time effectively", "To complete tasks without reviewing them"], answer: 2 },
        { q: "According to the Eisenhower Matrix, what should you do with a task that is urgent and important?",
          options: ["Complete it immediately", "Remove it from the task list", "Ignore it temporarily", "Schedule it indefinitely for later"], answer: 0 },
        { q: "Which skill involves understanding and acknowledging a client's feelings?",
          options: ["Filing", "Time blocking", "Sorting", "Empathy"], answer: 3 },
        { q: "How should an office administrator respond to an upset client?",
          options: ["Interrupt the client and defend the company immediately", "Listen calmly, acknowledge the concern, and identify an appropriate solution", "Ignore the complaint", "Share the complaint publicly"], answer: 1 },
        { q: "What is the purpose of a career objective on a resume?",
          options: ["To list personal hobbies only", "To replace the education section", "To state a career goal related to the position", "To provide a list of client complaints"], answer: 2 },
        { q: "What should an applicant do before a job interview?",
          options: ["Research the organization, review the resume, and practice answers", "Avoid learning about the position", "Arrive without necessary documents", "Exaggerate qualifications"], answer: 0 },
        { q: "Employees should prioritize tasks according to their urgency and importance.", options: TF, answer: 0 },
        { q: "Applicants should include references on their resumes without asking permission from the people listed.", options: TF, answer: 1 },
        { q: "Which time management technique involves assigning a specific period for a particular task?",
          options: ["Delegating", "Time blocking", "Filing", "Interviewing"], answer: 1 },
        { q: "What should an employee do with a task that is important but not urgent according to the Eisenhower Matrix?",
          options: ["Ignore the task", "Remove it from the list", "Schedule it for a later time", "Complete it immediately without planning"], answer: 2 },
        { q: "Which customer service skill means paying attention to a client's concerns before responding?",
          options: ["Active listening", "Time management", "Technical proficiency", "Record keeping"], answer: 0 },
        { q: "What should an office administrator do if they cannot immediately solve a client's problem?",
          options: ["Ignore the client", "Give incorrect information", "Tell the client to solve the problem alone", "Refer the concern to the correct person"], answer: 3 },
        { q: "Which of the following is an example of professional communication in customer service?",
          options: ["Using rude and disrespectful language", "Providing clear, accurate, and polite information", "Ignoring customer questions", "Sharing customer complaints publicly"], answer: 1 },
        { q: "Which section of a resume presents the applicant's educational background?",
          options: ["Career Objective", "References", "Education", "Contact Information"], answer: 2 },
        { q: "Why should an applicant tailor their resume to the position they are applying for?",
          options: ["To emphasize relevant skills and experience", "To include unrelated personal information", "To make the resume longer", "To hide their actual qualifications"], answer: 0 },

        { part: "PART II. TRUE OR FALSE", q: "Breaking tasks into smaller steps makes large assignments easier to plan and monitor.", options: TF, answer: 0 },
        { q: "An employee should remain calm and respectful when handling difficult customer situations.", options: TF, answer: 0 },
        { q: "Confidentiality is not important when providing customer service because employees need to answer questions quickly.", options: TF, answer: 1 },
        { q: "Applicants should check their spelling, grammar, contact details, and dates before submitting their resumes.", options: TF, answer: 0 },
        { q: "Arriving on time and wearing clean, appropriate attire are part of proper interview preparation.", options: TF, answer: 0 }
      ]
    }
  };

  /* ================= EGG / DUCKLING ART ================= */
  var uidn = 0;
  var EGG = "M60 8 C32 8 12 60 12 94 C12 124 33 144 60 144 C87 144 108 124 108 94 C108 60 88 8 60 8 Z";
  var ZZ = "0,88 15,80 30,92 45,80 60,92 75,80 90,92 105,80 120,88";
  var TOP_POLY = "0,0 120,0 120,88 105,80 90,92 75,80 60,92 45,80 30,92 15,80 0,88";
  var BOT_POLY = "0,88 15,80 30,92 45,80 60,92 75,80 90,92 105,80 120,88 120,150 0,150";
  var DUCK =
    '<ellipse cx="60" cy="102" rx="32" ry="28" fill="#ffd95a" stroke="#14473a" stroke-width="3"/>' +
    '<path d="M36 100 q10 16 28 4" fill="#ffe58a" stroke="#14473a" stroke-width="2.5" stroke-linecap="round"/>' +
    '<circle cx="60" cy="66" r="27" fill="#ffd95a" stroke="#14473a" stroke-width="3"/>' +
    '<circle cx="45" cy="74" r="5" fill="#f8c9c0"/>' +
    '<circle cx="71" cy="63" r="3.4" fill="#14473a"/>' +
    '<ellipse cx="89" cy="70" rx="10" ry="5.5" fill="#f5b041" stroke="#14473a" stroke-width="2.5"/>' +
    '<path d="M33 48 L60 36 L87 48 L60 60 Z" fill="#2f7d5b" stroke="#14473a" stroke-width="2.5" stroke-linejoin="round"/>' +
    '<path d="M87 48 V62" stroke="#f5b041" stroke-width="2.5" stroke-linecap="round"/><circle cx="87" cy="65" r="3" fill="#f5b041"/>';
  var SPOTS =
    '<circle cx="44" cy="50" r="5" fill="#8fbd91" opacity=".6"/><circle cx="78" cy="70" r="4" fill="#8fbd91" opacity=".6"/>' +
    '<circle cx="50" cy="112" r="6" fill="#8fbd91" opacity=".6"/><circle cx="80" cy="122" r="4" fill="#8fbd91" opacity=".6"/>';

  function defs(id) {
    return '<defs><clipPath id="qt' + id + '"><polygon points="' + TOP_POLY + '"/></clipPath>' +
      '<clipPath id="qb' + id + '"><polygon points="' + BOT_POLY + '"/></clipPath>' +
      '<clipPath id="qe' + id + '"><path d="' + EGG + '"/></clipPath></defs>';
  }
  function half(id, which) {
    var clip = which === "top" ? "qt" : "qb";
    return '<g class="qn-' + (which === "top" ? "top" : "bot") + '">' +
      '<g clip-path="url(#' + clip + id + ')"><path d="' + EGG + '" fill="#fffaf0" stroke="#14473a" stroke-width="4"/></g>' +
      '<g clip-path="url(#qe' + id + ')"><polyline points="' + ZZ + '" fill="none" stroke="#14473a" stroke-width="3" stroke-linejoin="round"/></g></g>';
  }

  /* state: locked | soon | ready | done */
  function eggSVG(state) {
    var id = ++uidn, head = '<svg viewBox="0 0 120 150" class="qn-svg ' + state + '" aria-hidden="true">';
    if (state === "locked")
      return head + '<path d="' + EGG + '" fill="#e1e5e2" stroke="#9aa89f" stroke-width="4"/>' +
        '<text x="60" y="108" text-anchor="middle" font-size="34">🔒</text></svg>';
    if (state === "soon")
      return head + '<path d="' + EGG + '" fill="#f1f6f2" stroke="#8fbd91" stroke-width="4" stroke-dasharray="7 6"/>' +
        '<text x="60" y="106" text-anchor="middle" font-size="44" font-weight="800" fill="#8fbd91">?</text></svg>';
    if (state === "done")
      return head + defs(id) + '<g class="qn-duck bounce">' + DUCK + '</g>' + half(id, "bot") + "</svg>";
    return head + '<path d="' + EGG + '" fill="#fffaf0" stroke="#14473a" stroke-width="4"/>' + SPOTS + "</svg>";
  }

  function hatchScene(win) {
    var id = ++uidn;
    var svg = '<svg viewBox="0 0 120 150" aria-hidden="true">' + defs(id);
    if (win) {
      svg += '<g class="qn-duck">' + DUCK + "</g>" + half(id, "bot") + half(id, "top") +
        '<text class="qn-spark" x="6" y="40" font-size="18" fill="#f5b041">✦</text>' +
        '<text class="qn-spark d2" x="98" y="30" font-size="22" fill="#f5b041">✦</text>' +
        '<text class="qn-spark d3" x="104" y="110" font-size="16" fill="#f5b041">✦</text>';
    } else {
      svg += half(id, "bot") + half(id, "top") +
        '<path class="qn-crack" d="M60 8 L54 30 L68 46 L52 64 L66 82" fill="none" stroke="#14473a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    return '<div class="qn-hatch ' + (win ? "win" : "lose") + '">' + svg + "</svg></div>";
  }

  /* ================= CSS ================= */
  var CSS =
    "#quizBox{background:#fff;border-radius:24px;padding:24px;margin:18px 0 0;border:1px solid #cfe8d4}" +
    "#quizBox h3{margin:0;color:#2f9a6a;font-size:1.4rem}" +
    "#quizBox .qz-sub{margin:4px 0 2px;font-weight:700;color:#14473a}" +
    "#quizBox .qz-ins{margin:0 0 6px;color:#6b8a7c;font-size:.95rem}" +
    "#quizBox .qz-badge{display:inline-block;padding:4px 14px;border-radius:999px;font-weight:700;font-size:.85rem;margin:4px 0}" +
    "#quizBox .qz-badge.ok{background:#d3f0dd;color:#1b6b46}#quizBox .qz-badge.no{background:#fff2a8;color:#7a5b00}" +
    "#quizBox .qz-part{margin:22px 0 8px;padding:6px 14px;background:#e3f1e6;color:#14473a;border-radius:999px;display:inline-block;font-weight:700;font-size:.85rem}" +
    "#quizBox .qz-q{padding:14px 0;border-bottom:1px solid #e3f1e6}" +
    "#quizBox .qz-q p{margin:0 0 8px;font-weight:600;color:#000000}" +
    "#quizBox label.qz-opt{display:block;padding:9px 14px;margin:6px 0;border:1.5px solid #cfe8d4;border-radius:12px;cursor:pointer;transition:.15s}" +
    "#quizBox label.qz-opt, #quizBox label.qz-opt span{color:#000000 !important}" +
    "#quizBox label.qz-opt:hover{background:#f4faf6}" +
    "#quizBox label.qz-opt input{margin-right:10px;accent-color:#2f9a6a}" +
    "#quizBox label.qz-opt.picked{border-color:#2f9a6a;background:#e3f1e6}" +
    "#quizBox label.qz-opt.right{border-color:#2f9a6a;background:#d3f0dd}" +
    "#quizBox label.qz-opt.wrong{border-color:#d9566b;background:#fcd9de}" +
    "#quizBox .qz-fb{margin:6px 0 0;font-size:.9rem;font-weight:600}" +
    "#quizBox .qz-fb.ok{color:#2f9a6a}#quizBox .qz-fb.bad{color:#b23a4d}" +
    "#quizBox .qz-actions{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;justify-content:center}" +
    "#quizBox .qz-result{margin-top:10px;padding:18px;border-radius:18px;text-align:center}" +
    "#quizBox .qz-result.pass{background:#d3f0dd;color:#14473a}#quizBox .qz-result.fail{background:#fcd9de;color:#6d1f2e}" +
    "#quizBox .qz-result strong{font-size:2rem;display:block}" +
    "#quizBox .qz-warn{color:#b23a4d;font-weight:600;margin-top:10px;text-align:center}" +
    "#quizBox .qz-imgs{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}" +
    "#quizBox .qz-imgs label.qz-opt{display:flex;flex-direction:column;padding:8px;margin:0}" +
    "#quizBox .qz-imgs label.qz-opt img{width:100%;height:190px;object-fit:cover;border-radius:10px;margin:0 0 8px}" +
    ".qz-btn{border:none;cursor:pointer;font:inherit;font-weight:700;padding:12px 26px;border-radius:999px;background:#2f9a6a;color:#fff}" +
    ".qz-btn.alt{background:#e3f1e6;color:#14473a}" +
    ".qz-btn:disabled{cursor:not-allowed}" +

    "#quizArea .qn-wrap{background:#fff;border-radius:24px;padding:24px;box-shadow:0 6px 24px rgba(20,71,58,.08)}" +
    "#quizArea .qn-head{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}" +
    "#quizArea .qn-head h2{margin:0;color:#2f9a6a}" +
    "#quizArea .qn-count{font-weight:700;color:#14473a;background:#e3f1e6;padding:6px 16px;border-radius:999px}" +
    "#quizArea .qn-intro{color:#4f6b5d;margin:8px 0 14px}" +
    "#quizArea .qn-bar{height:12px;background:#e3f1e6;border-radius:999px;overflow:hidden;margin-bottom:22px}" +
    "#quizArea .qn-bar div{height:100%;width:0;background:linear-gradient(90deg,#8fbd91,#2f9a6a);border-radius:999px;transition:width .8s ease}" +
    "#quizArea .qn-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}" +
    "#quizArea .qn-egg{font:inherit;background:linear-gradient(180deg,#f4faf6,#fff);border:1.5px solid #cfe8d4;border-radius:22px;padding:18px 14px;text-align:center;cursor:pointer;transition:transform .2s,box-shadow .2s;color:#14473a;width:100%}" +
    "#quizArea .qn-egg:hover:not(:disabled){transform:translateY(-4px);box-shadow:0 10px 24px rgba(20,71,58,.14)}" +
    "#quizArea .qn-egg:disabled{opacity:.7;cursor:not-allowed}" +
    "#quizArea .qn-egg.soon{cursor:default}" +
    "#quizArea .qn-egg .qn-svg{width:110px;height:138px;transform-origin:50% 92%;overflow:visible}" +
    "#quizArea .qn-egg h4{margin:8px 0 2px;font-size:1.05rem}" +
    "#quizArea .qn-egg .qn-title{display:block;font-size:.82rem;color:#6b8a7c;min-height:2.4em;line-height:1.2}" +
    "#quizArea .qn-pill{display:inline-block;margin-top:10px;padding:5px 14px;border-radius:999px;font-size:.82rem;font-weight:700;background:#e3f1e6;color:#14473a}" +
    "#quizArea .qn-egg.ready .qn-pill{background:#2f9a6a;color:#fff}" +
    "#quizArea .qn-egg.done .qn-pill{background:#d3f0dd;color:#1b6b46}" +
    "#quizArea .qn-egg.locked .qn-pill,#quizArea .qn-egg.soon .qn-pill{background:#eceeed;color:#6b7a72}" +
    "#quizArea .qn-svg.ready{animation:qnWobble 3s ease-in-out infinite}" +
    "#quizArea .qn-egg:hover .qn-svg.ready{animation-duration:.8s}" +
    "#quizArea .qn-duck.bounce{animation:qnBounce 2.2s ease-in-out infinite}" +
    "#quizArea .qn-back{margin-bottom:6px}" +

    ".qn-hatch{width:150px;margin:14px auto 4px}" +
    ".qn-hatch svg{width:100%;overflow:visible;transform-origin:50% 95%;animation:qnShake 1s ease-in-out}" +
    ".qn-hatch.win .qn-duck{transform:translateY(-6px);animation:qnPop .8s 1.15s cubic-bezier(.34,1.56,.64,1) backwards}" +
    ".qn-hatch.win .qn-top{opacity:0;transform-origin:60px 60px;animation:qnTop .9s 1s ease-in backwards}" +
    ".qn-hatch.win .qn-spark{animation:qnTwinkle 1.4s 1.5s ease-in-out infinite backwards;transform-box:fill-box;transform-origin:center}" +
    ".qn-hatch.win .qn-spark.d2{animation-delay:1.8s}.qn-hatch.win .qn-spark.d3{animation-delay:2.1s}" +
    ".qn-hatch.lose .qn-crack{animation:qnCrack .4s .9s ease-out backwards}" +

    ".qz-note{margin:18px 0;padding:14px 18px;border-radius:16px;font-weight:600}" +
    ".qz-note.ok{background:#d3f0dd;color:#14473a}.qz-note.no{background:#fff2c9;color:#6b4e00}" +
    ".qz-note .qz-btn{margin-left:10px;padding:8px 18px}" +

    ".course-card.qz-locked{opacity:.6;filter:grayscale(.4)}" +
    ".course-card.qz-locked button{cursor:not-allowed}" +
    ".qz-locknote{margin:8px 0 0;font-size:.85rem;color:#b23a4d;font-weight:600}" +
    "#certCard{margin-top:24px;background:#fff;border:1px solid #cfe8d4;border-radius:24px;padding:24px;box-shadow:0 6px 24px rgba(20,71,58,.08)}" +
    "#certCard h3{margin:0 0 6px;color:#14473a}#certCard p{margin:0 0 14px;color:#4f6b5d}" +
    "#certCard.locked{opacity:.75}" +
    ".qz-modal-bg{position:fixed;inset:0;background:rgba(20,71,58,.55);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px}" +
    ".qz-modal{background:#fff;border-radius:20px;padding:20px;max-width:900px;width:100%;max-height:92vh;overflow:auto;text-align:center}" +
    ".qz-modal img{width:100%;border-radius:10px;border:1px solid #cfe8d4}" +
    ".qz-modal .qz-row{display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap}" +

    "@keyframes qnWobble{0%,40%,100%{transform:rotate(0)}8%{transform:rotate(-8deg)}16%{transform:rotate(8deg)}24%{transform:rotate(-6deg)}32%{transform:rotate(4deg)}}" +
    "@keyframes qnBounce{0%,100%{transform:translateY(-6px)}50%{transform:translateY(-14px)}}" +
    "@keyframes qnShake{0%,100%{transform:rotate(0)}10%{transform:rotate(-8deg)}20%{transform:rotate(8deg)}30%{transform:rotate(-10deg)}40%{transform:rotate(10deg)}50%{transform:rotate(-6deg)}60%{transform:rotate(6deg)}70%{transform:rotate(-3deg)}80%{transform:rotate(3deg)}}" +
    "@keyframes qnPop{from{opacity:0;transform:translateY(34px) scale(.5)}}" +
    "@keyframes qnTop{from{opacity:1;transform:none}to{opacity:0;transform:translate(-34px,-80px) rotate(-40deg)}}" +
    "@keyframes qnCrack{from{opacity:0}}" +
    "@keyframes qnTwinkle{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.3)}}" +
    "@media(max-width:600px){#quizBox .qz-imgs{grid-template-columns:1fr}}" +
    "@media(prefers-reduced-motion:reduce){#quizArea .qn-svg,#quizArea .qn-duck,.qn-hatch svg,.qn-hatch *{animation:none!important}}";

  function injectCss() {
    if (document.getElementById("quizCss")) return;
    var s = document.createElement("style"); s.id = "quizCss"; s.textContent = CSS;
    document.head.appendChild(s);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function optText(o) { return typeof o === "string" ? o : o.text; }
  function $(id) { return document.getElementById(id); }

  /* ================= helpers (gumagamit ng functions sa app.js) ================= */
  function email() { return getSession(); }
  function bestKey(q) { return "waddleQuizBest_" + email() + "_" + q.id; }
  function getBest(q) {
    try { var v = parseInt(localStorage.getItem(bestKey(q)), 10); return isNaN(v) ? null : v; } catch (e) { return null; }
  }
  function setBest(q, score) {
    try { var cur = getBest(q); if (cur === null || score > cur) localStorage.setItem(bestKey(q), String(score)); } catch (e) {}
  }
  function hasPassed(q) { var b = getBest(q); return b !== null && b >= q.passScore; }
  function quizFor(course) { return course ? QUIZZES[course.id] || null : null; }
  function completedList() { return getProgress(email()) || []; }
  function isUnlocked(id) {
    var idx = -1, i;
    for (i = 0; i < courses.length; i++) if (courses[i].id === id) idx = i;
    if (idx <= 0) return true;
    return completedList().indexOf(courses[idx - 1].id) > -1;
  }
  function allDone() {
    var done = completedList();
    for (var i = 0; i < courses.length; i++) if (done.indexOf(courses[i].id) < 0) return false;
    return true;
  }

  /* ================= TAB + AREA ================= */
  function setActiveTab(t) {
    var b = document.querySelectorAll("#dashTabs button");
    for (var i = 0; i < b.length; i++) b[i].classList.toggle("active", b[i].getAttribute("data-t") === t);
  }
  function hideQuizArea() { var a = $("quizArea"); if (a) a.classList.add("hidden"); }

  function showQuizTab(openId) {
    ["homeArea", "coursesArea", "lessonPanel", "plannerArea", "notesArea"].forEach(function (id) {
      var el = $(id); if (el) el.classList.add("hidden");
    });
    $("quizArea").classList.remove("hidden");
    setActiveTab("quiz");
    if (openId) openQuiz(openId); else showNest();
  }

  function buildArea() {
    var dash = $("dashboard");
    if (!dash || $("quizArea")) return;
    var area = document.createElement("section");
    area.id = "quizArea"; area.className = "hidden";
    area.innerHTML =
      '<div class="qn-wrap">' +
        '<div id="qnNest">' +
          '<div class="qn-head"><h2> Quiz Nest</h2><span class="qn-count" id="qnCount"></span></div>' +
          '<p class="qn-intro">Pass a module\'s quiz to hatch its egg! Hatch every duckling and complete all modules to unlock your e-certificate.</p>' +
          '<div class="qn-bar"><div id="qnFill"></div></div>' +
          '<div class="qn-grid" id="qnGrid"></div>' +
        "</div>" +
        '<div id="qnView" class="hidden">' +
          '<button type="button" class="qz-btn alt qn-back" id="qnBack">← Back to Quiz Nest</button>' +
          '<div id="qnHost"></div>' +
        "</div>" +
      "</div>";
    dash.appendChild(area);
    $("qnBack").onclick = showNest;
  }

  function addTab(tries) {
    var tabs = $("dashTabs");
    if (!tabs) { if ((tries || 0) < 40) setTimeout(function () { addTab((tries || 0) + 1); }, 150); return; }
    if (tabs.querySelector('[data-t="quiz"]')) return;
    var b = document.createElement("button");
    b.setAttribute("data-t", "quiz"); b.type = "button"; b.textContent = "Quiz";
    var planner = tabs.querySelector('[data-t="planner"]');
    if (planner) tabs.insertBefore(b, planner); else tabs.appendChild(b);
    tabs.addEventListener("click", function (e) {
      var t = e.target.getAttribute && e.target.getAttribute("data-t");
      if (!t) return;
      if (t === "quiz") showQuizTab(); else hideQuizArea();
    });
  }

  /* ================= QUIZ NEST ================= */
  function showNest() {
    $("qnView").classList.add("hidden");
    $("qnNest").classList.remove("hidden");
    renderNest();
  }

  function renderNest() {
    var grid = $("qnGrid"); if (!grid) return;
    var hatched = 0, html = "";
    courses.forEach(function (c, i) {
      var q = QUIZZES[c.id], state;
      if (!isUnlocked(c.id)) state = "locked";
      else if (!q) state = "soon";
      else if (hasPassed(q)) { state = "done"; hatched++; }
      else state = "ready";

      var pill = "", best = q ? getBest(q) : null;
      if (state === "locked") pill = "🔒 Complete Module " + courses[i - 1].id + " first";
      else if (state === "soon") pill = "Quiz coming soon";
      else if (state === "done") pill = "✓ Hatched · " + best + " / " + q.questions.length;
      else pill = (best !== null ? "Best " + best + " / " + q.questions.length + " · " : "") + "Tap to start";

      html += '<button type="button" class="qn-egg ' + state + '" data-id="' + c.id + '"' +
        (state === "locked" || state === "soon" ? " disabled" : "") + ">" +
        eggSVG(state) + "<h4>Module " + c.id + '</h4><span class="qn-title">' + esc(c.title) + "</span>" +
        '<span class="qn-pill">' + esc(pill) + "</span></button>";
    });
    grid.innerHTML = html;

    var total = courses.length;
    $("qnCount").textContent = "🐥 " + hatched + " / " + total + " hatched";
    setTimeout(function () { var f = $("qnFill"); if (f) f.style.width = Math.round(hatched / total * 100) + "%"; }, 50);

    var cards = grid.querySelectorAll(".qn-egg");
    for (var k = 0; k < cards.length; k++) {
      if (cards[k].disabled) continue;
      cards[k].onclick = function () { openQuiz(parseInt(this.getAttribute("data-id"), 10)); };
    }
  }

  function openQuiz(id) {
    var q = QUIZZES[id];
    if (!q || !isUnlocked(id)) { showNest(); return; }
    $("qnNest").classList.add("hidden");
    $("qnView").classList.remove("hidden");
    render(id, q);
    var area = $("quizArea"); if (area && area.scrollIntoView) area.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ================= QUIZ UI ================= */
  function updateCompleteBtn() {
    var btn = $("completeBtn");
    if (!btn) return;
    var q = quizFor(typeof currentCourse !== "undefined" ? currentCourse : null);
    var locked = q && !hasPassed(q);
    btn.style.opacity = locked ? ".5" : "";
    btn.title = locked ? "Pass the quiz first (" + q.passScore + " / " + q.questions.length + ")" : "";
  }

  function render(courseId, quiz) {
    var host = $("qnHost");
    var total = quiz.questions.length;
    var passed = hasPassed(quiz), best = getBest(quiz);
    var box = document.createElement("div");
    box.id = "quizBox";

    var html = "<h3>" + esc(quiz.title) + "</h3>" +
      '<p class="qz-sub">Module ' + courseId + " · " + esc(quiz.subtitle) + "</p>" +
      '<p class="qz-ins">' + esc(quiz.instructions) + " Passing score: <strong>" + quiz.passScore + " / " + total + "</strong>. You may retake the quiz.</p>" +
      '<span class="qz-badge ' + (passed ? "ok" : "no") + '">' +
      (passed ? "✓ Passed" : "Not yet passed") + (best !== null ? " · Best score: " + best + " / " + total : "") + "</span>";

    quiz.questions.forEach(function (q, i) {
      if (q.part) html += '<div class="qz-part">' + esc(q.part) + "</div>";
      html += '<div class="qz-q" data-i="' + i + '"><p>' + (i + 1) + ". " + esc(q.q) + "</p>";
      var hasImgs = q.options.some(function (o) { return typeof o === "object" && o.img; });
      if (hasImgs) html += '<div class="qz-imgs">';
      q.options.forEach(function (o, k) {
        var label = q.options.length === 2 ? "" : LETTERS[k] + ". ";
        var img = (typeof o === "object" && o.img) ? '<img src="' + esc(o.img) + '" alt="Option ' + LETTERS[k] + '">' : "";
        html += '<label class="qz-opt">' + img + '<span><input type="radio" name="qz' + i + '" value="' + k + '">' + esc(label + optText(o)) + "</span></label>";
      });
      if (hasImgs) html += "</div>";
      html += '<div class="qz-fb"></div></div>';
    });

    html += '<div class="qz-actions"><button type="button" class="qz-btn" id="qzSubmit">Submit Answers</button>' +
      '<button type="button" class="qz-btn alt" id="qzRetake" style="display:none">Retake Quiz</button></div>' +
      '<div id="qzOut"></div>';
    box.innerHTML = html;
    host.innerHTML = "";
    host.appendChild(box);

    box.addEventListener("change", function (e) {
      if (e.target.type !== "radio") return;
      var group = box.querySelectorAll('input[name="' + e.target.name + '"]');
      for (var g = 0; g < group.length; g++) group[g].closest("label").classList.toggle("picked", group[g].checked);
    });
    box.querySelector("#qzSubmit").onclick = function () { grade(courseId, quiz, box); };
    box.querySelector("#qzRetake").onclick = function () {
      render(courseId, quiz);
      var a = $("quizArea"); if (a && a.scrollIntoView) a.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  function grade(courseId, quiz, box) {
    var out = box.querySelector("#qzOut"), score = 0, missing = [], i;
    var total = quiz.questions.length;
    for (i = 0; i < total; i++) {
      if (!box.querySelector('input[name="qz' + i + '"]:checked')) missing.push(i + 1);
    }
    if (missing.length) {
      out.innerHTML = '<p class="qz-warn">Please answer all questions. Unanswered: ' + missing.join(", ") + "</p>";
      return;
    }
    var chosenArr = [];
    quiz.questions.forEach(function (q, i) {
      var c = parseInt(box.querySelector('input[name="qz' + i + '"]:checked').value, 10);
      chosenArr.push(c);
      if (c === q.answer) score++;
    });
    var passed = score >= quiz.passScore;

    quiz.questions.forEach(function (q, i) {
      var wrap = box.querySelector('.qz-q[data-i="' + i + '"]');
      var chosen = chosenArr[i];
      var labels = wrap.querySelectorAll("label.qz-opt");
      var fb = wrap.querySelector(".qz-fb");
      for (var k = 0; k < labels.length; k++) {
        labels[k].classList.remove("picked");
        labels[k].querySelector("input").disabled = true;
        if (k === q.answer && (chosen === q.answer || passed)) labels[k].classList.add("right");
        else if (k === chosen && chosen !== q.answer) labels[k].classList.add("wrong");
      }
      if (chosen === q.answer) { fb.className = "qz-fb ok"; fb.textContent = "✓ Correct"; }
      else if (passed) {
        fb.className = "qz-fb bad";
        fb.textContent = "✗ Correct answer: " + (q.options.length === 2 ? "" : LETTERS[q.answer] + ". ") + optText(q.options[q.answer]);
      } else { fb.className = "qz-fb bad"; fb.textContent = "✗ Incorrect"; }
    });

    var pct = Math.round(score / total * 100);
    out.innerHTML = hatchScene(passed) +
      '<div class="qz-result ' + (passed ? "pass" : "fail") + '"><strong>' + score + " / " + total + "</strong>(" + pct + "%) — " +
      (passed
        ? "Your egg hatched! 🐥 Congratulations, you passed! Go back to the lesson and click “Mark Lesson as Completed”."
        : "Your egg didn't hatch yet. You need at least " + quiz.passScore + " / " + total + " to pass. Review the module and retake the quiz. 💪") + "</div>" +
      (passed ? '<div class="qz-actions"><button type="button" class="qz-btn" id="qnLesson">Continue to the lesson →</button></div>' : "");
    setBest(quiz, score);

    box.querySelector("#qzSubmit").style.display = "none";
    box.querySelector("#qzRetake").style.display = "inline-block";
    var badge = box.querySelector(".qz-badge");
    if (hasPassed(quiz)) { badge.className = "qz-badge ok"; badge.textContent = "✓ Passed · Best score: " + getBest(quiz) + " / " + total; }
    else { badge.className = "qz-badge no"; badge.textContent = "Not yet passed · Best score: " + getBest(quiz) + " / " + total; }

    var go = box.querySelector("#qnLesson");
    if (go) go.onclick = function () { goToLesson(courseId); };
    out.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function goToLesson(id) {
    hideQuizArea();
    setActiveTab("courses");
    window.openLesson(id);
  }

  /* ================= NOTE SA LESSON PAGE ================= */
  function showLessonNote() {
    var old = $("quizNote"); if (old) old.remove();
    var q = quizFor(currentCourse); if (!q) return;
    var btn = $("completeBtn"); if (!btn || !btn.parentNode) return;
    var passed = hasPassed(q);
    var div = document.createElement("div");
    div.id = "quizNote"; div.className = "qz-note " + (passed ? "ok" : "no");
    div.innerHTML = passed
      ? "🐥 Quiz passed (" + getBest(q) + " / " + q.questions.length + "). You can now mark this lesson as completed."
      : "🥚 Pass this module's quiz in the <strong>Quiz</strong> tab (at least " + q.passScore + " / " + q.questions.length + ") to hatch your duckling, then come back here to complete the module." +
        '<button type="button" class="qz-btn" id="qnGo">Go to Quiz →</button>';
    btn.parentNode.insertBefore(div, btn);
    if (!passed) div.querySelector("#qnGo").onclick = function () { showQuizTab(currentCourse.id); };
    updateCompleteBtn();
  }

  /* ================= LOCK MODULES ================= */
  function applyLocks() {
    var cards = document.querySelectorAll("#courseGrid .course-card");
    for (var i = 0; i < cards.length && i < courses.length; i++) {
      if (isUnlocked(courses[i].id)) continue;
      var card = cards[i];
      card.classList.add("qz-locked");
      var btn = card.querySelector("button");
      if (btn) { btn.disabled = true; btn.textContent = "🔒 Locked"; }
      var note = document.createElement("p");
      note.className = "qz-locknote";
      note.textContent = "Complete Module " + courses[i - 1].id + " (and pass its quiz) to unlock.";
      card.appendChild(note);
    }
  }

  /* ================= E-CERTIFICATE ================= */
  function userName() {
    var em = String(email() || "").toLowerCase();
    var list = [];

    try { if (typeof users !== "undefined" && Array.isArray(users)) list = users; } catch (e) {}
    try { if (!list.length && typeof getUsers === "function") list = getUsers() || []; } catch (e) {}

    function pick(u) {
      return (u && (u.name || u.fullName || u.fullname || u.username)) || null;
    }
    function same(u) {
      return u && String(u.email || "").toLowerCase() === em;
    }

    for (var i = 0; i < list.length; i++) {
      if (same(list[i]) && pick(list[i])) return pick(list[i]);
    }

    try {
      for (var k = 0; k < localStorage.length; k++) {
        var raw = localStorage.getItem(localStorage.key(k));
        if (!raw || (raw.charAt(0) !== "[" && raw.charAt(0) !== "{")) continue;
        var data = JSON.parse(raw);
        if (Array.isArray(data)) {
          for (var j = 0; j < data.length; j++) {
            if (same(data[j]) && pick(data[j])) return pick(data[j]);
          }
        } else if (data && typeof data === "object") {
          if (same(data) && pick(data)) return pick(data);
          if (data[em] && pick(data[em])) return pick(data[em]);
        }
      }
    } catch (e) {}

    var saved = null;
    try { saved = localStorage.getItem("waddleCertName_" + em); } catch (e) {}
    if (saved) return saved;
    var typed = "";
    try { typed = prompt("Ilagay ang buong pangalan para sa certificate:", "") || ""; } catch (e) {}
    typed = typed.trim();
    if (typed) {
      try { localStorage.setItem("waddleCertName_" + em, typed); } catch (e) {}
      return typed;
    }
    return "Learner";
  }

  function loadTemplate(i, ok, fail) {
    if (i >= CERT_FILES.length) { fail(); return; }
    var img = new Image();
    img.onload = function () { ok(img); };
    img.onerror = function () { loadTemplate(i + 1, ok, fail); };
    img.src = CERT_FILES[i];
  }

  /* Coordinates ay nakabase sa 1536px na lapad ng template (s = scale).
     Kung may konting sobra/kulang sa pagtakip ng signatories, ito ang i-adjust:
     [x, y, lapad, taas] */
  var SIGN_LEFT  = [130, 652, 515, 124];   /* Group 1 (BSOA 4G) / Project Representative ... */
  var SIGN_RIGHT = [890, 652, 515, 124];   /* Prof. Michael Noel Tolentino / Faculty Adviser ... */

  /* Binubura ang isang lugar: kinukuha ang pixels sa taas at baba nito,
     tapos pinaghahalo pababa (gradient) kaya walang makikitang kahon. */
  function eraseRegion(ctx, rect, s) {
    var X = Math.round(rect[0] * s), Y = Math.round(rect[1] * s);
    var W = Math.round(rect[2] * s), H = Math.round(rect[3] * s);
    try {
      var top = ctx.getImageData(X, Y - Math.round(4 * s), W, 1).data;
      var bot = ctx.getImageData(X, Y + H + Math.round(3 * s), W, 1).data;
      var out = ctx.createImageData(W, H);
      for (var r = 0; r < H; r++) {
        var t = H > 1 ? r / (H - 1) : 0;
        for (var c = 0; c < W; c++) {
          var i = c * 4, o = (r * W + c) * 4;
          out.data[o]     = top[i]     * (1 - t) + bot[i]     * t;
          out.data[o + 1] = top[i + 1] * (1 - t) + bot[i + 1] * t;
          out.data[o + 2] = top[i + 2] * (1 - t) + bot[i + 2] * t;
          out.data[o + 3] = 255;
        }
      }
      ctx.putImageData(out, X, Y);
    } catch (e) {}
  }

  function drawCertificate(name, dateStr, id, done) {
    loadTemplate(0, function (img) {
      var c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      var x = c.getContext("2d");
      var s = c.width / 1536;
      x.drawImage(img, 0, 0);

      function sample(px, py, fallback) {
        try {
          var d = x.getImageData(Math.round(px * s), Math.round(py * s), 1, 1).data;
          return "rgb(" + d[0] + "," + d[1] + "," + d[2] + ")";
        } catch (e) { return fallback; }
      }

      /* 1) PANGALAN sa berdeng pill */
      x.fillStyle = sample(260, 420, "#1f5c47");
      x.fillRect(300 * s, 378 * s, 940 * s, 84 * s);

      x.textAlign = "center";
      x.textBaseline = "middle";
      var size = 78;
      do { x.font = "bold " + (size * s) + "px Arial"; size -= 3; }
      while (x.measureText(name).width > 900 * s && size > 28);
      x.fillStyle = "#ffffff";
      x.fillText(name, 767 * s, 420 * s);

      /* 2) TANGGALIN ANG SIGNATORIES (Group 1 BSOA 4G + Prof. Tolentino)
            Kinukuha muna ang kulay ng background, tapos tinatakpan. */
      eraseRegion(x, SIGN_LEFT, s);
      eraseRegion(x, SIGN_RIGHT, s);

      /* 3) CERTIFICATE ID + DATE */
      x.fillStyle = sample(300, 858, "#fbf8ee");
      x.fillRect(330 * s, 838 * s, 880 * s, 42 * s);
      x.font = (23 * s) + "px Arial";
      x.fillStyle = "#14473a";
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.fillText("Certificate ID: " + id + "     |     Date of Completion: " + dateStr, 768 * s, 858 * s);

      done(c);
    }, function () {
      alert("Hindi ma-load ang certificate template. Siguraduhing nasa main folder ito at gumagamit ka ng Live Server.");
    });
  }

  function showCertificate() {
    if (document.querySelector(".qz-modal-bg")) return;
    var date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    var name = userName();
    var certId = "WDL-" + Date.now().toString(36).toUpperCase();

    drawCertificate(name, date, certId, function (canvas) {
      var url;
      try { url = canvas.toDataURL("image/png"); }
      catch (e) {
        alert("Hindi ma-export ang certificate. Buksan ang website gamit ang Live Server.");
        return;
      }

      var bg = document.createElement("div");
      bg.className = "qz-modal-bg";
      bg.innerHTML =
        '<div class="qz-modal"><img src="' + url + '" alt="WADDLE e-certificate">' +
        '<div class="qz-row"><a class="qz-btn" id="certDl" download="WADDLE-E-Certificate-' +
        esc(name.replace(/\s+/g, "-")) + '.png" href="' + url + '" style="text-decoration:none">⬇ Download PNG</a>' +
        '<button type="button" class="qz-btn alt" id="certClose">Close</button></div></div>';
      bg.addEventListener("mousedown", function (e) { if (e.target === bg) bg.remove(); });
      document.body.appendChild(bg);
      bg.querySelector("#certClose").onclick = function () { bg.remove(); };
    });
  }

  /* ================= FEEDBACK (bago ang E-Certificate) ================= */
  var FB_Q = [
    { t: "Module Helpfulness", d: "How helpful were the modules in helping you understand the lessons?" },
    { t: "Module Clarity", d: "How clear and easy to follow were the explanations and examples?" },
    { t: "Quiz Effectiveness", d: "How well did the quizzes help you check and strengthen what you learned?" },
    { t: "Quiz Alignment", d: "How well did the quiz questions match what was covered in the modules?" },
    { t: "Self-Study Impact", d: "Overall, how much did Waddle help you learn at your own pace?" }
  ];
  var fbAnswers = [], fbComments = "", fbStep = 0, fbBg = null;

  function fbDoneKey() { return "waddleFeedbackDone_" + email(); }
  function fbIsDone() { return false; }

  function fbCss() {
    if (document.getElementById("fbCss")) return;
    var s = document.createElement("style"); s.id = "fbCss";
    s.textContent =
      ".fb-bg{position:fixed;inset:0;background:rgba(20,71,58,.6);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px}" +
      ".fb-card{background:linear-gradient(180deg,#f4faf6,#fff);border-radius:28px;padding:28px;max-width:540px;width:100%;max-height:94vh;overflow:auto;text-align:center;box-shadow:0 20px 60px rgba(20,71,58,.35);color:#14473a;animation:fbPop .4s cubic-bezier(.34,1.56,.64,1)}" +
      ".fb-head{font-size:.9rem;font-weight:700;color:#2f9a6a;margin-bottom:10px}" +
      ".fb-bar{height:10px;background:#e3f1e6;border-radius:999px;overflow:hidden;margin-bottom:8px}" +
      ".fb-bar div{height:100%;background:linear-gradient(90deg,#8fbd91,#2f9a6a);border-radius:999px;transition:width .4s ease}" +
      ".fb-step{font-size:.85rem;font-weight:700;color:#6b8a7c;margin-bottom:12px}" +
      ".fb-title{font-size:1.3rem;font-weight:800;margin:10px 0 4px}" +
      ".fb-text{color:#4f6b5d;margin:0 0 18px}" +
      ".fb-scale{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;max-width:340px;margin:0 auto}" +
      ".fb-scale button{height:48px;border-radius:50%;border:2px solid #2f9a6a;background:#fff;color:#14473a;font:inherit;font-weight:800;font-size:1.05rem;cursor:pointer;transition:.15s}" +
      ".fb-scale button:hover{background:#d3ecdd;transform:translateY(-2px)}" +
      ".fb-scale button.on{background:#2f9a6a;color:#fff;transform:scale(1.12)}" +
      ".fb-labels{display:flex;justify-content:space-between;max-width:340px;margin:8px auto 0;font-size:.78rem;color:#6b8a7c}" +
      ".fb-card textarea{width:100%;min-height:120px;border:2px solid #cfe8d4;border-radius:14px;padding:12px;font:inherit;resize:vertical;box-sizing:border-box;color:#000}" +
      ".fb-card textarea:focus{outline:none;border-color:#2f9a6a}" +
      ".fb-row{display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap}" +
      ".fb-btn{border:none;cursor:pointer;font:inherit;font-weight:700;padding:12px 26px;border-radius:999px;background:#2f9a6a;color:#fff}" +
      ".fb-btn.alt{background:#e3f1e6;color:#14473a}" +
      ".fb-btn:disabled{background:#c9d4cf;cursor:not-allowed}" +
      "@keyframes fbPop{from{opacity:0;transform:scale(.92) translateY(10px)}}";
    document.head.appendChild(s);
  }

  function fbRender() {
    var card = fbBg.querySelector(".fb-card");
    var last = FB_Q.length;
    var pct = Math.round((fbStep + 1) / (last + 1) * 100);
    var html = '<div class="fb-head"> One last step before your e-certificate!</div>' +
               '<div class="fb-bar"><div style="width:' + pct + '%"></div></div>';

    if (fbStep < last) {
      var q = FB_Q[fbStep], cur = fbAnswers[fbStep];
      html += '<div class="fb-step">Question ' + (fbStep + 1) + " of " + last + "</div>" +
        '<div class="fb-title">' + esc(q.t) + "</div>" +
        '<p class="fb-text">' + esc(q.d) + "</p>" +
        '<div class="fb-scale">';
      for (var n = 1; n <= 5; n++)
        html += '<button type="button" data-v="' + n + '"' + (cur === n ? ' class="on"' : "") + ">" + n + "</button>";
      html += '</div><div class="fb-labels"><span>1 = Not at all</span><span>5 = Extremely</span></div>' +
        '<div class="fb-row">' +
        (fbStep > 0 ? '<button type="button" class="fb-btn alt" id="fbBack">← Back</button>' : "") +
        '<button type="button" class="fb-btn" id="fbNext"' + (cur ? "" : " disabled") + ">Next →</button></div>";
    } else {
      html += '<div class="fb-step">Last step!</div>' +
        '<div class="fb-title">Feedbacks or Comments <small style="font-weight:600;color:#6b8a7c">(optional)</small></div>' +
        '<p class="fb-text">What should we improve in the modules, quizzes, or the website?</p>' +
        '<textarea id="fbComments" placeholder="Type your feedback here...">' + esc(fbComments) + "</textarea>" +
        '<div class="fb-row"><button type="button" class="fb-btn alt" id="fbBack">← Back</button>' +
        '<button type="button" class="fb-btn" id="fbSubmit">Submit &amp; Get My E-Certificate </button></div>';
    }
    card.innerHTML = html;

    var next = card.querySelector("#fbNext"), back = card.querySelector("#fbBack");
    var scale = card.querySelector(".fb-scale"), submit = card.querySelector("#fbSubmit");

    if (scale) scale.onclick = function (e) {
      var b = e.target.closest("button[data-v]"); if (!b) return;
      fbAnswers[fbStep] = parseInt(b.getAttribute("data-v"), 10);
      var all = scale.querySelectorAll("button");
      for (var i = 0; i < all.length; i++) all[i].classList.toggle("on", all[i] === b);
      next.disabled = false;
    };
    if (next) next.onclick = function () { fbStep++; fbRender(); };
    if (back) back.onclick = function () {
      var t = card.querySelector("#fbComments"); if (t) fbComments = t.value;
      fbStep--; fbRender();
    };
    if (submit) submit.onclick = function () {
      fbComments = card.querySelector("#fbComments").value.trim();
      fbSave({ user: email(), ratings: fbAnswers.slice(0, FB_Q.length), comments: fbComments, submittedAt: new Date().toISOString() });
      fbBg.remove(); fbBg = null;
      fbCongrats(showCertificate);
    };
  }

  function fbSave(data) {
    try {
      var all = JSON.parse(localStorage.getItem("waddleFeedbackAll") || "[]");
      all.push(data);
      localStorage.setItem("waddleFeedbackAll", JSON.stringify(all));
      localStorage.setItem(fbDoneKey(), "1");
    } catch (e) {}

    try {
      fetch("https://script.google.com/macros/s/AKfycbzgEZzCoMJchv_mkedsy_KegaQ5kaIWuILQCO5XcjCIVkMm6wHlyx45Vuz4RgKc8lxWHA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data)
      });
    } catch (e) {}
  }

  function fbStart() {
    if (fbBg) return;
    fbCss();
    fbAnswers = []; fbComments = ""; fbStep = 0;
    fbBg = document.createElement("div");
    fbBg.className = "fb-bg";
    fbBg.innerHTML = '<div class="fb-card"></div>';
    document.body.appendChild(fbBg);
    fbRender();
  }

  /* ================= CONGRATULATIONS ================= */
  function fbCongrats(done) {
    if (!document.getElementById("fbCongCss")) {
      var st = document.createElement("style"); st.id = "fbCongCss";
      st.textContent =
        ".fbc-bg{overflow:hidden}" +
        ".fbc-card{position:relative;z-index:1;max-width:460px}" +
        ".fbc-duck{width:200px;margin:0 auto;animation:fbcIn .8s cubic-bezier(.34,1.56,.64,1),fbcFloat 2.4s .8s ease-in-out infinite}" +
        ".fbc-duck svg{width:100%;overflow:visible}" +
        ".fbc-title{margin:6px 0 4px;font-size:2rem;color:#2f9a6a;animation:fbcIn .7s .3s cubic-bezier(.34,1.56,.64,1) backwards}" +
        ".fbc-sub{color:#4f6b5d;margin:0 0 6px;animation:fbcIn .7s .5s cubic-bezier(.34,1.56,.64,1) backwards}" +
        ".fbc-card .fb-btn{animation:fbcIn .7s .8s cubic-bezier(.34,1.56,.64,1) backwards}" +
        ".fbc-conf{position:absolute;top:-16px;width:10px;height:15px;border-radius:2px;opacity:.9;animation:fbcFall linear infinite}" +
        ".fbc-sp{animation:fbcTw 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}" +
        ".fbc-sp.d2{animation-delay:.5s}.fbc-sp.d3{animation-delay:.9s}" +
        "@keyframes fbcIn{from{opacity:0;transform:scale(.4) translateY(30px)}}" +
        "@keyframes fbcFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}" +
        "@keyframes fbcFall{to{transform:translateY(110vh) rotate(540deg)}}" +
        "@keyframes fbcTw{0%,100%{opacity:.25;transform:scale(.6)}50%{opacity:1;transform:scale(1.3)}}";
      document.head.appendChild(st);
    }

    var duck = [
      '<svg viewBox="0 0 200 210" aria-hidden="true">',
      '<ellipse cx="78" cy="196" rx="16" ry="6" fill="#f5b041" stroke="#14473a" stroke-width="2.5"/>',
      '<ellipse cx="122" cy="196" rx="16" ry="6" fill="#f5b041" stroke="#14473a" stroke-width="2.5"/>',
      '<ellipse cx="100" cy="148" rx="50" ry="46" fill="#fffaf0" stroke="#14473a" stroke-width="3.5"/>',
      '<circle cx="100" cy="82" r="40" fill="#fffaf0" stroke="#14473a" stroke-width="3.5"/>',
      '<circle cx="73" cy="96" r="6" fill="#f8c9c0"/><circle cx="127" cy="96" r="6" fill="#f8c9c0"/>',
      '<circle cx="85" cy="86" r="4.5" fill="#14473a"/><circle cx="115" cy="86" r="4.5" fill="#14473a"/>',
      '<circle cx="86.5" cy="84.5" r="1.4" fill="#fff"/><circle cx="116.5" cy="84.5" r="1.4" fill="#fff"/>',
      '<ellipse cx="100" cy="98" rx="12" ry="6.5" fill="#f5b041" stroke="#14473a" stroke-width="2.5"/>',
      '<path d="M70 56 V72 Q100 88 130 72 V56" fill="#2f7d5b" stroke="#14473a" stroke-width="3" stroke-linejoin="round"/>',
      '<path d="M52 54 L100 34 L148 54 L100 74 Z" fill="#2f7d5b" stroke="#14473a" stroke-width="3" stroke-linejoin="round"/>',
      '<path d="M148 54 V84" stroke="#f5b041" stroke-width="3" stroke-linecap="round"/>',
      '<circle cx="148" cy="88" r="4.5" fill="#f5b041" stroke="#14473a" stroke-width="2"/>',
      '<ellipse cx="56" cy="150" rx="13" ry="20" fill="#fffaf0" stroke="#14473a" stroke-width="3" transform="rotate(20 56 150)"/>',
      '<rect x="52" y="140" width="96" height="26" rx="13" fill="#fbf3d9" stroke="#14473a" stroke-width="3"/>',
      '<rect x="52" y="140" width="14" height="26" rx="7" fill="#f3e2a8" stroke="#14473a" stroke-width="3"/>',
      '<rect x="134" y="140" width="14" height="26" rx="7" fill="#f3e2a8" stroke="#14473a" stroke-width="3"/>',
      '<rect x="94" y="136" width="12" height="34" fill="#d9566b" stroke="#14473a" stroke-width="2.5"/>',
      '<path d="M100 150 L84 142 L84 158 Z M100 150 L116 142 L116 158 Z" fill="#e8788b" stroke="#14473a" stroke-width="2" stroke-linejoin="round"/>',
      '<circle cx="100" cy="150" r="4" fill="#d9566b" stroke="#14473a" stroke-width="2"/>',
      '<ellipse cx="144" cy="152" rx="13" ry="18" fill="#fffaf0" stroke="#14473a" stroke-width="3" transform="rotate(-20 144 152)"/>',
      '<text class="fbc-sp" x="12" y="50" font-size="22" fill="#f5b041">✦</text>',
      '<text class="fbc-sp d2" x="168" y="40" font-size="26" fill="#f5b041">✦</text>',
      '<text class="fbc-sp d3" x="172" y="130" font-size="18" fill="#8fbd91">✦</text>',
      '<text class="fbc-sp d2" x="6" y="130" font-size="18" fill="#8fbd91">✦</text>',
      '</svg>'
    ].join("");

    var colors = ["#2f9a6a", "#8fbd91", "#f5b041", "#ffd95a", "#d9566b", "#14473a"], conf = "";
    for (var i = 0; i < 30; i++) {
      conf += '<span class="fbc-conf" style="left:' + Math.round(Math.random() * 100) + '%;background:' + colors[i % colors.length] +
              ';animation-duration:' + (3 + Math.random() * 3).toFixed(1) + 's;animation-delay:' + (Math.random() * 2).toFixed(1) + 's"></span>';
    }

    var bg = document.createElement("div");
    bg.className = "fb-bg fbc-bg";
    bg.innerHTML = conf +
      '<div class="fb-card fbc-card">' +
        '<div class="fbc-duck">' + duck + "</div>" +
        '<h2 class="fbc-title">Congratulations!</h2>' +
        '<p class="fbc-sub">You completed all modules and shared your feedback. Your e-certificate is ready!</p>' +
        '<div class="fb-row"><button type="button" class="fb-btn" id="fbcGo">View my E-Certificate →</button></div>' +
      "</div>";
    document.body.appendChild(bg);

    var finished = false, timer;
    function go() {
      if (finished) return;
      finished = true; clearTimeout(timer);
      bg.remove();
      done();
    }
    timer = setTimeout(go, 5000);
    bg.querySelector("#fbcGo").onclick = go;
  }

  window.waddleShowCert = function () {
    try {
      if (fbIsDone()) showCertificate();
      else fbStart();
    } catch (err) { alert("Certificate error: " + err.message); }
  };

  function renderCertCard() {
    var area = $("coursesArea");
    if (!area) return;
    var old = $("certCard"); if (old) old.remove();

    var done = completedList().filter(function (id) {
      return courses.some(function (c) { return c.id === id; });
    }).length;
    var ok = allDone();

    var card = document.createElement("div");
    card.id = "certCard";
    if (!ok) card.className = "locked";
    card.innerHTML = ok
      ? "<h3>Your E-Certificate is ready!</h3><p>Congratulations! You completed all " + courses.length + " modules.</p>" +
        '<button type="button" class="qz-btn" id="certOpen" onclick="waddleShowCert()">View &amp; Download E-Certificate</button>'
      : "<h3> E-Certificate</h3><p>Complete and pass all " + courses.length + " modules to unlock your e-certificate. Progress: <strong>" +
        done + " / " + courses.length + "</strong></p>" +
        '<button type="button" class="qz-btn alt" disabled style="cursor:not-allowed">🔒 Locked</button>';
    area.appendChild(card);
  }

  /* ================= HOOKS sa app.js ================= */
  function hookApp() {
    ["showHome", "showCourses"].forEach(function (name) {
      var orig = window[name];
      if (typeof orig !== "function") return;
      window[name] = function () {
        hideQuizArea();
        var r = orig.apply(this, arguments);
        if (name === "showCourses") { applyLocks(); renderCertCard(); }
        return r;
      };
    });

    var origRender = window.renderCourses;
    if (typeof origRender === "function") {
      window.renderCourses = function () {
        var r = origRender.apply(this, arguments);
        applyLocks(); renderCertCard();
        return r;
      };
    }

    var origOpen = window.openLesson;
    if (typeof origOpen === "function") {
      window.openLesson = function (id) {
        if (!isUnlocked(id)) { alert("This module is locked. Please complete the previous module first."); return; }
        var r = origOpen.apply(this, arguments);
        hideQuizArea();
        showLessonNote();
        return r;
      };
    }

    var origComplete = window.completeLesson;
    if (typeof origComplete === "function") {
      window.completeLesson = function () {
        var q = quizFor(currentCourse);
        if (q && !hasPassed(q)) {
          var msg = $("lessonMessage");
          if (msg) msg.textContent = "🔒 Please pass the quiz first in the Quiz tab (at least " + q.passScore + " / " + q.questions.length + ") before completing this module.";
          return;
        }
        var r = origComplete.apply(this, arguments);
        showLessonNote();
        return r;
      };
    }
  }

  function init() {
    injectCss();
    hookApp();
    buildArea();
    addTab(0);
    setTimeout(renderCertCard, 300);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();