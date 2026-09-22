/**
 * ============================================================================
 * EDITABLE CONTENT & CONFIGURATION
 * Edit your chapter labels, paragraphs, and personal message below.
 * ============================================================================
 */

const WHATSAPP_NUMBER = "+918011595012";

const chapters = [
  {
    number: "01",
    label: "MY INTENTION",
    text: "This isn’t something I made to impress you. I just wanted to be completely clear about what I feel and what I'm looking for, without the rushed nature of everyday chat apps.",
    // Graphic: Small glowing circle
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="16" stroke="rgba(255,255,255,0.15)" stroke-width="1.2"/>
        <circle class="anim-circle" cx="28" cy="28" r="6" fill="#8EA7FF" fill-opacity="0.3" stroke="#8EA7FF" stroke-width="1.2"/>
      </svg>
    `
  },
  {
    number: "02",
    label: "WHAT I'M LOOKING FOR",
    text: "I value calm clarity, real curiosity, and consistency. In a world full of ambiguous connections and games, I appreciate when two people can just be straightforward and open with one another.",
    // Graphic: Two thin intersecting lines
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14" y1="28" x2="42" y2="28" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
        <line x1="28" y1="14" x2="28" y2="42" stroke="#8EA7FF" stroke-width="1.2"/>
      </svg>
    `
  },
  {
    number: "03",
    label: "WHAT I CURRENTLY WANT",
    text: "At this stage in my life, I want to invest time in connections that have depth. I’m interested in getting to know who you really are — how your mind works, your thoughts, and what drives you.",
    // Graphic: Small orbit animation
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="18" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="2 4"/>
        <g class="anim-orbit">
          <circle cx="28" cy="10" r="2.5" fill="#8EA7FF"/>
        </g>
        <circle cx="28" cy="28" r="3" fill="rgba(255,255,255,0.6)"/>
      </svg>
    `
  },
  {
    number: "04",
    label: "WHAT I SEE IN YOU",
    text: "From our conversations so far, I’ve noticed a sincerity and grounded perspective in you that feels rare. There is a calm authenticity to how you speak, and it genuinely made me want to know you better.",
    // Graphic: Abstract gradient ring
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="14" stroke="#8EA7FF" stroke-width="1" stroke-opacity="0.4"/>
        <circle cx="28" cy="28" r="20" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      </svg>
    `
  },
  {
    number: "05",
    label: "MY EXPECTATION",
    text: "I don't hold rigid expectations. What matters most to me is comfort, honesty, and mutual effort. A space where neither of us feels like we have to perform or pretend to be anyone else.",
    // Graphic: Minimal waveform
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="16" y1="28" x2="16" y2="28" stroke="#8EA7FF" stroke-width="2" stroke-linecap="round"/>
        <line class="anim-wave" x1="22" y1="22" x2="22" y2="34" stroke="#8EA7FF" stroke-width="1.5" stroke-linecap="round"/>
        <line class="anim-wave" x1="28" y1="18" x2="28" y2="38" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round"/>
        <line class="anim-wave" x1="34" y1="24" x2="34" y2="32" stroke="#8EA7FF" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="40" y1="28" x2="40" y2="28" stroke="#8EA7FF" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    number: "06",
    label: "NO PRESSURE",
    text: "You don't owe me any particular answer. I would rather know what you genuinely feel than receive a polite response you think I want to hear. Real respect starts with leaving room for absolute honesty.",
    // Graphic: Slowly expanding ring
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="anim-circle" cx="28" cy="28" r="18" stroke="#8EA7FF" stroke-width="1.2" stroke-dasharray="3 3"/>
        <circle cx="28" cy="28" r="4" fill="rgba(255,255,255,0.4)"/>
      </svg>
    `
  },
  {
    number: "07",
    label: "WHY I'M TELLING YOU THIS",
    text: "I built this clean page instead of sending a wall of text on WhatsApp because how a thought is delivered matters. It gave me a chance to slow down, be deliberate, and speak with real intention.",
    // Graphic: Constellation dots
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="2" fill="rgba(255,255,255,0.7)"/>
        <circle cx="38" cy="24" r="2" fill="#8EA7FF"/>
        <circle cx="28" cy="38" r="2.5" fill="#8EA7FF"/>
        <line x1="18" y1="20" x2="28" y2="38" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
        <line x1="38" y1="24" x2="28" y2="38" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      </svg>
    `
  },
  {
    number: "08",
    label: "ONE LAST THING",
    text: "Before we move on, I wanted to step beyond digital screens and suggest meeting in person. Everything feels more grounded when you're actually sharing the same room.",
    // Graphic: Single glowing point
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="2" fill="#FFFFFF"/>
        <circle class="anim-circle" cx="28" cy="28" r="10" stroke="#8EA7FF" stroke-width="1"/>
        <circle cx="28" cy="28" r="22" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      </svg>
    `
  }
];

const finalMessage = "I’d really like to meet you in person and see where this connection naturally leads. Screens are great for staying in touch, but sitting across from each other is the only real way to know if our energy aligns. Take your time, think about it, and let me know what feels comfortable for you.";

/**
 * ============================================================================
 * STATE MANAGEMENT & DOM ELEMENTS
 * ============================================================================
 */

let currentChapterIndex = 0;
let isTransitioning = false;

// Stage Screens
const introScreen = document.getElementById("introScreen");
const chapterScreen = document.getElementById("chapterScreen");
const finalScreen = document.getElementById("finalScreen");
const sentScreen = document.getElementById("sentScreen");

// App Header / Progress
const stepIndicator = document.getElementById("stepIndicator");

// Chapter Stage Elements
const chapterContainer = document.getElementById("chapterContainer");
const chapterNum = document.getElementById("chapterNum");
const chapterLabel = document.getElementById("chapterLabel");
const chapterText = document.getElementById("chapterText");
const chapterGraphic = document.getElementById("chapterGraphic");
const btnNextChapter = document.getElementById("btnNextChapter");

// Final Stage Elements
const finalMessageText = document.getElementById("finalMessageText");
const radioButtons = document.querySelectorAll('input[name="meetChoice"]');
const dateInputWrap = document.getElementById("dateInputWrap");
const customDateInput = document.getElementById("customDateInput");
const reasonInputWrap = document.getElementById("reasonInputWrap");
const reasonTextInput = document.getElementById("reasonTextInput");
const btnSubmitResponse = document.getElementById("btnSubmitResponse");
const submitBtnText = document.getElementById("submitBtnText");

/**
 * ============================================================================
 * INITIALIZATION & EVENT LISTENERS
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Populate final message paragraph
  finalMessageText.textContent = finalMessage;

  // Restrict date input to today onwards
  const todayIso = new Date().toISOString().split("T")[0];
  customDateInput.setAttribute("min", todayIso);

  // Start experience
  document.getElementById("btnStart").addEventListener("click", startExperience);

  // Next chapter action
  btnNextChapter.addEventListener("click", handleNextChapter);

  // Radio button choice changes
  radioButtons.forEach(radio => {
    radio.addEventListener("change", handleOptionChange);
  });

  // Dynamic validation listeners for inputs
  customDateInput.addEventListener("input", validateResponse);
  reasonTextInput.addEventListener("input", validateResponse);

  // Submit response via WhatsApp
  btnSubmitResponse.addEventListener("click", sendWhatsAppResponse);
});

/**
 * ============================================================================
 * NAVIGATION & TRANSITION LOGIC
 * ============================================================================
 */

function startExperience() {
  switchScreen(introScreen, chapterScreen, () => {
    renderChapter(0);
    updateProgress(1, chapters.length);
    stepIndicator.classList.add("visible");
  });
}

function handleNextChapter() {
  if (isTransitioning) return;

  if (currentChapterIndex < chapters.length - 1) {
    currentChapterIndex++;
    animateChapterTransition(() => {
      renderChapter(currentChapterIndex);
      updateProgress(currentChapterIndex + 1, chapters.length);
    });
  } else {
    // Transition from Chapter 8 into the Final Section
    stepIndicator.classList.remove("visible");
    switchScreen(chapterScreen, finalScreen, () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function renderChapter(index) {
  const item = chapters[index];
  chapterNum.textContent = item.number;
  chapterLabel.textContent = item.label;
  chapterText.textContent = item.text;
  chapterGraphic.innerHTML = item.graphicSvg;
}

function updateProgress(current, total) {
  const cStr = String(current).padStart(2, "0");
  const tStr = String(total).padStart(2, "0");
  stepIndicator.textContent = `${cStr} / ${tStr}`;
}

/**
 * Smooth transition between chapters within the same stage
 */
function animateChapterTransition(renderCallback) {
  isTransitioning = true;
  chapterContainer.classList.remove("transition-in");
  chapterContainer.classList.add("transition-out");

  setTimeout(() => {
    renderCallback();
    chapterContainer.classList.remove("transition-out");
    chapterContainer.classList.add("transition-in");

    setTimeout(() => {
      chapterContainer.classList.remove("transition-in");
      isTransitioning = false;
    }, 700);
  }, 500);
}

/**
 * Screen-to-screen full stage switcher
 */
function switchScreen(fromScreen, toScreen, onComplete) {
  const fromContent = fromScreen.querySelector(".stage-content");
  const toContent = toScreen.querySelector(".stage-content");

  if (fromContent) fromContent.classList.add("transition-out");

  setTimeout(() => {
    fromScreen.classList.remove("active");
    if (fromContent) fromContent.classList.remove("transition-out");

    toScreen.classList.add("active");
    if (toContent) {
      toContent.classList.add("transition-in");
      setTimeout(() => {
        toContent.classList.remove("transition-in");
      }, 700);
    }

    if (typeof onComplete === "function") onComplete();
  }, 500);
}

/**
 * ============================================================================
 * INTERACTIVE RESPONSE & ACCORDION BEHAVIOR
 * ============================================================================
 */

function handleOptionChange(e) {
  const selectedValue = e.target.value;

  // Highlight active row wrapper
  document.querySelectorAll(".choice-row").forEach(row => {
    row.classList.remove("is-selected");
  });
  e.target.closest(".choice-row").classList.add("is-selected");

  // Reset conditional fields state
  dateInputWrap.classList.remove("open");
  dateInputWrap.setAttribute("aria-hidden", "true");
  customDateInput.disabled = true;

  reasonInputWrap.classList.remove("open");
  reasonInputWrap.setAttribute("aria-hidden", "true");
  reasonTextInput.disabled = true;

  if (selectedValue === "opt1") {
    // 2 October selected
    validateResponse();
  } else if (selectedValue === "opt2") {
    // Another date selected -> Open datepicker
    dateInputWrap.classList.add("open");
    dateInputWrap.setAttribute("aria-hidden", "false");
    customDateInput.disabled = false;
    setTimeout(() => customDateInput.focus(), 300);
    validateResponse();
  } else if (selectedValue === "opt3") {
    // Decline option -> Open reason textarea
    reasonInputWrap.classList.add("open");
    reasonInputWrap.setAttribute("aria-hidden", "false");
    reasonTextInput.disabled = false;
    setTimeout(() => reasonTextInput.focus(), 300);
    validateResponse();
  }
}

function validateResponse() {
  const selectedRadio = document.querySelector('input[name="meetChoice"]:checked');

  if (!selectedRadio) {
    btnSubmitResponse.disabled = true;
    return false;
  }

  let isValid = false;

  if (selectedRadio.value === "opt1") {
    isValid = true;
  } else if (selectedRadio.value === "opt2") {
    isValid = customDateInput.value.trim() !== "";
  } else if (selectedRadio.value === "opt3") {
    isValid = reasonTextInput.value.trim().length > 0;
  }

  btnSubmitResponse.disabled = !isValid;
  return isValid;
}

/**
 * ============================================================================
 * WHATSAPP MESSAGE GENERATION & DISPATCH
 * ============================================================================
 */

function sendWhatsAppResponse() {
  if (!validateResponse()) return;

  const selectedRadio = document.querySelector('input[name="meetChoice"]:checked');
  let choiceFormatted = "";
  let detailFormatted = "";

  if (selectedRadio.value === "opt1") {
    choiceFormatted = "Let's meet on 2 October.";
  } else if (selectedRadio.value === "opt2") {
    choiceFormatted = "I'd prefer another date.";
    detailFormatted = `Proposed Date: ${customDateInput.value}`;
  } else if (selectedRadio.value === "opt3") {
    choiceFormatted = "I don't want to meet.";
    detailFormatted = `Reason: ${reasonTextInput.value.trim()}`;
  }

  // Construct readable WhatsApp message template
  let messageLines = [
    "Hey, I went through everything.",
    "",
    "My response:",
    choiceFormatted
  ];

  if (detailFormatted) {
    messageLines.push(detailFormatted);
  }

  messageLines.push("");
  messageLines.push("— Sent through the little page you made for me.");

  const completeMessage = messageLines.join("\n");
  const encodedText = encodeURIComponent(completeMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  // Visual feedback on button
  btnSubmitResponse.disabled = true;
  submitBtnText.textContent = "Preparing your response…";

  setTimeout(() => {
    // Open WhatsApp in a new tab/window on desktop or launch app on mobile
    window.open(whatsappUrl, "_blank");

    // Transition to the final quiet confirmation screen
    switchScreen(finalScreen, sentScreen);
  }, 700);
}
