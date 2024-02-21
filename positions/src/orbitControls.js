import * as THREE from 'three'
// import obritControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */
const sizes = {
    width: 1600,
    height: 1000
}

// Scene 

const scene = new THREE.Scene()

// group
const group = new THREE.Group()
scene.add(group)



// cube 
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'yellow'})
)

group.add(cube)

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

// controls with orbitControls to control the object movement with mouse
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const tick = () => {

   

    controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)


}

tick()