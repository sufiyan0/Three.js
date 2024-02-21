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


const cursor = {
    x: 0,
    y: 0
}

// canvas.addEventListener('mousemove', (e) => {
//     cursor.x = e.clientX / sizes.width -0.5
//     cursor.y =  -(e.clientY / sizes.height -0.5)
//     console.log(e.clientX, e.clientY)
// })
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width -0.5
    cursor.y =  -(e.clientY / sizes.height -0.5)
    console.log(e.clientX, e.clientY)
})






const scene = new THREE.Scene()


const group = new THREE.Group()
scene.add(group)




const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'yellow'})
)

group.add(cube)


const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)




const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


const tick = () => {

    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    camera.position.y = cursor.y * 13
    camera.lookAt(new THREE.Vector3())
    // camera.lookAt(cube.position)


    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)


}

tick()