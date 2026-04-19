/* ==============================================
   Difficulty mode
   true = Easy (all phoneme combinations allowed)
   false = Hard (only words from the list)
   =============================================== */
let ACCEPT_ALL_WORDS = true;

/* ====================
   High contrast mode
   ==================== */
let HIGH_CONTRAST_MODE = false;
let LIGHT_MODE = false;

/* ====================================================
   Variety mode
   RP = Received Pronunciation, GA = General American
   ===================================================== */
let VARIETY_MODE;

/* =======================================
   Keyboard layout mode 
   DE = QWERTZ, UK = QWERTY, FR = AZERTY
   ======================================= */
let KEYBOARD_LAYOUT;

/* ==================
   Background mode
   ================== */
let BACKGROUND_MODE; // 'NO', 'one', 'two', 'three'

/* ===============================================
   Automatic phoneme combinations during typing
   e.g., e + ɪ combines to eɪ
   ================================================ */
const PHONEME_COMBINATIONS = new Set([
  // Diphthongs
  "eɪ", // FACE
  "aɪ", // PRICE
  "ɔɪ", // CHOICE
  "əʊ", // GOAT
  "oʊ", // GOAT (GA)
  "aʊ", // MOUTH
  "ɪə", // NEAR
  "eə", // SQUARE
  "ʊə", // CURE

  // Long vowels
  "ɜː", // NURSE
  "iː", // FLEECE
  "uː", // GOOSE
  "ɔː", // THOUGHT
  "ɑː", // START

  // Rhotic vowels (GA only)
  "ɝː",

  // Affricates
  "tʃ",
  "dʒ",

  // Flapped t (GA only)
  "t̬",
]);

// ɜ, ɑ, ɝ only exist as part of long vowels; ˞ is the rhotic marker; ː is the length mark
const EXCLUDED_PARTIAL_SYMBOLS = ["ɜ", "ɑ", "ɝ", "˞", "ː"];
// t̬ and ə˞ have dedicated keys, so 't' and 'ə' should not partially match them
const COMBINATIONS_WITH_DEDICATED_KEYS = ["t̬", "ə˞"];
// ɜ, ɑ, ɝ have no standalone form, their key colour should always reflect their combination
const COMBINATION_ONLY_COMPONENTS = new Set(["ɜ", "ɑ", "ɝ"]);
// Keyboard coloring priority: higher number wins
const KEY_COLOR_PRIORITIES = { correct: 5, present: 4, "partial-correct": 3, "partial-present": 2, absent: 1 };

/* =================================================================
   IPA keyboard layout - QWERTZ-based
   Format: [QWERTZ key, IPA symbol]
   ================================================================= */
const IPA_LAYOUT = [
  // Row 1
  [
    ["1", "ɪ"],
    ["2", "æ"],
    ["3", "ɜ"],
    ["4", "ɝ"],
    ["5", "ʌ"],
    ["6", "ə"],
    ["7", "ɚ"],
    ["8", "ʃ"],
    ["9", "ʒ"],
    ["0", "θ"],
    ["ß", "ð"],
  ],
  // Row 2
  [
    ["q", "ɑ"],
    ["w", "w"],
    ["e", "e"],
    ["r", "r"],
    ["t", "t"],
    ["z", "z"],
    ["u", "u"],
    ["i", "i"],
    ["o", "o"],
    ["p", "p"],
    ["ü", "t̬"],
  ],
  // Row 3
  [
    ["a", "a"],
    ["s", "s"],
    ["d", "d"],
    ["f", "f"],
    ["g", "ɡ"],
    ["h", "h"],
    ["j", "j"],
    ["k", "k"],
    ["l", "l"],
  ],
  // Row 4
  [
    ["y", "ʊ"],
    ["x", "ɒ"],
    ["c", "ɔ"],
    ["v", "v"],
    ["b", "b"],
    ["n", "n"],
    ["m", "m"],
    [",", "ŋ"],
    [".", "ː"],
  ],
];

/* =================================================================
   IPA keyboard layout - QWERTY-based
   Format: [QWERTY key, IPA symbol]
   ================================================================= */
const IPA_LAYOUT_ENG = [
  // Row 1
  [
    ["1", "ɪ"],
    ["2", "æ"],
    ["3", "ɜ"],
    ["4", "ɝ"],
    ["5", "ʌ"],
    ["6", "ə"],
    ["7", "ɚ"],
    ["8", "ʃ"],
    ["9", "ʒ"],
    ["0", "θ"],
    ["-", "ð"],
  ],
  // Row 2
  [
    ["q", "ɑ"],
    ["w", "w"],
    ["e", "e"],
    ["r", "r"],
    ["t", "t"],
    ["y", "ʊ"],
    ["u", "u"],
    ["i", "i"],
    ["o", "o"],
    ["p", "p"],
    ["[", "t̬"],
  ],
  // Row 3
  [
    ["a", "a"],
    ["s", "s"],
    ["d", "d"],
    ["f", "f"],
    ["g", "ɡ"],
    ["h", "h"],
    ["j", "j"],
    ["k", "k"],
    ["l", "l"],
  ],
  // Row 4
  [
    ["z", "z"],
    ["x", "ɒ"],
    ["c", "ɔ"],
    ["v", "v"],
    ["b", "b"],
    ["n", "n"],
    ["m", "m"],
    [",", "ŋ"],
    [".", "ː"],
  ],
];

/* =================================================================
   IPA keyboard layout - AZERTY-based
   Format: [AZERTY key, IPA symbol]
   ================================================================= */
const IPA_LAYOUT_FR = [
  // Row 1
  [
    ["&", "ɪ"],
    ["é", "æ"],
    ['"', "ɜ"],
    ["'", "ɝ"],
    ["(", "ʌ"],
    ["-", "ə"],
    ["è", "ɚ"],
    ["_", "ʃ"],
    ["ç", "ʒ"],
    ["à", "θ"],
    [")", "ð"],
  ],
  // Row 2
  [
    ["a", "a"],
    ["z", "z"],
    ["e", "e"],
    ["r", "r"],
    ["t", "t"],
    ["y", "ʊ"],
    ["u", "u"],
    ["i", "i"],
    ["o", "o"],
    ["p", "p"],
  ],
  // Row 3
  [
    ["q", "ɑ"],
    ["s", "s"],
    ["d", "d"],
    ["f", "f"],
    ["g", "ɡ"],
    ["h", "h"],
    ["j", "j"],
    ["k", "k"],
    ["l", "l"],
    ["m", "m"],
  ],
  // Row 4
  [
    ["w", "w"],
    ["x", "ɒ"],
    ["c", "ɔ"],
    ["v", "v"],
    ["b", "b"],
    ["n", "n"],
    [",", "ŋ"],
    [";", "t̬"],
    [":", "ː"],
  ],
];

// Returns the current keyboard layout based on KEYBOARD_LAYOUT setting
function getCurrentLayout() {
  switch (KEYBOARD_LAYOUT) {
    case "UK":
      return IPA_LAYOUT_ENG;
    case "FR":
      return IPA_LAYOUT_FR;
    default:
      return IPA_LAYOUT; // default
  }
}

/* =================================================================
   Persistent settings (saved to localStorage)
   Declared before game variables so VARIETY_MODE and KEYBOARD_LAYOUT
   are correct when initial word is selected
   ================================================================= */
const SETTINGS_STORAGE_KEY = "phonologically_settings";
const SETTINGS_DEFAULTS = { variety: "RP", keyboard: "DE", background: "NO", highContrast: false, lightMode: false, difficulty: true };

function loadSettings() {
  const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (saved) {
    try {
      return { ...SETTINGS_DEFAULTS, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
  }
  return { ...SETTINGS_DEFAULTS };
}

function saveSettings() {
  localStorage.setItem(
    SETTINGS_STORAGE_KEY,
    JSON.stringify({
      variety: VARIETY_MODE,
      keyboard: KEYBOARD_LAYOUT,
      background: BACKGROUND_MODE,
      highContrast: HIGH_CONTRAST_MODE,
      lightMode: LIGHT_MODE,
      difficulty: ACCEPT_ALL_WORDS,
    }),
  );
}

const savedSettings = loadSettings();
VARIETY_MODE = savedSettings.variety;
KEYBOARD_LAYOUT = savedSettings.keyboard;
BACKGROUND_MODE = savedSettings.background;
HIGH_CONTRAST_MODE = savedSettings.highContrast;
LIGHT_MODE = savedSettings.lightMode;
ACCEPT_ALL_WORDS = savedSettings.difficulty;

/* ================
   Game variables
   ================ */
let targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
let targetWordVariants = getIpaVariants(getIpaForVariety(targetWord));
let targetPhonemesList = targetWordVariants.map((v) => splitIntoPhonemes(v)); // Pre-split all variants
let wordLength = targetPhonemesList[0].length; // Derived from cached phonemes
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let phonemeStates = {}; // Keyboard colours
let keyMap = {}; // key to IPA mapping
let tipUsed = false; // Track if tip has been used this game
let submittedGuesses = []; // Guesses submitted this game (for re-colouring on variety switch)
let messageTimeout = null; // Track message timeout to prevent overlap
let currentAudio = null;

/* ===============================================
   Persistent statistics (saved to localStorage)
   =============================================== */
const STATS_STORAGE_KEY = "phonologically_stats";
const STATS_DEFAULTS = {
  gamesPlayed: 0,
  gamesWon: 0,
  winsByAttempt: [0, 0, 0, 0, 0, 0],
  currentStreak: 0,
  maxStreak: 0,
  lastPlayedDate: null,
};

// Helper to get date as YYYY-MM-DD string
function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Helper to check if two date strings are consecutive days
function isConsecutiveDay(dateStr1, dateStr2) {
  const diffTime = new Date(dateStr2) - new Date(dateStr1);
  return Math.round(diffTime / (1000 * 60 * 60 * 24)) === 1;
}

function loadStats() {
  const saved = localStorage.getItem(STATS_STORAGE_KEY);
  if (saved) {
    try {
      // Merge with defaults to ensure all properties exist (handles old data + future additions)
      return { ...STATS_DEFAULTS, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Failed to load stats:", e);
    }
  }
  return { ...STATS_DEFAULTS, winsByAttempt: [0, 0, 0, 0, 0, 0] };
}

function saveStats() {
  localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(localStats));
}

let localStats = loadStats();

// Reset streak if last played date is more than one day ago
const today = getTodayString();
const lastPlayed = localStats.lastPlayedDate;
if (lastPlayed && lastPlayed !== today && !isConsecutiveDay(lastPlayed, today)) {
  localStats.currentStreak = 0;
  saveStats();
}

// Normalizes IPA string to ensure consistent Unicode representation (fixes ɔː etc.)
function normalizeIPA(ipaString) {
  return ipaString.normalize("NFC");
}

// Removes stress marks (ˈ and ˌ) from IPA string
function stripStress(ipaString) {
  return normalizeIPA(ipaString).replace(/ˈ/g, "").replace(/ˌ/g, "");
}

// Gets the correct IPA transcription from a word object based on variety mode
// Structure: { ipa: 'shared' } OR { rp: 'RP-specific', ga: 'GA-specific' }
function getIpaForVariety(wordObj, variety = VARIETY_MODE) {
  // If shared transcription exists, return it for both varieties
  if (wordObj.ipa) {
    return wordObj.ipa;
  }
  // Otherwise return variety-specific transcription
  return variety === "GA" ? wordObj.ga : wordObj.rp;
}

// Extracts all IPA variants without stress
function getIpaVariants(ipa) {
  if (Array.isArray(ipa)) {
    return ipa.map((variant) => stripStress(variant));
  }
  return [stripStress(ipa)];
}

// Returns IPA with stress for display
function getDisplayIpa(ipa) {
  if (Array.isArray(ipa)) {
    return ipa.join(", ");
  }
  return ipa;
}

/* =============================================================
   Phoneme processing - recognizes combinations like eɪ, ɜː, dʒ
   ============================================================= */
// Splits IPA string into phoneme array
function splitIntoPhonemes(ipaString) {
  // Normalizes the string first to ensure consistent Unicode
  const normalized = normalizeIPA(ipaString);
  const phonemes = [];
  let i = 0;

  while (i < normalized.length) {
    let matched = false;

    // Check 2-3 character combinations
    for (let len = 3; len >= 2; len--) {
      if (i + len <= normalized.length) {
        const substring = normalized.substring(i, i + len);
        if (PHONEME_COMBINATIONS.has(substring)) {
          phonemes.push(substring);
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (!matched) {
      phonemes.push(normalized[i]);
      i++;
    }
  }

  return phonemes;
}

/* ==============================
   Initialization on page load
   ============================== */
function init() {
  createKeyMap();
  createBoard();
  createKeyboard();

  document.addEventListener("keydown", handleKeyPress);
  document
    .getElementById("mobile-new-game-button")
    .addEventListener("click", resetGame);
  document.getElementById("backdrop").addEventListener("click", () => {
    hideWordInfo();
    hideHelpModal();
    hideStatsModal();
    hideInfoModal();
  });
  document.getElementById("help-modal").addEventListener("click", hideHelpModal);
  document.getElementById("stats-modal").addEventListener("click", hideStatsModal);
  document.getElementById("info-modal").addEventListener("click", hideInfoModal);
  document.getElementById("word-info").addEventListener("click", hideWordInfo);
  document.getElementById("tip-item").addEventListener("click", useTip);

  document.getElementById("replay-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    playWordAudio(targetWord.ortho);
  });

  // Ortho reveal: click to remove blur; always block propagation so box doesn't close
  document.getElementById("info-ortho").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("info-ortho").classList.remove("ortho-hidden");
  });

  // settings dropdown
  document
    .getElementById("settings-button")
    .addEventListener("click", toggleSettingsDropdown);
  document.getElementById("help-item").addEventListener("click", () => {
    hideSettingsDropdown();
    showHelpModal();
  });
  document.getElementById("stats-item").addEventListener("click", () => {
    hideSettingsDropdown();
    showStatsModal();
  });
  document.getElementById("info-item").addEventListener("click", () => {
    hideSettingsDropdown();
    showInfoModal();
  });
  document.getElementById("reset-stats").addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent closing modal
    resetStats();
  });
  document
    .getElementById("variety-item")
    .addEventListener("click", toggleVarietyMode);
  document
    .getElementById("keyboard-item")
    .addEventListener("click", cycleKeyboardLayout);
  // Uncomment to enable the background selector button
  // document
  //   .getElementById("background-item")
  //   .addEventListener("click", cycleBackground);
  document
    .getElementById("difficulty-item")
    .addEventListener("click", toggleDifficulty);
  document
    .getElementById("contrast-item")
    .addEventListener("click", toggleHighContrastMode);
  document
    .getElementById("light-item")
    .addEventListener("click", toggleLightMode);

  // close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const settingsContainer = document.querySelector(".settings-container");
    if (!settingsContainer.contains(e.target)) {
      hideSettingsDropdown();
    }
  });

  updateDifficultyDisplay();
  updateHighContrastDisplay();
  updateLightModeDisplay();
  updateVarietyDisplay();
  updateKeyboardLayoutDisplay();
  document.getElementById("variety-watermark").textContent = VARIETY_MODE;
  // updateBackgroundDisplay(); // uncomment to restore background on startup

  document.body.style.visibility = "visible";
}

/* ===========================
   Settings dropdown toggle
   =========================== */
function toggleSettingsDropdown() {
  const dropdown = document.getElementById("settings-dropdown");
  const button = document.getElementById("settings-button");
  dropdown.classList.toggle("visible");
  button.classList.toggle("active");
}

function hideSettingsDropdown() {
  const dropdown = document.getElementById("settings-dropdown");
  const button = document.getElementById("settings-button");
  dropdown.classList.remove("visible");
  button.classList.remove("active");
}

/* ============================================
   Show/hide overlays (modals + word-info box)
   ========================================= */
function showOverlay(id) {
  document.body.style.overflow = "hidden";
  document.getElementById("backdrop").classList.add("visible");
  setTimeout(() => document.getElementById(id).classList.add("visible"), 100);
}

function hideOverlay(elementId) {
  const overlays = ["help-modal", "stats-modal", "info-modal", "word-info"];
  document.getElementById(elementId).classList.remove("visible");
  const anyVisible = overlays
    .filter((id) => id !== elementId)
    .some((id) => document.getElementById(id).classList.contains("visible"));
  if (!anyVisible) {
    document.getElementById("backdrop").classList.remove("visible");
    document.body.style.overflow = "";
  }
}

function showHelpModal()  { showOverlay("help-modal"); }
function showStatsModal() { updateStatsDisplay(); showOverlay("stats-modal"); }
function showInfoModal()  { showOverlay("info-modal"); }
function hideHelpModal()  { hideOverlay("help-modal"); }
function hideStatsModal() { hideOverlay("stats-modal"); }
function hideInfoModal()  { hideOverlay("info-modal"); }

function updateStatsDisplay() {
  const playedEl = document.getElementById("stat-played");
  const winPctEl = document.getElementById("stat-win-pct");

  playedEl.textContent = localStats.gamesPlayed;

  const winPct =
    localStats.gamesPlayed > 0
      ? Math.round((localStats.gamesWon / localStats.gamesPlayed) * 100)
      : 0;
  winPctEl.textContent = winPct;

  // Update streak display
  const currentStreakEl = document.getElementById("stat-current-streak");
  const maxStreakEl = document.getElementById("stat-max-streak");
  const streakFlame = document.getElementById("streak-flame");
  currentStreakEl.textContent = localStats.currentStreak;
  maxStreakEl.textContent = localStats.maxStreak;
  streakFlame.classList.toggle("active", localStats.currentStreak > 0);

  // Update distribution bars
  const maxGuesses = Math.max(...localStats.winsByAttempt, 1);

  for (let i = 0; i < 6; i++) {
    const bar = document.querySelector(`.distribution-bar[data-row="${i}"]`);
    const count = localStats.winsByAttempt[i];
    const percentage = (count / maxGuesses) * 100;

    bar.style.width = count > 0 ? `${Math.max(percentage, 8)}%` : "0%";
    bar.querySelector("span").textContent = count;
  }
}

function recordGameResult(won, guessCount) {
  const todayStr = getTodayString();
  const lastPlayed = localStats.lastPlayedDate;

  localStats.gamesPlayed++;
  if (won) {
    localStats.gamesWon++;
    localStats.winsByAttempt[guessCount - 1]++;
  }

  // Update streak
  if (lastPlayed !== todayStr) {
    if (lastPlayed && isConsecutiveDay(lastPlayed, todayStr)) {
      localStats.currentStreak++;
    } else {
      localStats.currentStreak = 1;
    }
    if (localStats.currentStreak > localStats.maxStreak) {
      localStats.maxStreak = localStats.currentStreak;
    }
    localStats.lastPlayedDate = todayStr;
  }

  saveStats();
}

function resetStats() {
  if (
    confirm(
      "Are you sure you want to reset your statistics?",
    )
  ) {
    localStats = { ...STATS_DEFAULTS, winsByAttempt: [0, 0, 0, 0, 0, 0] };
    saveStats();
    updateStatsDisplay();
    showMessage("Statistics reset");
  }
}

/* =======================
   Toggle difficulty mode
   ======================== */
function toggleDifficulty() {
  ACCEPT_ALL_WORDS = !ACCEPT_ALL_WORDS;
  saveSettings();
  updateDifficultyDisplay();

  const mode = ACCEPT_ALL_WORDS ? "Easy" : "Difficult";
  const description = ACCEPT_ALL_WORDS
    ? "any phoneme combination accepted"
    : "only words from the word list accepted";
  showMessage(`${mode}: ${description}`);
}

function updateToggleDisplay(itemId, isActive, bodyClass = null) {
  const item = document.getElementById(itemId);
  const toggle = item.querySelector(".toggle-switch");
  item.classList.toggle("active", isActive);
  toggle.setAttribute("aria-checked", String(isActive));
  if (bodyClass) document.body.classList.toggle(bodyClass, isActive);
}

function updateDifficultyDisplay()   { updateToggleDisplay("difficulty-item", !ACCEPT_ALL_WORDS); }

/* =============================
   Toggle high contrast mode
   ============================= */
function toggleHighContrastMode() {
  HIGH_CONTRAST_MODE = !HIGH_CONTRAST_MODE;
  saveSettings();
  updateHighContrastDisplay();

  const mode = HIGH_CONTRAST_MODE ? "High Contrast: On" : "High Contrast: Off";
  showMessage(mode);
}

function updateHighContrastDisplay() { updateToggleDisplay("contrast-item", HIGH_CONTRAST_MODE, "high-contrast-mode"); }

/* =======================
   Toggle light mode
   ======================= */
function toggleLightMode() {
  LIGHT_MODE = !LIGHT_MODE;
  saveSettings();
  updateLightModeDisplay();

  const mode = LIGHT_MODE ? "Light Theme: On" : "Light Theme: Off";
  showMessage(mode);
}

function updateLightModeDisplay() { updateToggleDisplay("light-item", LIGHT_MODE, "light-mode"); }

/* ==========================
   Tip reveals first phoneme
   ========================== */
function isFirstPhonemeFound() {
  // check if any previous row has the first tile marked as correct
  for (let row = 0; row < currentRow; row++) {
    const firstTile = document.querySelector(
      `[data-row="${row}"][data-col="0"]`,
    );
    if (firstTile && firstTile.classList.contains("correct")) {
      return true;
    }
  }
  return false;
}

function updateTipButtonState() {
  document.getElementById("tip-item").classList.toggle("disabled", tipUsed || isFirstPhonemeFound());
}

function useTip() {
  if (tipUsed || gameOver || isFirstPhonemeFound()) return;

  tipUsed = true;
  const tipItem = document.getElementById("tip-item");
  tipItem.classList.add("disabled");

  // Get the first phoneme of the target word (from pre-cached list)
  const firstPhoneme = targetPhonemesList[0][0];

  // Fill the first tile of the current row with the first phoneme
  const firstTile = document.querySelector(
    `[data-row="${currentRow}"][data-col="0"]`,
  );

  firstTile.textContent = firstPhoneme;
  firstTile.classList.add("filled");
  if (currentTile === 0) currentTile = 1;

  hideSettingsDropdown();
  showMessage(`First phoneme: ${firstPhoneme}`);
}

/* =====================
   Toggle variety mode
   ===================== */
function toggleVarietyMode() {
  VARIETY_MODE = VARIETY_MODE === "RP" ? "GA" : "RP";
  saveSettings();
  updateVarietyDisplay();
  document.getElementById("variety-watermark").textContent = VARIETY_MODE;
  showMessage(`Variety: ${VARIETY_MODE}`);

  // Update target word variants for new variety without resetting game
  targetWordVariants = getIpaVariants(getIpaForVariety(targetWord));
  targetPhonemesList = targetWordVariants.map((v) => splitIntoPhonemes(v));
  const newWordLength = targetPhonemesList[0].length;

  // Only reset if phoneme count changed (rare)
  if (newWordLength !== wordLength) {
    resetGame();
  } else if (!targetWord.ipa) {
    // Only recolour if word has variety-specific transcriptions
    // Shared words produce identical colours in both varieties
    recolorBoard();
  }
}

function clearKeyboardColors() {
  document.querySelectorAll(".key").forEach((key) => {
    key.classList.remove("correct", "present", "absent", "partial-correct", "partial-present");
  });
}

/* ==========================================================
   Re-colours all submitted guesses after a variety switch
   ========================================================== */
function recolorBoard() {
  // Reset keyboard
  phonemeStates = {};
  clearKeyboardColors();

  // Reset tile colours and re-apply for each submitted guess
  for (let row = 0; row < submittedGuesses.length; row++) {
    document.querySelectorAll(`[data-row="${row}"]`).forEach((tile) => {
      tile.classList.remove("correct", "present", "absent", "partial-correct", "partial-present");
    });
    revealTiles(splitIntoPhonemes(submittedGuesses[row]), row, false);
  }
}

function updateVarietyDisplay() {
  const indicator = document.getElementById("variety-indicator");
  indicator.textContent = VARIETY_MODE;
  // Update body class for info-modal variety-specific content
  document.body.classList.remove("variety-rp", "variety-ga");
  document.body.classList.add(VARIETY_MODE === "RP" ? "variety-rp" : "variety-ga");
}

/* =======================
   Cycle keyboard layout
   ======================= */
function cycleKeyboardLayout() {
  const layouts = ["DE", "UK", "FR"];
  const currentIndex = layouts.indexOf(KEYBOARD_LAYOUT);
  KEYBOARD_LAYOUT = layouts[(currentIndex + 1) % layouts.length];
  saveSettings();

  updateKeyboardLayoutDisplay();

  // Recreate key mapping and keyboard for new layout
  createKeyMap();
  createKeyboard();

  // Reapply keyboard colours from current game state
  for (const [phoneme, state] of Object.entries(phonemeStates)) {
    const key = findKeyElement(phoneme);
    if (key) key.classList.add(state);
  }

  const layoutNames = { DE: "QWERTZ", UK: "QWERTY", FR: "AZERTY" };
  showMessage(`Keyboard: ${layoutNames[KEYBOARD_LAYOUT]}`);
}

function updateKeyboardLayoutDisplay() {
  const indicator = document.getElementById("keyboard-indicator");
  indicator.textContent = KEYBOARD_LAYOUT;
}

// Uncomment to enable background cycling
// function cycleBackground() {
//   const modes = ["NO", "one", "two", "three"];
//   const currentIndex = modes.indexOf(BACKGROUND_MODE);
//   BACKGROUND_MODE = modes[(currentIndex + 1) % modes.length];
//   saveSettings();
//   updateBackgroundDisplay();
// }
//
// function updateBackgroundDisplay() {
//   document.body.classList.remove("bg-one", "bg-two", "bg-three");
//   if (BACKGROUND_MODE !== "NO") {
//     document.body.classList.add(`bg-${BACKGROUND_MODE}`);
//   }
//   const indicator = document.getElementById("background-indicator");
//   const labels = { NO: "NO", one: "01", two: "02", three: "03" };
//   indicator.textContent = labels[BACKGROUND_MODE];
// }

/* ===================================================
   Creates key mapping from physical keyboard to IPA
   ===================================================*/
function createKeyMap() {
  keyMap = {}; // Clear existing mappings
  const layout = getCurrentLayout();
  layout.forEach((row) => {
    row.forEach(([key, ipa]) => {
      keyMap[key.toLowerCase()] = ipa;
    });
  });
}

/* ===================================================
   Creates the game board (6 rows × dynamic columns)
   =================================================== */
function createBoard() {
  const board = document.getElementById("game-board");
  board.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.gridTemplateColumns = `repeat(${wordLength}, 1fr)`;

    for (let j = 0; j < wordLength; j++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.row = i;
      tile.dataset.col = j;
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

/* ===================================================
   Creates the IPA keyboard with physical key labels
   =================================================== */
function createKeyboard() {
  const keyboard = document.getElementById("keyboard");
  keyboard.innerHTML = "";
  const layout = getCurrentLayout();

  layout.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "keyboard-row";

    row.forEach(([physicalKey, ipa]) => {
      const keyButton = document.createElement("button");
      keyButton.className = "key";
      keyButton.dataset.key = ipa;

      const keyLabelSpan = document.createElement("span");
      keyLabelSpan.className = "qwertz";
      keyLabelSpan.textContent = physicalKey.toUpperCase();

      const ipaSpan = document.createElement("span");
      ipaSpan.className = "ipa";
      ipaSpan.textContent = ipa;

      keyButton.appendChild(keyLabelSpan);
      keyButton.appendChild(ipaSpan);
      keyButton.addEventListener("click", () => handleKey(ipa));
      rowDiv.appendChild(keyButton);
    });

    // Add backspace at end of row 1
    if (rowIndex === 0) {
      const backspaceKey = document.createElement("button");
      backspaceKey.className = "key control-key";
      backspaceKey.innerHTML =
        '<span class="qwertz">BKSP</span><span class="ipa"><svg id="mdi-backspace-outline" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12L19,15.59M22,3A2,2 0 0,1 24,5V19A2,2 0 0,1 22,21H7C6.31,21 5.77,20.64 5.41,20.11L0,12L5.41,3.88C5.77,3.35 6.31,3 7,3H22M22,5H7L2.28,12L7,19H22V5Z" /></svg></span>';
      // Apache License 2.0; Material Design Icons (MDI) pack
      backspaceKey.addEventListener("click", () => handleKey("BACKSPACE"));
      rowDiv.appendChild(backspaceKey);
    }

    // Add enter at end of row 3
    if (rowIndex === 2) {
      const enterKey = document.createElement("button");
      enterKey.className = "key control-key";
      enterKey.innerHTML =
        '<span class="qwertz">ENTER</span><span class="ipa">↵</span>';
      enterKey.addEventListener("click", () => handleKey("ENTER"));
      rowDiv.appendChild(enterKey);
    }

    keyboard.appendChild(rowDiv);
  });
}

/* =====================================
   Processing physical keyboard input
   ===================================== */
function handleKeyPress(e) {
  const key = e.key;

  // When the game is over, Enter starts a new game
  if (gameOver) {
    if (key === "Enter") {
      if (currentAudio) return; // Defer new game start until audio playback has finished
      e.preventDefault();
      resetGame();
    }
    return;
  }

  if (key === "Enter") {
    e.preventDefault();
    handleKey("ENTER");
  } else if (key === "Backspace") {
    e.preventDefault();
    handleKey("BACKSPACE");
  } else if (keyMap[key]) {
    e.preventDefault();
    handleKey(keyMap[key]);
  }
}

/* ================================================
   Central key processing (physical and virtual)
   ================================================ */
function handleKey(key) {
  if (gameOver) {
    if (key === "ENTER" && !currentAudio) resetGame();
    return;
  }

  if (key === "ENTER") {
    submitGuess();
  } else if (key === "BACKSPACE") {
    deletePhoneme();
  } else if (currentTile < wordLength || canFormCombination(key)) {
    addPhoneme(key);
  }
}

/* ===========================================================
   Check if a new character can be combined with the last one
   ========================================================== */
function canFormCombination(newKey) {
  if (currentTile === 0) return false;
  const lastFilledTile = document.querySelector(
    `[data-row="${currentRow}"][data-col="${wordLength - 1}"]`,
  );
  if (!lastFilledTile || !lastFilledTile.textContent) return false;
  const lastChar = lastFilledTile.textContent;
  const testSequence = lastChar + newKey;
  return PHONEME_COMBINATIONS.has(testSequence);
}

/* ===========================
   Add phoneme in last tile
   =========================== */
function addPhoneme(phoneme) {
  if (currentTile >= wordLength) {
    // temporarily add to a virtual extra tile for combination checking
    const lastTile = document.querySelector(
      `[data-row="${currentRow}"][data-col="${wordLength - 1}"]`,
    );
    const lastChar = lastTile.textContent;
    const testSequence = lastChar + phoneme;

    if (PHONEME_COMBINATIONS.has(testSequence)) {
      // Replace last tile with combined character
      lastTile.textContent = testSequence;
    }
    return;
  }

  const tile = document.querySelector(
    `[data-row="${currentRow}"][data-col="${currentTile}"]`,
  );
  tile.textContent = phoneme;
  tile.classList.add("filled");
  currentTile++;
  checkAndMergePhonemeCombinations();
}

/* =======================================
   Check and merge phoneme combinations
   ====================================== */
function checkAndMergePhonemeCombinations() {
  if (currentTile < 2) return;

  for (let len = 3; len >= 2; len--) {
    if (currentTile < len) continue;

    let sequence = "";
    for (let i = 0; i < len; i++) {
      const tile = document.querySelector(
        `[data-row="${currentRow}"][data-col="${currentTile - len + i}"]`,
      );
      sequence += tile.textContent;
    }

    if (PHONEME_COMBINATIONS.has(sequence)) {
      const combined = sequence;

      // Clear tiles
      for (let i = 0; i < len; i++) {
        const tileIndex = currentTile - len + i;
        const tile = document.querySelector(
          `[data-row="${currentRow}"][data-col="${tileIndex}"]`,
        );
        tile.textContent = "";
        tile.classList.remove("filled");
      }

      // Insert combined character
      currentTile -= len;
      const tile = document.querySelector(
        `[data-row="${currentRow}"][data-col="${currentTile}"]`,
      );
      tile.textContent = combined;
      tile.classList.add("filled");
      currentTile++;
      return;
    }
  }
}

/* =================================
   Deletes last phoneme (backspace)
   ================================= */
function deletePhoneme() {
  if (currentTile > 0) {
    currentTile--;
    const tile = document.querySelector(
      `[data-row="${currentRow}"][data-col="${currentTile}"]`,
    );
    tile.textContent = "";
    tile.classList.remove("filled");
  }
}

/* =========================================
   Collects entered word from current row
   ========================================= */
function getCurrentGuess() {
  let guess = "";
  for (let i = 0; i < wordLength; i++) {
    const tile = document.querySelector(
      `[data-row="${currentRow}"][data-col="${i}"]`,
    );
    guess += tile.textContent;
  }
  return guess;
}

/* ==============================================================
   Checks if word is valid depending on difficulty mode
   In hard mode, validates against current variety (RP or GA)
   =============================================================== */
function isValidWord(word) {
  // split word into phonemes
  const wordPhonemes = splitIntoPhonemes(word);

  if (ACCEPT_ALL_WORDS) {
    // Easy mode: any phoneme combination with correct length is valid
    return wordPhonemes.length === wordLength;
  }

  // Hard mode: only words from the list
  return WORDS.some((w) => {
    const variants = getIpaVariants(getIpaForVariety(w));
    return variants.some((variant) => {
      const phonemes = splitIntoPhonemes(variant);
      return (
        wordPhonemes.length === phonemes.length &&
        wordPhonemes.every((phoneme, i) => phoneme === phonemes[i])
      );
    });
  });
}

/* ===========================
   logic for word submission
   =========================== */
function submitGuess() {
  const guess = getCurrentGuess();
  const guessPhonemes = splitIntoPhonemes(guess);

  // Check if all tiles are actually filled
  if (currentTile < wordLength) {
    showMessage("Not enough phonemes");
    return;
  }

  if (!isValidWord(guess)) {
    showMessage("Not in the list of transcriptions");
    shakeTiles();
    return;
  }

  submittedGuesses.push(guess);
  revealTiles(guessPhonemes);

  // Check for win using pre-cached phoneme lists
  const isWin = targetPhonemesList.some(
    (targetPhonemes) =>
      guessPhonemes.length === targetPhonemes.length &&
      guessPhonemes.every((phoneme, i) => phoneme === targetPhonemes[i]),
  );

  // Calculate delay based on word length; show info box after last tile flips
  // Each tile flips with 300ms delay, so last tile starts at (wordLength-1)*300
  // Add 500ms buffer for the flip animation to complete
  const flipDelay = (wordLength - 1) * 300 + 500;

  if (isWin) {
    gameOver = true;
    recordGameResult(true, currentRow + 1);

    // If an alternate variant was entered, revealTiles coloured against the first variant
    // so some tiles may show wrong colours. Re-colour all tiles green after they've flipped.
    const isCanonicalWin =
      guessPhonemes.length === targetPhonemesList[0].length &&
      guessPhonemes.every((phoneme, i) => phoneme === targetPhonemesList[0][i]);
    if (!isCanonicalWin) {
      const recolorDelay = (wordLength - 1) * 300 + 350;
      setTimeout(() => {
        for (let col = 0; col < wordLength; col++) {
          const tile = document.querySelector(
            `[data-row="${currentRow}"][data-col="${col}"]`,
          );
          tile.classList.remove(
            "correct",
            "present",
            "absent",
            "partial-correct",
            "partial-present",
          );
          tile.classList.add("correct");
        }
      }, recolorDelay);
    }

    setTimeout(() => {
      showWordInfo(true);
    }, flipDelay);
  } else if (currentRow === 5) {
    gameOver = true;
    recordGameResult(false, 6);
    setTimeout(() => {
      showWordInfo(false);
    }, flipDelay);
  } else {
    currentRow++;
    currentTile = 0;
    // Update tip button after first tile has been coloured
    setTimeout(() => updateTipButtonState(), 100);
  }
}

/* =================================================================
   Helper: Check if a single symbol is part of a combination phoneme
   Excludes certain symbols and combinations that have dedicated keys
   ================================================================= */
function isComponentOf(symbol, combination) {
  if (combination.length === 1) return false;
  if (EXCLUDED_PARTIAL_SYMBOLS.includes(symbol)) return false;
  if (COMBINATIONS_WITH_DEDICATED_KEYS.includes(combination)) return false;
  return combination.includes(symbol);
}

/* ====================================================
   Colours tiles based on comparison with target word
   ==================================================== */
function revealTiles(guessChars, rowIndex = currentRow, animate = true) {
  const targetChars = targetPhonemesList[0]; // Use pre-cached phonemes
  const states = new Array(wordLength).fill("absent");
  const targetUsed = new Array(wordLength).fill(false);

  // Mark exact phoneme matches (green)
  for (let i = 0; i < wordLength; i++) {
    if (guessChars[i] === targetChars[i]) {
      states[i] = "correct";
      targetUsed[i] = true;
    }
  }

  // Mark present phonemes in wrong position (yellow)
  for (let i = 0; i < wordLength; i++) {
    if (states[i] === "correct") continue;

    for (let j = 0; j < wordLength; j++) {
      if (!targetUsed[j] && guessChars[i] === targetChars[j]) {
        states[i] = "present";
        targetUsed[j] = true;
        break;
      }
    }
  }

  // Check for partial matches (symbol is part of a combination).
  // We count how many times each component phoneme appears across unmatched target
  // combinations, then give at most that many partial colourings total.
  // This prevents e.g. typing /a/ twice from getting two colorings when /a/ only
  // appears once in the target (as part of /aʊ/).
  // Different components of the same combination (e.g. /a/ and /ʊ/ in /aʊ/) can
  // still each get their own partial coloring, because they have separate counts.

  // Count available component slots in unmatched target combinations
  const componentTargetCount = new Map();
  for (let j = 0; j < wordLength; j++) {
    if (targetUsed[j] || targetChars[j].length <= 1) continue;
    for (const ch of targetChars[j]) {
      if (isComponentOf(ch, targetChars[j])) {
        componentTargetCount.set(ch, (componentTargetCount.get(ch) || 0) + 1);
      }
    }
  }

  // Track how many partial slots have been consumed per component
  const componentUsedCount = new Map();

  // Sub-pass A: partial-correct (component at exact position of its combination).
  // Do this first so that if /a/ is at the right spot, it claims the slot before
  // /a/ at a wrong spot can claim a partial-present.
  for (let i = 0; i < wordLength; i++) {
    if (states[i] !== "absent") continue;
    if (
      guessChars[i].length === 1 &&
      !targetUsed[i] &&
      isComponentOf(guessChars[i], targetChars[i])
    ) {
      const ch = guessChars[i];
      const used = componentUsedCount.get(ch) || 0;
      const avail = componentTargetCount.get(ch) || 0;
      if (used < avail) {
        states[i] = "partial-correct";
        componentUsedCount.set(ch, used + 1);
      }
    }
  }

  // Sub-pass B: partial-present (component exists somewhere in the word, wrong position)
  for (let i = 0; i < wordLength; i++) {
    if (states[i] !== "absent") continue;
    for (let j = 0; j < wordLength; j++) {
      if (
        !targetUsed[j] &&
        guessChars[i].length === 1 &&
        isComponentOf(guessChars[i], targetChars[j])
      ) {
        const ch = guessChars[i];
        const used = componentUsedCount.get(ch) || 0;
        const avail = componentTargetCount.get(ch) || 0;
        if (used < avail) {
          states[i] = "partial-present";
          componentUsedCount.set(ch, used + 1);
        }
        break;
      }
    }
  }

  // Animated colouring with delay (or immediate when re-coloring)
  for (let i = 0; i < wordLength; i++) {
    const tile = document.querySelector(
      `[data-row="${rowIndex}"][data-col="${i}"]`,
    );
    if (animate) {
      setTimeout(() => {
        tile.classList.add(states[i]);
        updateKeyboard(guessChars[i], states[i]);
      }, i * 300);
    } else {
      tile.classList.add(states[i]);
      updateKeyboard(guessChars[i], states[i]);
    }
  }
}

// Finds a keyboard key element by IPA value, with NFC normalization fallback
function findKeyElement(normalizedPhoneme) {
  let key = document.querySelector(`[data-key="${normalizedPhoneme}"]`);
  if (!key) {
    for (const k of document.querySelectorAll(".key[data-key]")) {
      if (normalizeIPA(k.dataset.key) === normalizedPhoneme) return k;
    }
  }
  return key;
}

/* =================================================================
   Updates keyboard colours
   Priority: correct > present > partial-correct > partial-present > absent
   ================================================================= */
function updateKeyboard(phoneme, state) {
  // Normalize the phoneme for consistency
  const normalizedPhoneme = normalizeIPA(phoneme);

  // Length mark is a modifier, not a phoneme: always default colour
  if (normalizedPhoneme === "ː") return;

  // ɜ, ɑ, ɝ only exist as long vowels: default colour when typed alone
  if (COMBINATION_ONLY_COMPONENTS.has(normalizedPhoneme)) return;

  const currentState = phonemeStates[normalizedPhoneme];

  if (currentState && KEY_COLOR_PRIORITIES[currentState] > KEY_COLOR_PRIORITIES[state]) {
    return;
  }

  phonemeStates[normalizedPhoneme] = state;

  const key = findKeyElement(normalizedPhoneme);
  if (key) {
    key.classList.remove(
      "correct",
      "present",
      "absent",
      "partial-correct",
      "partial-present",
    );
    key.classList.add(state);
  }

  // For combinations (diphthongs, affricates, long vowels), also update component keys
  // when those components don't appear elsewhere in the target word
  if (normalizedPhoneme.length > 1) {
    updateComponentKeys(normalizedPhoneme, state);
  }
}

/* =============================================================
   Updates component keys when a combination is matched
   e.g., if 'eɪ' is correct, also colour the 'e' and 'ɪ' keys
   ============================================================= */
function updateComponentKeys(combination, state) {
  // When a combination is absent, most component keys should NOT be coloured
  // the component (e.g., 'e' in 'eɪ') may still appear standalone elsewhere in the word.
  // Exception: ɜ, ɑ, ɝ have no standalone form in any variety, so their keys
  // should reflect the combination's state (including absent) when typed as ɜː/ɑː/ɝː.

  // Colour each component key using the same priority system as single phonemes
  for (let i = 0; i < combination.length; i++) {
    const component = combination[i];

    // Skip the length mark (ː) — not a meaningful phoneme on its own
    if (component === "ː") continue;

    const normalizedComponent = normalizeIPA(component);

    // For absent combinations: skip regular components (they might appear standalone).
    // Only color keys for ɜ, ɑ, ɝ — these have no standalone form, so the
    // combination's absent/present/correct state IS the key's full information.
    if (state === "absent" && !COMBINATION_ONLY_COMPONENTS.has(normalizedComponent)) continue;

    const componentKey = findKeyElement(normalizedComponent);
    if (componentKey) {
      const currentCompState = phonemeStates[normalizedComponent];
      if (
        !currentCompState ||
        KEY_COLOR_PRIORITIES[currentCompState] <= KEY_COLOR_PRIORITIES[state]
      ) {
        phonemeStates[normalizedComponent] = state;
        componentKey.classList.remove(
          "correct",
          "present",
          "absent",
          "partial-correct",
          "partial-present",
        );
        componentKey.classList.add(state);
      }
    }
  }
}

// Shake animation for invalid word
function shakeTiles() {
  const tiles = document.querySelectorAll(`[data-row="${currentRow}"]`);
  tiles.forEach((tile) => {
    tile.style.animation = "shake 0.4s";
    setTimeout(() => (tile.style.animation = ""), 400);
  });
}

/* =================================
   Shows temporary message at top
   ================================= */
function showMessage(text) {
  const message = document.getElementById("message");

  // Clear any existing timeout to prevent overlap
  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }

  message.textContent = text;
  message.style.display = "block";
  messageTimeout = setTimeout(() => (message.style.display = "none"), 2500);
}

const WIN_MESSAGES_EARLY = [
  "✬ excellent ✬",
  "★ outstanding ★",
  "✧ brilliant ✧",
  "✩ exceptional ✩",
  "✩ magnificent ✩",
  "✩ impressive ✩",
  "✬ remarkable ✬",
  "✧ genius ✧",
  "✩ phenomenal ✩",
  "✩ spectacular ✩",
  "✬ superb ✬",
  "✧ extraordinary ✧",
  "✩ perfect ✩",
  "✩ legendary ✩",
];

const WIN_MESSAGES_MID = [
  "✩ splendid ✩",
  "✬ well done ✬",
  "✧ good job ✧",
  "✩ great work ✩",
  "✩ nice ✩",
  "★ solid ★",
  "✧ well played ✧",
  "✩ nicely done ✩",
  "✩ spot on ✩",
  "✩ you got it ✩",
  "★ smooth ★",
  "✬ keep it up ✬",
];

const WIN_MESSAGES_LATE = [
  "✰ close call ✰",
  "✩ phew ✩",
  "✬ just made it ✬",
  "✩ that was close ✩",
  "✩ close one ✩",
  "✬ nail biter ✬",
  "✩ that'll do ✩",
  "✧ never in doubt ✧",
  "★ the suspense! ★",
  "✩ last row hero ✩",
  "✧ last but not least ✧",
];

/* =============================================
   Word audio playback
   ============================================= */

function getAudioCandidates(ortho) {
  const lower = ortho.toLowerCase();
  const match = lower.match(/^(.+?)\s*\(([^)]+)\)$/);
  if (match) {
    const base = match[1].trim().replace(/\s+/g, '_');
    const suffix = match[2].trim().replace(/\./g, '').replace(/\s+/g, '_');
    return [base + '_' + suffix, base];
  }
  return [lower.replace(/\s+/g, '_')];
}

// Plays the pronunciation audio for the given word. First tries the active variety
// folder, then falls back to the other variety.
function playWordAudio(ortho) {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  const fallbackVariety = VARIETY_MODE === 'RP' ? 'GA' : 'RP';
  const paths = [];
  for (const variety of [VARIETY_MODE, fallbackVariety]) {
    for (const name of getAudioCandidates(ortho)) {
      paths.push(`assets/wav/${variety}/${name}.wav`);
    }
  }
  tryPlayAudio(paths, 0);
}

// Recursively tries each path until one plays successfully, or all are exhausted.
function tryPlayAudio(paths, index) {
  if (index >= paths.length) { currentAudio = null; return; }
  const audio = new Audio(paths[index]);
  currentAudio = audio;
  let advanced = false;
  function tryNext() {
    if (advanced || currentAudio !== audio) return;
    advanced = true;
    currentAudio = null;
    tryPlayAudio(paths, index + 1);
  }
  audio.addEventListener('error', tryNext, { once: true });
  audio.addEventListener('ended', () => {
    if (currentAudio === audio) currentAudio = null;
  }, { once: true });
  audio.play().catch(tryNext);
}

/* =====================================
   Shows solution word after game ends
   ====================================== */
function showWordInfo(isWin) {
  document.getElementById("message").style.display = "none";

  const winMessageElement = document.getElementById("win-message");
  const ipaElement = document.getElementById("info-ipa");
  const orthoElement = document.getElementById("info-ortho");
  const replayBtn = document.getElementById("replay-btn");

  if (isWin) {
    const pool = currentRow <= 2 ? WIN_MESSAGES_EARLY
                : currentRow <= 4 ? WIN_MESSAGES_MID
                : WIN_MESSAGES_LATE;
    const randomMessage = pool[Math.floor(Math.random() * pool.length)];
    winMessageElement.textContent = randomMessage;
    winMessageElement.style.display = "block";
  } else {
    winMessageElement.style.display = "none";
  }

  replayBtn.style.display = "flex";
  playWordAudio(targetWord.ortho);

  ipaElement.textContent =
    "/" + getDisplayIpa(getIpaForVariety(targetWord)) + "/";

  // Set ortho text via child span; hide it behind blur until user reveals it
  document.getElementById("ortho-text").textContent = targetWord.ortho;
  orthoElement.classList.add("ortho-hidden");

  showOverlay("word-info");
  document.getElementById("mobile-new-game-button").classList.add("visible");
}

function hideWordInfo() {
  if (currentAudio) return;
  hideOverlay("word-info");
}

/* =====================================
   Resets the game and selects new word
   ===================================== */
function resetGame() {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  clearTimeout(messageTimeout);
  document.getElementById("message").style.display = "none";
  targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  targetWordVariants = getIpaVariants(getIpaForVariety(targetWord));
  targetPhonemesList = targetWordVariants.map((v) => splitIntoPhonemes(v));
  wordLength = targetPhonemesList[0].length;
  currentRow = 0;
  currentTile = 0;
  gameOver = false;
  phonemeStates = {};
  tipUsed = false;
  submittedGuesses = [];

  createBoard();
  clearKeyboardColors();

  document.getElementById("tip-item").classList.remove("disabled");
  document.getElementById("mobile-new-game-button").classList.remove("visible");
  hideWordInfo();

  // remove focus from button to prevent spacebar from triggering it again
  document.activeElement.blur();
}

/* ========================
   Fullscreen toggle
   ======================== */
const fsBtn = document.getElementById("fullscreen-btn");

fsBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {
      showMessage("Fullscreen not available");
    });
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

document.addEventListener("fullscreenchange", () => {
  const isFullscreen = !!document.fullscreenElement;
  document.getElementById("fs-enter-icon").style.display = isFullscreen ? "none" : "";
  document.getElementById("fs-exit-icon").style.display = isFullscreen ? "" : "none";
});

init();
