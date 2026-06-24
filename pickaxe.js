// pickaxe.js

// 곡괭이 제작 함수
function craftPickaxe(id) {
    const recipe = pickaxeRecipes[id];
    
    // 1. 이미 제작했는지 확인
    if (unlockedPickaxes.includes(id)) {
        return alert("이미 제작한 곡괭이입니다!");
    }

    // 2. 재료 확인 (inventory 객체 사용)
    for (let mat in recipe.cost) {
        if ((inventory[mat] || 0) < recipe.cost[mat]) {
            return alert(`재료가 부족합니다! 필요: ${mat} ${recipe.cost[mat]}개`);
        }
    }

    // 3. 재료 소모
    for (let mat in recipe.cost) {
        inventory[mat] -= recipe.cost[mat];
    }

    // 4. 해금 및 저장
    unlockedPickaxes.push(id);
    alert(`${recipe.name} 제작 성공!`);
    
    // UI 및 데이터 갱신
    renderInventory(); 
    renderForge();     
    renderPickaxeUI();
    saveGame(); // 로컬 스토리지에 즉시 저장
}

// 5. 곡괭이 선택(장착) 함수
function equipPickaxe(id) {
    currentPickaxe = id;
    alert(`${pickaxes[id].name} 장착 완료!`);
    renderPickaxeUI();
    saveGame();
}
