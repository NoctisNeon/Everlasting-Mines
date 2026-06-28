setInterval(() => {
   const start = Date.now();
   debugger;
   if (Date.now() - start > 100) {
    console.warn("[DEBUG DETECTED]");
   } 
}, 100);

// 포션 line 1097, 628



const superSound = new Audio('./sounds/super_mining.mp3');
const clickSound = new Audio('./sounds/click.mp3'); 
clickSound.volume = 0.05;

const oreIcons = {
    grass: "assets/ores/basic/gra1.png",
    ice1: "assets/ores/basic/ice1.png",
    slate: "assets/ores/basic/slate1.png",
    error: "assets/ores/basic/error1.png",
    evening_snow: "assets/ores/basic/evenings1.png",
    stone: "assets/ores/basic/ston1.png",
    lava: "assets/ores/basic/lava1.png",
    air: "assets/ores/basic/air1.png",
    basalt: "assets/ores/basic/basalt1.png",
    bit: "assets/ores/basic/bit1.png",

    '64intlim': "assets/ores/paradoxical/64intlim1.png",

    matizium: "assets/ores/nil/matiz1.png",

    solitude_every: "assets/ores/solitude/everythin1.png",
    solitude_print: "assets/ores/solitude/sp1.png",

    illimitatus_frost: "assets/ores/illimitatus/fca1.png",
    illimitatus_param1: "assets/ores/illimitatus/param1.png",
    illimitatus_paux: "assets/ores/illimitatus/paux1.png",
    illimitatus_yotta: "assets/ores/illimitatus/yottabyte1.png",
    illimitatus_noctil: "assets/ores/illimitatus/noctil1.png",

    abyssmolith: "assets/ores/meaninglessness/aby2.png",
    pivnicurxicle: "assets/ores/meaninglessness/pinvc1.png",
    fabricalobidium: "assets/ores/meaninglessness/fabri1.png",
    zetabyte: "assets/ores/meaninglessness/zetabyte1.png",

    flowscape: "assets/ores/creative/flowscape1.png",
    braxichroxmin: "assets/ores/creative/braxi1.png",
    cannidilit: "assets/ores/creative/canni1.png",
    moldivium: "assets/ores/creative/moldivium1.png"

};

const ores = [

  /* =========================
     PARADOXICAL
  ========================= */

  { name: 'The 64 Bits Over', iconKey: '64intlim', rarity: 'paradoxical', chance: 18446744073709551615, price: 293000000001, glowType: '64lim'},

  /* =========================
     SOLITUDE
  ========================= */
  { name: '?print=(1234567890123)', iconKey: 'solitude_print', rarity: 'solitude', chance: 1234567890123, price: 64912000820, glowType: 'int1234' },
  { name: 'everything.jpg', iconKey: 'solitude_every', rarity: 'solitude', chance: 1131068649219, price: 49400000000, glowType: 'eve1' },

  /* =========================
     ILLIMITÁTUS
  ========================= */
  { name: 'Ӻɍꝋꞩⱦ Ȼɍⱥȼҟӿīᵯ', iconKey: 'illimitatus_frost', rarity: 'illimitátus', chance: 399999999999, price: 29235100000, glowType: 'frost' },
  { name: 'ɴᴏᴄᴛɪʟᴜᴄᴇɴᴛ ꜰʀᴀɢᴍᴇɴᴛ', iconKey: 'illimitatus_noctil', rarity: 'illimitátus', chance: 293239001200, price: 29235100000, glowType: 'noctil' },
  { name: 'P̲̆ả̢rḁ̈ṃ̑a̳̋d̖̍a̜̋d̦̅r̙̎ō̲x̖̎', iconKey: 'illimitatus_param1', rarity: 'illimitátus', chance: 263000000000, price: 15913000000, glowType: 'legendary' },
  { name: '𝓟𝓪𝓵𝓾𝔁𝓲𝓬𝓮𝓶𝓲𝔃', iconKey: 'illimitatus_paux', rarity: 'illimitátus', chance: 236100000000, price: 10192100000, glowType: 'paux' },
  { name: '𝖄𝖔𝖙𝖙𝖆𝖇𝖞𝖙𝖊', iconKey: 'illimitatus_yotta', rarity: 'illimitátus', chance: 352000000000, price: 22392100000, glowType: 'yotta' },

  /* =========================
     MEANINGLESSNESS
  ========================= */
  { name: '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽', iconKey: 'abyssmolith', rarity: 'meaninglessness', chance: 50909000000, price: 4293000000, glowType: 'aby1' },
  { name: 'ℙ𝕚𝕧𝕟𝕚𝕔𝕦𝕣𝕩𝕚𝕔𝕝𝕖', iconKey: 'pivnicurxicle', rarity: 'meaninglessness', chance: 45413000000, price: 3020304980, glowType: 'pinv' },
  { name: '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞', iconKey: 'fabricalobidium', rarity: 'meaninglessness', chance: 41023000000, price: 260000000, color: 'rgb(99, 121, 89)' },
  { name: 'ℤ𝕖𝕥𝕥𝕒𝕓𝕪𝕥𝕖', iconKey: 'zetabyte', rarity: 'meaninglessness', chance: 35743000000, price: 232000000, glowType: 'zet' },
  /* =========================
     CREATIVE
  ========================= */
  { name: 'F L O W S C A P E', iconKey: 'flowscape', rarity: 'creative', chance: 1209000000, price: 92402000, color: 'rgb(175, 183, 255)' },
  { name: 'Monochromixel', iconKey: 'monochromix', rarity: 'creative', chance: 1928000000, price: 12230000, color: 'rgb(136, 136, 136)' },
  { name: 'Cannidilit', iconKey: 'cannidilit', rarity: 'creative', chance: 1023003050, price: 87002000, glowType: 'cand' },
  { name: 'Moldivium', iconKey: 'moldivium', rarity: 'creative', chance: 1011003200, price: 82000000, color: '#12471b' },
  { name: 'Braxichroxmin', iconKey: 'braxichroxmin', rarity: 'creative', chance: 992000000, price: 75030000, color: '#a7b85b' },
  { name: 'Exabyte', iconKey: 'exabyte', rarity: 'creative', chance: 1620000000, price: 100030000, color: '#00970d' },
  

  /* =========================
     ABSTRUSE
  ========================= */
  { name: 'IXYSOPARDOX', iconKey: 'ixysopardox', rarity: 'abstruse', chance: 593000000, price: 65002000, color: '#88ff00ff' },
  { name: 'Faked Reality', iconKey: 'faked_reality', rarity: 'abstruse', chance: 392000000, price: 41002000, color: 'rgb(162, 175, 147)' },
  { name: 'Ninumilium', iconKey: 'ninumilium', rarity: 'abstruse', chance: 342000000, price: 41002000, color: 'rgb(128, 251, 255)' },
  { name: 'Petabyte', iconKey: 'petabyte', rarity: 'abstruse', chance: 723300000, price: 74203000, color: 'rgb(0, 189, 25)' },
  /* =========================
     UNREAL
  ========================= */
  { name: 'Milennis', iconKey: 'milennis', rarity: 'unreal', chance: 292300000, price: 9302000, color: '#4b412e' },
  { name: 'Macorl Esperatio', iconKey: 'macorl_esperatio', rarity: 'unreal', chance: 153900000, price: 9302000, color: '#8A5FC9' },
  { name: 'Solavoltei', iconKey: 'solavoltei', rarity: 'unreal', chance: 112000000, price: 6408000, color: '#a9bb91' },
  { name: 'Anvilar', iconKey: 'anvilar', rarity: 'unreal', chance: 101900000, price: 5302000, color: '#f83e3e' },
  { name: 'Kabris-lx', iconKey: 'kabris_lx', rarity: 'unreal', chance: 100200030, price: 4920000, color: '#aee0f3' },
  { name: 'Terabyte', iconKey: 'terabyte', rarity: 'unreal', chance: 213029400, price: 4920000, color: '#18ce00' },

  /* =========================
     EPHEMERAL
  ========================= */
  { name: 'Enfinitricifite', iconKey: 'enfinitricifite', rarity: 'ephemeral', chance: 94000200, price: 3250000, color: '#61738b' },
  { name: 'Ckyslop', iconKey: 'ckyslop', rarity: 'ephemeral', chance: 83903900, price: 3170000, color: '#723a05' },
  { name: 'GREENITCH', iconKey: 'greenitch', rarity: 'ephemeral', chance: 81300000, price: 2900000, color: '#00ff22' },
  { name: 'Kryxim', iconKey: 'kryxim', rarity: 'ephemeral', chance: 74999931, price: 2742300, color: '#358162' },
  { name: 'Nitrogen Oxides', iconKey: 'nitrogen_oxides', rarity: 'ephemeral', chance: 61200000, price: 2430000, color: 'rgb(71, 109, 27)' },
  { name: 'Oidilz', iconKey: 'oidilz', rarity: 'ephemeral', chance: 72400000, price: 2630000, color: '#8b616a' },
  { name: 'Gigabyte', iconKey: 'gigabyte', rarity: 'ephemeral', chance: 63867000, price: 2320000, color: '#2dff2d' },

  /* =========================
     MYTHIC
  ========================= */
  { name: 'Malux', iconKey: 'malux', rarity: 'mythic', chance: 23100000, price: 2205000, color: '#a2dac7' },
  { name: 'Infinitricifite', iconKey: 'infinitricifite', rarity: 'mythic', chance: 10000000, price: 2100000, color: '#2f80ed' },
  { name: 'Corridilyx', iconKey: 'corridilyx', rarity: 'mythic', chance: 31300807, price: 2315000, color: '#444444' },
  { name: 'Hydroxyl Radical', iconKey: 'hydroxyl_radi', rarity: 'mythic', chance: 29300010, price: 2115000, color: '#568049' },

  /* =========================
     MIDAS
  ========================= */
  { name: 'Acrictopas', iconKey: 'acrictopas', rarity: 'midas', chance: 5940000, price: 360000, color: '#106954' },
  { name: 'Crkyotopis', iconKey: 'crkyotopis', rarity: 'midas', chance: 1890000, price: 250000, color: '#666252' },
  { name: 'Lunitem', iconKey: 'lunitem', rarity: 'midas', chance: 2999020, price: 250000, color: '#89af30' },
  { name: 'Yiziun', iconKey: 'yiziun', rarity: 'midas', chance: 2720000, price: 250000, color: '#813dff' },
  { name: 'Megabyte', iconKey: 'megabyte', rarity: 'midas', chance: 1924800, price: 200000, color: '#5bff7e' },

  /* =========================
     INTERIM
  ========================= */
  { name: 'Bloody Bronze', iconKey: 'bloody_bronze', rarity: 'interim', chance: 950000, price: 92000, color: '#ff417a' },
  { name: 'Spilkermizen', iconKey: 'spilkermizen', rarity: 'interim', chance: 918230, price: 91009, color: '#ccff41' },
  { name: 'map.34201pl', iconKey: 'map1pl', rarity: 'interim', chance: 847302, price: 90001, color: '#d1c3c7' },
  { name: 'Majoritsim', iconKey: 'majoritsim', rarity: 'interim', chance: 760341, price: 85300, color: '#5fa886' },
  { name: 'Kanmolc', iconKey: 'kanmolc', rarity: 'interim', chance: 530123, price: 85300, color: '#315544' },
  { name: 'Oodixum', iconKey: 'oodixum', rarity: 'interim', chance: 527302, price: 62341, color: '#201212' },

  /* =========================
     UNIQUE
  ========================= */
  { name: 'Iciliyx', iconKey: 'iciliyx', rarity: 'unique', chance: 479302, price: 34020, color: '#98f0ff' },
  { name: 'Nordex', iconKey: 'nordex', rarity: 'unique', chance: 437291, price: 34020, color: '#bb9f7a' },
  { name: 'Nordex', iconKey: 'nordex', rarity: 'unique', chance: 437291, price: 34020, color: '#bb9f7a' },
  { name: 'Mapleix', iconKey: 'mapleix', rarity: 'unique', chance: 394203, price: 34020, color: '#cc8830' },
  { name: 'Inlopext', iconKey: 'inlopext', rarity: 'unique', chance: 241031, price: 23300, color: '#a9e98f' },
  { name: 'Catlyx', iconKey: 'catlyx', rarity: 'unique', chance: 124920, price: 19203, color: '#43e92d' },

  /* =========================
     INTRIGUE
  ========================= */
  { name: 'Argon', iconKey: 'argon', rarity: 'intrigue', chance: 56000, price: 7200, glowType: 'rainbow' },
  { name: 'Diamond', iconKey: 'diamond', rarity: 'intrigue', chance: 50000, price: 6231, color: '#00f2fe' },
  { name: 'Grinyl', iconKey: 'grinyl', rarity: 'intrigue', chance: 43921, price: 3520, color: '#4e6b6d' },
  { name: 'Topaz', iconKey: 'topaz', rarity: 'intrigue', chance: 31239, price: 2630, color: '#ffdc43' },
  { name: 'Kilobyte', iconKey: 'kilobyte', rarity: 'intrigue', chance: 49210, price: 2630, color: '#84ff98' },
  { name: 'Jade', iconKey: 'jade', rarity: 'intrigue', chance: 25930, price: 2512, color: '#00be19' },
  { name: 'Bismuth', iconKey: 'bismuth', rarity: 'intrigue', chance: 25500, price: 2500, glowType: 'rainbow' },

  /* =========================
     EPIC
  ========================= */
  { name: 'Campallie', iconKey: 'campallie', rarity: 'epic', chance: 5391, price: 1582, color: '#265d61' },
  { name: 'Museliex', iconKey: 'museliex', rarity: 'epic', chance: 4742, price: 1352, color: '#33a555' },
  { name: 'Oxygen', iconKey: 'oxygen', rarity: 'epic', chance: 3702, price: 1230, color: '#acf9ff' },
  { name: 'Ruby', iconKey: 'ruby', rarity: 'epic', chance: 2391, price: 1100, color: '#e74c3c' },
  { name: 'Sapphire', iconKey: 'sapphire', rarity: 'epic', chance: 2211, price: 1100, color: '#3c72e7' },
  { name: 'Uncanore', iconKey: 'uncanore', rarity: 'epic', chance: 9006, price: 1820, color: '#925cd8' },
  { name: 'Moluybix', iconKey: 'moluybix', rarity: 'epic', chance: 1350, price: 900, color: '#a4ffc3' },
  { name: 'Lotus Stonis', iconKey: 'lotus_stonis', rarity: 'epic', chance: 1201, price: 830, color: 'rgb(116, 116, 116)' },

  /* =========================
     RARE
  ========================= */
  { name: 'Gold', iconKey: 'gold', rarity: 'rare', chance: 325, price: 500, color: '#f1c40f' },
  { name: 'Marlenx', iconKey: 'marlenx', rarity: 'rare', chance: 531, price: 829, color: '#acd3ff' },
  { name: 'Icilei', iconKey: 'Icilei', rarity: 'rare', chance: 420, price: 810, color: '#bbfff4' },
  { name: 'Mantadox', iconKey: 'mantadox', rarity: 'rare', chance: 439, price: 732, color: '#6d5856' },
  { name: 'Rose', iconKey: 'rose', rarity: 'rare', chance: 312, price: 351, color: '#f35692' },
  { name: 'Equatox', iconKey: 'equatox', rarity: 'rare', chance: 210, price: 350, color: '#ffec9e' },
  { name: 'Byte', iconKey: 'byte', rarity: 'rare', chance: 263, price: 370, color: '#b2ffb8' },
  { name: 'Mandrex', iconKey: 'mandrex', rarity: 'rare', chance: 175, price: 300, color: '#82af4f' },

  /* =========================
     UNCOMMON
  ========================= */
  { name: 'Lapis', iconKey: 'lapis', rarity: 'uncommon', chance: 97, price: 210, color: '#416baa' },
  { name: 'Zinc', iconKey: 'zinc', rarity: 'uncommon', chance: 60, price: 40, color: '#2a4142' },
  { name: 'Asphalt', iconKey: 'asphalt', rarity: 'uncommon', chance: 53, price: 36, color: 'rgb(218, 176, 176)' },
  { name: 'Iron', iconKey: 'iron', rarity: 'uncommon', chance: 50, price: 50, color: '#dff9fb' },
  { name: 'Bromine', iconKey: 'bromine', rarity: 'uncommon', chance: 23, price: 35, color: 'rgb(131, 207, 131)' },
  { name: 'Nitrogen', iconKey: 'nitrogen', rarity: 'uncommon', chance: 15, price: 25, color: '#147434' },
  { name: 'Liyze', iconKey: 'liyze', rarity: 'uncommon', chance: 13, price: 23, color: '#65799e' },
  { name: 'Solid Obsidian', iconKey: 'solid_obsidian', rarity: 'uncommon', chance: 13, price: 22, color: '#281c3a' },
  { name: 'Durtlie', iconKey: 'durtlie', rarity: 'uncommon', chance: 12, price: 20, color: '#65a727' },

  /* =========================
     COMMON
  ========================= */
  { name: 'Musherin', iconKey: 'musherin', rarity: 'common', chance: 9, price: 5, color: '#a08997' },
  { name: 'Moldier', iconKey: 'moldier', rarity: 'common', chance: 7, price: 5, color: '#281c3a' },
  { name: 'Ash', iconKey: 'ash', rarity: 'common', chance: 6, price: 5, color: '#52503e' },
  { name: 'Mored', iconKey: 'mored', rarity: 'common', chance: 6, price: 5, color: '#c4a27c' },
  { name: 'Lunar', iconKey: 'lunar', rarity: 'common', chance: 5, price: 5, color: '#bc6aff' },
  { name: 'Magenta', iconKey: 'magenta', rarity: 'common', chance: 4, price: 5, color: '#1a0e24' },
  { name: 'Frosted Rock', iconKey: 'frosted_rock', rarity: 'common', chance: 3, price: 5, color: '#d2f8ff' },
  { name: 'Shoutle Stone', iconKey: 'shoutle_stone', rarity: 'common', chance: 3, price: 5, color: '#777' },
  { name: 'Daisy', iconKey: 'daisy', rarity: 'common', chance: 4, price: 5, color: '#fff490' },
  { name: 'Kinkil', iconKey: 'kinkil', rarity: 'common', chance: 5, price: 5, color: '#8d7508' },

  /* =========================
     BASIC
  ========================= */
  { name: 'Grass', iconKey: 'grass', rarity: 'basic', chance: 2, price: 1, color: '#5bff84' },
  { name: 'Ice', iconKey: 'ice1', rarity: 'basic', chance: 2, price: 1, color: '#46a8e6' },
  { name: 'Basalt', iconKey: 'basalt', rarity: 'basic', chance: 2, price: 1, color: '#8f9975' },
  { name: 'Lava', iconKey: 'lava', rarity: 'basic', chance: 2, price: 1, color: '#ff8019' },
  { name: 'Slate', iconKey: 'slate', rarity: 'basic', chance: 2, price: 1, color: '#a6c2d4' },
  { name: 'Stone', iconKey: 'stone', rarity: 'basic', chance: 2, price: 1, color: '#bdc3c7' },
  { name: 'Evening Snow', iconKey: 'evening_snow', rarity: 'basic', chance: 2, price: 1, color: '#30678b' },
  { name: 'Air', iconKey: 'air', rarity: 'basic', chance: 2, price: 1, color: '#ffffff' },
  { name: 'eRRoR', iconKey: 'error', rarity: 'basic', chance: 2, price: 1, color: '#000000' },
  { name: 'Bit', iconKey: 'bit', rarity: 'basic', chance: 2, price: 1, color: '#c8ffc6' },

    /* =========================
     NIL
  ========================= */
  { name: 'Matizium', iconKey: 'matizium', rarity: 'nil', chance: 15000000000000, price: 293000000000, color: '#434e53', displayChance: "1/0" },
  { name: 'TH3 M0L3VE413R', iconKey: 'moleve413r', rarity: 'nil', chance: 100000000000, price: 293000000001, color: '#0f1416', displayChance: "1/0" },
  { name: 'C4NMVO! SDK!S', iconKey: 'sdkis', rarity: 'nil', chance: 320000000000, price: 293000000023, glowType: 'cscs', displayChance: "1/0" },

];

const layers = [

 {
        name: "invaild_id:layer_s",
        ores: [
            'Air',
        ]
    },

    {
        name: "Stratosphere",
        ores: [
            'Air',
            'Nitrogen',
            'Oxygen',
            'Argon',
            'Nitrogen Oxides',
            'Hydroxyl Radical',
            'ɴᴏᴄᴛɪʟᴜᴄᴇɴᴛ ꜰʀᴀɢᴍᴇɴᴛ',
            'ℙ𝕚𝕧𝕟𝕚𝕔𝕦𝕣𝕩𝕚𝕔𝕝𝕖',
            'everything.jpg'
        ]
    },

    {
        name: "Surface",
        ores: [
            'Air',
            'Grass',
            'Daisy',
            'Rose',
            'Mored',
            'Nordex',
            'Inlopext',
            'Lunar',
            'Bromine',
            'Durtlie',
            'Iron',
            'GREENITCH',
            'Gold',
            'Anvilar',
            'F L O W S C A P E',
            '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽',
            'P̲̆ả̢rḁ̈ṃ̑a̳̋d̖̍a̜̋d̦̅r̙̎ō̲x̖̎'
        ]
    },

    {
        name: "Slate Layer",
        ores: [
            'Slate',
            'Shoutle Stone',
            'Iron',
            'Mandrex',
            'Kinkil',
            'Lotus Stonis',
            'Liyze',
            'Lapis',
            'Ruby',
            'Jade',
            'Diamond',
            'Enfinitricifite',
            'Campallie',
            'Cannidilit',
            'Kryxim',
            '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'
        ]
    },
        {
        name: "Stone Layer",
        ores: [
            'Stone',
            'Iron',
            'Monochromixel',
            'Musherin',
            'Spilkermizen',
            'Lunitem',
            'Catlyx',
            'Corridilyx',
            'Sapphire',
            'Topaz',
            'Equatox',
            'Faked Reality',
            'Braxichroxmin',
            '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'
        ]
    },
    {
        name: "Basalt Layer",
        ores: [
            'Basalt',
            'Marlenx',
            'Grinyl',
            'Asphalt',
            'Yiziun',
            'Iron',
            'Kanmolc',
            'Mapleix',
            'Ckyslop',
            'Gold',
            'Bloody Bronze',
            'Milennis',
            'Malux',
            'Moldivium',
            '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'
        ]
    },

    {
        name: "Lava Layer",
        ores: [
            'Lava',
            'Ash',
            'Museliex',
            'Solid Obsidian',
            'Zinc',
            'Gold',
            'Bismuth',
            'Mantadox',
            'Solavoltei',
            '𝔽𝕒𝕓𝕣𝕚𝕔𝕒𝕝𝕠𝕓𝕚𝕕𝕚𝕦𝕞',
            '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽',
            '𝓟𝓪𝓵𝓾𝔁𝓲𝓬𝓮𝓶𝓲𝔃',
        ]
    },

            {
        name: "Ice Layer",
        ores: [
            'Ice',
            'Lunar',
            'Oxygen',
            'Iron',
            'Icilei',
            'Oodixum',
            'Iciliyx',
            'Diamond',
            'Jade',
            'Crkyotopis',
            'Acrictopas',
            'Infinitricifite',
            'Macorl Esperatio',
            'IXYSOPARDOX',
            '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽'
        ]
    },

    {
        name: "Frostbite",
        ores: [
            'Evening Snow',
            'Moluybix',
            'Iciliyx',
            'Icilei',
            'Frosted Rock',
            'Kabris-lx',
            'Ninumilium',
            'C4NMVO! SDK!S',
            'Ӻɍꝋꞩⱦ Ȼɍⱥȼҟӿīᵯ',
        ]
    },

    {
        name: "Glitched World",
        ores: [
            'TH3 M0L3VE413R',
            'map.34201pl',
            'Oidilz',
            'Moldier',
            'Matizium',
            'eRRoR',
            'Uncanore',
            'Liyze',
            'Magenta',
            'Majoritsim',
            'Zinc',
            'Bismuth',
            'P̲̆ả̢rḁ̈ṃ̑a̳̋t̖̍a̜̋d̦̅r̙̎ō̲x̖̎',
            '?print=(1234567890123)'
        ]
    },

    {
        name: "Bytes World",
        ores: [
            'The 64 Bits Over',
            'Kilobyte',
            'Byte',
            'Bit',
            'Megabyte',
            'Gigabyte',
            'Exabyte',
            'Terabyte',
            'Petabyte',
            'ℤ𝕖𝕥𝕥𝕒𝕓𝕪𝕥𝕖',
            '𝖄𝖔𝖙𝖙𝖆𝖇𝖞𝖙𝖊'
        ]
    }

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
        price: 250000, 
        duration: 300, // 초 단위
        lore: 'Hmm. Why don\'t ya taste it?', 
        stats: 'Makes you 2x more luckier! / 250,000 Coins',
        effectIcon: '🍀'
    },
    { 
        id: 'luck2', 
        name: 'Potion of Luck II', 
        price: 5000000, 
        duration: 350, // 초 단위
        lore: 'It gets more longer and bigger!', 
        stats: 'Makes you 4x more luckier! / 5,000,000 Coins',
        effectIcon: '🍀'
    },
        { 
        id: 'luck2b', 
        name: 'Potion of Luck 2x3', 
        price: 65250000, 
        duration: 420, // 초 단위
        lore: 'Take a bite, Get luckier, Get more.', 
        stats: 'Makes you 6x more luckier! / 65,250,000 Coins',
        effectIcon: '🍀'
    },
    { 
        id: 'luck3', 
        name: 'Potion of Luck Max', 
        price: 325000000, 
        duration: 480, // 초 단위
        lore: 'woah.. how did you get that?', 
        stats: 'Makes you 8x more luckier! / 325,000,000 Coins',
        effectIcon: '🍀'
    },
        { 
        id: 'luck4', 
        name: 'Potion of Huge Max Luck', 
        price: 2250000000, 
        duration: 600, // 초 단위
        lore: 'becareful!', 
        stats: 'Makes you 16x more luckier! / 2,250,000,000 Coins',
        effectIcon: '🍀'
    },
    { 
        id: 'speed', 
        name: 'Potion of Speed', 
        price: 2650000, 
        duration: 150, 
        lore: 'Gotta go fast-', 
        stats: 'Makes you mine 1.5 times faster! / 2,650,000 Coins (interval cooltime)',
        effectIcon: '⚡'
    },
    { 
        id: 'speed2', 
        name: 'Potion of Fast Speed', 
        price: 255500000, 
        duration: 300, 
        lore: 'oh no i\'m faster and faster', 
        stats: 'Makes you mine 2 times faster! / 255,500,000 Coins (interval cooltime)',
        effectIcon: '⚡'
    },
    { 
        id: 'speed3', 
        name: 'Potion of at Speed o\' Sound', 
        price: 2650000000, 
        duration: 450, 
        lore: 'What?! How?', 
        stats: 'Makes you mine 4 times faster! / 2,650,000,000 Coins (interval cooltime)',
        effectIcon: '⚡'
    }
];

const effectNames = {
    'luck': 'Potion of Luck',
    'luck2': 'Potion of Luck II',
    'luck2b': 'Potion of Luck 2x3',
    'luck3' : 'Potion of Luck Max',
    'luck4' : 'Potion of Huge Max Luck',
    'speed' : 'Potion of Speed',
    'speed2' : 'Potion of Fast Speed',
    'speed3' : "Potion of at Speed o' Sound"
};
// 현재 적용 중인 버프 상태 (종료 시간 저장)


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
    epic: new Audio('./sounds/rare.mp3'),intrigue: new Audio('./sounds/rare.mp3') , interim: new Audio('./sounds/rare.mp3'), unique: new Audio('./sounds/rare.mp3'),
    midas: new Audio('./sounds/rare2.mp3'), mythic: new Audio('./sounds/rare2.mp3'), ephemeral: new Audio('./sounds/overrare.mp3'),
    unreal: new Audio('./sounds/overrare.mp3'), abstruse: new Audio("./sounds/ascendant.mp3"),
    creative: new Audio('./sounds/ascendant.mp3'), meaninglessness: new Audio("./sounds/everything.mp3"), illimitátus: new Audio("./sounds/otherworldly.mp3"), nil: new Audio("./sounds/reality.mp3"),
    solitude: new Audio('./sounds/solitude.mp3'), paradoxical: new Audio("./sounds/paradoxical.mp3")
};

const rarityColors = {
    nil: "#000000", 'basic': "#666666", common: "#bdc3c7", uncommon: "#85ffa9ff", rare: "#f3db7a", intrigue: "#3f6d5a",
    epic: "#b465cc",interim:"#36db89", midas: "#ffd900ff", mythic: "#f15b5bff", ephemeral: "#9dfff7",unreal: "#9a1cccff",
    abstruse: "#131c99ff", creative: "#fcff52", meaninglessness: "#e2ffed", illimitátus: "#0b1820", solitude: '#417570', exclusive: '#ff1ba8', paradoxical: '#00ff88'
};

const pickaxeLore = {
    'basic': "Whatever. Let me do my job.",
    'scrap': "What? Why are you giving me this?",
    'steel': "Reinforced; Yet used for gathering stones.",
    'godPickaxe': "Maybe it's one of fake things exists in the planet earth?",
    'light': "Look! I'm at speed of light!",
    'frozen': "I don't know who made this.. but it'll be useful.",
    'powerful': "After 200 years, I finally found it.",
    'macicle': "Long Live Macicle!",
    'irregul': "error 214: cannot find pickaxe_id 'irregular'. (js:203)",
    'bulk': "'Even through hard ways, I never give up mining.'",
    'magstaff': "This will work on gathering EVERY metals in the world!",
    'plamulc': '"Everlasting Inc.’s signature plasma-core tool for precision mining and excavation."',

    'ultima': "'Absolute! Plus! Ultra!'",
    'hackaxe': "What? You think You're going to get this? Fool.",
    'luhackaxe': "A pickaxe made by some hacker wandering..."
};

const pickaxes = {
    basic: { name: "Basic Pickaxe", power: 1, luck: 1.0, superChance: 0.0, superCount: 0 },
    scrap: { name: "Tier 1 / Abandoned Pickaxe", power: 1, luck: 1.05, superChance: 0.01, superCount: 50 },
    steel: { name: "Tier 2 / Steel Pickaxe", power: 2, luck: 1.1, superChance: 0.02, superCount: 100 },
    godPickaxe: { name: "Tier 3 / God Pickaxe", power: 5, luck: 1.4, superChance: 0.09, superCount: 250 },
    light: { name: "Tier 4 / Lightning Pickaxe", power: 7, luck: 1.85, superChance: 0.025, superCount: 850 },
    bulk: { name: "Tier 4.5 / Bulk Pickaxe", power: 9, luck: 1.55, superChance: 0.01, superCount: 2000 },
    frozen: { name: "Tier 5 / Frozen Pickaxe", power: 7, luck: 2.95, superChance: 0.0125, superCount: 2700 },
    macicle: { name: "Tier 5 / Sabre Macicle", power: 10, luck: 2.15, superChance: 0.02, superCount: 6350 },
    powerful: { name: "Tier 5.5 / Malice Bumper", power: 13, luck: 2.95, superChance: 0.02, superCount: 6520 },
    irregul: { name: "Tier 6 / Irregular Pickaxe", power: 35, luck: 2.5, superChance: 0.015, superCount: 11500 },
    luhackaxe: { name: "Tier 6.5 / Lumina-Hackaxe", power: 32, luck: 3.8, superChance: 0.02, superCount: 10000},
    magstaff: { name: "Tier 7 / Magnetical Staff", power: 51, luck: 3.35, superChance: 0.05, superCount: 8700},
    plamulc: { name: "Tier 8 / Plasmatic Multicarver", power: 127, luck: 1.95, superChance: 0.02, superCount: 32500},

    ultima: { name: "Tier 9 / Ultima Blastica", power: 75, luck: 3.55, superChance: 0.025, superCount: 31200 },
    hackaxe: { name: "Developer Exclusive Axe But Weaker", power: 25000, luck: 25999999.0, superChance: 0, superCount: 2500},
};

const pickaxeRecipes = {
    'scrap': { name: 'Tier 1 / Abandoned Pickaxe', cost: { 'Zinc': 1, 'Stone': 12 }, power: 1 },
    'steel': { name: 'Tier 2 / Steel Pickaxe', cost: { 'Iron': 10, 'Stone': 50 }, power: 2 },
    'godPickaxe': { name: 'Tier 3 / God Pickaxe', cost: { 'Gold': 15, 'Iron': 125 }, power: 5 },
    'light': { name: 'Tier 4 / Lightning Pickaxe', cost: { 'Ruby': 6, 'Gold': 8, 'Equatox': 25 }, power: 7 },
    'bulk': { name: 'Tier 4.5 / Bulk Pickaxe', cost: { 'Diamond': 1, 'Zinc': 640, 'Slate': 4300 }, power: 9 },
    'frozen': {name: "Tier 5 / Frozen Pickaxe", cost: { 'Crkyotopis': 1, 'Bismuth': 5, 'Equatox': 100, 'Ice': 53000}, power: 7},

    'macicle': {name: "Tier 5 / Sabre Macicle", cost: { 'Acrictopas': 1, 'Majoritsim': 2, 'Jade': 2, 'Lapis': 260, 'Slate': 85000}, power: 7},
    'powerful': {name: "Tier 5.5 / Malice Bumper", cost: { 'Malux': 1,'Bloody Bronze': 12, 'Inlopext': 35, 'Topaz': 164, 'Ash': 72000, 'Lava': 210000}, power: 7},
    'irregul': {name: "Tier 6 / Irregular Pickaxe", cost: { 'Anvilar': 1, 'Malux': 1, 'Infinitricifite': 2, 'Kanmolc': 73, 'Diamond': 192, 'Durtlie': 9300, 'Basalt': 320500}, power: 7},
    'luhackaxe': { name: "Tier 6.5 / Lumina-Hackaxe", cost: { 'GREENITCH': 1, 'Kryxim': 1, 'Faked Corridilyx': 2, 'Infinitricifite': 2, 'Campallie': 62, 'Mored': 52000, 'Evening Snow': 532000}, power: 32 },
    'magstaff': { name: "Tier 7 / Magnetical Staff", cost: { 'Nitrogen Oxides': 1, 'Milennis': 2, 'Kabris-lx': 4, 'Oidilz': 8, 'Inlopext': 60, 'Marlenx': 923, 'Bromine': 4200, 'Stone': 856000}, power: 2500000 },
    'plamulc': { name: "Tier 8 / Plasmatic Multicarver", cost: { 'IXYSOPARDOX': 1, 'Solavoltei': 2, 'Enfinitricifite': 10, 'Ckyslop': 9, 'Yiziun': 35, 'Uncanore': 227, 'Mandrex': 826, 'Air': 321000}, power: 2500000 },

    'ultima': {name: "Tier 9 / Ultima Blastica", cost: { 'F L O W S C A P E': 1, 'Braxichroxmin': 2, 'IXYSOPARDOX': 3, 'Anvilar': 3, 'Diamond': 800, 'Iron': 650000}, power: 73},
    'hackaxe': { name: 'Developer Exclusive Axe', cost: { '𝒜𝒷𝓎𝓈𝓂𝑜𝓁𝒾𝓉𝒽':2e20 ,'P̲̆ả̢rḁ̈ṃ̑a̳̋t̖̍a̜̋d̦̅r̙̎ō̲x̖̎': 3e30, 'IXYSOPARDOX': 0, 'Iron': 0 }, power: 250 },
};


const pickaxeSortOrder = {
    'basic': 1,
    'scrap': 1.5,
    'steel': 2,
    'godPickaxe': 3,
    'light': 4,
    'bulk': 5,
    'frozen': 5.1,
    'macicle': 5.15,
    'powerful': 5.17,
    'luhackaxe': 5.2,
    'magstaff': 5.3,
    'plamulc': 5.4,
    'irregul': 5.18,
    'ultima' : 5.5,
    'hackaxe': 6,
};

const rarityRank = { 'basic': 0, 'common': 1, 'uncommon': 2, 'rare': 3,'intrigue': 4, 'epic': 3.5, 'unique': 4.2, 'interim': 4.5, 'midas': 5, 'mythic': 6, 'ephemeral': 7, 'unreal': 8, 'abstruse': 9, 'creative': 10, 'meaninglessness': 11, 'illimitátus': 12, 'solitude': 12.5, 'nil': 11.5, 'paradoxical': 13, 'exclusive': 14};



let lastMineTime = Date.now();
const miningSpeed = 5;
let autoMineInterval = null;
let autoMineRate = 500;
let isAutoMining = false;
let isBusy = false;
let notificationTimer = null;
let resultTimer = null;
let inventory = {}, foundCount = {}, currentPickaxe = 'basic', coins = 0, totalBlocksMined = 0, currentLayerIndex = 0;
let unlockedPickaxes = ['basic'];
const CLICK_COOLDOWN = 70; // 0.2초 (200ms) 동안은 클릭 무시
let lastManualClickTime = 0; // 마지막 클릭 시간 기록용
let lastRollDebug = { oreName: "없음", baseChance: 0, luck: 0, finalProbability: 0 };
let lastRenderedLayerIndex = -1;
let mode = "online";
let appliedLuck = pickaxes[currentPickaxe].luck;
let flashTimer = null;
let isResetting = false; // 추가: 리셋 중인지 확인하는 변수

let sellProtectionRank = -1;

let soundRarityThreshold = rarityRank.rare; 
// rare 이상만 소리 나게 (원하면 epic으로 변경)

ores.forEach(ore => { inventory[ore.name] = 0; foundCount[ore.name] = 0; });


if (mode === "offline") {
    appliedLuck = 1; // 💥 오프라인은 무조건 기본
}

function renderMaterialDropdown(materialsString) {
    if (!materialsString) return '';

    const items = materialsString.split(', ');

    const listItems = items.map(item => {
        const parts = item.trim().split(' ');
        const qty = parts.pop();
        const name = parts.join(' ');

        // 🔥 FIX: multiple layers support
        const foundLayers = layers.filter(l => l.ores.includes(name));

        const layerDisplay = foundLayers.length > 0
            ? foundLayers.map(l => `• ${l.name}`).join('<br>')
            : "Unknown";

        const oreData = ores.find(o => o.name === name) || { rarity: 'basic' };
        const rarityClass = `badge-${(oreData.rarity || 'basic').toLowerCase().trim()}`;

        return `
            <li style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
                <span class="rarity-badge ${rarityClass}">
                    ${oreData.rarity}
                </span>
                <span>
                    <strong>${name}</strong> (${qty}) / <em>${layerDisplay}</em>
                </span>
            </li>
        `;
    }).join('');

    return `
        <details class="material-dropdown" style="margin-top: 10px; cursor: pointer;">
            <summary style="font-weight: bold; color: #3498db; outline: none;">
                Materials 
            </summary>
            <div class="material-details" style="padding: 5px; background: #222; border-radius: 4px; margin-top: 5px;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${listItems}
                </ul>
            </div>
        </details>
    `;
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
    
    const units = ["", "k", "m", "b", "t", "qd", "qn", "sx", "sp", "oc", "no", "de"];
    let unitIndex = 0;
    
    // 1000으로 나누면서 단위를 올림
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }
    
    // 소수점 2자리까지만 표시 (예: 1.23k)
    return num.toFixed(2).replace(/\.00$/, "") + units[unitIndex];
}

function getCooldownFactor() {
    return isEffectActive('speed3') ? 0.25 :
           isEffectActive('speed2') ? 0.5 :
           isEffectActive('speed')  ? 0.75 :
           1.0;
}

function getTotalLuck() {
    const base = pickaxes[currentPickaxe].luck;

    const potionMultiplier =
        isEffectActive('luck4') ? 16 :
        isEffectActive('luck3') ? 8 :
        isEffectActive('luck2b') ? 6 :
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
    if (!potionListContainer) return;

    potionListContainer.innerHTML = potions.map(potion => {
        // 기존 로직 유지: 활성화 상태 체크 및 가격 포맷팅
        const isActive = isEffectActive(potion.id);
        const formattedPrice = potion.price.toLocaleString();

        // 곡괭이 UI와 동일한 구조로 구성
        return `
            <div class="card" style="border: 1px solid #333; padding: 15px; border-radius: 4px; margin-bottom: 15px; background: #25262a;">
                <h4 style="margin: 0 0 10px 0; color: #eee;">${potion.effectIcon} ${potion.name}</h4>
                
                <div style="background: #1a1a1a; padding: 10px; margin-bottom: 10px; border-radius: 4px; font-size: 0.9em; border: 1px solid #444; color: #ddd;">
                    <p style="margin: 2px 0;"><strong>Effect /</strong> ${potion.stats}</p>
                    <p style="margin: 2px 0;"><strong>Duration /</strong> ${potion.duration}s</p>
                </div>
                
                <p style="font-style: italic; font-size: 0.85em; color: #888; margin-bottom: 15px;">
                    "${potion.lore}"
                </p>
                
                <button 
                    onclick="buyPotion('${potion.id}')" 
                    style="width: 100%; padding: 10px; cursor: ${isActive ? 'not-allowed' : 'pointer'}; background: ${isActive ? '#27ae60' : '#333'}; color: white; border: 1px solid #555; border-radius: 4px; font-weight: bold;"
                    ${isActive ? 'disabled' : ''}>
                    ${isActive ? 'Already Active' : 'Buy for ' + formattedPrice + ' Coins'}
                </button>
            </div>
        `;
    }).join('');
}

const potionTimers = {};

function activatePotion(potion) {
    const durationMs = potion.duration * 1000;
    const now = Date.now();
    const existingEndTime = activeBoosts[potion.id];
    
    // 1. 시간 갱신
    if (existingEndTime && existingEndTime > now) {
        activeBoosts[potion.id] = existingEndTime + durationMs;
        
        // 기존 타이머가 있다면 취소하고 다시 설정 (연장된 시간만큼 다시 기다림)
        clearTimeout(potionTimers[potion.id]);
    } else {
        activeBoosts[potion.id] = now + durationMs;
    }
    
    // 2. 시간이 다 되면 효과를 종료시키는 타이머 설정
    potionTimers[potion.id] = setTimeout(() => {
        // 효과 종료 로직 (activeBoosts에서 제거 등)
        delete activeBoosts[potion.id];
        
        // 🔥 여기가 핵심: 효과가 끝났으니 UI를 강제로 다시 그림
        renderPotions();
        updateUI(); 
        
        console.log(`Potion expired: ${potion.id}`);
    }, activeBoosts[potion.id] - Date.now()); // 현재 시간부터 종료 시간까지의 차이만큼 대기

    console.log(`Potion activated: ${potion.id}, New End Time: ${activeBoosts[potion.id]}`);
    
    // 구매 직후 UI 갱신
    renderPotions();
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

    // 1. 현재 적용 중인 모든 보너스를 포함한 최종 운 수치를 가져옵니다.
    const effectiveLuck = getTotalLuck();

    for (let i = 0; i < pick.superCount; i++) {
        // 2. 계산된 최종 운(effectiveLuck)을 전달합니다.
        const ore = rollOre(effectiveLuck); 

        if (addOreToInventory(ore)) {
            foundNew = true;
        }

        if (!rarestOre || ore.chance > rarestOre.chance) {
            rarestOre = ore;
        }
    }

    if (rarestOre) {
        applyScreenEffect(rarestOre);

        showResult("", {
            item: rarestOre.name,
            color: rarestOre.color,
            rarity: rarestOre.rarity,
            quantity: pick.superCount,
            luck: effectiveLuck, // 보정된 최종 수치를 UI에 반영
            new: foundNew,
            glowType: rarestOre.glowType,
            bulk: true
        });

        if (shouldPlaySpawnSound(rarestOre)) {
            const raritySound = raritySounds[rarestOre.rarity?.toLowerCase()];
            playSound(raritySound || superSound);
        }
        
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

document.addEventListener("DOMContentLoaded", () => {
    const autoBtn = document.getElementById("autoMineBtn");

    if (autoBtn) {
        autoBtn.addEventListener("click", toggleAutoMining);
    }
});

function toggleAutoMining() {
    console.log("AutoMining Click");

    const btn = document.getElementById("autoMineBtn");
    if (!btn) return;

    // ★ 이 줄이 반드시 있어야 함
    isAutoMining = !isAutoMining;

    console.log(isAutoMining);
    console.log(autoMineRate);

    if (isAutoMining) {
        btn.innerText = "Auto Mining ON";
        btn.style.backgroundColor = "#4caf50";

        if (autoMineInterval) {
            clearInterval(autoMineInterval);
        }

        const interval = Math.max(1, 1000 / Math.max(1, autoMineRate));

        autoMineInterval = setInterval(() => {
            if (!isAutoMining) return;
            onMineButtonClick();
        }, interval);

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
                        Rarest Ore:
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
    }, 10000);
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

    const flashList = [
        "unique",
        "interim",
        "midas",
        "mythic",
        "ephemeral",
        "unreal",
        "abstruse",
        "creative",
        "meaninglessness",
        "illimitátus",
        "solitude",
        "paradoxical",
        "unknown"
    ];

    const flashOverlay = document.getElementById("flash-overlay");
    if (!flashOverlay) return;

    if (!flashList.includes(rarity)) return;

    // 1. 기존 타이머 제거
    if (window.flashTimer) {
        clearTimeout(window.flashTimer);
        window.flashTimer = null;
    }

    // 2. 임시 요소로 rarity 색상 추출
    const tempDiv = document.createElement("div");
    tempDiv.className = `badge-${rarity}`;
    tempDiv.style.display = "none";

    document.body.appendChild(tempDiv);

    const bgColor = window.getComputedStyle(tempDiv).backgroundColor;

    document.body.removeChild(tempDiv);

    // 3. 플래시 효과 적용
    flashOverlay.style.backgroundColor = bgColor;

    flashOverlay.classList.remove("flash-active");
    void flashOverlay.offsetWidth; // reflow trick
    flashOverlay.classList.add("flash-active");

    // 4. 자동 제거
    window.flashTimer = setTimeout(() => {
        flashOverlay.classList.remove("flash-active");
        window.flashTimer = null;
    }, 500);
}

function onMineButtonClick() {

    if (window.resultTimer) {
        clearTimeout(window.resultTimer);
        window.resultTimer = null;
    }


    const cooldownFactor = getCooldownFactor();
    const effectiveLuck = getTotalLuck();
    // 2. 배율 계산
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
        const rolled = rollOre(effectiveLuck);

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
        const resultDiv = document.getElementById('result');
        if (resultDiv) resultDiv.style.opacity = '1'; // 혹시 모를 투명도 초기화

        // 🔥 UI 출력
showResult("", {
    item: rarestOre.name,
    color: rarestOre.color,
    rarity: rarestOre.rarity,
    quantity: pick.power,
    luck: effectiveLuck,
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

    if (forceUpdate || el.innerHTML === "" || lastRenderedLayerIndex !== currentLayerIndex) {

        const currentLayerOreNames = layers[currentLayerIndex].ores;
        const visibleOres = ores.filter(o => currentLayerOreNames.includes(o.name));

        el.innerHTML = `<ul class="inventory-list" style="list-style: none; padding: 0;">` +
        visibleOres.map(o => {

            const count = inventory[o.name] || 0;
            const isFound = (foundCount[o.name] || 0) > 0;
            const glowClass = isFound ? getGlowClass(o) : '';

            const icon = oreIcons[o.iconKey] || "assets/ores/default.png";

            return `
<li id="ore-item-${o.name}" class="inventory-item">

                    <div class="ore-info">
                        ${
                            isFound
                            ? `
                                <span class="rarity-badge badge-${o.rarity}">
                                    ${o.rarity.toUpperCase()}
                                </span>

                                <img
                                    src="${icon}"
                                    class="ore-icon"
                                    alt="${o.name}"
                                >

<span
    class="ore-name ${glowClass}"
    style="color:${o.color}; font-weight:bold;">
    ${o.name}
</span>

                                <span
                                    id="count-text-${o.name}"
                                    style="margin-left: 5px;">
                                    : ${formatNumber(count)}
                                </span>
                            `
                            : `
    <span class="rarity-badge badge-unknown"
          style="background-color:#333;">
        ???
    </span>

    <img
        src="assets/ores/unknown.png"
        class="ore-icon"
        style="opacity:0.5;"
        alt="Unknown"
    >

<span class="ore-name" style="color:#666; font-weight:bold;">
    ???
</span>
`
                        }
                    </div>

                    <div id="sell-btn-container-${o.name}">
                        ${
                            isFound
                            ? `
                                <button
                                    onclick="sellOre('${o.name}')"
                                    id="sell-btn-${o.name}"
                                    class="small-sell-btn"
                                    style="
                                        padding:2px 8px;
                                        font-size:12px;
                                        cursor:${count === 0 ? 'not-allowed' : 'pointer'};
                                    "
                                    ${count === 0 ? 'disabled' : ''}>
                                    Sell
                                </button>
                            `
                            : `<span></span>`
                        }
                    </div>

                </li>
            `;

        }).join('') + `</ul>`;

        lastRenderedLayerIndex = currentLayerIndex;

    } else {
        updateInventoryCountsOnly();
    }
}

function renderEncyclopedia() {
    let container = document.getElementById('encyclopedia-content');
    if (!container) {
        const parent = document.getElementById('encyclopedia');
        if (parent) {
            container = document.createElement('div');
            container.id = 'encyclopedia-content';
            parent.appendChild(container);
        } else return;
    }
    container.innerHTML = '';

    const rarityOrder = ['paradoxical', 'solitude', 'illimitátus', 'meaninglessness', 'creative', 'abstruse', 'unreal', 'ephemeral', 'mythic', 'midas','interim', 'unique', 'intrigue','epic', 'rare', 'uncommon', 'common', 'basic', 'nil', 'exclusive'];

    const groupedOres = ores.reduce((acc, ore) => {
        const rarity = (ore.rarity || 'common').toLowerCase();
        if (!acc[rarity]) acc[rarity] = [];
        acc[rarity].push(ore);
        return acc;
    }, {});

    rarityOrder.forEach(rarity => {
        if (!groupedOres[rarity]) return;

        const section = document.createElement('div');
        section.className = 'rarity-section';

        const formattedTitle = rarity.charAt(0).toUpperCase() + rarity.slice(1);
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = formattedTitle;
        groupTitle.className = 'rarity-group-title';
        section.appendChild(groupTitle);

        const grid = document.createElement('div');
        grid.className = 'ore-grid';
        section.appendChild(grid);

        groupedOres[rarity].forEach(ore => {
            const isFound = (foundCount[ore.name] || 0) > 0;

            const oreCard = document.createElement('div');
            oreCard.className = 'card encyclopedia-item';

            const badgeClass = `badge-${rarity}`;
            const glowClass = (typeof getGlowClass === 'function') ? getGlowClass(ore) : (ore.glowType || '');

            const icon = oreIcons[ore.iconKey] || "assets/ores/default.png";

            if (isFound) {
const formattedChance = ore.chance
    ? `1/${ore.chance.toLocaleString()}`
    : "";

oreCard.innerHTML = `
    <span class="rarity-badge ${badgeClass}">
        ${rarity.toUpperCase()}
    </span>

    <img
        src="${icon}"
        class="encyclopedia-ore-icon"
        alt="${ore.name}"
    >

    <div
        class="ore-name ${glowClass}"
        style="color:${ore.color || "#fff"}; font-weight:bold;"
        title="${ore.name}"
    >
        ${ore.name}
    </div>

    <div class="encyclopedia-chance">
        ${formattedChance}
    </div>
`;
            } else {
oreCard.innerHTML = `
    <span class="rarity-badge badge-unknown">
        ???
    </span>

    <img
        src="assets/ores/unknown.png"
        class="encyclopedia-ore-icon"
        style="opacity:.5;"
        alt="Unknown"
    >

    <div class="ore-name">
        ???
    </div>
`;
            }

            grid.appendChild(oreCard);
        });

        container.appendChild(section);
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


function changeSellProtection() {

    const select = document.getElementById("sellProtectionSelect");

    sellProtectionRank = Number(select.value);

    const text = document.getElementById("sellProtectionText");

    if (sellProtectionRank === -1) {
        text.innerText = "Currently Protecting: OFF";
    } else {
        text.innerText =
            "Currently Protecting: " +
            Object.keys(rarityRank).find(
                key => rarityRank[key] === sellProtectionRank
            ) +
            "+";
    }

    saveGame();
}

function sellAllOres() {
    let earned = 0;

    ores.forEach(ore => {

        if (
            sellProtectionRank !== -1 &&
            rarityRank[ore.rarity] >= sellProtectionRank
        ) {
            return;
        }

        const amount = inventory[ore.name] || 0;

        earned += amount * ore.price;
        inventory[ore.name] = 0;
    });

    coins += earned;

    updateShopUI();
    renderInventory();
    saveGame();

    alert(`Sold all ores! +${earned.toLocaleString()} Coins`);
}

function renderPickaxesUI() {
    const el = document.getElementById('pickaxe-ui-list');
    if (!el) return;

    const sortedPickaxes = [...unlockedPickaxes].sort((a, b) => {
        return (pickaxeSortOrder[a] || 99) - (pickaxeSortOrder[b] || 99);
    });

    el.innerHTML = sortedPickaxes.map(id => {
        const p = pickaxes[id];
        const isEquipped = (currentPickaxe === id);

        const materialHtml = (p.materials) ? `
            <details class="material-dropdown" style="margin-top: 8px; padding: 5px; background: #222; border-radius: 4px; border: 1px solid #444;">
                <summary style="cursor: pointer; font-size: 0.9em; color: #3498db; list-style: none;">
                    Materials <span style="font-size: 0.7em;">▼</span>
                </summary>
                <ul style="list-style: none; padding: 5px 0; margin: 5px 0; font-size: 0.85em; color: #ccc;">
                    ${p.materials.split(', ').map(m => {
                        const parts = m.trim().split(' ');
                        const name = parts[0];
                        const qty = parts.slice(1).join(' ');

                        // 🔥 FIX: multiple layers support
                        const foundLayers = layers.filter(l => l.ores.includes(name));
                        const layer = foundLayers.length > 0
                            ? foundLayers.map(l => l.name).join(', ')
                            : "Unknown";

                        const oreData = ores.find(o => o.name === name) || { rarity: 'basic' };

                        return `
                            <li style="display: flex; align-items: center; gap: 6px; margin: 3px 0;">
                                <span class="rarity-badge badge-${(oreData.rarity || 'basic').toLowerCase().trim()}"
                                    style="font-size: 10px; padding: 1px 4px; border-radius: 3px; background: #555;">
                                    ${oreData.rarity}
                                </span>
                                <span><strong>${name}</strong> (${qty}) / <em>${layer}</em></span>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </details>
        ` : '';

        return `
            <div style="padding: 10px; border-bottom: 1px solid #444; transition: 0.2s;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: ${isEquipped ? 'bold' : 'normal'}; color: ${isEquipped ? '#58D68D' : '#eee'};">
                        ${p.name}
                        ${isEquipped ? '<span style="font-size: 11px; margin-left: 5px;">(Equipped)</span>' : ''}
                    </span>

                    ${isEquipped ?
                        `<button disabled style="width: 80px; padding: 5px; opacity: 0.5; cursor: not-allowed; border-radius: 4px; border: none;">Equipped</button>` :
                        `<button onclick="equipPickaxes('${id}')" style="width: 80px; padding: 5px; cursor: pointer; border-radius: 4px; border: 1px solid #555; background: #333; color: white;">Equip</button>`
                    }
                </div>

                ${materialHtml}
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


function saveGame() {
    if (isBooting || isResetting) return;

    const data = {
        inventory,
        foundCount,
        foundOres,
        coins,
        currentPickaxe,
        unlockedPickaxes,
        totalBlocksMined,
        sellProtectionRank,
        currentLayerIndex,
        lastSaveTime: Date.now()
    };

    try {
        localStorage.setItem('mineSave', JSON.stringify(data));
    } catch (e) {
        console.error("save failed:", e);
    }
}

function loadGame() {
    const rawData = localStorage.getItem('mineSave');
    
    if (!rawData) {
        inventory = {};
        foundCount = {};
        foundOres = [];
        coins = 0;
        currentPickaxe = 'basic';
        unlockedPickaxes = ['basic'];
        totalBlocksMined = 0;
        currentLayerIndex = 0;

        sellProtectionRank = -1; // ⭐ 추가
        return;
    }

    try {
        const data = JSON.parse(rawData);

        inventory = data.inventory ?? {};
        foundCount = data.foundCount ?? {};
        foundOres = data.foundOres ?? [];
        coins = data.coins ?? 0;
        currentPickaxe = data.currentPickaxe ?? 'basic';
        unlockedPickaxes = data.unlockedPickaxes ?? ['basic'];
        totalBlocksMined = data.totalBlocksMined ?? 0;
        currentLayerIndex = data.currentLayerIndex ?? 0;

        // ⭐ 판매 보호 추가 (핵심)
        sellProtectionRank = data.sellProtectionRank ?? -1;

    } catch (e) {
        console.error("세이브 파일 로드 오류: ", e);
    }
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

function toggleCrafted() {
    const el = document.getElementById('crafted-content');
    if (!el) return;

    const willOpen = !el.classList.contains('open');

    el.classList.toggle('open');

    // 🔥 열릴 때만 stagger 재생
    if (willOpen) {
        requestAnimationFrame(() => {
            const cards = el.querySelectorAll('.pickaxe-card');

            cards.forEach((card, i) => {
                card.style.animation = 'none';

                requestAnimationFrame(() => {
                    card.style.animation = '';
                    card.style.animationDelay = `${i * 70}ms`;
                });
            });
        });
    }
}

function renderForge() {
    const el = document.getElementById('recipe-list');
    if (!el) return;

    const craftedList = [];
    const uncraftedList = [];

    Object.keys(pickaxeRecipes).forEach(id => {
        if (unlockedPickaxes.includes(id)) {
            craftedList.push(id);
        } else {
            uncraftedList.push(id);
        }
    });

    const renderCard = (id) => {
        const recipe = pickaxeRecipes[id];
        const stats = pickaxes[id];
        const lore = pickaxeLore[id] || "No description available.";
        const isUnlocked = unlockedPickaxes.includes(id);

        const materialDropdownHtml = `
            <details class="material-dropdown">
                <summary>Materials</summary>
                <div class="material-details">
                    <ul style="list-style:none;padding:0;margin-bottom:0">
                        ${Object.entries(recipe.cost).map(([name, qty]) => {
                            const foundLayers = layers.filter(l => l.ores.includes(name));
                            const layer = foundLayers.length > 0
                                ? foundLayers.map(l => l.name).join(', ')
                                : "Unknown";

                            const oreData = ores.find(o => o.name === name) || { rarity: 'basic' };
                            const rarityClass = `badge-${(oreData.rarity || 'unknown').toLowerCase().trim()}`;

                            return `
                                <li style="display:flex;align-items:center;gap:8px;margin:5px 0;">
                                    <span class="rarity-badge ${rarityClass}">
                                        ${oreData.rarity}
                                    </span>
                                    <span>
                                        <strong>${name}</strong> (${qty}) / <em>${layer}</em>
                                    </span>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            </details>
        `;

        const statsHtml = `
            <div style="font-size:13px;color:#ddd;margin:8px 0;padding:5px;background:#333;border-radius:4px;">
                ⚡ Power: <b>${stats.power}</b> |
                🍀 Luck: <b>x${stats.luck.toFixed(1)}</b> |
                ✨ Bulk: <b>${(stats.superChance * 100).toFixed(1)}%</b>
                (Mines ${stats.superCount})
            </div>
        `;

const actionHtml = isUnlocked
    ? `
        <div style="
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-top:8px;
            padding:6px 10px;
            background:#1a1a1f;
            border:1px solid #2f2f35;
            border-radius:6px;
            font-size:12px;
            color:#aaa;
        ">
            <span>✔ Crafted</span>
            <span style="opacity:0.7;">Already unlocked</span>
        </div>
    `
    : `
        <div style="
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            margin-top:8px;
            padding:8px 10px;
            background:linear-gradient(145deg,#1f1f24,#17171b);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:6px;
        ">
            <!-- Lore (왼쪽) -->
            <span style="
                font-size:15px;
                color:#bbb;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                max-width:65%;
            ">
                ${lore}
            </span>

            <!-- Button (오른쪽 강조) -->
            <button onclick="craftPickaxe('${id}')" style="
                padding:6px 14px;
                cursor:pointer;
                font-weight:700;
                border-radius:5px;
                border:1px solid rgba(255,255,255,0.1);
                background:#2a2a32;
                color:#fff;
                transition:0.15s;
            " onmouseover="this.style.background='#3a3a45'" onmouseout="this.style.background='#2a2a32'">
                Craft
            </button>
        </div>
    `;

        const loreHtml = `
            <div style="
                margin-top:8px;
                padding:6px 10px;
                font-size:13px;
                color:#bbb;
                background:#1f1f24;
                border-radius:4px;
                line-height:1.4;
            ">
                ${lore}
            </div>
        `;

        return `
            <div class="pickaxe-card" style="margin-bottom:15px;padding:12px;border:1px solid #444;border-radius:5px;background:#25252b;">
                <div style="font-size:16px;font-weight:bold;">
                    ${recipe.name}
                </div>

                ${statsHtml}
                ${materialDropdownHtml}
                ${isUnlocked ? loreHtml : actionHtml}
            </div>
        `;
    };

    const craftedHtml = craftedList.length
        ? `
        <details class="section-box" open>
            <summary class="section-summary">
                🔧 Crafted (${craftedList.length})
            </summary>
            <div class="section-content">
                ${craftedList.map(renderCard).join('')}
            </div>
        </details>
        `
        : '';

    const uncraftedHtml = uncraftedList.length
        ? `
        <details class="section-box">
            <summary class="section-summary">
                🪨 Uncrafted (${uncraftedList.length})
            </summary>
            <div class="section-content">
                ${uncraftedList.map(renderCard).join('')}
            </div>
        </details>
        `
        : '';

    el.innerHTML = craftedHtml + uncraftedHtml;

    // 🔥 BOTH sections stagger
    requestAnimationFrame(() => {
        document.querySelectorAll('.section-content').forEach(section => {
            const cards = section.querySelectorAll('.pickaxe-card');

            cards.forEach((card, i) => {
                card.style.animation = 'none';

                requestAnimationFrame(() => {
                    card.style.animation = '';
                    card.style.animationDelay = `${i * 70}ms`;
                });
            });
        });
    });
}


function resetGame() {
    if (!confirm("⚠️ Are you sure you reset your data?")) return;
    
    isResetting = true; // 리셋 모드 활성화
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

function setupTabButtons() {
    const buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 버튼 내부의 요소를 클릭해도 버튼 자신을 찾도록 설정
            const clickedBtn = e.target.closest('.tab-btn');
            
            if (!clickedBtn) return; // 버튼이 아니면 무시

            // 1. 모든 버튼에서 active 제거
            buttons.forEach(b => b.classList.remove('active'));
            
            // 2. 클릭한 버튼에 active 추가
            clickedBtn.classList.add('active');
            
            const targetId = clickedBtn.getAttribute('data-target');
            showSection(targetId, clickedBtn);
        });
    });
}


function initUI() {
updateUI();

updateTotalMinedUI();
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

let isBooting = true;
let loadSuccess = false;
let isReady = false; 

function nextFrame() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}

function saveBackup() {
    const raw = localStorage.getItem('mineSave');
    if (raw) {
        localStorage.setItem('mineSave_backup', raw);
    }
}
function rollbackSave() {
    const backup = localStorage.getItem('mineSave_backup');

    if (backup) {
        localStorage.setItem('mineSave', backup);
        console.warn("⚠ rollback activated");
    }
}


window.onload = async () => {
    isBooting = true;
    loadSuccess = false;


    try {
        await bootGame();

        loadSuccess = true;
        saveBackup(); // ✔ 성공 시만 백업
    } catch (e) {
        console.error("boot failed:", e);
        rollbackSave(); // ❌ 실패 복구
    } finally {
        isBooting = false;
        isReady = true;
    }
};

async function bootGame() {

    // 🧠 1단계: 세이브 복구
    loadGame();

    await nextFrame(); // 렌더링 숨 틈

    // ⚙️ 2단계: 설정/보조 데이터
    loadSettings();
    loadOfflineProgress();

    await nextFrame();

    // 🎛 3단계: UI 기본 구성
    setupTabButtons();

    initUI();

    // ✔ 완료
}

setInterval(() => {
    // 1. 버프 지속시간 UI 갱신 (기존)
    updateActiveEffectsUI();

    // 2. 포션 구매 버튼 상태만 갱신 (전체 UI를 새로 그리지 않음!)
    updateBuyButtons();
}, 1000);

window.addEventListener('beforeunload', () => {
    if (isBooting || !isReady || isResetting) return;
    saveGame();
});

window.toggleCrafted = function () {
    const el = document.getElementById('crafted-content');
    if (!el) return;

    el.classList.toggle('open');
};