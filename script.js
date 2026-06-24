// --- [1] 기본 설정 및 데이터 ---
const superSound = new Audio('super_mining.mp3');
const clickSound = new Audio('click.mp3'); clickSound.volume = 0.05;
const abilitySound = new Audio('sounds/ability.mp3'); // 'sounds' 폴더에 파일이 있어야 합니다.

const raritySounds = {
    epic: new Audio('rare.mp3'),
    midas: new Audio('rare2.mp3'), mythic: new Audio('rare2.mp3'), ephemeral: new Audio('overrare.mp3'),
    unreal: new Audio('overrare.mp3'), abstruse: new Audio("ascendant.mp3"),
    creative: new Audio('ascendant.mp3'), meaninglessness: new Audio("everything.mp3")
};

const layers = [
    { name: "Grass Layer", ores: ['Grass', 'Iron', 'Gold', 'Anvilar', 'F L O W S C A P E', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Slate Layer", ores: ['Slate', 'Iron', 'Ruby', 'Diamond', 'Enfinitricifite', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Ice Layer", ores: ['Ice', 'Diamond', 'Crkyotopis', 'Acrictopas', 'Infinitricifite', 'Macorl Esperatio', 'IXYSOPARDOX', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Basalt Layer", ores: ['Basalt', 'Iron', 'Asphalt', 'Gold', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Stone Layer", ores: ['Stone', 'Iron', 'Equatox', 'Faked Reality', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
    { name: "Lava Layer", ores: ['Lava', 'Solid Obsidian', 'Zinc', 'Gold', 'Solavoltei', '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'] },
];

const rarityColors = {
    common: "#bdc3c7", uncommon: "#85ffa9ff", rare: "#f3db7a", 
    epic: "#3da1c0ff", midas: "#ffd900ff", mythic: "#f15b5bff", ephemeral: "#9dfff7",unreal: "#9a1cccff",
    abstruse: "#131c99ff", creative: "#fcff52", meaninglessness: "#e2ffed"
};

const ores = [
    { name: '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽', rarity: 'meaninglessness', chance: 50909000000, price: 1293000000, color: 'rgb(75, 168, 230)' },
    { name: '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', rarity: 'meaninglessness', chance: 41023000000, price: 920000000, color: 'rgb(99, 121, 89)' },
    { name: 'F L O W S C A P E', rarity: 'creative', chance: 1209000000, price: 924002000, color: 'rgb(175, 183, 255)' },
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
    { name: 'Stone', rarity: 'common', chance: 2, price: 10, color: '#bdc3c7' }
];

const pickaxes = {
    basic: { name: "Basic Pickaxe", power: 1, luck: 1.0, superChance: 0.0, superCount: 0 },
    steel: { name: "Tier 2 / Steel Pickaxe", power: 2, luck: 1.1, superChance: 0.02, superCount: 30 },
    godPickaxe: { name: "Tier 3 / God Pickaxe", power: 5, luck: 1.4, superChance: 0.05, superCount: 100 },
    light: { name: "Tier 4 / Lightning Pickaxe", power: 7, luck: 2.2, superChance: 0.025, superCount: 500 },
    bulk: { name: "Tier 4 / Bulk Pickaxe", power: 9, luck: 1.95, superChance: 0.005, superCount: 12000 },
    hackaxe: { name: "hack axe", power: 250, luck: 25.0, superChance: 0.1, superCount: 250000},
    luhackaxe: { name: "hack axe", power: 250000, luck: 250.0, superChance: 0, superCount: 250}
};

const pickaxeRecipes = {
    'steel': { name: 'Tier 2 Steel Pickaxe', cost: { 'Iron': 10, 'Stone': 50 }, power: 2 },
    'godPickaxe': { name: 'Tier 3 God Pickaxe', cost: { 'Gold': 5, 'Iron': 50 }, power: 5 },
    'light': { name: 'Tier 4 / Lightning Pickaxe', cost: { 'Ruby': 2, 'Gold': 7 }, power: 7 },
    'bulk': { name: 'Tier 4 / Bulk Pickaxe', cost: { 'Ruby': 2, 'Gold': 7 }, power: 7 },
    'hackaxe': { name: 'no u hack axe', cost: { 'IXYSOPARDOX': 23231, 'Iron': 1 }, power: 250 },
    'luhackaxe': { name: 'luhacks', cost: { 'IXYSOPARDOX': 56555, 'Iron': 1 }, power: 2500000 }
};

// --- [2] 전역 변수 ---
let inventory = {}, foundCount = {}, currentPickaxe = 'basic', coins = 0, totalBlocksMined = 0, currentLayerIndex = 0;
let unlockedPickaxes = ['basic'];
let isBusy = false; // 게임이 바쁜지 확인하는 변수

ores.forEach(ore => { inventory[ore.name] = 0; foundCount[ore.name] = 0; });

// --- [3] 게임 로직 ---
function rollOre(luck) {
    const currentLayerOres = layers[currentLayerIndex].ores;
    const availableOres = ores.filter(o => currentLayerOres.includes(o.name));
    const weights = availableOres.map(o => (1 / o.chance) * luck);
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    for (let i = 0; i < availableOres.length; i++) {
        random -= weights[i];
        if (random <= 0) return availableOres[i];
    }
    return availableOres[availableOres.length - 1];
}

function onMineButtonClick() {
    // [추가] 만약 바쁜 상태라면 클릭 무시하고 즉시 종료
    if (isBusy) return;

    const pick = pickaxes[currentPickaxe];
    let isSuper = Math.random() < pick.superChance;
    let iterations = isSuper ? pick.superCount : pick.power;
    const rarityRank = { 'common': 0, 'uncommon': 1, 'rare': 2, 'epic': 3, 'midas': 4, 'mythic': 5, 'unreal': 6, 'abstruse': 7};
    let highestRarity = 'common', lastOre = null;

    // [추가] 슈퍼 마이닝이면 바쁜 상태로 전환
    if (isSuper) {
        isBusy = true;
        // 2초 뒤에 다시 클릭 가능하게 설정 (showNotification의 시간과 맞추는 것이 좋습니다)
        setTimeout(() => { isBusy = false; }, 2000);
    }

    for(let i = 0; i < iterations; i++) {
        let rolled = rollOre(pick.luck);
        inventory[rolled.name]++;
        foundCount[rolled.name]++;
        lastOre = rolled;
        if (rarityRank[rolled.rarity] > rarityRank[highestRarity]) highestRarity = rolled.rarity;
    }

    // 결과 텍스트 변수 미리 선언 (이전 오류 방지)
    const resultText = iterations === 1 ? 
        `You got <span style="color: ${lastOre.color}; font-weight: bold;">${lastOre.name}</span>!` : 
        `You got ${iterations} items! (Last: <span style="color: ${lastOre.color}; font-weight: bold;">${lastOre.name}</span>)`;

    // 소리 및 알림 처리
    if (isSuper) {
        playSound(superSound);
        showNotification("✨ Bulk Mining Activated!", false); 
        setTimeout(() => {
            document.getElementById('result').innerHTML = resultText;
        }, 1000);
    } else {
        playSound(raritySounds[highestRarity] || clickSound);
        document.getElementById('result').innerHTML = resultText;
    }

    totalBlocksMined += iterations;
    updateTotalMinedUI();
    renderInventory();
    renderEncyclopedia();
    saveGame();
}


function showNotification(message, playSound = false) {
    const resultEl = document.getElementById('result');
    
    // 1. 텍스트 설정
    resultEl.innerText = message;
    resultEl.style.color = "#f1c40f"; // 강조 색상
    
    // 2. 소리 재생 (playSound가 true일 때만)
    if (playSound) {
        abilitySound.currentTime = 0;
        abilitySound.play().catch(e => console.log("Failed to Load sound:", e));
    }
    
    // 3. 2초 뒤에 텍스트 사라지게 하기
    setTimeout(() => {
        resultEl.innerText = "";
        resultEl.style.color = "#ffffff";
    }, 2000);
}

function playSound(audioObj) { if (!audioObj) return; const sound = audioObj.cloneNode(); sound.play().catch(e => console.log(e)); }

function renderInventory() {
    const el = document.getElementById('inventory');
    if (!el) return;
    const currentLayerOreNames = layers[currentLayerIndex].ores;
    const visibleOres = ores.filter(o => currentLayerOreNames.includes(o.name));
    
    el.innerHTML = `<ul class="inventory-list" style="list-style: none; padding: 0;">` + visibleOres.map(o => `
        <li style="margin-bottom: 8px;">
            <span style="color: ${rarityColors[o.rarity]}; border: 1px solid ${rarityColors[o.rarity]}; padding: 1px 4px; border-radius: 3px; font-size: 10px; margin-right: 8px;">
                ${o.rarity.toUpperCase()}
            </span>
            <span style="color: ${o.color}; font-weight: bold;">${o.name}</span>
            <span style="font-size: 10px; color: #888; margin-left: 5px;">(1/${o.chance.toLocaleString()})</span>
            : ${inventory[o.name]}'s
        </li>
    `).join('') + `</ul>`;
}

function renderEncyclopedia() {
    const el = document.getElementById('encyclopedia');
    if (!el) return;
    el.innerHTML = `<h3>광물 도감</h3>` + ores.map(o => {
        const isFound = foundCount[o.name] > 0;
        // 발견된 경우에만 확률 표시
        const chanceDisplay = isFound ? `<span style="font-size: 10px; color: #888; margin-left: 5px;">(1/${o.chance.toLocaleString()})</span>` : '';
        return `<div style="margin-bottom: 10px; opacity: ${isFound ? 1 : 0.6};">
            <strong>${isFound ? o.name : "???"}</strong>${chanceDisplay} : ${foundCount[o.name]}'s
        </div>`;
    }).join('');
}

function moveLayer(direction) {
    const newIndex = currentLayerIndex + direction;
    if (newIndex >= 0 && newIndex < layers.length) {
        currentLayerIndex = newIndex;
        alert(`층 이동: ${layers[currentLayerIndex].name}`);
        updateLayerUI();
        renderInventory();
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
function renderPickaxeUI() {
    const el = document.getElementById('pickaxe-list');
    if (!el) return;

    el.innerHTML = unlockedPickaxes.map(id => `
        <div style="margin: 5px 0; padding: 10px; border: 1px solid #444; border-radius: 5px;">
            <strong>${pickaxes[id].name}</strong> 
            ${currentPickaxe === id ? 
                '<span style="color: #2ecc71;">(Equipped)</span>' : 
                `<button onclick="equipPickaxe('${id}')">Equip</button>`}
        </div>
    `).join('');
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
    renderPickaxeUI();
    renderInventory();
    saveGame();
}
function renderForge() {
    const el = document.getElementById('recipe-list');
    if (!el) return;

    el.innerHTML = Object.keys(pickaxeRecipes).map(id => {
        const recipe = pickaxeRecipes[id];
        const isUnlocked = unlockedPickaxes.includes(id);
        
        // 재료 문자열 생성
        const costText = Object.entries(recipe.cost)
            .map(([mat, count]) => `${mat} ${count}'s`)
            .join(', ');

        return `
            <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #333; border-radius: 5px;">
                <strong>${recipe.name}</strong><br>
                <small style="color: #888;">Materials: ${costText}</small><br>
                ${isUnlocked ? '<button disabled>Crafted</button>' : 
                `<button onclick="craftPickaxe('${id}')">Craft</button>`}
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
    renderPickaxeUI(); // 장착중 버튼 갱신
    saveGame();
}


function resetGame() {
    if (!confirm("⚠️ Are you sure you reset your data?")) return;
    localStorage.removeItem('mineSave');
    location.reload();
}

window.onload = () => {
    loadGame();
    renderInventory();
    renderEncyclopedia();
    renderPickaxeUI(); // 추가
    renderForge();     // 추가
    updateLayerUI();
    updateTotalMinedUI();
    updateShopUI();
};