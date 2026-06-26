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