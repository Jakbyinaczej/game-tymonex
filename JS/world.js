{\rtf1\ansi\ansicpg1250\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16560\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function createScene() \{\
    // Tworzenie nowej sceny\
    const scene = new BABYLON.Scene(engine);\
    \
    // Dodanie kamery\
    const camera = new BABYLON.FollowCamera("camera", \
        new BABYLON.Vector3(0, 5, -10), scene);\
    camera.radius = 10; // Odleg\uc0\u322 o\u347 \u263  od postaci\
    camera.heightOffset = 4; // Wysoko\uc0\u347 \u263  kamery\
    camera.rotationOffset = 180; // Rotacja kamery\
    \
    // Dodanie o\uc0\u347 wietlenia\
    createLighting(scene);\
    \
    // Tworzenie terenu (pod\uc0\u322 o\u380 a)\
    createGround(scene);\
    \
    // Dodanie nieba\
    createSkybox(scene);\
    \
    // Tworzenie lasu\
    createForest(scene);\
    \
    // Dodanie skarbu i smoka\
    createTreasureAndDragon(scene);\
    \
    // Dodanie g\uc0\u322 \'f3wnej postaci - Tymonex\
    tymonex = createTymonex(scene);\
    camera.lockedTarget = tymonex.mesh; // Kamera \uc0\u347 ledzi posta\u263 \
    \
    // Dodanie wrog\'f3w - nietoperzy\
    createEnemies(scene);\
    \
    // Dodanie kontroli\
    setupControls(scene);\
    \
    return scene;\
\}\
\
function createLighting(scene) \{\
    // \uc0\u346 wiat\u322 o hemisferyczne dla og\'f3lnego o\u347 wietlenia\
    const hemisphericLight = new BABYLON.HemisphericLight(\
        "hemisphericLight", \
        new BABYLON.Vector3(0, 1, 0), \
        scene\
    );\
    hemisphericLight.intensity = 0.7;\
    \
    // \uc0\u346 wiat\u322 o kierunkowe symuluj\u261 ce s\u322 o\u324 ce\
    const directionalLight = new BABYLON.DirectionalLight(\
        "directionalLight",\
        new BABYLON.Vector3(-0.5, -1, -0.5),\
        scene\
    );\
    directionalLight.intensity = 0.6;\
    \
    // Dodanie cieni\
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, directionalLight);\
    shadowGenerator.useBlurExponentialShadowMap = true;\
    \
    return \{ hemisphericLight, directionalLight, shadowGenerator \};\
\}\
\
function createGround(scene) \{\
    // Tworzenie trawy (pod\uc0\u322 o\u380 a)\
    const ground = BABYLON.MeshBuilder.CreateGround(\
        "ground", \
        \{ width: 200, height: 200 \}, \
        scene\
    );\
    \
    // Materia\uc0\u322  dla ziemi (trawa)\
    const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);\
    groundMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.6, 0.2);\
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);\
    ground.material = groundMaterial;\
    \
    ground.receiveShadows = true;\
    \
    return ground;\
\}\
\
function createSkybox(scene) \{\
    // Tworzenie skyboxa\
    const skybox = BABYLON.MeshBuilder.CreateBox(\
        "skybox", \
        \{ size: 1000 \}, \
        scene\
    );\
    \
    // Materia\uc0\u322  dla skyboxa\
    const skyboxMaterial = new BABYLON.StandardMaterial("skyboxMaterial", scene);\
    skyboxMaterial.backFaceCulling = false;\
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(\
        "assets/textures/skybox", \
        scene\
    );\
    skyboxMaterial.reflectionTexture.coordinatesMode = \
        BABYLON.Texture.SKYBOX_MODE;\
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);\
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);\
    skybox.material = skyboxMaterial;\
    \
    return skybox;\
\}\
\
function createForest(scene) \{\
    // Tworzenie drzew\
    const trees = [];\
    \
    for (let i = 0; i < 50; i++) \{\
        // Losowa pozycja drzewa\
        const x = Math.random() * 180 - 90;\
        const z = Math.random() * 180 - 90;\
        \
        // Tworzenie pnia\
        const trunk = BABYLON.MeshBuilder.CreateCylinder(\
            "trunk" + i, \
            \{ height: 4, diameter: 1 \}, \
            scene\
        );\
        trunk.position.x = x;\
        trunk.position.y = 2;\
        trunk.position.z = z;\
        \
        // Materia\uc0\u322  dla pnia\
        const trunkMaterial = new BABYLON.StandardMaterial("trunkMaterial", scene);\
        trunkMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.3, 0.1);\
        trunk.material = trunkMaterial;\
        \
        // Tworzenie korony drzewa\
        const leaves = BABYLON.MeshBuilder.CreateSphere(\
            "leaves" + i, \
            \{ diameter: 4, segments: 8 \}, \
            scene\
        );\
        leaves.position.x = x;\
        leaves.position.y = 5;\
        leaves.position.z = z;\
        \
        // Materia\uc0\u322  dla li\u347 ci\
        const leavesMaterial = new BABYLON.StandardMaterial("leavesMaterial", scene);\
        leavesMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.5, 0.1);\
        leaves.material = leavesMaterial;\
        \
        trees.push(\{ trunk, leaves \});\
    \}\
    \
    return trees;\
\}\
}