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


// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

const group = new THREE.Group()
scene.add(group)

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'green'})

)
cube.position.x = 2
group.add(cube)


const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'red'})

)
cube1.position.x = 0
group.add(cube1)


const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'})

)
cube2.position.x = -2
group.add(cube2)


const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'white'})

)
cube3.position.y = 2
group.add(cube3)


const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'purple'})

)
cube4.position.y = -2
group.add(cube4)

// mesh.position.x = 1
// mesh.scale.x = 1.5
// mesh.scale.y = 1.5
// mesh.scale.z = 2
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// mesh.position.normalize()


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x=0.6
// camera.position.y=0.6
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

const tick = () => {

    
    
    // group.rotation.x += 0.005
    // group.rotation.y += 0.005
    
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    camera.position.x += 0.001
    camera.position.y += 0.001



    cube1.rotation.x = 1
    cube1.rotation.y = 1
    
    cube2.rotation.x += 0.01
    cube2.rotation.y += 0.01
    
    cube3.rotation.x += 0.01
    cube3.rotation.y += 0.01
    
    cube4.rotation.x += 0.01
    cube4.rotation.y += 0.01

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)


}

tick()