window.resultTimer = null;

function showDebugResult(text, duration = 5000) {
    const resultText = document.getElementById('result');
    if (!resultText) return;

    // 공통 타이머 공유
    if (window.resultTimer) {
        clearTimeout(window.resultTimer);
    }

    resultText.innerHTML = text;

    window.resultTimer = setTimeout(() => {
        resultText.innerHTML = "Let Your Dream Come True.";
        window.resultTimer = null;
    }, duration);
}

function forceMine() {
    const inputName = document.getElementById('debug-input').value;
    const targetOre = ores.find(
        o => o.name.toLowerCase() === inputName.toLowerCase()
    );

    if (!targetOre) {

        showDebugResult(`
            <span style="
                color:#ff6666;
                font-weight:bold;
                text-shadow:0 0 8px rgba(255,100,100,0.6);
            ">
                ⚠ Please enter a correct ore name.
            </span>
        `);

        return;
    }

    // 사운드 재생
    if (raritySounds[targetOre.rarity]) {
        const sound = raritySounds[targetOre.rarity];
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Failed to play:", e));
    }

    // glowType 우선 적용
    const hasGlow =
        typeof targetOre.glowType === "string" &&
        targetOre.glowType.trim() !== "";

    let oreDisplay;

    if (hasGlow) {
        oreDisplay = `
            <span class="glow-${targetOre.glowType}"
                  style="font-weight:bold;">
                ${targetOre.name}
            </span>
        `;
    } else {
        oreDisplay = `
            <span style="
                color:${targetOre.color};
                font-weight:bold;
            ">
                ${targetOre.name}
            </span>
        `;
    }
    // screen effect debug trigger
if (window.DEBUG_SCREEN_EFFECT) {
    debugScreenEffect(targetOre);
}

    showDebugResult(`
        <span style="
            color:#ff0000;
            font-weight:bold;
        ">
            [DEBUG]
        </span>
        Spawned ${oreDisplay}!
    `);

    console.log(
        `Successfully spawned ${targetOre.name}! (DEBUG)`
    );
}

function debugInventory() {
    // 1. 전역 인벤토리 변수 확인 (일반적인 이름인 inventory 사용)
    // 만약 변수명이 다르면 해당 변수명으로 수정하세요.
    if (typeof inventory === 'undefined') {
        console.error("인벤토리 데이터를 찾을 수 없습니다.");
        return;
    }

    console.table(inventory);
    console.log("현재 인벤토리 총 아이템 종류 수: " + Object.keys(inventory).length);
}

/**
 * 특정 아이템의 수량을 강제로 변경하는 디버그 함수
 * @param {string} itemName - 아이템 이름 (예: "Iron")
 * @param {number} quantity - 변경할 수량
 */
function forceSetItemQuantity(itemName, quantity) {
    if (inventory[itemName]) {
        inventory[itemName] = quantity;
        updateInventoryDisplay(); // 기존의 화면 업데이트 함수를 호출하여 UI 갱신
        console.log(`${itemName}의 수량이 ${quantity}개로 변경되었습니다.`);
    } else {
        console.error(`${itemName} 아이템을 찾을 수 없습니다.`);
    }
}

function checkLuckDebug() {
    console.log("--- 🍀 Luck Debug Info ---");
    console.table(lastRollDebug);
    console.log("--------------------------");
}

/**
 * 특정 레이어 이름으로 광물 목록을 출력하는 함수
 * @param {string} layerName - 조회할 레이어 이름
 */
function debugLayerOresSorted(layerName) {
    const foundLayer = layers.find(l => l.name === layerName);
    if (!foundLayer) {
        console.error(`"${layerName}" 레이어를 찾을 수 없습니다.`);
        return;
    }

    // 1. 레이어의 각 광물 이름에 해당하는 상세 데이터(ores 객체)를 찾습니다.
    const oreDetails = foundLayer.ores
        .map(name => ores.find(o => o.name === name) || { name, rarity: 'basic', chance: 0 })
        // 2. rarityRank를 기준으로 정렬합니다.
        .sort((a, b) => {
            const rankA = rarityRank[a.rarity] || 0;
            const rankB = rarityRank[b.rarity] || 0;
            return rankA - rankB; // 오름차순 (낮은 등급부터)
        });

    // 3. 결과 출력
    console.log(`--- [${foundLayer.name}] 희귀도 정렬 목록 ---`);
    console.table(oreDetails.map(o => ({
        Name: o.name,
        Rarity: o.rarity,
        Rank: rarityRank[o.rarity]
    })));
}

// ===============================
// 🌈 SCREEN EFFECT DEBUG TOOL
// ===============================

window.DEBUG_SCREEN_EFFECT = true;

/**
 * rarity 기반 화면 플래시 강제 실행

*/

function getBadgeColorFromCSS(rarity) {
    const temp = document.createElement("div");
    temp.className = `badge-${rarity}`;
    temp.style.display = "none";

    document.body.appendChild(temp);

    const color = window.getComputedStyle(temp).backgroundColor;

    document.body.removeChild(temp);

    return color;
}

function debugScreenEffect(ore) {
    const flashOverlay = document.getElementById("flash-overlay");
    if (!flashOverlay) return;

    const rarity = ore.rarity?.toLowerCase();

    const color = getBadgeColorFromCSS(rarity);

    if (window.flashTimer) {
        clearTimeout(window.flashTimer);
    }

    flashOverlay.style.backgroundColor = color;

    flashOverlay.classList.remove("flash-active");
    void flashOverlay.offsetWidth;
    flashOverlay.classList.add("flash-active");

    window.flashTimer = setTimeout(() => {
        flashOverlay.classList.remove("flash-active");
        window.flashTimer = null;
    }, 350);
}