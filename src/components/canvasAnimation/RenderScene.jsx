import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { currentBackground, currentColor } from './BgColorScrollChanges';
//import Face from './models/face';

const whiteColor = 0xffffff;
const currentBackgroundColor = 0x0A020D;
const RenderScene = () => {

    //scene setup and helpers
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGL1Renderer({ canvas: document.querySelector("#bg") });

    const gridHelper = new THREE.GridHelper();

    // background
    const spacebgTexture = new THREE.TextureLoader().load(currentBackground);
    //scene.background = spacebgTexture;
    scene.background = new THREE.Color(currentBackgroundColor);

    //lighting
    const pointLight = new THREE.PointLight(whiteColor);
    pointLight.position.set(5, 5, 5);

    const lightHelper = new THREE.PointLightHelper(pointLight);

    const ambientLight = new THREE.AmbientLight(whiteColor);

    //orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);


    //torus
    const geometry = new THREE.SphereGeometry(10, 27, 17, 100);
    const material = new THREE.PointsMaterial({
        size: 0.005
    });
    const torus = new THREE.Points(geometry, material);


    //face
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32, 10),
        material
    );

    //particles
    const particlesGeometry = new THREE.BufferGeometry;
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: currentColor,
    });
    const particlesCount = 5000;

    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * -370);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)

    //scenes
    scene.add(torus, particlesMesh,);
    scene.add(pointLight, ambientLight);
    //scene.add(lightHelper);
    //scene.add(gridHelper);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    //mouse tracking
    document.addEventListener('mousemove', animateParticles)
    let mouseX = 0
    let mouseY = 0

    function animateParticles(event) {
        mouseY = event.clientY;
        mouseX = event.clientX;
    }

    function moveCamera() {
        const t = document.body.getBoundingClientRect().top;

        camera.position.x = t * -0.01;
        camera.position.y = t * -0.01;
        camera.position.z = t * -0.01;

        if (t == 819) {
            console.log("about");
        }
    }

    document.body.onscroll = moveCamera;

    const getClock = new THREE.Clock;

    function animate() {
        requestAnimationFrame(animate);



        const elapsedTime = getClock.getElapsedTime();

        torus.rotation.x += 0.01;
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.000088);
        particlesMesh.rotation.x = mouseY * (elapsedTime * 0.0000188);

        controls.update();
        renderer.render(scene, camera);
    }



    return (
        <div className="canvasScene">
            {animate()}
        </div>
    )
}

export default RenderScene;