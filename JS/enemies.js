{\rtf1\ansi\ansicpg1250\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16560\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function createEnemies(scene) \{\
    // Tworzenie nietoperzy\
    const batCount = 5 + level * 2; // Liczba nietoperzy zale\uc0\u380 y od poziomu\
    \
    for (let i = 0; i < batCount; i++) \{\
        // Losowa pozycja nietoperza\
        const x = Math.random() * 180 - 90;\
        const y = 3 + Math.random() * 2;\
        const z = Math.random() * 180 - 90;\
        \
        // Tworzenie cia\uc0\u322 a nietoperza\
        const batBody = BABYLON.MeshBuilder.CreateSphere(\
            "batBody" + i, \
            \{ diameter: 0.5, segments: 8 \}, \
            scene\
        );\
        batBody.position.x = x;\
        batBody.position.y = y;\
        batBody.position.z = z;\
        \
        // Materia\uc0\u322  dla cia\u322 a nietoperza\
        const batMaterial = new BABYLON.StandardMaterial("batMaterial", scene);\
        batMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);\
        batBody.material = batMaterial;\
        \
        // Tworzenie skrzyde\uc0\u322  nietoperza\
        const leftWing = BABYLON.MeshBuilder.CreatePlane(\
            "leftWing" + i, \
            \{ width: 1, height: 0.5 \}, \
            scene\
        );\
        leftWing.position.x = x - 0.5;\
        leftWing.position.y = y;\
        leftWing.position.z = z;\
        leftWing.rotation.z = Math.PI / 4;\
        \
        const rightWing = BABYLON.MeshBuilder.CreatePlane(\
            "rightWing" + i, \
            \{ width: 1, height: 0.5 \}, \
            scene\
        );\
        rightWing.position.x = x + 0.5;\
        rightWing.position.y = y;\
        rightWing.position.z = z;\
        rightWing.rotation.z = -Math.PI / 4;\
        \
        // Materia\uc0\u322  dla skrzyde\u322 \
        const wingMaterial = new BABYLON.StandardMaterial("wingMaterial", scene);\
        wingMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);\
        wingMaterial.alpha = 0.8;\
        leftWing.material = wingMaterial;\
        rightWing.material = wingMaterial;\
        \
        // \uc0\u321 \u261 czenie cz\u281 \u347 ci nietoperza\
        const batParts = [batBody, leftWing, rightWing];\
        const bat = BABYLON.Mesh.MergeMeshes(\
            batParts, \
            true, \
            true, \
            undefined, \
            false, \
            true\
        );\
        \
        // Dodanie w\uc0\u322 a\u347 ciwo\u347 ci nietoperza\
        const batSpeed = 0.05 + (level * 0.02); // Szybko\uc0\u347 \u263  zale\u380 y od poziomu\
        \
        bats.push(\{\
            mesh: bat,\
            speed: batSpeed,\
            health: 20,\
            update: function() \{\
                // Animacja ruchu skrzyde\uc0\u322 \
                if (scene.getAnimationRatio() % 10 < 5) \{\
                    leftWing.rotation.z = Math.PI / 6;\
                    rightWing.rotation.z = -Math.PI / 6;\
                \} else \{\
                    leftWing.rotation.z = Math.PI / 3;\
                    rightWing.rotation.z = -Math.PI / 3;\
                \}\
                \
                // Poruszanie si\uc0\u281  w kierunku gracza\
                const direction = tymonex.mesh.position.subtract(this.mesh.position);\
                direction.normalize();\
                \
                this.mesh.position.x += direction.x * this.speed;\
                this.mesh.position.z += direction.z * this.speed;\
                \
                // Obracanie nietoperza w kierunku gracza\
                const angle = Math.atan2(\
                    tymonex.mesh.position.x - this.mesh.position.x,\
                    tymonex.mesh.position.z - this.mesh.position.z\
                );\
                this.mesh.rotation.y = angle;\
            \}\
        \});\
    \}\
    \
    return bats;\
\}\
\
function updateEnemies() \{\
    // Aktualizacja pozycji i stanu wszystkich nietoperzy\
    for (let i = 0; i < bats.length; i++) \{\
        const bat = bats[i];\
        \
        if (bat.health <= 0) \{\
            scene.removeMesh(bat.mesh);\
            bats.splice(i, 1);\
            i--;\
            \
            // Dodanie punkt\'f3w za pokonanie nietoperza\
            score += 10;\
            \
            // Sprawdzenie czy przej\uc0\u347 \u263  do nast\u281 pnego poziomu\
            if (bats.length === 0) \{\
                level++;\
                createEnemies(scene);\
            \}\
            \
            continue;\
        \}\
        \
        bat.update();\
    \}\
\}\
\
function checkCollisions() \{\
    // Sprawdzenie kolizji mi\uc0\u281 dzy postaci\u261  a nietoperzami\
    for (let i = 0; i < bats.length; i++) \{\
        const bat = bats[i];\
        \
        // Odleg\uc0\u322 o\u347 \u263  mi\u281 dzy postaci\u261  a nietoperzem\
        const distance = BABYLON.Vector3.Distance(\
            tymonex.mesh.position,\
            bat.mesh.position\
        );\
        \
        // Kolizja z nietoperzem\
        if (distance < 1.5) \{\
            // Je\uc0\u347 li posta\u263  atakuje, nietoperz otrzymuje obra\u380 enia\
            if (tymonex.isAttacking) \{\
                bat.health -= 20;\
                \
                // Efekt odrzucenia\
                const knockback = tymonex.mesh.position.subtract(bat.mesh.position);\
                knockback.normalize();\
                bat.mesh.position.x -= knockback.x * 2;\
                bat.mesh.position.z -= knockback.z * 2;\
            \} else \{\
                // Je\uc0\u347 li posta\u263  nie atakuje, otrzymuje obra\u380 enia\
                tymonex.health -= 1;\
                \
                // Efekt odepchni\uc0\u281 cia\
                const knockback = bat.mesh.position.subtract(tymonex.mesh.position);\
                knockback.normalize();\
                tymonex.mesh.position.x -= knockback.x;\
                tymonex.mesh.position.z -= knockback.z;\
            \}\
        \}\
    \}\
    \
    // Sprawdzenie kolizji mi\uc0\u281 dzy postaci\u261  a skarbem\
    if (treasure) \{\
        const distance = BABYLON.Vector3.Distance(\
            tymonex.mesh.position,\
            treasure.position\
        );\
        \
        // Zdobycie skarbu\
        if (distance < 3) \{\
            // Sprawdzenie czy smok zosta\uc0\u322  pokonany\
            if (dragon && dragon.health <= 0) \{\
                // Koniec gry - zwyci\uc0\u281 stwo\
                endGame(true);\
            \} else \{\
                // Komunikat, \uc0\u380 e najpierw trzeba pokona\u263  smoka\
                showMessage("Najpierw pokonaj smoka!");\
            \}\
        \}\
    \}\
\}\
}