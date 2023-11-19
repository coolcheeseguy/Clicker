let byteCount = 0;
let byteRate = 0;
let upgrades = [];
let achievements = [];
let gameName = ""; // New variable to store the game name

const byteCountElement = document.getElementById('byteCount');
const clickButton = document.getElementById('clickButton');
const upgradesContainer = document.getElementById('upgrades');
const achievementsContainer = document.getElementById('achievements');
const gameNameInput = document.getElementById('gameName'); // New input field

const buildings = [
  { name: 'Bit Factory', cost: 10, rate: 1 },
  { name: 'Code Compiler', cost: 50, rate: 5 },
  { name: 'Algorithm Analyzer', cost: 100, rate: 10 },
  // ... add more buildings here
];

// Load saved data on page load
loadGame();

// Add building buttons and set up click event listeners
buildings.forEach((building, index) => {
  addBuildingButton(building, index);
});

// Add upgrade buttons
for (let i = 0; i < 100; i++) {
  addUpgradeButton(i);
}

// Add achievements
for (let i = 0; i < 300; i++) {
  addAchievement(i);
}

function addBuildingButton(building, index) {
  const buildingButton = document.createElement('button');
  buildingButton.textContent = `${building.name} (${building.cost} Bytes)`;
  buildingButton.addEventListener('click', () => buyBuilding(index));

  document.body.appendChild(buildingButton);
}

function buyBuilding(index) {
  const building = buildings[index];
  if (byteCount >= building.cost) {
    byteCount -= building.cost;
    byteRate += building.rate;
    updateByteCount();
    updateByteRate();
    saveGame(); // Save game state after purchasing a building
  }
}

function addUpgradeButton(index) {
  const upgrade = {
    name: `Upgrade ${index + 1}`,
    cost: (index + 1) * 100,
    boost: (index + 1) * 2,
  };

  const upgradeButton = document.createElement('button');
  upgradeButton.textContent = `${upgrade.name} (${upgrade.cost} Bytes)`;
  upgradeButton.addEventListener('click', () => buyUpgrade(index));

  upgradesContainer.appendChild(upgradeButton);
  upgrades.push(upgrade);
}

function buyUpgrade(index) {
  const upgrade = upgrades[index];
  if (byteCount >= upgrade.cost) {
    byteCount -= upgrade.cost;
    byteRate += upgrade.boost;
    updateByteCount();
    updateByteRate();
    saveGame(); // Save game state after purchasing an upgrade
  }
}

function addAchievement(index) {
  const achievement = {
    name: `Achievement ${index + 1}`,
    requirement: (index + 1) * 10,
  };

  achievements.push(achievement);
}

function checkAchievements() {
  achievements.forEach((achievement) => {
    if (byteCount >= achievement.requirement && !achievement.completed) {
      achievement.completed = true;
      displayAchievement(achievement);
    }
  });
}

function displayAchievement(achievement) {
  const achievementMessage = document.createElement('p');
  achievementMessage.textContent = `Achievement Unlocked: ${achievement.name}`;
  achievementsContainer.appendChild(achievementMessage);
}

function updateByteCount() {
  byteCountElement.textContent = `Bytes: ${byteCount}`;
  checkAchievements(); // Check achievements whenever the byte count is updated
}

function updateByteRate() {
  setInterval(() => {
    byteCount += byteRate;
    updateByteCount();
    saveGame(); // Save game state every second
  }, 1000);
}

clickButton.addEventListener('click', () => {
  byteCount++;
  updateByteCount();
  saveGame(); // Save game state after clicking the button
});

// Save game state every 30 seconds
setInterval(saveGame, 30000);

// Save the game state to localStorage
function saveGame() {
  const gameState = {
    gameName: gameNameInput.value, // Save the game name
    byteCount: byteCount,
    byteRate: byteRate,
    buildings: buildings,
    upgrades: upgrades,
    achievements: achievements,
  };
  localStorage.setItem('byteClickerSave', JSON.stringify(gameState));
}

// Load the game state from localStorage
function loadGame() {
  const savedGame = localStorage.getItem('byteClickerSave');
  if (savedGame) {
    const gameState = JSON.parse(savedGame);
    gameName = gameState.gameName || ""; // Load the game name
    byteCount = gameState.byteCount;
    byteRate = gameState.byteRate;
    updateByteCount();
    updateByteRate();
    gameNameInput.value = gameName; // Set the value of the game name input
    // You may need to update building statuses, upgrades, and achievements here based on the loaded data
  }
}
