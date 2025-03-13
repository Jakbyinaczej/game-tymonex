{\rtf1\ansi\ansicpg1250\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16560\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Zmienne globalne\
let canvas, engine, scene;\
let score = 0;\
let level = 1;\
let playerName = "";\
let tymonex; // G\uc0\u322 \'f3wna posta\u263 \
let bats = []; // Tablica z nietoperzami\
let treasure; // Skarb do zdobycia\
let dragon; // Smok\
let isGameStarted = false;\
\
// Inicjalizacja gry\
function initGame() \{\
    canvas = document.getElementById("renderCanvas");\
    engine = new BABYLON.Engine(canvas, true);\
    \
    // Tworzenie sceny\
    scene = createScene();\
    \
    // Uruchomienie p\uc0\u281 tli renderowania\
    engine.runRenderLoop(function() \{\
        if (isGameStarted) \{\
            updateGame();\
        \}\
        scene.render();\
    \});\
    \
    // Obs\uc0\u322 uga zmiany rozmiaru okna\
    window.addEventListener("resize", function() \{\
        engine.resize();\
    \});\
\}\
\
// Funkcja aktualizuj\uc0\u261 ca gr\u281  w ka\u380 dej klatce\
function updateGame() \{\
    updateCharacter();\
    updateEnemies();\
    checkCollisions();\
    updateUI();\
\}\
\
// Inicjalizacja po za\uc0\u322 adowaniu strony\
window.addEventListener("DOMContentLoaded", function() \{\
    document.getElementById("startGame").addEventListener("click", function() \{\
        playerName = document.getElementById("playerName").value || "Gracz";\
        document.getElementById("gameMenu").classList.add("hidden");\
        document.getElementById("gameUI").classList.remove("hidden");\
        isGameStarted = true;\
    \});\
    \
    // Renderowanie postaci w menu\
    renderCharacterPreview();\
    \
    // Inicjalizacja silnika gry\
    initGame();\
\});\
}