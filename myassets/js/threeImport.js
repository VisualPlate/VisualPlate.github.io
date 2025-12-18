import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const canvas = document.getElementById("threeCanvas");

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setClearColor(0x000000, 0); // Transparent background

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
);
camera.position.z = 3;

//cube? TODO; change this default mesh to something else when i have time
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
    color: 0x4da6ff
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(2, 3, 4);
scene.add(directional);

function resizeRendererToDisplaySize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}
cube.rotation.x = 0.4

function animateCube() {
    resizeRendererToDisplaySize();

    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animateCube);
}

animateCube();
