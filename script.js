let byteCount = 0;
let byteRate = 0;
let buildings = []; // Added to store building data
let upgrades = [];
let achievements = [];
let gameName = "";

const byteCountElement = document.getElementById('byteCount');
const clickButton = document.getElementById('clickButton');
const upgradesContainer = document.getElementById('upgrades');
const achievementsContainer = document.getElementById('achievements');
const unlockedAchievementsContainer = document.getElementById('unlockedAchievements');
const gameNameInput = document.getElementById('gameName');

// Load saved data on page load
loadGame();

// Click button event listener
clickButton.addEventListener('click', () => {
  byteCount++;
  updateByteCount();
  checkAchievements();
  saveGame(); // Save game state after clicking the button
});

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

// ... (existing code)

// Define preset achievement descriptions
const achievementDescriptions = [
  'Click 10 times',
  'Click 100 times',
  'Click 1,000 times',
  'Click 10,000 times',
  'Click 100,000 times',
  'Click 1 Million times',
  'Click Billionaire',
  'Byte Tycoon',
  'Building a Legacy',
  'Byte Dynasty',
  'Byte Empire',
  'Quantum Leap',
  'Cosmic Code Connoisseur',
  'Universal Byte Mastery',
  'Multiverse Explorer',
  'Code Divinity',
  'Eternal Byte Sage',
  'Byte Ascendant',
  'Code Transcendent',
  'Quantum Code Voyager',
  'Interstellar Code Pioneer',
  'Galactic Code Voyager',
  'Universal Code Traveler',
  'Celestial Code Adventurer',
  'Byte Enlightenment',
  'Code Ascension',
  'Transcendent Byte Immortal',
  'Divine Code Guardian',
  'Eternal Code Explorer',
  'Byte Archivist',
  'Temporal Code Shaper',
  'Stellar Byte Pioneer',
  'Quantum Byte Sculptor',
  'Nebula Code Nomad',
  'Code Quantum Seeker',
  'Celestial Byte Observer',
  'Eternal Code Pilgrim',
  'Galactic Byte Artisan',
  'Dimensional Code Traveler',
  // ... add more achievement descriptions
];

for (let i = 0; i < achievementDescriptions.length; i++) {
  addAchievement(i, achievementDescriptions[i]);
}

// ... (existing code)

function checkAchievements() {
  achievements.forEach((achievement) => {
    const baseRequirement = 10;
    const groupSize = 6;
    const groupIndex = Math.floor(achievements.indexOf(achievement) / groupSize);
    const multiplier = (groupIndex >= 1) ? Math.pow(10, groupIndex - 1) : 0;

    if (!achievement.unlocked && byteCount >= baseRequirement * (multiplier + 1)) {
      achievement.unlocked = true;
      displayAchievement(achievement);
      displayUnlockedAchievement(achievement);
    }
  });
}

// ... (existing code)

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

// Function to add achievements
function addAchievement(index, achievementDescription) {
  const achievement = {
    name: `Achievement ${index + 1}`,
    requirement: (index + 1) * 10,
    unlocked: false,
  };

  const achievementMessage = document.createElement('p');
  achievementMessage.textContent = `Achievement Unlocked: ${achievement.name}`;
  achievementMessage.title = `Achievement: ${achievement.name}\nRequirement: ${achievement.requirement} Bytes\nTooltip: ${getAchievementTooltip(index)}`;
  achievementsContainer.appendChild(achievementMessage);

  achievements.push(achievement);
}

// Function to display unlocked achievements
function displayUnlockedAchievement(achievement) {
  const unlockedAchievementMessage = document.createElement('p');
  unlockedAchievementMessage.textContent = `Unlocked Achievement: ${achievement.name}`;
  unlockedAchievementsContainer.appendChild(unlockedAchievementMessage);
}

// Function to check achievements
function checkAchievements() {
  achievements.forEach((achievement) => {
    if (byteCount >= achievement.requirement && !achievement.unlocked) {
      achievement.unlocked = true;
      displayAchievement(achievement);
      displayUnlockedAchievement(achievement);
    }
  });
}

// Function to display achievements
function displayAchievement(achievement) {
  const achievementMessage = document.createElement('p');
  achievementMessage.textContent = `Achievement Unlocked: ${achievement.name}`;
  achievementMessage.title = `Achievement: ${achievement.name}\nRequirement: ${achievement.requirement} Bytes\nTooltip: ${getAchievementTooltip(achievement)}`;
  achievementsContainer.appendChild(achievementMessage);
}

// Function to get achievement tooltips
function getAchievementTooltip(achievement) {
  const tooltips = [
    'Click your way to victory!',
    'Click faster, click better!',
    'A thousand clicks for a thousand smiles!',
    'Clicking on sunshine!',
    'The road to a hundred thousand clicks begins with a single click!',
    'One million clicks! You are a click master!',
    'You are now a billionaire in clicks!',
    'Building bytes, one click at a time!',
    'You have established a legacy of bytes!',
    'Congratulations on your byte dynasty!',
    'You are now the ruler of the byte empire!',
    'Leap into the quantum realm of clicks!',
    'You possess the cosmic code wisdom!',
    'Master of the universal byte!',
    'Discoverer of the multiverse!',
    'You\'ve reached code divinity!',
    'Eternal sage of the byte!',
    'Rising above as a byte ascendant!',
    'Code transcendent, master of all!',
    'Voyaging through the quantum sea of code!',
    'Pioneering the interstellar code frontier!',
    'Your code has conquered the galaxy!',
    'Travelling the universal code pathways!',
    'Adventuring through celestial code realms!',
    'Congratulations on byte enlightenment!',
    'Ascending to the highest realms of code!',
    'An immortal among bytes!',
    'Guardian of the divine code!',
    'Exploring the eternal code cosmos!',
    // ... add more achievement tooltips
  ];

  return tooltips[achievements.indexOf(achievement)] || 'Congratulations!';
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
    achievements: achievements,
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
    updateByteCount();
    updateByteRate();
    gameNameInput.value = gameName;
    checkAchievements(); // Check achievements based on loaded data
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
