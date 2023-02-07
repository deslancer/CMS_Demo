import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";


export class CreateTHREEScene {
    constructor() {
        this.scene = null;
    }

    createScene(canvas) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(20, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            preserveDrawingBuffer: true,
            alpha: true
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 1);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        const cubeTextureLoader = new THREE.CubeTextureLoader();
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('assets/models/test.gltf', gltf => {
            scene.add(gltf.scene);
            console.log(gltf);
        }, xhr => {
            const percent = xhr.loaded / xhr.total * 100;
            console.log(percent);
        }, error => {
            console.log('An error happened' + error);
        });
        cubeTextureLoader.setPath('assets/textures/');
        scene.environment = cubeTextureLoader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
        camera.position.z = 50;
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.target.set(0, 0, 0);
        controls.update();
        const animate = function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        const onWindowResize = () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        };
        window.addEventListener('resize', onWindowResize, false);
        animate();
        this.scene = scene;
    }

    getScene() {
        return this.scene;
    }
}