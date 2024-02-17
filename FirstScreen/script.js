// DOM element 
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();


// Mesh Object
const geometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, cubeMaterial);
scene.add(mesh);


// Camera
const sizes = {
    width: 800,
    height:600
}

const camera = new THREE.PerspectiveCamera(50 , sizes.width / sizes.height);
camera.position.x = 1
camera.position.y = 0
camera.position.z = 2
scene.add(camera);


const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

