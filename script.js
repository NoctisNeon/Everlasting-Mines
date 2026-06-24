// [1] 전역 변수 설정

const superSound = new Audio('super_mining.mp3');
const clickSound = new Audio('click.mp3'); 
clickSound.volume = 0.05;
const abilitySound = new Audio("./sounds/ability.mp3");

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
        id: 'huge_luck', 
        name: 'Potion of Luck II', 
        price: 750000, 
        duration: 600, // 초 단위
        lore: 'It gets more longer and bigger!', 
        stats: 'Makes you 4x more luckier!',
        effectIcon: '🍀'
    },
    { 
        id: 'massive_luck', 
        name: 'Potion of Luck Max', 
        price: 4000000, 
        duration: 1200, // 초 단위
        lore: 'woah.. how did you get that?', 
        stats: 'Makes you 16x more luckier!',
        effectIcon: '🍀'
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
        effectIcon: '⚡'
    },
    { 
        id: 'speed3', 
        name: 'Potion of at Speed\'o Sound', 
        price: 9000000, 
        duration: 600, 
        lore: 'What?! How?', 
        stats: 'Makes you mine 5.5 times faster! (interval cooltime)',
        effectIcon: '⚡'
    }
];
// 현재 적용 중인 버프 상태 (종료 시간 저장)
let activeBoosts = {
    luck: 0,
    speed: 0
};

let lastMineTime = Date.now();
const miningSpeed = 100;
let isAutoMining = false;
let isBusy = false;
let notificationTimer = null;
let resultTimer = null;
let player = { luck: 1 };
let inventory = {}, foundCount = {}, currentPickaxe = 'basic', coins = 0, totalBlocksMined = 0, currentLayerIndex = 0;
let unlockedPickaxes = ['basic'];
let lastMinedTime = localStorage.getItem('lastMinedTime') || Date.now();
const CLICK_COOLDOWN = 70; // 0.2초 (200ms) 동안은 클릭 무시
let lastManualClickTime = 0; // 마지막 클릭 시간 기록용
let lastRollDebug = { oreName: "없음", baseChance: 0, luck: 0, finalProbability: 0 };


const raritySounds = {
    epic: new Audio('rare.mp3'),
    midas: new Audio('rare2.mp3'), mythic: new Audio('rare2.mp3'), ephemeral: new Audio('overrare.mp3'),
    unreal: new Audio('overrare.mp3'), abstruse: new Audio("ascendant.mp3"),
    creative: new Audio('ascendant.mp3'), meaninglessness: new Audio("everything.mp3"), illimitátus: new Audio("otherworldly.mp3")
};

const layers = [
    { name: "Grass Layer", ores: ['Grass', 'Iron', 'Gold', 'Anvilar', 'F L O W S C A P E', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Slate Layer", ores: ['Slate', 'Iron', 'Ruby', 'Diamond', 'Enfinitricifite', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Ice Layer", ores: ['Ice', 'Diamond', 'Crkyotopis', 'Acrictopas', 'Infinitricifite', 'Macorl Esperatio', 'IXYSOPARDOX', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Basalt Layer", ores: ['Basalt', 'Iron', 'Asphalt', 'Gold', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Stone Layer", ores: ['Stone', 'Iron', 'Equatox', 'Faked Reality', 'Braxichroxmin', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Lava Layer", ores: ['Lava', 'Solid Obsidian', 'Zinc', 'Gold', 'Solavoltei', '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "?", ores: ['Matizium', 'Lava', 'P̲̆ả̢rḁ̈ṃ̑a̳̋t̖̍a̜̋d̦̅r̙̎ō̲x̖̎'] },
    { name: "Frostbite", ores: ['Evening Snow', 'Ӻɍꝋꞩⱦ Ȼɍⱥȼҟӿīᵯ']}
];

const pickaxeSortOrder = {
    'basic': 1,
    'scrap': 1.5,
    'steel': 2,
    'godPickaxe': 3,
    'light': 4,
    'bulk': 5,
    'ultima' : 5.5,
    'hackaxe': 6,
    'luhackaxe': 7
};

const rarityColors = {
    unknown: "#000000", common: "#bdc3c7", uncommon: "#85ffa9ff", rare: "#f3db7a", 
    epic: "#b465cc", midas: "#ffd900ff", mythic: "#f15b5bff", ephemeral: "#9dfff7",unreal: "#9a1cccff",
    abstruse: "#131c99ff", creative: "#fcff52", meaninglessness: "#e2ffed", illimitátus: "#0b1820"
};

const ores = [
    { name: 'Ӻɍꝋꞩⱦ Ȼɍⱥȼҟӿīᵯ', rarity: 'illimitátus', chance: 399999999999, price: 99999999999, color: 'rgb(0, 162, 255)', glowType: 'frost' },
    { name: 'P̲̆ả̢rḁ̈ṃ̑a̳̋t̖̍a̜̋d̦̅r̙̎ō̲x̖̎', rarity: 'illimitátus', chance: 120000000000, price: 5900000000, color: 'rgb(17, 129, 17)', glowType: 'legendary' },
    { name: '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽', rarity: 'meaninglessness', chance: 50909000000, price: 1293000000, color: '#4ba8e6', glowType: 'aby1'},
    { name: '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', rarity: 'meaninglessness', chance: 41023000000, price: 920000000, color: 'rgb(99, 121, 89)' },
    { name: 'F L O W S C A P E', rarity: 'creative', chance: 1209000000, price: 924002000, color: 'rgb(175, 183, 255)' },
    { name: 'Braxichroxmin', rarity: 'creative', chance: 992000000, price: 75030000, color: 'rgb(0, 255, 170)' },
    { name: 'IXYSOPARDOX', rarity: 'abstruse', chance: 593000000, price: 65002000, color: '#88ff00ff' },
    { name: 'Faked Reality', rarity: 'abstruse', chance: 392000000, price: 41002000, color: 'rgb(162, 175, 147)' },
    { name: 'Macorl Esperatio', rarity: 'unreal', chance: 132900000, price: 9302000, color: '#8A5FC9' },
    { name: 'Solavoltei', rarity: 'unreal', chance: 112000000, price: 6408000, color: '#a9bb91' },
    { name: 'Anvilar', rarity: 'unreal', chance: 101900000, price: 5302000, color: '#f83e3e' },
    { name: 'Enfinitricifite', rarity: 'ephemeral', chance: 53000000, price: 3200000, color: '#61738b' },
    { name: 'Infinitricifite', rarity: 'mythic', chance: 10000000, price: 2100000, color: '#2f80ed' },
    { name: 'Acrictopas', rarity: 'mythic', chance: 5940000, price: 360000, color: '#106954' },
    { name: 'Crkyotopis', rarity: 'midas', chance: 2390000, price: 250000, color: '#666252' },
    { name: 'Diamond', rarity: 'epic', chance: 50000, price: 5000, color: '#00f2fe' },
    { name: 'Ruby', rarity: 'rare', chance: 2500, price: 1000, color: '#e74c3c' },
    { name: 'Gold', rarity: 'rare', chance: 320, price: 500, color: '#f1c40f' },
    { name: 'Equatox', rarity: 'rare', chance: 120, price: 300, color: '#ffec9e' },
    { name: 'Zinc', rarity: 'uncommon', chance: 60, price: 40, color: '#2a4142' },
    { name: 'Asphalt', rarity: 'uncommon', chance: 53, price: 36, color: 'rgb(218, 176, 176)' },
    { name: 'Iron', rarity: 'uncommon', chance: 50, price: 50, color: '#dff9fb' },
    { name: 'Grass', rarity: 'common', chance: 2, price: 10, color: '#5bff84' },
    { name: 'Ice', rarity: 'common', chance: 2, price: 10, color: '#46a8e6' },
    { name: 'Basalt', rarity: 'common', chance: 2, price: 10, color: '#8f9975' },
    { name: 'Lava', rarity: 'common', chance: 2, price: 10, color: '#ff8019' },
    { name: 'Solid Obsidian', rarity: 'common', chance: 2, price: 10, color: '#281c3a' },
    { name: 'Slate', rarity: 'common', chance: 2, price: 10, color: '#a6c2d4' },
    { name: 'Stone', rarity: 'common', chance: 2, price: 10, color: '#bdc3c7' },
    { name: 'Evening Snow', rarity: 'common', chance: 2, price: 10, color: '#30678b' },
    { name: 'Matizium', rarity: 'unknown', chance: 1000000000000, price: 293000000000, color: '#434e53', displayChance: "1/0" }
];

const pickaxeLore = {
    'basic': "Whatever. Let me do my job.",
    'scrap': "What? Why are you giving me this?",
    'steel': "Reinforced; Yet used for gathering stones.",
    'godPickaxe': "Maybe it's one of fake things exists in the planet earth?",
    'light': "Look! I'm at speed of light!",
    'bulk': "'Even through hard ways, I never give up mining.'",
    'ultima': "'Absolute! Plus! Ultra!'",
    'hackaxe': "What? You think You're going to get this? Fool.",
    'luhackaxe': "Don't mind this hmm"
};

const pickaxes = {
    basic: { name: "Basic Pickaxe", power: 1, luck: 1.0, superChance: 0.0, superCount: 0 },
    scrap: { name: "Tier 1 / Abandoned Pickaxe", power: 1, luck: 1.2, superChance: 0.01, superCount: 100 },
    steel: { name: "Tier 2 / Steel Pickaxe", power: 2, luck: 1.1, superChance: 0.02, superCount: 230 },
    godPickaxe: { name: "Tier 3 / God Pickaxe", power: 5, luck: 1.4, superChance: 0.09, superCount: 450 },
    light: { name: "Tier 4 / Lightning Pickaxe", power: 7, luck: 2.15, superChance: 0.025, superCount: 1750 },
    bulk: { name: "Tier 4 / Bulk Pickaxe", power: 9, luck: 1.55, superChance: 0.01, superCount: 3400 },
    ultima: { name: "Tier 13 / Ultima Blastica", power: 102, luck: 3.75, superChance: 0.025, superCount: 62000 },
    hackaxe: { name: "hack axe", power: 250, luck: 25.0, superChance: 0.1, superCount: 250000},
    luhackaxe: { name: "luhack axe", power: 2500000, luck: 250.0, superChance: 0, superCount: 120000}
};

const pickaxeRecipes = {
    'scrap': { name: 'Tier 1 / Abandoned Pickaxe', cost: { 'Zinc': 1, 'Stone': 12 }, power: 1 },
    'steel': { name: 'Tier 2 / Steel Pickaxe', cost: { 'Iron': 10, 'Stone': 50 }, power: 2 },
    'godPickaxe': { name: 'Tier 3 / God Pickaxe', cost: { 'Gold': 15, 'Iron': 125 }, power: 5 },
    'light': { name: 'Tier 4 / Lightning Pickaxe', cost: { 'Ruby': 6, 'Gold': 8, 'Equatox': 12 }, power: 7 },
    'bulk': { name: 'Tier 4 / Bulk Pickaxe', cost: { 'Diamond': 1, 'Zinc': 640, 'Slate': 4300 }, power: 7 },
    'ultima': {name: "Tier 13 / Ultima Blastica", cost: { 'Braxichroxmin': 1, 'Anvilar': 3, 'Diamond': 3200, 'Iron': 640000}, power: 73},
    'hackaxe': { name: 'no u hack axe', cost: { 'IXYSOPARDOX': 23231, 'Iron': 1 }, power: 250 },
    'luhackaxe': { name: 'luhacks', cost: { 'IXYSOPARDOX': 23232322, 'Iron': 0 }, power: 2500000 }
};
const rarityRank = { 'common': 0, 'uncommon': 1, 'rare': 2, 'epic': 3, 'midas': 4, 'mythic': 5, 'ephemeral': 6, 'unreal': 7, 'abstruse': 8, 'creative': 9, 'meaninglessness': 10, 'illimitátus': 11};


ores.forEach(ore => { inventory[ore.name] = 0; foundCount[ore.name] = 0; });


document.addEventListener('DOMContentLoaded', () => {
    // 여기에는 소리 파일이나 변수 선언은 빼고, 
    // 페이지가 로드된 후 실행할 초기화 작업들만 남기세요.
    loadGame();
    updateUI();
    autoMineLoop();
    console.log("Game system successfully reset");
});


function updateActiveEffectsUI() {
    const box = document.getElementById('active-effects-box');
    const list = document.getElementById('effects-list');
    let html = '';
    let hasActive = false;

    // 포션 종류별로 순회
    for (const [effect, endTime] of Object.entries(activeBoosts)) {
        const remaining = Math.ceil((endTime - Date.now()) / 1000);
        
        if (remaining > 0) {
            hasActive = true;
            // 효과별 이름/아이콘 설정
            const name = (effect === 'luck') ? '🍀 Luck Boosts' : '⚡ Speed Boosts';
            html += `<div style="margin-bottom: 5px;">${name}: <strong>${remaining}Seconds</strong> left</div>`;
        }
    }

    if (hasActive) {
        box.style.display = 'block'; // 버프가 있으면 표시
        list.innerHTML = html;
    } else {
        box.style.display = 'none'; // 버프가 없으면 숨김
    }
}

setInterval(updateActiveEffectsUI, 1000);

function renderPotions() {
    const container = document.getElementById('potion-list');
    if (!container) return;

    container.innerHTML = potions.map(p => {
        const isActive = Date.now() < activeBoosts[p.id];
        
        return `
            <div class="card" style="width: 100%; margin-bottom: 10px;">
                <div style="font-weight: bold; font-size: 1.1em;">${p.name}</div>
                <div style="font-size: 0.85em; color: #aaa; margin: 5px 0;">${p.lore}</div>
                <div style="font-size: 0.9em; margin-bottom: 10px;">
                    ${p.effectIcon} <strong>효과:</strong> ${p.stats} | ⏳ ${p.duration} Seconds
                </div>
                <button 
                    onclick="buyPotion('${p.id}')" 
                    ${isActive ? 'disabled' : ''} 
                    style="width: 100%; padding: 8px; cursor: ${isActive ? 'default' : 'pointer'};">
                    ${isActive ? 'on effect' : `${p.price} coins`}
                </button>
            </div>
        `;
    }).join('');
}

function checkLuckDebug() {
    console.log("--- 🍀 Luck Debug Info ---");
    console.table(lastRollDebug);
    console.log("--------------------------");
}

function buyPotion(id) {
    const potion = potions.find(p => p.id === id);
    if (!potion) return;

    // 코인 체크 (코인 변수명에 맞게 수정하세요)
    if (coins < potion.price) {
        alert("Get more money! :(");
        return;
    }

    // 코인 차감 및 상태 저장
    coins -= potion.price;
    activeBoosts[id] = Date.now() + (potion.duration * 1000);

    // UI 갱신
    renderPotions(); // 상점 UI 갱신
    updateUI();      // 전체 UI 갱신 (코인 표시 등)
    saveGame();      // 상태 저장
}

function autoMineLoop() {
    // 1. 오토마이닝이 꺼져 있을 때
    if (!isAutoMining) {
        lastMinedTime = Date.now(); // 채굴 시간을 현재로 초기화 (밀림 방지)
        requestAnimationFrame(autoMineLoop);
        return;
    }

    // 2. 오토마이닝이 켜져 있을 때만 로직 실행
    const currentTime = Date.now();
    const timePassed = currentTime - lastMinedTime;

    if (timePassed >= miningSpeed) {
        const timesToMine = Math.floor(timePassed / miningSpeed);
        for(let i = 0; i < timesToMine; i++) {
            onMineButtonClick(); 
        }
        lastMinedTime += (timesToMine * miningSpeed);
    }

    requestAnimationFrame(autoMineLoop);
}

// 게임 시작 시 루프 실행 (window.onload 안에 넣거나, 가장 아래에 적으세요)
autoMineLoop();

// 시작
autoMineLoop();

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
    localStorage.setItem('lastMinedTime', lastMinedTime);
}

// 페이지가 로드될 때 또는 다시 활성화될 때 실행
window.addEventListener('focus', () => {
    // 탭으로 다시 돌아왔을 때, 안 돌았던 시간만큼 밀린 작업 수행
    autoMineLoop(); 
});

function renderShop() {
    const shopEl = document.getElementById('shop-items'); // 상점 컨테이너 ID
    
    // 물약 목록 생성
    const potionHtml = potions.map((p, index) => {
        const isBoosted = Date.now() < activeBoosts[p.effect];
        return `
            <div class="card">
                <h3>${p.name}</h3>
                <p>가격: ${p.price} 코인</p>
                <button onclick="buyPotion(${index})" ${isBoosted ? 'disabled' : ''}>
                    ${isBoosted ? '사용 중...' : '구매하기'}
                </button>
            </div>
        `;
    }).join('');
    renderPotions();
    shopEl.innerHTML = `<h2>상점</h2>` + potionHtml;
}

function switchShopTab(tabName) {
    // 1. 모든 서브 섹션 숨기기
    document.querySelectorAll('.sub-section').forEach(el => el.style.display = 'none');
    
    // 2. 모든 버튼의 'active' 클래스 제거
    document.querySelectorAll('.sub-tab-btn').forEach(el => el.classList.remove('active'));

    // 3. 선택한 섹션 보여주기
    document.getElementById(`${tabName}-section`).style.display = 'block';

    // 4. 클릭한 버튼에 'active' 클래스 추가 (이벤트가 전달되지 않을 경우를 대비해 직접 선택)
    const activeBtn = Array.from(document.querySelectorAll('.sub-tab-btn'))
        .find(btn => btn.innerText.toLowerCase().includes(tabName));
    if (activeBtn) activeBtn.classList.add('active');

    // [핵심 추가] 탭을 열 때마다 포션 목록을 새로 그려줍니다!
    if (tabName === 'alchemist') {
        renderPotions();
    }
}

// Bulk Mining 로직을 별도 함수로 분리 (유지보수 용이)
function processBulkMining(pick) {
    isBusy = true;
    playSound(superSound);
    
    let rarestOre = null;
    let highestRank = -1;
    let foundNew = false;

    for (let i = 0; i < pick.superCount; i++) {
        const ore = rollOre(pick.luck);
        if (addOreToInventory(ore)) foundNew = true;
        
        let currentRank = rarityRank[ore.rarity];
        if (currentRank > highestRank) {
            highestRank = currentRank;
            rarestOre = ore;
        }
    }

    if (rarestOre) {
        let resultText = `✨ <strong>Bulk Mining Activated!</strong><br>Got ${pick.superCount} items! (Rarest: <span style="color: ${rarestOre.color}; font-weight: bold;">${rarestOre.name}</span>)`;
        if (foundNew) resultText += '<br><span style="color: #ffcc00; font-size: 14px; font-weight: bold;">(New ore discovered!)</span>';
        showResult(resultText);
    }

    // 1초 뒤 무조건 해제
    setTimeout(() => { isBusy = false; }, 1000);
}


function addOreToInventory(ore) {
    if (!inventory[ore.name]) inventory[ore.name] = 0;
    inventory[ore.name]++;
    totalBlocksMined++; 
    
    const isNew = (foundCount[ore.name] || 0) === 0;
    foundCount[ore.name] = (foundCount[ore.name] || 0) + 1;
    
    return isNew;
}


function showSection(sectionId, btnElement) {
    // 1. 섹션 숨기기/보이기 로직 (이미 잘 되어 있음)
    document.querySelectorAll('.section').forEach(s => { 
        s.style.display = 'none'; 
        s.classList.remove('active'); 
    });
    
    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }

    // 2. 버튼 상태 변경 로직
    if (btnElement) {
        // 모든 탭 버튼에서 active 제거
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // 클릭한 버튼(btnElement)에만 active 추가
        btnElement.classList.add('active');
    }
}

function toggleAutoMine() {
    isAutoMining = !isAutoMining;
    const btn = document.getElementById('autoMineBtn');
    if (isAutoMining) {
        btn.innerText = "Auto Mining ON";
        btn.style.backgroundColor = "#27ae60"; // 초록색
        lastMineTime = Date.now();
    } else {
        btn.innerText = "Auto Mining OFF";
        btn.style.backgroundColor = "#cc3333"; // 빨간색
    }
}

function rollOre(luck) {
    const currentLayerOres = layers[currentLayerIndex].ores;
    const availableOres = ores.filter(o => currentLayerOres.includes(o.name));

    const weights = availableOres.map(o => {
        const rank = rarityRank[o.rarity] || 0; 
        const baseWeight = 1 / o.chance;
        
        // 희귀도에 따른 운 보정 계산
        const luckMultiplier = 1 + (luck * rank * 0.05); 
        return baseWeight * luckMultiplier;
    });

    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < availableOres.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            const selectedOre = availableOres[i];
            
            // --- [디버깅 추가] ---
            // 선택된 광물의 최종 확률 = (해당 광물의 가중치 / 전체 가중치 합계)
            const finalProb = (weights[i] / totalWeight) * 100;

            lastRollDebug = {
                oreName: selectedOre.name,
                baseChance: (1 / selectedOre.chance).toFixed(4), // 원래 확률(가중치)
                appliedLuck: luck.toFixed(2),                    // 현재 적용된 총 운 수치
                finalProbability: finalProb.toFixed(2) + "%"     // 물약 적용 후 최종 확률
            };
            // --------------------

            return selectedOre;
        }
    }
    
    return availableOres[availableOres.length - 1];
}

function showResult(text) {
    const el = document.getElementById('result');
    if (!el) return;
    
    // 이전 결과 타이머 제거
    if (resultTimer) clearTimeout(resultTimer);
    
    el.innerHTML = text;
    // 1.5초 뒤 사라짐
    resultTimer = setTimeout(() => { el.innerHTML = ""; }, 1500);
}

function onMineButtonClick() {
    // 1. 상태 체크 (현재 버프 적용 여부)
// 1. 상태 체크 (현재 버프 적용 여부)
    const isSpeedBoosted = Date.now() < activeBoosts.speed;
    const isSpeed2Boosted = Date.now() < activeBoosts.speed2;
    const isSpeed3Boosted = Date.now() < activeBoosts.speed3;
    
    const isLuckBoosted = Date.now() < activeBoosts.luck;
    const isLuck2Boosted = Date.now() < activeBoosts.luck2;
    const isLuck3Boosted = Date.now() < activeBoosts.luck3;

    // 2. 쿨타임 배율 계산 (높은 단계가 우선 적용되도록)
    let cooldownFactor = 1.0; 
    if (isSpeed3Boosted) cooldownFactor = 0.15;
    else if (isSpeed2Boosted) cooldownFactor = 0.25;
    else if (isSpeedBoosted) cooldownFactor = 0.5;

    const currentCooldown = CLICK_COOLDOWN * cooldownFactor; // 여기서만 선언


    // 3. 행운 배율 계산 (높은 단계가 우선 적용되도록)
    let luckMultiplier = 1; // 기본값
    if (isLuck3Boosted) {
        luckMultiplier = 16;
    } else if (isLuck2Boosted) {
        luckMultiplier = 4;
    } else if (isLuckBoosted) {
        luckMultiplier = 2;
    }

    // 4. 이제 계산된 currentCooldown과 luckMultiplier를 사용합니다.
    const currentTime = Date.now();
    
    if (currentTime - lastManualClickTime < currentCooldown) {
        return; 
    }
    

    if (isBusy) return; 

    lastManualClickTime = currentTime;
    isBusy = true; 
    
    const pick = pickaxes[currentPickaxe];
    let isSuper = Math.random() < pick.superChance;
    let iterations = isSuper ? pick.superCount : pick.power;
    
    let rarestOre = null;
    let highestRank = -1;
    let foundNew = false; 

    for(let i = 0; i < iterations; i++) {
        // [수정2] rollOre에 행운 배율(luckMultiplier)을 곱해서 전달
        let rolled = rollOre(pick.luck * luckMultiplier); 
        
        if (addOreToInventory(rolled)) foundNew = true;

        let currentRank = rarityRank[rolled.rarity];
        if (currentRank > highestRank) {
            highestRank = currentRank;
            rarestOre = rolled;
        }
    }

    // 결과 표시 및 처리
    if (rarestOre) {
        let resultText = iterations === 1 
            ? `You got <span style="color: ${rarestOre.color}; font-weight: bold;">${rarestOre.name}</span>!` 
            : `You got ${iterations} items! (Rarest: <span style="color: ${rarestOre.color}; font-weight: bold;">${rarestOre.name}</span>)`;
        
        if (foundNew) resultText += ' <span style="color: #ffcc00; font-size: 14px; font-weight: bold;">(New ore discovered!)</span>';

        if (isSuper) {
            playSound(superSound);
            showResult(`✨ <strong>Bulk Mining Activated!</strong><br>${resultText}`);
            setTimeout(() => { isBusy = false; }, 1000); 
        } else {
            playSound(raritySounds[rarestOre.rarity] || clickSound);
            showResult(resultText);
            isBusy = false;
        }
    } else {
        isBusy = false;
    }

    updateTotalMinedUI();
    renderInventory();
    renderEncyclopedia();
    saveGame();
    updateUI(); // 이 함수 안에서 renderPotions()도 호출되므로 탭 이동 시 UI가 갱신됩니다.
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
function playSound(audioObj) { if (!audioObj) return; const sound = audioObj.cloneNode(); sound.play().catch(e => console.log(e)); }

function getGlowClass(o) {
    // glowType이 있다면 'glow-타입명'을 반환, 없으면 빈 문자열 반환
    return o.glowType ? `glow-${o.glowType}` : '';
}

function showSection(sectionId, clickedBtn) {
    // 1. 모든 섹션 숨기기
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none'; // 안전장치
    });

    // 2. 선택한 섹션만 보이기
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block'; // 안전장치
    }

    // 3. 모든 탭 버튼에서 active 클래스 제거
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 4. 클릭한 버튼에만 active 클래스 추가
    clickedBtn.classList.add('active');
}

function renderInventory() {
    const el = document.getElementById('inventory');
    if (!el) return;

    const currentLayerOreNames = layers[currentLayerIndex].ores;
    const visibleOres = ores.filter(o => currentLayerOreNames.includes(o.name));

    el.innerHTML = `<ul class="inventory-list" style="list-style: none; padding: 0;">` + visibleOres.map(o => {
        const count = inventory[o.name] || 0;
        const isFound = (foundCount[o.name] || 0) > 0;
        const glowClass = isFound ? getGlowClass(o) : '';
        const chanceDisplay = o.displayChance ? o.displayChance : `1/${o.chance.toLocaleString()}`;
        const isDisabled = count === 0;

        // [핵심] li 구조는 동일하게 유지하고 내부 내용만 삼항연산자로 바꿉니다.
        return `
            <li style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    ${isFound ? 
                        `<span class="rarity-badge badge-${o.rarity}">${o.rarity.toUpperCase()}</span>
                         <span class="${glowClass}" style="color: ${o.color}; font-weight: bold;">${o.name}</span>
                         <span style="font-size: 10px; color: #888;">(${chanceDisplay})</span>
                         <span style="margin-left: 5px;">: ${count}</span>` 
                        : 
                        `<span class="rarity-badge badge-unknown" style="background-color: #333; margin-right: 8px;">???</span>
                         <span style="color: #666; font-weight: bold;">???</span>`
                    }
                </div>
                
                ${isFound ? 
                    `<button 
                        onclick="sellOre('${o.name}')" 
                        ${isDisabled ? 'disabled' : ''} 
                        class="small-sell-btn"
                        style="padding: 2px 8px; font-size: 12px; cursor: ${isDisabled ? 'not-allowed' : 'pointer'};">
                        Sell
                    </button>` 
                    : 
                    `<span></span>` 
                }
            </li>
        `;
    }).join('') + `</ul>`;
}

function renderEncyclopedia() {
    const el = document.getElementById('encyclopedia');
    if (!el) return;

    el.innerHTML = `<h3>Ore Encyclopedia</h3>` + ores.map(o => {
        const isFound = foundCount[o.name] > 0;
        const count = foundCount[o.name] || 0;
        // 발견되었을 때만 getGlowClass를 호출
        const glowClass = isFound ? getGlowClass(o) : '';

        if (isFound) {
            return `
            <div style="margin-bottom: 10px; display: flex; align-items: center;">
                <span class="rarity-badge badge-${o.rarity}" style="margin-right: 8px;">
                    ${o.rarity.toUpperCase()}
                </span>
                <strong class="${glowClass}" style="color: ${o.color}; margin-right: 5px;">${o.name}</strong>
                <span style="font-size: 10px; color: #888;">(1/${o.chance.toLocaleString()})</span>
                <span style="margin-left: 5px;">: ${count}'s founded</span>
            </div>`;
        } else {
            return `
            <div style="margin-bottom: 10px; opacity: 0.6; display: flex; align-items: center;">
                <span class="rarity-badge" style="background-color: #333; margin-right: 8px;">???</span>
                <strong>???</strong>
            </div>`;
        }
    }).join('');
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
        renderInventory();
        renderEncyclopedia(); // 도감도 변경된 레이어에 맞춰 갱신되면 좋겠죠?
        saveGame();
    }
}


function updateLayerUI() { const el = document.getElementById('layer-display'); if (el) el.innerText = `Current Layer: ${layers[currentLayerIndex].name}`; }
function updateTotalMinedUI() { const el = document.getElementById('total-mined-display'); if(el) el.innerText = `Total Mined: ${totalBlocksMined.toLocaleString()}`; }
function updateShopUI() { document.getElementById('coin-display').innerText = `Coins: ${coins.toLocaleString()}`; }
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
    
    // 에러 메시지를 콘솔에 출력하도록 수정
    if (!el) {
        console.error("oops! can't find id named 'pickaxe-ui-list'.");
        return;
    }
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

function saveGame() { localStorage.setItem('mineSave', JSON.stringify({ inventory, coins, currentPickaxe, unlockedPickaxes, totalBlocksMined, currentLayerIndex, foundCount })); }
function loadGame() {
    const data = JSON.parse(localStorage.getItem('mineSave'));
    if(data) {
        Object.assign(inventory, data.inventory);
        Object.assign(foundCount, data.foundCount || {});
        coins = data.coins; currentPickaxe = data.currentPickaxe; unlockedPickaxes = data.unlockedPickaxes;
        totalBlocksMined = data.totalBlocksMined || 0; currentLayerIndex = data.currentLayerIndex || 0;
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

// [1] HTML이 다 로딩된 후 게임 시작
window.onload = () => {
    loadGame();
    renderInventory();
    renderEncyclopedia();
    renderPickaxesUI();
    renderForge();
    updateLayerUI();
    updateTotalMinedUI();
    updateShopUI();
    autoMineLoop(); 
    renderPotions();
};


// [2] 빠져있던 updateUI 함수 추가
function updateUI() {
    renderInventory();
    renderEncyclopedia();
    renderPickaxesUI();
    renderForge();
    updateLayerUI();
    updateTotalMinedUI();
    updateShopUI();
    saveGame();
    renderPotions();
}
// [3] addOreToInventory 수정 (총 채굴량 증가)
function addOreToInventory(ore) {
    if (!inventory[ore.name]) inventory[ore.name] = 0;
    inventory[ore.name]++;
    totalBlocksMined++;
    const isNew = (foundCount[ore.name] || 0) === 0;
    foundCount[ore.name] = (foundCount[ore.name] || 0) + 1;
    return isNew;
}

window.onload = () => {
    console.log("Game system reset start");
    
    // 데이터 불러오기 및 렌더링
    loadGame();
    updateUI();
    
    // 오토마이닝 버튼 이벤트
    const autoMineBtn = document.getElementById('autoMineBtn');
    if (autoMineBtn) {
        autoMineBtn.addEventListener('click', () => {
            isAutoMining = !isAutoMining;
            autoMineBtn.innerText = isAutoMining ? "Auto Mining ON" : "Auto Mining OFF";
            autoMineBtn.style.backgroundColor = isAutoMining ? "#4caf50" : "#ff4d4d";
        });
    }

    // 탭 버튼 이벤트 (HTML의 data-target을 이용)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-target');
            showSection(targetId, e.target);
        });
    });

    // 게임 루프 시작
    autoMineLoop();
    console.log("Game system reset done");
};

setInterval(() => {
    // 1. 버프 지속시간 UI 갱신 (항상 실행)
    updateActiveEffectsUI();

    // 2. 상점 UI 갱신 (항상 실행 - 조건문 제거)
    // 상점 탭이 열려있을 때만 새로고침 하려던 조건 때문에 
    // 오히려 UI가 안 바뀌는 경우가 많습니다. 그냥 매초 그리게 해주세요.
    renderPotions();
}, 1000);