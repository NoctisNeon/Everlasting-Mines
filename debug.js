// debug.js
function forceMine() {
    const inputName = document.getElementById('debug-input').value;
    const resultText = document.getElementById('result');
    const targetOre = ores.find(o => o.name.toLowerCase() === inputName.toLowerCase());

    if (!targetOre) {
        alert("해당 이름의 광물을 찾을 수 없습니다.");
        return;
    }

    // 1. 실제 채굴 소리와 동일한 로직 호출
    // script.js에 playRareSound 함수가 있다면 그걸 그대로 사용하세요.
    // 만약 없다면 아래처럼 직접 재생합니다.
    if (raritySounds[targetOre.rarity]) {
        const sound = raritySounds[targetOre.rarity];
        sound.currentTime = 0;
        sound.play().catch(e => console.log("사운드 재생 오류:", e));
    }

    // 2. [DEBUG] 표시와 함께 결과 출력 (인벤토리 업데이트 로직은 아예 없음)
    resultText.innerHTML = `
        <span style="color: #ff0000; font-weight: bold;">[DEBUG]</span> 
        You got <span style="color: ${targetOre.color}; font-weight: bold;">${targetOre.name}</span>!
    `;

    // 인벤토리에는 아무것도 더하지 않음 (상태 유지)
    console.log(`디버그로 ${targetOre.name} 소환 성공 (인벤토리 미포함)`);
}
