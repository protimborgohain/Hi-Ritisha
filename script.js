/**
 * ============================================================================
 * EDITABLE CONTENT & CONFIGURATION
 * ============================================================================
 */

const WHATSAPP_NUMBER = "918011595012";

const chapters = [
  {
    number: "01",
    label: "MY INTENTION",
    text: "This isn’t something I built to impress you. I just wanted to be straightforward about what I feel and what I'm looking for, without rushing through texts on chat.",
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="16" stroke="rgba(255,255,255,0.15)" stroke-width="1.2"/>
        <circle class="anim-circle" cx="28" cy="28" r="6" fill="#8EA7FF" fill-opacity="0.3" stroke="#8EA7FF" stroke-width="1.2"/>
      </svg>
    `
  },
  {
    number: "02",
    label: "THINK OF ME AS A FRIEND FIRST",
    text: "To be completely clear: I am not looking to jump blindly into a relationship or force any tags on this. Think of me as a friend first. Good things only grow when two people can comfortably talk, laugh, and be themselves without false expectations.",
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14" y1="28" x2="42" y2="28" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
        <line x1="28" y1="14" x2="28" y2="42" stroke="#8EA7FF" stroke-width="1.2"/>
      </svg>
    `
  },
  {
    number: "03",
    label: "WHY NOT JUST CHAT ONLINE?",
    text: "Chatting on phones for months can feel comfortable, but it often creates an illusion. I genuinely respect your time and my time, and I don't want to waste either of ours. Meeting in person is the only honest way to see if our real vibe and conversation actually match.",
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
    label: "WHAT I NOTICE IN YOU",
    text: "Ritisha, in our conversations so far, I really liked your simplicity and honest perspective. It felt grounded and refreshing, and it made me curious to know the real person behind the screen.",
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="14" stroke="#8EA7FF" stroke-width="1" stroke-opacity="0.4"/>
        <circle cx="28" cy="28" r="20" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      </svg>
    `
  },
  {
    number: "05",
    label: "WHAT I VALUE",
    text: "I value simple honesty, clear communication, and equal effort. No pretending, no games. Just two people being comfortable and direct with each other.",
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
    label: "NO PRESSURE AT ALL",
    text: "You do not owe me any particular answer. I would rather hear what you truly feel than get a polite reply just to make me happy. Take this at whatever pace you feel comfortable with.",
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="anim-circle" cx="28" cy="28" r="18" stroke="#8EA7FF" stroke-width="1.2" stroke-dasharray="3 3"/>
        <circle cx="28" cy="28" r="4" fill="rgba(255,255,255,0.4)"/>
      </svg>
    `
  },
  {
    number: "07",
    label: "WHY THIS LITTLE PAGE",
    text: "I made this simple page instead of sending a big paragraph over WhatsApp because I wanted to take the time to put my thoughts across calmly and clearly.",
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
    text: "Which brings me to the point of asking: let's catch up over coffee or food in person. Simple, easy, and no pressure at all.",
    graphicSvg: `
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="2" fill="#FFFFFF"/>
        <circle class="anim-circle" cx="28" cy="28" r="10" stroke="#8EA7FF" stroke-width="1"/>
        <circle cx="28" cy="28" r="22" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      </svg>
    `
  }
];

const finalMessage = "I’d really like to meet you in person as friends and see how we get along in real life. I value both our time, and sitting across each other is the only real way to know if our energy matches. Take your time, think about it, and give me your honest answer.";

/**
 * ============================================================================
 * STATE MANAGEMENT & DOM ELEMENTS
 * ============================================================================
 */

let currentChapterIndex = 0;
let isTransitioning = false;

const introScreen = document.getElementById("introScreen");
const chapterScreen = document.getElementById("chapterScreen");
const finalScreen = document.getElementById("finalScreen");
const sentScreen = document.getElementById("sentScreen");

const stepIndicator = document.getElementById("stepIndicator");

const chapterContainer = document.getElementById("chapterContainer");
const chapterNum = document.getElementById("chapterNum");
const chapterLabel = document.getElementById("chapterLabel");
const chapterText = document.getElementById("chapterText");
const chapterGraphic = document.getElementById("chapterGraphic");
const btnNextChapter = document.getElementById("btnNextChapter");

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
  finalMessageText.textContent = finalMessage;

  const todayIso = new Date().toISOString().split("T")[0];
  customDateInput.setAttribute("min", todayIso);

  document.getElementById("btnStart").addEventListener("click", startExperience);
  btnNextChapter.addEventListener("click", handleNextChapter);

  radioButtons.forEach(radio => {
    radio.addEventListener("change", handleOptionChange);
  });

  customDateInput.addEventListener("input", validateResponse);
  reasonTextInput.addEventListener("input", validateResponse);

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
 * INTERACTIVE RESPONSE
 * ============================================================================
 */

function handleOptionChange(e) {
  const selectedValue = e.target.value;

  document.querySelectorAll(".choice-row").forEach(row => {
    row.classList.remove("is-selected");
  });
  e.target.closest(".choice-row").classList.add("is-selected");

  dateInputWrap.classList.remove("open");
  dateInputWrap.setAttribute("aria-hidden", "true");
  customDateInput.disabled = true;

  reasonInputWrap.classList.remove("open");
  reasonInputWrap.setAttribute("aria-hidden", "true");
  reasonTextInput.disabled = true;

  if (selectedValue === "opt1") {
    validateResponse();
  } else if (selectedValue === "opt2") {
    dateInputWrap.classList.add("open");
    dateInputWrap.setAttribute("aria-hidden", "false");
    customDateInput.disabled = false;
    setTimeout(() => customDateInput.focus(), 300);
    validateResponse();
  } else if (selectedValue === "opt3") {
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
 * WHATSAPP MESSAGE DISPATCH
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
  messageLines.push("- Sent through the little page you made for me😊");

  const completeMessage = messageLines.join("\n");
  const encodedText = encodeURIComponent(completeMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  btnSubmitResponse.disabled = true;
  submitBtnText.textContent = "Preparing your response…";

  setTimeout(() => {
    window.open(whatsappUrl, "_blank");
    switchScreen(finalScreen, sentScreen);
  }, 700);
}
