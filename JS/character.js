{\rtf1\ansi\ansicpg1250\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16560\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function createTymonex(scene) \{\
    // Tworzenie cia\uc0\u322 a postaci\
    const body = BABYLON.MeshBuilder.CreateBox(\
        "tymonexBody", \
        \{ width: 1, height: 2, depth: 0.5 \}, \
        scene\
    );\
    body.position.y = 1;\
    \
    // Materia\uc0\u322  dla cia\u322 a (czarny)\
    const bodyMaterial = new BABYLON.StandardMaterial("bodyMaterial", scene);\
    bodyMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);\
    body.material = bodyMaterial;\
    \
    // Tworzenie g\uc0\u322 owy\
    const head = BABYLON.MeshBuilder.CreateSphere(\
        "tymonexHead", \
        \{ diameter: 0.8, segments: 16 \}, \
        scene\
    );\
    head.position.y = 2.5;\
    \
    // Materia\uc0\u322  dla g\u322 owy (czarny)\
    const headMaterial = new BABYLON.StandardMaterial("headMaterial", scene);\
    headMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);\
    head.material = headMaterial;\
    \
    // Tworzenie diament\'f3w na g\uc0\u322 owie\
    const diamonds = [];\
    for (let i = 0; i < 7; i++) \{\
        const diamond = BABYLON.MeshBuilder.CreatePolyhedron(\
            "diamond" + i, \
            \{ type: 1, size: 0.15 \}, \
            scene\
        );\
        diamond.position.y = 2.7 + Math.random() * 0.2;\
        diamond.position.x = -0.3 + i * 0.1;\
        diamond.position.z = -0.3 + Math.random() * 0.6;\
        \
        // Materia\uc0\u322  dla diament\'f3w (b\u322 yszcz\u261 cy niebieski)\
        const diamondMaterial = new BABYLON.StandardMaterial("diamondMaterial", scene);\
        diamondMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.6, 0.9);\
        diamondMaterial.specularColor = new BABYLON.Color3(1, 1, 1);\
        diamondMaterial.specularPower = 128;\
        diamond.material = diamondMaterial;\
        \
        diamonds.push(diamond);\
    \}\
    \
    // Tworzenie kosy\
    const scytheHandle = BABYLON.MeshBuilder.CreateCylinder(\
        "scytheHandle", \
        \{ height: 2, diameter: 0.1 \}, \
        scene\
    );\
    scytheHandle.position.y = 1;\
    scytheHandle.position.x = 0.7;\
    scytheHandle.rotation.x = Math.PI / 2;\
    \
    const scytheBlade = BABYLON.MeshBuilder.CreateDisc(\
        "scytheBlade", \
        \{ radius: 0.5, arc: 0.5, sideOrientation: BABYLON.Mesh.DOUBLESIDE \}, \
        scene\
    );\
    scytheBlade.position.y = 1;\
    scytheBlade.position.x = 1.7;\
    scytheBlade.rotation.z = Math.PI / 2;\
    \
    // Materia\uc0\u322 y dla kosy\
    const handleMaterial = new BABYLON.StandardMaterial("handleMaterial", scene);\
    handleMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.3, 0.1);\
    scytheHandle.material = handleMaterial;\
    \
    const bladeMaterial = new BABYLON.StandardMaterial("bladeMaterial", scene);\
    bladeMaterial.diffuseColor = new BABYLON.Color3(0.7, 0.7, 0.7);\
    bladeMaterial.specularColor = new BABYLON.Color3(1, 1, 1);\
    scytheBlade.material = bladeMaterial;\
    \
    // \uc0\u321 \u261 czenie wszystkich cz\u281 \u347 ci w jeden obiekt\
    const tymonexParts = [body, head, ...diamonds, scytheHandle, scytheBlade];\
    const tymonex = BABYLON.Mesh.MergeMeshes(\
        tymonexParts, \
        true, \
        true, \
        undefined, \
        false, \
        true\
    );\
    \
    // Dodanie w\uc0\u322 a\u347 ciwo\u347 ci postaci\
    tymonex.health = 100;\
    tymonex.speed = 0.15;\
    tymonex.isAttacking = false;\
    \
    return \{\
        mesh: tymonex,\
        health: 100,\
        speed: 0.15,\
        isAttacking: false,\
        attack: function() \{\
            this.isAttacking = true;\
            \
            // Animacja ataku\
            const attackAnimation = new BABYLON.Animation(\
                "attackAnimation", \
                "rotation.y", \
                30, \
                BABYLON.Animation.ANIMATIONTYPE_FLOAT, \
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE\
            );\
            \
            const attackKeys = [\
                \{ frame: 0, value: this.mesh.rotation.y \},\
                \{ frame: 5, value: this.mesh.rotation.y + Math.PI / 2 \},\
                \{ frame: 10, value: this.mesh.rotation.y \}\
            ];\
            \
            attackAnimation.setKeys(attackKeys);\
            \
            this.mesh.animations = [];\
            this.mesh.animations.push(attackAnimation);\
            \
            scene.beginAnimation(this.mesh, 0, 10, false, 1, () => \{\
                this.isAttacking = false;\
            \});\
        \}\
    \};\
\}\
\
function setupControls(scene) \{\
    // Mapa przechowuj\uc0\u261 ca informacje o wci\u347 ni\u281 tych klawiszach\
    const keysPressed = \{\};\
    \
    // Obs\uc0\u322 uga wci\u347 ni\u281 cia klawiszy\
    scene.onKeyboardObservable.add((kbInfo) => \{\
        switch (kbInfo.type) \{\
            case BABYLON.KeyboardEventTypes.KEYDOWN:\
                keysPressed[kbInfo.event.key] = true;\
                \
                // Obs\uc0\u322 uga ataku (spacja)\
                if (kbInfo.event.key === " " && !tymonex.isAttacking) \{\
                    tymonex.attack();\
                \}\
                break;\
            case BABYLON.KeyboardEventTypes.KEYUP:\
                keysPressed[kbInfo.event.key] = false;\
                break;\
        \}\
    \});\
    \
    // Funkcja aktualizuj\uc0\u261 ca pozycj\u281  postaci na podstawie wci\u347 ni\u281 tych klawiszy\
    scene.registerBeforeRender(() => \{\
        if (!isGameStarted) return;\
        \
        const speed = tymonex.speed;\
        \
        // Ruch w prz\'f3d\
        if (keysPressed["ArrowUp"]) \{\
            tymonex.mesh.position.z += speed;\
        \}\
        \
        // Ruch w ty\uc0\u322 \
        if (keysPressed["ArrowDown"]) \{\
            tymonex.mesh.position.z -= speed;\
        \}\
        \
        // Ruch w lewo\
        if (keysPressed["ArrowLeft"]) \{\
            tymonex.mesh.position.x -= speed;\
        \}\
        \
        // Ruch w prawo\
        if (keysPressed["ArrowRight"]) \{\
            tymonex.mesh.position.x += speed;\
        \}\
    \});\
\}\
}