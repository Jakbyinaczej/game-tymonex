{\rtf1\ansi\ansicpg1250\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16560\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function renderCharacterPreview() \{\
    // Renderowanie podgl\uc0\u261 du postaci w menu\
    const previewCanvas = document.createElement("canvas");\
    previewCanvas.width = 300;\
    previewCanvas.height = 300;\
    document.getElementById("characterPreview").appendChild(previewCanvas);\
    \
    const previewEngine = new BABYLON.Engine(previewCanvas, true);\
    const previewScene = new BABYLON.Scene(previewEngine);\
    \
    // Kamera dla podgl\uc0\u261 du\
    const camera = new BABYLON.ArcRotateCamera(\
        "camera", \
        Math.PI / 2, \
        Math.PI / 3, \
        5, \
        new BABYLON.Vector3(0, 1, 0), \
        previewScene\
    );\
    \
    // \uc0\u346 wiat\u322 o dla podgl\u261 du\
    const light = new BABYLON.HemisphericLight(\
        "light", \
        new BABYLON.Vector3(0, 1, 0), \
        previewScene\
    );\
    \
    // Tworzenie modelu Tymonexa dla podgl\uc0\u261 du\
    const previewTymonex = createTymonex(previewScene);\
    \
    // Animacja obracania modelu\
    previewScene.registerBeforeRender(() => \{\
        previewTymonex.mesh.rotation.y += 0.01;\
    \});\
    \
    // Uruchomienie renderowania podgl\uc0\u261 du\
    previewEngine.runRenderLoop(() => \{\
        previewScene.render();\
    \});\
\}\
\
function updateUI() \{\
    // Aktualizacja interfejsu u\uc0\u380 ytkownika\
    document.getElementById("score").textContent = "Punkty: " + score;\
    document.getElementById("level").textContent = "Poziom: " + level;\
    document.getElementById("health").textContent = "\uc0\u379 ycie: " + tymonex.health + "%";\
    \
    // Sprawdzenie czy posta\uc0\u263  jest \u380 ywa\
    if (tymonex.health <= 0) \{\
        endGame(false);\
    \}\
\}\
\
function endGame(isVictory) \{\
    // Zako\uc0\u324 czenie gry\
    isGameStarted = false;\
    \
    // Tworzenie ekranu ko\uc0\u324 cowego\
    const endScreen = document.createElement("div");\
    endScreen.className = "game-screen";\
    endScreen.id = "endScreen";\
    \
    const title = document.createElement("h1");\
    title.textContent = isVictory ? "Zwyci\uc0\u281 stwo!" : "Pora\u380 ka";\
    \
    const scoreText = document.createElement("p");\
    scoreText.textContent = "Zdobyte punkty: " + score;\
    \
    const levelText = document.createElement("p");\
    levelText.textContent = "Osi\uc0\u261 gni\u281 ty poziom: " + level;\
    \
    const restartButton = document.createElement("button");\
    restartButton.textContent = "Zagraj ponownie";\
    restartButton.addEventListener("click", () => \{\
        location.reload();\
    \});\
    \
    endScreen.appendChild(title);\
    endScreen.appendChild(scoreText);\
    endScreen.appendChild(levelText);\
    endScreen.appendChild(restartButton);\
    \
    document.body.appendChild(endScreen);\
\}\
\
function showMessage(text) \{\
    // Wy\uc0\u347 wietlanie komunikat\'f3w w grze\
    const message = document.createElement("div");\
    message.className = "game-message";\
    message.textContent = text;\
    \
    document.body.appendChild(message);\
    \
    // Usuni\uc0\u281 cie komunikatu po okre\u347 lonym czasie\
    setTimeout(() => \{\
        message.classList.add("fade-out");\
        setTimeout(() => \{\
            document.body.removeChild(message);\
        \}, 1000);\
    \}, 2000);\
\}\
}