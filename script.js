// [1] 전역 변수 설정

const superSound = new Audio('super_mining.mp3');
const clickSound = new Audio('click.mp3'); 
clickSound.volume = 0.05;
const abilitySound = new Audio("./sounds/ability.mp3");


const layers = [
    { name: "Stratosphere", ores: ['Nitrogen', 'Oxygen', 'Argon'] },
    { name: "Grass Layer", ores: ['Grass','Bromine','Durtlie', 'Iron','GREENITCH', 'Gold', 'Anvilar', 'F L O W S C A P E', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Slate Layer", ores: ['Slate', 'Iron', 'Lapis', 'Ruby', 'Diamond', 'Enfinitricifite', 'Cannidilit', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Ice Layer", ores: ['Ice', 'Diamond', 'Crkyotopis', 'Acrictopas', 'Infinitricifite', 'Macorl Esperatio', 'IXYSOPARDOX', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Basalt Layer", ores: ['Basalt', 'Iron', 'Asphalt','Ckyslop', 'Gold', 'Bloody Bronze', 'Malux', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Stone Layer", ores: ['Stone', 'Iron', 'Equatox', 'Faked Reality', 'Braxichroxmin', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Lava Layer", ores: ['Lava', 'Solid Obsidian', 'Zinc', 'Gold', 'Bismuth', 'Solavoltei', '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "?", ores: ['TH3 M0L3VE413R','Oidilz','Moldier','?print=(123456789)', 'Matizium', 'Lava','Majoritsim', 'Zinc', 'Bismuth', 'P̲̆ả̢rḁ̈ṃ̑a̳̋t̖̍a̜̋d̦̅r̙̎ō̲x̖̎','?print=(1234567890123)'] },
    { name: "Frostbite", ores: ['Evening Snow', 'Kabris-lx', 'Ӻɍꝋꞩⱦ Ȼɍⱥȼҟӿīᵯ']}
];

const ores = [
    { name: '?print=(1234567890123)', rarity: 'solitude', chance: 1234567890123, price: 9302000, glowType: 'int1234' },
    { name: 'Ӻɍꝋꞩⱦ Ȼɍⱥȼҟӿīᵯ', rarity: 'illimitátus', chance: 399999999999, price: 99999999999, glowType: 'frost' },
    { name: 'P̲̆ả̢rḁ̈ṃ̑a̳̋t̖̍a̜̋d̦̅r̙̎ō̲x̖̎', rarity: 'illimitátus', chance: 120000000000, price: 5900000000, glowType: 'legendary' },
    { name: '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽', rarity: 'meaninglessness', chance: 50909000000, price: 1293000000, glowType: 'aby1'},
    { name: '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', rarity: 'meaninglessness', chance: 41023000000, price: 920000000, color: 'rgb(99, 121, 89)' },
    { name: 'F L O W S C A P E', rarity: 'creative', chance: 1209000000, price: 924002000, color: 'rgb(175, 183, 255)' },
    { name: 'Cannidilit', rarity: 'creative', chance: 1023003050, price: 87002000, glowType: 'cand' },
    { name: 'Braxichroxmin', rarity: 'creative', chance: 992000000, price: 75030000, color: 'rgb(0, 255, 170)' },
    { name: 'IXYSOPARDOX', rarity: 'abstruse', chance: 593000000, price: 65002000, color: '#88ff00ff' },
    { name: 'Faked Reality', rarity: 'abstruse', chance: 392000000, price: 41002000, color: 'rgb(162, 175, 147)' },
    { name: 'Macorl Esperatio', rarity: 'unreal', chance: 153900000, price: 9302000, color: '#8A5FC9' },
    { name: 'Solavoltei', rarity: 'unreal', chance: 112000000, price: 6408000, color: '#a9bb91' },
    { name: 'Anvilar', rarity: 'unreal', chance: 101900000, price: 5302000, color: '#f83e3e' },
    { name: 'Kabris-lx', rarity: 'unreal', chance: 100200030, price: 4920000, color: '#aee0f3' },
    { name: 'Enfinitricifite', rarity: 'ephemeral', chance: 94000200, price: 3250000, color: '#61738b' },
    { name: 'Ckyslop', rarity: 'ephemeral', chance: 83903900, price: 3170000, color: '#723a05' },
    { name: 'GREENITCH', rarity: 'ephemeral', chance: 81300000, price: 2900000, color: '#00ff22' },
    { name: 'Oidilz', rarity: 'ephemeral', chance: 72400000, price: 2630000, color: '#8b616a' },
    { name: 'Malux', rarity: 'mythic', chance: 23100000, price: 2100000, color: '#a2dac7' },
    { name: 'Infinitricifite', rarity: 'mythic', chance: 10000000, price: 2100000, color: '#2f80ed' },
    { name: 'Acrictopas', rarity: 'mythic', chance: 5940000, price: 360000, color: '#106954' },
    { name: 'Crkyotopis', rarity: 'midas', chance: 2390000, price: 250000, color: '#666252' },
    { name: 'Bloody Bronze', rarity: 'midas', chance: 950000, price: 92000, color: '#ff417a' },
    { name: 'Majoritsim', rarity: 'midas', chance: 760341, price: 85300, color: '#5fa886' },
    { name: 'Argon', rarity: 'epic', chance: 56000, price: 7200, glowType: 'rainbow'},
    { name: 'Diamond', rarity: 'epic', chance: 50000, price: 5000, color: '#00f2fe' },
    { name: 'Bismuth', rarity: 'epic', chance: 25500, price: 2500, glowType: 'rainbow'},
    { name: 'Oxygen', rarity: 'rare', chance: 3702, price: 1230, color: '#acf9ff' },
    { name: 'Ruby', rarity: 'rare', chance: 2500, price: 1000, color: '#e74c3c' },
    { name: 'Gold', rarity: 'rare', chance: 320, price: 500, color: '#f1c40f' },
    { name: 'Equatox', rarity: 'rare', chance: 120, price: 300, color: '#ffec9e' },
    { name: 'Lapis', rarity: 'uncommon', chance: 97, price: 210, color: '#416baa' },
    { name: 'Zinc', rarity: 'uncommon', chance: 60, price: 40, color: '#2a4142' },
    { name: 'Asphalt', rarity: 'uncommon', chance: 53, price: 36, color: 'rgb(218, 176, 176)' },
    { name: 'Iron', rarity: 'uncommon', chance: 50, price: 50, color: '#dff9fb' },
    { name: 'Bromine', rarity: 'uncommon', chance: 23, price: 35, color: 'rgb(131, 207, 131)' },
    { name: 'Nitrogen', rarity: 'uncommon', chance: 15, price: 25, color: '#147434' },
    { name: 'Solid Obsidian', rarity: 'uncommon', chance: 13, price: 22, color: '#281c3a' },
    { name: 'Durtlie', rarity: 'uncommon', chance: 12, price: 20, color: '#65a727' },
    { name: 'Moldier', rarity: 'common', chance: 5, price: 5, color: '#281c3a' },
    { name: 'Grass', rarity: 'basic', chance: 2, price: 1, color: '#5bff84' },
    { name: 'Ice', rarity: 'basic', chance: 2, price: 1, color: '#46a8e6' },
    { name: 'Basalt', rarity: 'basic', chance: 2, price: 1, color: '#8f9975' },
    { name: 'Lava', rarity: 'basic', chance: 2, price: 1, color: '#ff8019' },
    { name: 'Slate', rarity: 'basic', chance: 2, price: 1, color: '#a6c2d4' },
    { name: 'Stone', rarity: 'basic', chance: 2, price: 1, color: '#bdc3c7' },
    { name: 'Evening Snow', rarity: 'basic', chance: 2, price: 1, color: '#30678b' },
    { name: 'Matizium', rarity: 'unknown', chance: 15000000000000, price: 293000000000, color: '#434e53', displayChance: "1/0" },
    { name: 'TH3 M0L3VE413R', rarity: 'unknown', chance: 100000000000, price: 293000000001, color: '#0f1416', displayChance: "1/0" }
];


const UIManager = {
    needsFullInventoryRefresh: false,
    requestInventoryUpdate: function() {
        this.needsFullInventoryRefresh = true;
    },
    refresh: function() {
        // 인벤토리 div 자체가 비어있으면 강제로 새로고침
        const invEl = document.getElementById('inventory');
        if (invEl && invEl.innerHTML === "") {
            this.needsFullInventoryRefresh = true;
        }

        if (this.needsFullInventoryRefresh) {
            renderInventory(true); // 여기서 실제 층(currentLayerIndex) 정보를 가져오는지 확인
            renderEncyclopedia();
            this.needsFullInventoryRefresh = false;
        } else {
            updateInventoryCountsOnly();
        }
        updateTotalMinedUI();
    }
};

// 페이지 로드 시 타이머 시작
setInterval(() => {
    if (typeof UIManager !== 'undefined') {
        UIManager.refresh();
    }
}, 50);


const potions = [
    { 
        id: 'luck', 
        name: 'Potion of Luck', 
        price: 25000, 
        duration: 300, // 초 단위
        lore: 'Hmm. Why don\'t ya taste it?', 
        stats: 'Makes you 2x more luckier!',
        effectIcon: '🍀'
    },
    { 
        id: 'luck2', 
        name: 'Potion of Luck II', 
        price: 750000, 
        duration: 600, // 초 단위
        lore: 'It gets more longer and bigger!', 
        stats: 'Makes you 4x more luckier!',
        effectIcon: '🍀2'
    },
    { 
        id: 'luck3', 
        name: 'Potion of Luck Max', 
        price: 4000000, 
        duration: 1200, // 초 단위
        lore: 'woah.. how did you get that?', 
        stats: 'Makes you 16x more luckier!',
        effectIcon: '🍀3'
    },
        { 
        id: 'luck4', 
        name: 'Let\'s test your luck!', 
        price: 40000000, 
        duration: 5, // 초 단위
        lore: 'becareful!', 
        stats: 'Makes you INSANELY luckier!',
        effectIcon: '🍀T'
    },
    { 
        id: 'speed', 
        name: 'Potion of Speed', 
        price: 15000, 
        duration: 150, 
        lore: 'Gotta go fast-', 
        stats: 'Makes you mine 2 times faster! (interval cooltime)',
        effectIcon: '⚡'
    },
    { 
        id: 'speed2', 
        name: 'Potion of Fast Speed', 
        price: 350000, 
        duration: 300, 
        lore: 'oh no i\'m faster and faster', 
        stats: 'Makes you mine 4 times faster! (interval cooltime)',
        effectIcon: '⚡2'
    },
    { 
        id: 'speed3', 
        name: 'Potion of at Speed\'o Sound', 
        price: 9000000, 
        duration: 600, 
        lore: 'What?! How?', 
        stats: 'Makes you mine 5.5 times faster! (interval cooltime)',
        effectIcon: '⚡3'
    }
];

const effectNames = {
    'luck': 'Potion of Luck',
    'luck2': 'Potion of Luck II',
    'luck3' : 'Potion of Luck Max',
    'luck4' : 'Test Luck',
    'speed' : 'Potion of Speed',
    'speed2' : 'Potion of Fast Speed',
    'speed3' : 'Potion of at Speed of Sound'
};
// 현재 적용 중인 버프 상태 (종료 시간 저장)


const maxOfflineHours = 8;

let foundOres = [];
let activeBoosts = {};

document.getElementById('potion-list').addEventListener('click', function(event) {
    // 클릭된 요소가 .potion-card 내부의 버튼인지 확인
    const btn = event.target.closest('.potion-btn'); 
    
    // 만약 버튼을 클릭했다면
    if (btn) {
        const potionId = btn.getAttribute('data-id');
        buyPotion(potionId); // 실제 구매 로직 함수 실행
    }
});

const raritySounds = {
    epic: new Audio('rare.mp3'),
    midas: new Audio('rare2.mp3'), mythic: new Audio('rare2.mp3'), ephemeral: new Audio('overrare.mp3'),
    unreal: new Audio('overrare.mp3'), abstruse: new Audio("ascendant.mp3"),
    creative: new Audio('ascendant.mp3'), meaninglessness: new Audio("everything.mp3"), illimitátus: new Audio("otherworldly.mp3"), unknown: new Audio("reality.mp3"),
    solitude: new Audio('solitude.mp3')
};

const pickaxeSortOrder = {
    'basic': 1,
    'scrap': 1.5,
    'steel': 2,
    'godPickaxe': 3,
    'light': 4,
    'bulk': 5,
    'frozen': 5.1,
    'ultima' : 5.5,
    'hackaxe': 6,
    'luhackaxe': 7
};

const rarityColors = {
    unknown: "#000000", 'basic': "#666666", common: "#bdc3c7", uncommon: "#85ffa9ff", rare: "#f3db7a", 
    epic: "#b465cc", midas: "#ffd900ff", mythic: "#f15b5bff", ephemeral: "#9dfff7",unreal: "#9a1cccff",
    abstruse: "#131c99ff", creative: "#fcff52", meaninglessness: "#e2ffed", illimitátus: "#0b1820", solitude: '#417570'
};

const pickaxeLore = {
    'basic': "Whatever. Let me do my job.",
    'scrap': "What? Why are you giving me this?",
    'steel': "Reinforced; Yet used for gathering stones.",
    'godPickaxe': "Maybe it's one of fake things exists in the planet earth?",
    'light': "Look! I'm at speed of light!",
    'frozen': "I don't know who made this.. but it'll be useful.",
    'bulk': "'Even through hard ways, I never give up mining.'",
    'ultima': "'Absolute! Plus! Ultra!'",
    'hackaxe': "What? You think You're going to get this? Fool.",
    'luhackaxe': "Don't mind this hmm"
};

const pickaxes = {
    basic: { name: "Basic Pickaxe", power: 1, luck: 1.0, superChance: 0.0, superCount: 0 },
    scrap: { name: "LowTier 1 / Abandoned Pickaxe", power: 1, luck: 1.05, superChance: 0.01, superCount: 50 },
    steel: { name: "Tier 2 / Steel Pickaxe", power: 2, luck: 1.1, superChance: 0.02, superCount: 100 },
    godPickaxe: { name: "Tier 3 / God Pickaxe", power: 5, luck: 1.4, superChance: 0.09, superCount: 250 },
    light: { name: "Tier 4 / Lightning Pickaxe", power: 7, luck: 2.15, superChance: 0.025, superCount: 850 },
    bulk: { name: "Tier 4 / Bulk Pickaxe", power: 9, luck: 1.55, superChance: 0.01, superCount: 2000 },
    frozen: { name: "Tier 5 / Frozen Pickaxe", power: 7, luck: 3.35, superChance: 0.025, superCount: 2700 },
    ultima: { name: "Tier 13 / Ultima Blastica", power: 125, luck: 6.75, superChance: 0.025, superCount: 62000 },
    hackaxe: { name: "hack axe", power: 250, luck: 25.0, superChance: 1, superCount: 2500},
    luhackaxe: { name: "luhack axe", power: 1, luck: 25000000.0, superChance: 0, superCount: 120000}
};

const pickaxeRecipes = {
    'scrap': { name: 'Tier 1 / Abandoned Pickaxe', cost: { 'Zinc': 1, 'Stone': 12 }, power: 1 },
    'steel': { name: 'Tier 2 / Steel Pickaxe', cost: { 'Iron': 10, 'Stone': 50 }, power: 2 },
    'godPickaxe': { name: 'Tier 3 / God Pickaxe', cost: { 'Gold': 15, 'Iron': 125 }, power: 5 },
    'light': { name: 'Tier 4 / Lightning Pickaxe', cost: { 'Ruby': 6, 'Gold': 8, 'Equatox': 12 }, power: 7 },
    'bulk': { name: 'Tier 4.5 / Bulk Pickaxe', cost: { 'Diamond': 1, 'Zinc': 640, 'Slate': 4300 }, power: 9 },
    'frozen': {name: "Tier 5.5 / Frozen Pickaxe", cost: { 'Crkyotopis': 1, 'Bismuth': 5, 'Equatox': 100, 'Ice': 53000}, power: 7},
    'ultima': {name: "Tier 13 / Ultima Blastica", cost: { 'Braxichroxmin': 1, 'Anvilar': 3, 'Diamond': 800, 'Iron': 650000}, power: 73},
    'hackaxe': { name: 'no u hack axe', cost: { 'IXYSOPARDOX': 2e24, 'Iron': 0 }, power: 250 },
    'luhackaxe': { name: 'luhacks', cost: { 'IXYSOPARDOX': 2e20, 'Iron': 0 }, power: 2500000 }
};
const rarityRank = { 'basic': 0, 'common': 1, 'uncommon': 2, 'rare': 3, 'epic': 4, 'midas': 5, 'mythic': 6, 'ephemeral': 7, 'unreal': 8, 'abstruse': 9, 'creative': 10, 'meaninglessness': 11, 'illimitátus': 12, 'solitude': 12.5, 'unknown': 13};



let lastMineTime = Date.now();
const miningSpeed = 5;
let autoMineInterval = null;
let autoMineRate = 1;
let isAutoMining = false;
let isBusy = false;
let notificationTimer = null;
let resultTimer = null;
let player = { luck: 1 };
let inventory = {}, foundCount = {}, currentPickaxe = 'basic', coins = 0, totalBlocksMined = 0, currentLayerIndex = 0;
let unlockedPickaxes = ['basic'];
let lastOnlineTime = Date.now();
const CLICK_COOLDOWN = 70; // 0.2초 (200ms) 동안은 클릭 무시
let lastManualClickTime = 0; // 마지막 클릭 시간 기록용
let lastRollDebug = { oreName: "없음", baseChance: 0, luck: 0, finalProbability: 0 };
let lastEncyclopediaHash = "";
let lastRenderedLayerIndex = -1;
let mode = "online";
let appliedLuck = pickaxes[currentPickaxe].luck;

let soundRarityThreshold = rarityRank.rare; 
// rare 이상만 소리 나게 (원하면 epic으로 변경)

ores.forEach(ore => { inventory[ore.name] = 0; foundCount[ore.name] = 0; });


if (mode === "offline") {
    appliedLuck = 1; // 💥 오프라인은 무조건 기본
}

function shouldPlaySpawnSound(ore) {
    const rank = rarityRank[ore.rarity] ?? 0;
    return rank >= soundRarityThreshold;
}
function toggleSettingsMenu() {
    const panel = document.getElementById('settings-panel');

    if (!panel) {
        console.warn("settings-btn not found in DOM");
        return;
    }

    panel.classList.toggle('active');
}

function setSoundThreshold(rarityName) {
    soundRarityThreshold = rarityRank[rarityName] ?? 0;
    showNotification(`🔊 Sound filter: ${rarityName}+`);
}
function applySoundSettings() {
    const select = document.getElementById('sound-threshold-select');
    const value = select.value;

    setSoundThreshold(value);
    saveSettings();
}

function saveSettings() {
    localStorage.setItem('settings', JSON.stringify({
        soundThreshold: soundRarityThreshold
    }));
}

function loadSettings() {
    const data = JSON.parse(localStorage.getItem('settings'));
    if (!data) return;

    soundRarityThreshold = data.soundThreshold ?? rarityRank.rare;
}

function formatNumber(num) {
    if (num < 1000) return num.toFixed(0); // 1000 미만은 그대로 표시
    
    const units = ["", "k", "m", "b", "t", "q", "qi", "sx", "sp", "o", "n", "d"];
    let unitIndex = 0;
    
    // 1000으로 나누면서 단위를 올림
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }
    
    // 소수점 2자리까지만 표시 (예: 1.23k)
    return num.toFixed(2).replace(/\.00$/, "") + units[unitIndex];
}

function getTotalLuck() {
    const base = pickaxes[currentPickaxe].luck;

    const potionMultiplier =
        isEffectActive('luck4') ? 2048 :
        isEffectActive('luck3') ? 16 :
        isEffectActive('luck2') ? 4 :
        isEffectActive('luck') ? 2 : 1;

    return base * potionMultiplier;
}

function updateActiveEffectsUI() {
    const box = document.getElementById('active-effects-box');
    const list = document.getElementById('effects-list');
    const now = Date.now();
    const activeKeys = Object.keys(activeBoosts);
    
    let html = '';
    let hasActive = false;

    for (const effect of activeKeys) {
        const endTime = activeBoosts[effect];
        
        if (endTime > now) {
            hasActive = true;
            const remaining = Math.ceil((endTime - now) / 1000);
            const name = effectNames[effect] || effect;
            html += `<div style="margin-bottom: 5px;">${name}: <strong>${remaining} Seconds</strong> left</div>`;
        } else {
            // 시간이 끝난 것은 제거
            delete activeBoosts[effect];
        }
    }

    // UI 반영
    if (hasActive) {
        box.style.display = 'block';
        list.innerHTML = html;
    } else {
        box.style.display = 'none';
    }
}

function renderPotions() {
    const potionListContainer = document.getElementById('potion-list');
    
    if (!potionListContainer) {
        console.error("Element 'potion-list' not found.");
        return;
    }

    potionListContainer.innerHTML = ''; 

    potions.forEach(potion => {
        const div = document.createElement('div');
        div.className = 'potion-card';
        
        // 가격 포맷팅
        const formattedPrice = potion.price.toLocaleString();

        div.innerHTML = `
            <h4 style="margin: 0 0 8px 0;">${potion.effectIcon} ${potion.name}</h4>
            <div class="potion-stats" style="font-size: 0.85rem; color: #aaa; margin-bottom: 8px;">
                <p style="margin: 2px 0;">✨ ${potion.stats}</p>
                <p style="margin: 2px 0;">⏱️ Duration: ${potion.duration}s</p>
            </div>
            <p class="potion-lore" style="font-style: italic; font-size: 0.75rem; color: #777; margin-bottom: 12px;">
                "${potion.lore}"
            </p>
            <button class="buy-btn" onclick="buyPotion('${potion.id}')">
                Buy for ${formattedPrice} Coins
            </button>
        `;
        potionListContainer.appendChild(div);
    });
}

function checkLuckDebug() {
    console.log("--- 🍀 Luck Debug Info ---");
    console.table(lastRollDebug);
    console.log("--------------------------");
}

function activatePotion(potion) {
    // 1. 현재 시간 + 지속 시간(초)을 밀리초 단위로 계산하여 저장
    // potion 객체에 duration 속성이 있다고 가정합니다 (예: 30초면 30)
    const durationMs = potion.duration * 1000;
    
    // 2. 만약 이미 같은 버프가 있다면, 시간을 연장하거나 덮어쓰기
    const now = Date.now();
    const existingEndTime = activeBoosts[potion.id];
    
    if (existingEndTime && existingEndTime > now) {
        // 이미 활성화 중이면 남은 시간에 추가 (혹은 갱신)
        activeBoosts[potion.id] = existingEndTime + durationMs;
    } else {
        // 새로 적용
        activeBoosts[potion.id] = now + durationMs;
    }

    console.log(`Potion activated: ${potion.id}, New End Time: ${activeBoosts[potion.id]}`);
}

function buyPotion(potionId) {
    const potion = potions.find(p => p.id === potionId);
    if (!potion) return;

    if (coins >= potion.price) {
        coins -= potion.price;
        
        // 포션 활성화 및 인벤토리/효과 리스트에 추가
        activatePotion(potion);
        
        saveGame();
        updateUI(); 
        
        // 사용자 피드백
        alert(`${potion.name} purchased and activated!`);
    } else {
        alert("Not enough coins!");
    }
}

function autoMineLoop() {
    if (!isAutoMining) {
        requestAnimationFrame(autoMineLoop);
        return;
    }
    const currentTime = Date.now();
    if (currentTime - lastMineTime >= miningSpeed) {
        onMineButtonClick();
        lastMineTime = currentTime; 
    }
    requestAnimationFrame(autoMineLoop);
}
function updateShopUI() {
    const coinEl = document.getElementById('coin-display');
    
    // 1. 요소 존재 확인 (오류 방지)
    if (!coinEl) {
        console.warn("updateShopUI: 'coin-display' 요소를 찾을 수 없습니다. HTML 구조를 확인하세요.");
        return;
    }

    // 2. 값 업데이트
    coinEl.innerText = `💰 Coins: ${formatNumber(coins)}`;
}
// 게임 시작 시 루프 실행 (window.onload 안에 넣거나, 가장 아래에 적으세요)
function sellOre(oreName) {
    const ore = ores.find(o => o.name === oreName);
    if (!ore) return;

    const count = inventory[oreName] || 0;
    
    if (count <= 0) {
        showNotification("You have no ore to sell!");
        return;
    }

    const earned = count * ore.price;
    coins += earned;
    inventory[oreName] = 0; // 해당 광물 재고 0으로 초기화

    updateShopUI();
    renderInventory();
    saveGame();
    
    showNotification(`Sold ${count} of ${oreName} for ${earned.toLocaleString()} coins!`);
}

function saveTime() {
    localStorage.setItem('lastMineTime', lastMineTime);
}

// 페이지가 로드될 때 또는 다시 활성화될 때 실행
window.addEventListener('focus', () => {
    // 탭으로 다시 돌아왔을 때, 안 돌았던 시간만큼 밀린 작업 수행
    autoMineLoop(); 
});

function renderShop() {
    // 1. 코인 표시 UI만 업데이트 (기존 HTML 살림)
    updateShopUI(); 

    // 2. 포션 리스트 컨테이너를 찾아서 내용물만 렌더링
    const potionList = document.getElementById('potion-list');
    if (potionList) {
        // 기존 포션 리스트를 비우고 다시 그리기 (리스트만 비우는 것임)
        potionList.innerHTML = ''; 
        renderPotions(potionList); // renderPotions가 리스트를 인자로 받도록 수정
    }

    // 3. 곡괭이 리스트도 마찬가지
    const pickaxeList = document.getElementById('pickaxe-ui-list');
    if (pickaxeList) {
        pickaxeList.innerHTML = '';
        renderPickaxesUI(pickaxeList);
    }
}

function switchShopTab(tabName, event) {
    // 1. 모든 서브 섹션 숨기기
    document.querySelectorAll('.sub-section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    // 2. 버튼 활성화 상태 초기화
    document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));

    // 3. 선택한 섹션 보이기
    const target = document.getElementById(tabName + '-section');
    if (target) {
        target.classList.add('active');
        target.style.display = 'block';
    }
    
    // 4. 클릭한 버튼에 active 추가
    event.currentTarget.classList.add('active');
}

// Bulk Mining 로직을 별도 함수로 분리 (유지보수 용이)
function processBulkMining(pick) {
    isBusy = true;

    let rarestOre = null;
    let foundNew = false;


    for (let i = 0; i < pick.superCount; i++) {
        const ore = rollOre(pick.luck);

        if (addOreToInventory(ore)) {
            foundNew = true;
        }

        // 가장 희귀한 광물 선택
        if (!rarestOre || ore.chance > rarestOre.chance) {
            rarestOre = ore;
        }
    }

    if (rarestOre) {

        // 화면 효과
        applyScreenEffect(rarestOre);

        // 결과 표시
showResult("", {
    item: rarestOre.name,
    color: rarestOre.color,
    rarity: rarestOre.rarity,
    quantity: pick.superCount,
    luck: pick.luck,
    new: foundNew,
    glowType: rarestOre.glowType,
    bulk: true
});

        // 희귀 광물 사운드
        const raritySound =
            raritySounds[rarestOre.rarity?.toLowerCase()];

if (shouldPlaySpawnSound(rarestOre)) {

    if (raritySound) {
        playSound(raritySound);
    } else {
        playSound(superSound);
    }

}
        // 인벤토리 갱신
        if (foundNew) {
            UIManager.requestInventoryUpdate();
        }
    }

    setTimeout(() => {
        isBusy = false;
    }, 1000);
}


function addOreToInventory(ore) {
    if (!inventory[ore.name]) inventory[ore.name] = 0;
    inventory[ore.name]++;
    totalBlocksMined++;

    const isNew = (foundCount[ore.name] || 0) === 0;
    foundCount[ore.name] = (foundCount[ore.name] || 0) + 1;

    return isNew;
}

function performMining() {
    // 1. 광물을 얻는 로직 (기존 코드 사용)
    const minedOre = getRandomOre(); // 광물 결정 로직
    
    // 2. 인벤토리/통계 갱신
    inventory[minedOre.name] = (inventory[minedOre.name] || 0) + 1;
    foundCount[minedOre.name] = (foundCount[minedOre.name] || 0) + 1;
    
    // 3. [핵심] 도감 자동 업데이트
    if ((foundCount[minedOre.name] || 0) === 1) { // 처음 캤을 때만
        console.log("새로운 광물 발견!");
        renderEncyclopedia(); // 도감 즉시 갱신
    }
    
    // 4. 화면 갱신 (전체 UI 업데이트)
    updateUI(); 
    saveGame();
}

function toggleAutoMining() {
    isAutoMining = !isAutoMining;
    const btn = document.getElementById('autoMineBtn');
    if (isAutoMining) {
        btn.innerText = "Auto Mining ON";
        btn.style.backgroundColor = "#4caf50";
        // 기존의 requestAnimationFrame과 setInterval이 혼재된 구조를 제거하고 하나로 통합
        if (autoMineInterval) clearInterval(autoMineInterval);
        autoMineInterval = setInterval(() => {
            if (isAutoMining) performMining(); 
        }, 1000 / autoMineRate);
    } else {
        btn.innerText = "Auto Mining OFF";
        btn.style.backgroundColor = "#ff4d4d";
        clearInterval(autoMineInterval);
        autoMineInterval = null;
    }
}

function rollOre(luck, mode = "online") {
    const currentLayerOres = layers[currentLayerIndex].ores;
    const availableOres = ores.filter(o =>
        currentLayerOres.includes(o.name)
    );

    // 가장 희귀한 광물부터 검사
    const sortedOres = [...availableOres]
        .sort((a, b) => b.chance - a.chance);

    for (const ore of sortedOres) {

        // Luck 적용
        const effectiveChance = Math.max(
            1,
            ore.chance / luck
        );

        if (Math.random() < (1 / effectiveChance)) {

            lastRollDebug = {
                oreName: ore.name,
                originalChance: `1/${ore.chance}`,
                appliedLuck: luck.toFixed(2),
                finalChance: `1/${Math.floor(effectiveChance)}`
            };

            return ore;
        }
    }

    // 아무것도 안 뜨면 가장 흔한 광물
    return availableOres.reduce((commonest, ore) =>
        ore.chance < commonest.chance
            ? ore
            : commonest
    );
}

function showResult(text, meta = {}) {
    const el = document.getElementById('result');
    if (!el) return;

    if (resultTimer) clearTimeout(resultTimer);

    let html = "";

    const glowClass = meta.glowType ? `glow-${meta.glowType}` : "";

    if (meta.item || meta.rarity || meta.quantity || meta.luck) {
        html = `
            <div class="result-item">

            ${meta.bulk ? `
    <div style="
        color:#00e5ff;
        font-weight:bold;
        font-size:15px;
        margin-bottom:6px;
        text-shadow:0 0 8px #00e5ff;
    ">
        ⚡ BULK MINING ACTIVATED
    </div>
` : ""}

                ${meta.item ? `
                    <div>
                        Item:
                        <span class="${glowClass}" style="color:${meta.color}; font-weight:bold;">
                            ${meta.item}
                        </span>
                    </div>
                ` : ""}

                ${meta.rarity ? `
                    <div>
                        Rarity:
                        <span class="rarity-badge badge-${meta.rarity.toLowerCase()}">
                            ${meta.rarity.toUpperCase()}
                        </span>
                    </div>
                ` : ""}

                ${meta.quantity ? `<div>Quantity: ${meta.quantity}</div>` : ""}
                ${meta.luck ? `<div>Luck: x${meta.luck}</div>` : ""}

                ${meta.new ? `<div style="color:#ffcc00">✨ NEW DISCOVERY</div>` : ""}
            </div>
        `;
    } else {
        html = text;
    }

    el.innerHTML = html;

    resultTimer = setTimeout(() => {
        el.innerHTML = "";
    }, 1800);
}

// 버프가 활성화되어 있는지 확인하는 공통 함수
function isEffectActive(potionId) {
    // activeBoosts 객체가 존재하는지, 그리고 해당 id의 종료 시간이 현재 시간보다 큰지 확인
    if (typeof activeBoosts !== 'undefined' && activeBoosts[potionId]) {
        return activeBoosts[potionId] > Date.now();
    }
    return false; // 데이터가 없거나 시간이 지났으면 false 반환
}
function applyScreenEffect(ore) {
    const rarity = ore.rarity?.toLowerCase();

    const shakeList = ["epic", "midas", "mythic"];
    const flashList = ["midas", "mythic"];

    const gameRoot = document.getElementById("game-root");

    if (shakeList.includes(rarity) && gameRoot) {
        gameRoot.classList.remove("shake-screen");
        void gameRoot.offsetWidth; // 애니메이션 재시작용

        gameRoot.classList.add("shake-screen");

        setTimeout(() => {
            gameRoot.classList.remove("shake-screen");
        }, 350);
    }

    if (flashList.includes(rarity)) {
        document.body.classList.add("flash-screen");

        setTimeout(() => {
            document.body.classList.remove("flash-screen");
        }, 250);
    }
}

function onMineButtonClick() {
    // 1. 버프 상태 체크
    const isSpeed3 = isEffectActive('speed3');
    const isSpeed2 = isEffectActive('speed2');
    const isSpeed = isEffectActive('speed');

    const isLuck4 = isEffectActive('luck4');
    const isLuck3 = isEffectActive('luck3');
    const isLuck2 = isEffectActive('luck2');
    const isLuck = isEffectActive('luck');

    // 2. 배율 계산
    const cooldownFactor =
        isSpeed3 ? 0.15 :
        isSpeed2 ? 0.25 :
        isSpeed ? 0.5 : 1.0;

    const luckMultiplier =
        isLuck4 ? 2048 :
        isLuck3 ? 16 :
        isLuck2 ? 4 :
        isLuck ? 2 : 1;

    // 3. 쿨타임 체크
    const currentTime = Date.now();
    if (
        isBusy ||
        (currentTime - lastManualClickTime < CLICK_COOLDOWN * cooldownFactor)
    ) return;

    lastManualClickTime = currentTime;
    isBusy = true;

    // 4. 채굴 설정
  const pick = pickaxes[currentPickaxe];
const isSuper = Math.random() < pick.superChance;

// 🔥 Bulk Mining 전용 처리
if (isSuper) {
    processBulkMining(pick);
    return;
}
    let rarestOre = null;
    let highestRank = -1;
    let foundNew = false;
    const iterations = pick.power;

    // 5. 채굴 루프
    for (let i = 0; i < iterations; i++) {
        const rolled = rollOre(pick.luck * luckMultiplier);

        if (addOreToInventory(rolled)) {
            foundNew = true;
        }

        const rank = rarityRank[rolled.rarity];
        if (rank > highestRank) {
            highestRank = rank;
            rarestOre = rolled;
        }
    }

    // 6. 결과 출력 + 연출
    if (rarestOre) {

        // 🎬 화면 이펙트 (rarity 기반)
        applyScreenEffect(rarestOre);

        // 🔥 UI 출력
showResult("", {
    item: rarestOre.name,
    color: rarestOre.color,
    rarity: rarestOre.rarity,
    quantity: pick.power,
    luck: pick.luck * luckMultiplier,
    new: foundNew,
    glowType: rarestOre.glowType,
    bulk: isSuper
});

        // 🔊 사운드
        // 📦 인벤토리 업데이트
        if (foundNew) {
            UIManager.requestInventoryUpdate();
        }

const soundToPlay =
    raritySounds[rarestOre.rarity?.toLowerCase()] ||
    clickSound;

if (shouldPlaySpawnSound(rarestOre)) {
    playSound(soundToPlay);
}
    }

    isBusy = false;
}


// [시스템 알림 전용 출력 함수]
function showNotification(text) {
    const el = document.getElementById('notification-area');
    if (!el) return;
    
    // 이전 알림 타이머 제거
    if (notificationTimer) clearTimeout(notificationTimer);
    
    el.innerText = text;
    // 2초 뒤 사라짐
    notificationTimer = setTimeout(() => { el.innerText = ""; }, 1500);
}

window.activeSounds = window.activeSounds || [];


function playSound(audioObj) {
    if (!audioObj) return;

    const sound = audioObj.cloneNode();
    sound.play().catch(console.error);
}

function getGlowClass(o) {
    // glowType이 있다면 'glow-타입명'을 반환, 없으면 빈 문자열 반환
    return o.glowType ? `glow-${o.glowType}` : '';
}

function showSection(sectionId, clickedBtn) {
    const allSections = document.querySelectorAll('.section');
    const target = document.getElementById(sectionId);

    // 1. 모든 섹션 클래스 제거 (CSS에 의해 즉시 visibility: hidden 됨)
    allSections.forEach(s => {
        s.classList.remove('active');
    });

    // 2. 대상 섹션 클래스 추가 (CSS에 의해 visibility: visible 되고 opacity가 서서히 1이 됨)
    if (target) {
        requestAnimationFrame(() => {
            target.classList.add('active');
        });

        if (sectionId === 'shop') renderShop();
        if (sectionId === 'encyclopedia') renderEncyclopedia();
    }

    // 3. 버튼 활성화
    if (clickedBtn) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
    }
}

function renderInventory(forceUpdate = false) {
    const el = document.getElementById('inventory');
    if (!el) return;

    // 1. 레이어가 바뀌었거나 forceUpdate가 true일 때만 전체 렌더링
    // lastRenderedLayerIndex와 currentLayerIndex를 비교하는 것이 핵심!
    if (forceUpdate || el.innerHTML === "" || lastRenderedLayerIndex !== currentLayerIndex) {
        
        const currentLayerOreNames = layers[currentLayerIndex].ores;
        const visibleOres = ores.filter(o => currentLayerOreNames.includes(o.name));

        el.innerHTML = `<ul class="inventory-list" style="list-style: none; padding: 0;">` + visibleOres.map(o => {
            // ... (기존 HTML 렌더링 코드 동일) ...
            const count = inventory[o.name] || 0;
            const isFound = (foundCount[o.name] || 0) > 0;
            const glowClass = isFound ? getGlowClass(o) : '';
            const chanceDisplay = o.displayChance ? o.displayChance : `1/${o.chance.toLocaleString()}`;
            
            return `
                <li id="ore-item-${o.name}" style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <div>
                        ${isFound ? 
                            `<span class="rarity-badge badge-${o.rarity}">${o.rarity.toUpperCase()}</span>
                             <span class="${glowClass}" style="color: ${o.color}; font-weight: bold;">${o.name}</span>
                             <span style="font-size: 10px; color: #888;">(${chanceDisplay})</span>
                             <span id="count-text-${o.name}" style="margin-left: 5px;">: ${formatNumber(count)}</span>` 
                            : 
                            `<span class="rarity-badge badge-unknown" style="background-color: #333; margin-right: 8px;">???</span>
                             <span style="color: #666; font-weight: bold;">???</span>`
                        }
                    </div>
                    <div id="sell-btn-container-${o.name}">
                        ${isFound ? 
                            `<button onclick="sellOre('${o.name}')" id="sell-btn-${o.name}" class="small-sell-btn" 
                                    style="padding: 2px 8px; font-size: 12px; cursor: ${count === 0 ? 'not-allowed' : 'pointer'};" 
                                    ${count === 0 ? 'disabled' : ''}>Sell</button>` 
                            : `<span></span>`
                        }
                    </div>
                </li>
            `;
        }).join('') + `</ul>`;

        // 현재 렌더링된 레이어 인덱스 업데이트
        lastRenderedLayerIndex = currentLayerIndex;
        
    } else {
        // 2. 레이어가 같다면 숫자만 업데이트
        updateInventoryCountsOnly();
    }
}

function renderEncyclopedia() {
    let container = document.getElementById('encyclopedia-content');
    
    // 컨테이너 초기화 로직 (기존 유지)
    if (!container) {
        const parent = document.getElementById('encyclopedia');
        if (parent) {
            container = document.createElement('div');
            container.id = 'encyclopedia-content';
            parent.appendChild(container);
        } else return;
    }
    container.innerHTML = '';

    // 1. 희귀도별로 데이터 그룹화
    const rarityOrder = ['solitude', 'illimitátus', 'meaninglessness', 'creative', 'abstruse', 'unreal', 'ephemeral', 'mythic', 'midas', 'epic', 'rare', 'uncommon', 'common', 'basic', 'unknown']; // 원하는 정렬 순서
    const groupedOres = ores.reduce((acc, ore) => {
        const rarity = (ore.rarity || 'common').toLowerCase();
        if (!acc[rarity]) acc[rarity] = [];
        acc[rarity].push(ore);
        return acc;
    }, {});

    // 2. 그룹별로 렌더링
    rarityOrder.forEach(rarity => {
        if (!groupedOres[rarity]) return; // 해당 희귀도 광물이 없으면 패스

        // 희귀도 헤더 생성
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = rarity.toUpperCase();
        groupTitle.className = 'rarity-group-title';
        container.appendChild(groupTitle);

        // 해당 그룹 광물들 생성
        groupedOres[rarity].forEach(ore => {
            const isFound = (foundCount[ore.name] || 0) > 0;
            const oreCard = document.createElement('div');
            oreCard.className = 'card encyclopedia-item';
            
            const badgeClass = `badge-${rarity}`;
            const glowClass = (typeof getGlowClass === 'function') ? getGlowClass(ore) : (ore.glowType || '');

            if (isFound) {
                oreCard.innerHTML = `
                    <span class="rarity-badge ${badgeClass}">${rarity.toUpperCase()}</span>
                    <span class="${glowClass}" style="color: ${ore.color || '#fff'}; font-weight: bold;">
                        ${ore.name}
                    </span>
                `;
            } else {
                oreCard.innerHTML = `
                    <span class="rarity-badge badge-unknown">???</span>
                    <span style="color: #666; font-weight: bold;">???</span>
                `;
            }
            container.appendChild(oreCard);
        });
    });
}

function moveLayer(direction) {
    const newIndex = currentLayerIndex + direction;
    
    // 레이어 범위 안에 있는지 확인
    if (newIndex >= 0 && newIndex < layers.length) {
        currentLayerIndex = newIndex;

        // 1. 레이어 이름 텍스트 업데이트 (기존 UI 함수)
        updateLayerUI();

        // 2. 팝업(alert) 대신 살짝 떠오르는 알림 사용
        showNotification(`Moved to: ${layers[currentLayerIndex].name}`, false);

        // 3. 관련 UI들 즉시 갱신
        updateInventoryCountsOnly();
        renderEncyclopedia(); // 도감도 변경된 레이어에 맞춰 갱신되면 좋겠죠?
        saveGame();
        UIManager.requestInventoryUpdate();
    }
}


function updateLayerUI() { const el = document.getElementById('layer-display'); if (el) el.innerText = `Current Layer: ${layers[currentLayerIndex].name}`; }
function updateTotalMinedUI() { const el = document.getElementById('total-mined-display'); if(el) el.innerText = `Total Mined: ${totalBlocksMined.toLocaleString()}`; }
function showSection(id) {
    const section = document.getElementById(id); // 요소를 먼저 찾습니다.
    
    // 안전 장치: 요소가 없으면 에러를 띄우지 않고 함수를 종료합니다.
    if (!section) {
        console.error("error: '" + id + "'cannot find html with specific id.");
        return; 
    }

    // 요소가 있을 때만 실행
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    section.classList.add('active');
}
function sellAllOres() {
    let earned = 0;
    ores.forEach(ore => {
        earned += (inventory[ore.name] || 0) * ore.price;
        inventory[ore.name] = 0;
    });
    coins += earned;
    updateShopUI();
    renderInventory();
    saveGame();
    alert(`판매 완료! +${earned.toLocaleString()} Coins`);
}

function renderPickaxesUI() {
    const el = document.getElementById('pickaxe-ui-list');
    if (!el) return; // 요소가 없으면 그냥 종료
    
    // 1. 순서대로 정렬 (없으면 99로 처리하여 맨 뒤로)
    const sortedPickaxes = [...unlockedPickaxes].sort((a, b) => {
        return (pickaxeSortOrder[a] || 99) - (pickaxeSortOrder[b] || 99);
    });

    // 2. HTML 렌더링
    el.innerHTML = sortedPickaxes.map(id => {
        const p = pickaxes[id];
        const isEquipped = (currentPickaxe === id);
        
        return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #444; transition: 0.2s;">
                <span style="font-weight: ${isEquipped ? 'bold' : 'normal'}; color: ${isEquipped ? '#58D68D' : '#eee'};">
                    ${p.name} ${isEquipped ? '<span style="font-size: 11px; margin-left: 5px;">(Equipped)</span>' : ''}
                </span>
                
                ${isEquipped ? 
                    `<button disabled style="width: 80px; padding: 5px; opacity: 0.5; cursor: not-allowed; border-radius: 4px; border: none;">Equipped</button>` : 
                    `<button onclick="equipPickaxe('${id}')" style="width: 80px; padding: 5px; cursor: pointer; border-radius: 4px; border: 1px solid #555; background: #333; color: white;">Equip</button>`
                }
            </div>
        `;
    }).join('');
}

function rollOreOffline() {
    const currentLayerOres = layers[currentLayerIndex].ores;

    const availableOres = ores.filter(o =>
        currentLayerOres.includes(o.name)
    );

    const sortedOres = [...availableOres]
        .sort((a, b) => b.chance - a.chance);

    for (const ore of sortedOres) {
        const effectiveChance = Math.max(1, ore.chance);

        if (Math.random() < (1 / effectiveChance)) {
            return ore;
        }
    }

    return availableOres.reduce((commonest, ore) =>
        ore.chance < commonest.chance ? ore : commonest
    );
}

function loadOfflineProgress() {
    const data = JSON.parse(localStorage.getItem('mineSave'));
    if (!data || !data.lastSaveTime) return;

    const now = Date.now();
    const elapsedMs = now - data.lastSaveTime;
    const elapsedSec = Math.floor(elapsedMs / 1000);

    // 🔥 초당 채굴량
    const miningRate = miningSpeed / 100; 
    const minedCount = Math.floor(elapsedSec * miningRate);

    if (minedCount <= 0) return;

    let offlineLoot = [];

    for (let i = 0; i < minedCount; i++) {
        const pick = pickaxes[currentPickaxe];
        const ore = rollOre(pick.luck);

        addOreToInventory(ore);
        offlineLoot.push(ore.name);
    }

    showNotification(`⏳ Offline mining: +${minedCount} ores`);
    console.log("Offline loot sample:", offlineLoot.slice(0, 10));
}

function saveGame() {
    const data = {
        inventory,
        foundCount,
        foundOres,
        coins,
        currentPickaxe,
        unlockedPickaxes,
        totalBlocksMined,
        currentLayerIndex,
        lastSaveTime: Date.now() // 🔥 추가
    };

    localStorage.setItem('mineSave', JSON.stringify(data));
}
function loadGame() {
    const data = JSON.parse(localStorage.getItem('mineSave'));
    if (!data) {
        // 데이터가 없을 때 기본값 설정
        foundOres = []; 
        return;
    }

    inventory = data.inventory || {};
    foundCount = data.foundCount || {};
    // 여기에 foundOres를 추가하세요!
    foundOres = data.foundOres || []; 
    
    coins = data.coins || 0;
    currentPickaxe = data.currentPickaxe || 'basic';
    unlockedPickaxes = data.unlockedPickaxes || ['basic'];
    totalBlocksMined = data.totalBlocksMined || 0;
    currentLayerIndex = data.currentLayerIndex || 0;
}
// 광물을 캤을 때 실행되는 함수 (예: mineBlock 등)
function onOreMined(oreName) {
    // 1. 이미 발견한 적 있는지 확인
    if (!foundOres.includes(oreName)) {
        foundOres.push(oreName); // 도감에 이름 추가!
        saveGame();             // 저장!
        renderEncyclopedia();   // 도감 즉시 갱신 (??? -> 이름으로 변경)
        console.log("새로운 광물 발견: " + oreName);
    }
}

function craftPickaxe(id) {
    const recipe = pickaxeRecipes[id];
    
    // 1. 재료 체크
    for (let mat in recipe.cost) {
        if ((inventory[mat] || 0) < recipe.cost[mat]) {
            return alert("Materials are not enough!");
        }
    }
    
    // 2. 재료 차감
    for (let mat in recipe.cost) {
        inventory[mat] -= recipe.cost[mat];
    }
    
    // 3. 해금 및 저장
    unlockedPickaxes.push(id);
    alert(`${recipe.name} Crafted a pickaxe successfully!`);
    
    // 4. UI 갱신
    renderForge();
    renderPickaxesUI();
    renderInventory();
    saveGame();
}
function renderForge() {
    const el = document.getElementById('recipe-list');
    if (!el) return;

    el.innerHTML = Object.keys(pickaxeRecipes).map(id => {
        const recipe = pickaxeRecipes[id];
        const stats = pickaxes[id];
        const isUnlocked = unlockedPickaxes.includes(id);
        const lore = pickaxeLore[id] || "No description available."; 
        
        const costText = Object.entries(recipe.cost)
            .map(([mat, count]) => `${mat} ${count}'s`)
            .join(', ');

        const statsHtml = `
            <div style="font-size: 13px; color: #ddd; margin: 8px 0; padding: 5px; background: #333; border-radius: 4px;">
                ⚡ Power: <b>${stats.power}</b> | 🍀 Luck: <b>x${stats.luck.toFixed(1)}</b> | ✨ Bulk: <b>${(stats.superChance * 100).toFixed(1)}%</b> (Mines ${stats.superCount})
            </div>
        `;

        // [수정 포인트]
        // Crafted 버튼과 Craft 버튼 모두를 tooltip-container로 감싸서
        // 어떤 상태든 마우스를 올리면 툴팁(lore)이 뜨게 만듭니다.
        const actionHtml = `
            <div class="tooltip-container">
                ${isUnlocked ? 
                    '<button disabled style="padding: 5px 15px; cursor: not-allowed;">Crafted</button>' : 
                    `<button onclick="craftPickaxe('${id}')" style="padding: 5px 15px; cursor: pointer;">Craft</button>`
                }
                <span class="tooltip-text">${lore}</span>
            </div>
        `;

        return `
            <div style="margin-bottom: 15px; padding: 12px; border: 1px solid #444; border-radius: 5px; background: #25252b;">
                <div style="font-size: 16px; font-weight: bold;">${recipe.name}</div>
                ${statsHtml}
                <div style="font-size: 12px; color: #aaa; margin-bottom: 10px;">Materials: ${costText}</div>
                ${actionHtml}
            </div>
        `;
    }).join('');
}

function equipPickaxe(id) {
    if (!unlockedPickaxes.includes(id)) {
        return alert("Not crafted yet.");
    }
    currentPickaxe = id;
    alert(`${pickaxes[id].name} Equipped!`);
    renderPickaxesUI(); // 화면 갱신!
    saveGame();
}


function resetGame() {
    if (!confirm("⚠️ Are you sure you reset your data?")) return;
    localStorage.removeItem('mineSave');
    location.reload();
}


// [2] 빠져있던 updateUI 함수 추가
function updateUI() {
    renderInventory();
    renderEncyclopedia();
    renderPickaxesUI();
    renderForge();
    renderShop();
    updateLayerUI();
}

function setupAutoMineButton() {
    const autoMineBtn = document.getElementById('autoMineBtn');
    if (!autoMineBtn) return;

    autoMineBtn.addEventListener('click', () => {
        isAutoMining = !isAutoMining;
        autoMineBtn.innerText = isAutoMining ? "Auto Mining ON" : "Auto Mining OFF";
        autoMineBtn.style.backgroundColor = isAutoMining ? "#4caf50" : "#ff4d4d";
    });
}
function setupTabButtons() {
    // 모든 .tab-btn 요소를 찾습니다
    const buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 버튼에 적힌 data-target 속성값을 가져옵니다 (예: 'encyclopedia')
            const targetId = e.target.getAttribute('data-target');
            
            // showSection 함수 호출
            showSection(targetId, e.target);
        });
    });
}


function initUI() {
    updateUI();
    updateLayerUI();
    updateTotalMinedUI();

    renderInventory(true); // 🔥 강제 최초 렌더
    renderEncyclopedia();
    renderPickaxesUI();
}

function updateInventoryCountsOnly() {
    const currentLayerOreNames = layers[currentLayerIndex].ores;
    
    currentLayerOreNames.forEach(oreName => {
        const count = inventory[oreName] || 0;
        const countEl = document.getElementById(`count-text-${oreName}`);
        const sellBtn = document.getElementById(`sell-btn-${oreName}`);

        // 1. 숫자 업데이트
        if (countEl) {
            countEl.textContent = `: ${formatNumber(count)}`;
        }

        // 2. 버튼 상태(disabled) 업데이트
        if (sellBtn) {
            sellBtn.disabled = (count === 0);
            sellBtn.style.cursor = (count === 0 ? 'not-allowed' : 'pointer');
        }
    });
}
function updateBuyButtons() {
    potions.forEach(potion => {
        const btn = document.querySelector(`button[onclick="buyPotion('${potion.id}')"]`);
        if (!btn) return;

        // 1. activeBoosts가 객체인지 확인하고, 해당 ID의 값이 존재하는지 명확히 체크
        // 2. 만약 activeBoosts가 undefined/null 이라면 빈 객체로 간주
        const boosts = (typeof activeBoosts === 'object' && activeBoosts !== null) ? activeBoosts : {};
        const endTime = boosts[potion.id];
        
        // 3. 현재 시간이 종료 시간보다 작은지 확인
        const isEffectActive = (endTime && typeof endTime === 'number' && endTime > Date.now());

        const canAfford = coins >= potion.price;
        
        // 버튼 상태 업데이트
        btn.disabled = !canAfford || isEffectActive;
        
        if (isEffectActive) {
            btn.textContent = "Already Active";
        } else if (!canAfford) {
            btn.textContent = "Not Enough Coins";
        } else {
            btn.textContent = `Buy for ${potion.price.toLocaleString()} Coins`;
        }
    });
}
window.onload = () => {
    loadGame();
    loadSettings();

    loadOfflineProgress(); // 🔥 여기

    setupAutoMineButton();
    setupTabButtons();

    autoMineLoop();

    requestAnimationFrame(() => {
        initUI();
    });
};

setInterval(() => {
    // 1. 버프 지속시간 UI 갱신 (기존)
    updateActiveEffectsUI();

    // 2. 포션 구매 버튼 상태만 갱신 (전체 UI를 새로 그리지 않음!)
    updateBuyButtons();
}, 1000);

setInterval(() => {
    saveGame();
}, 1000);