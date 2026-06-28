// pickaxe.js

// 곡괭이 제작 함수
function craftPickaxe(id) {
    const recipe = pickaxeRecipes[id];
    
    // 1. 이미 제작했는지 확인
    if (unlockedPickaxes.includes(id)) {
        return alert("Already crafted!");
    }

    // 2. 재료 확인 (inventory 객체 사용)
    for (let mat in recipe.cost) {
        if ((inventory[mat] || 0) < recipe.cost[mat]) {
            return alert(`You need these to make a pickaxe: ${mat} ${recipe.cost[mat]}개`);
        }
    }

    // 3. 재료 소모
    for (let mat in recipe.cost) {
        inventory[mat] -= recipe.cost[mat];
    }

    // 4. 해금 및 저장
    unlockedPickaxes.push(id);
    alert(`${recipe.name} Crafted a pickaxe successfully!`);
    
    // UI 및 데이터 갱신
    renderInventory(); 
    renderForge();     
    renderPickaxesUI();
    saveGame(); // 로컬 스토리지에 즉시 저장
}

// 5. 곡괭이 선택(장착) 함수
function equipPickaxes(id) {
    currentPickaxe = id;
    renderPickaxesUI();
    saveGame();
}
