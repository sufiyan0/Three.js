import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */
const sizes = {
    width: 1600,
    height: 1000
}

// create scene 
const scene = new THREE.Scene()

// create group and add it to the scene
// const group = new THREE.Group()
// scene.add(group)



// // create cube and add it to the scene
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color:'yellow'})
// )

// group.add(cube)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'yellow'})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// create Camera and add it to the scene 
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

// create renderer with webglRenderer
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
// recursive function 
const tick = () => {

    // animation logic here 
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    // final rendering of scene
    renderer.render(scene, camera)
    // call tick again on the next frame
    window.requestAnimationFrame(tick)


}

tick()