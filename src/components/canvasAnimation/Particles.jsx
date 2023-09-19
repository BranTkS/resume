
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Particles() {





    const whiteColor = 0xffffff;
    const blackColor = 0x000000;
    const OrangeColor = 0xFB9000;
    const RenderScene = () => {

        //scene setup and helpers
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGL1Renderer({ canvas: document.querySelector("#bg") });


        //orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);


        //particles
        const particlesGeometry = new THREE.BufferGeometry;
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: OrangeColor,
        });
        const particlesCount = 5000;

        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * (Math.random() * -370);
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)



        //mouse tracking
        document.addEventListener('mousemove', animateParticles)
        let mouseX = 0
        let mouseY = 0

        function animateParticles(event) {
            mouseY = event.clientY;
            mouseX = event.clientX;
        }

        const getClock = new THREE.Clock;

        function animate() {
            requestAnimationFrame(animate);


            const elapsedTime = getClock.getElapsedTime();

            particlesMesh.rotation.y = mouseX * (elapsedTime * 0.000088);
            particlesMesh.rotation.x = mouseY * (elapsedTime * 0.000088);

            controls.update();
            renderer.render(scene, camera);
        }


        const exportParticles = animate();
        return (
            <>
                {scene.add(particlesMesh)}
                {animate()}
            </>
        )
    }
}

export default Particles;
