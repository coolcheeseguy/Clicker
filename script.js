let ascendMulti = 1;
let byteCount = 0;
let byteRate = 0;
let buildings = []; // Added to store building data
let upgrades = [];
let gameName = "";

const ascend = document.getElementById('ascend');
const byteCountElement = document.getElementById('byteCount');
const clickButton = document.getElementById('clickButton');
const upgradesContainer = document.getElementById('upgrades');
const gameNameInput = document.getElementById('gameName');

// Load saved data on page load
loadGame();

// Click button event listener
clickButton.addEventListener('click', () => {
  byteCount++;
  updateByteCount();
  saveGame(); // Save game state after clicking the button
});

ascend.addEventListener('click', () => {
  if 
  ascendMulti++;
  saveGame(); // Save game state after clicking the button
});

let interval = setInterval(function() {
  byteCount += byteRate;
  updateByteCount();
}, 1000); // 1000 milliseconds = 1 second


// Save game state every 30 seconds
setInterval(saveGame, 30000);

// Upgrade buttons and achievements setup
const upgradeNames = [
  'Double Clicks',
  'Code Optimizer',
  'Quantum Processor',
  'AI Assistant',
  'Parallel Computing',
  'Exponential Growth',
  'Nano Bytes',
  'Virtual Reality Compiler',
  'Holographic Code Generator',
  'Biological Computing',
  'Neural Network Accelerator',
  'Quantum Entanglement Computing',
  'Time Travel Compiler',
  'Cosmic Code Matrix',
  'Infinite Loop Engine',
  'Plasma Byte Reactor',
  'Nebula Code Cloud',
  'Interstellar Code Nexus',
  'Galactic Code Cluster',
  'Universal Byte Matrix',
  'Multiverse Code Singularity',
  'Omnipotent Code Being',
  'Reality Simulation Compiler',
  'Celestial Code Harmony',
  'Enlightened Byte Ascension',
  'Transcendent Code Essence',
  'Divine Byte Omnipresence',
  'Eternal Code Cosmos',
  'Infinite Code Mastery',
  // ... add more upgrade names
];

// Add upgrade buttons
for (let i = 0; i < upgradeNames.length; i++) {
  addUpgradeButton(i, upgradeNames[i]);
}

// Function to add upgrade buttons
function addUpgradeButton(index, upgradeName) {
  const upgrade = {
    name: upgradeName,
    cost: (index + 1) * 100,
    boost: (index + 1) * 2,
  };

  const upgradeButton = document.createElement('button');
  upgradeButton.textContent = `${upgrade.name} (${upgrade.cost} Bytes)`;
  upgradeButton.title = `Upgrade: ${upgrade.name}\nCost: ${upgrade.cost} Bytes\nBoost: ${upgrade.boost}`;
  upgradeButton.addEventListener('click', () => buyUpgrade(index));

  upgradesContainer.appendChild(upgradeButton);
  upgrades.push(upgrade);
}

// Function to update byte count on the screen
function updateByteCount() {
  byteCountElement.textContent = `Bytes: ${byteCount}`;
}

// Function to save game state
function saveGame() {
  const gameState = {
    gameName: gameNameInput.value,
    byteCount: byteCount,
    byteRate: byteRate,
    buildings: buildings,
    upgrades: upgrades,
    ascendMulti: ascendMulti
  };
  localStorage.setItem('byteClickerSave', JSON.stringify(gameState));
}

// Function to load game state
function loadGame() {
  const savedGame = localStorage.getItem('byteClickerSave');
  if (savedGame) {
    const gameState = JSON.parse(savedGame);
    gameName = gameState.gameName || "";
    byteCount = gameState.byteCount;
    byteRate = gameState.byteRate;
    buildings = gameState.buildings || []; // Load buildings
    ascendMulti = gameState.ascendMulti
    updateByteCount();
    updateByteRate();
    gameNameInput.value = gameName;
  }
}

// Function to buy upgrades
function buyUpgrade(index) {
  const upgrade = upgrades[index];
  if (byteCount >= upgrade.cost) {
    byteCount -= upgrade.cost;
    byteRate += upgrade.boost;
    updateByteCount();
    updateByteRate();
    saveGame(); // Save game state after buying an upgrade
  }
}

// Function to update byte rate on the screen
function updateByteRate() {
  // Assuming you have an element with the id 'byteRate' to display the byte rate
  document.getElementById('byteRate').textContent = `Byte Rate: ${byteRate} Bytes/s`;
}
