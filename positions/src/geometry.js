import * as THREE from 'three'
// import obritControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// create event listener to resize window 
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight


    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height) 
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})
// create event listener to active double click for fullscreen
window.addEventListener('dblclick' , () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    // check if fullscreen is active or not;
    if(!document.fullscreenElement){
        if(canvas.requestFullscreen){

            canvas.requestFullscreen()
        }else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()            
        }
    }else{
        if(document.exitFullscreen()){
            document.exitFullscreen()
        }else if(document.webkitExitFullscreen()){
            document.webkitExitFullscreen()
        }
    }
})
// Scene 

const scene = new THREE.Scene()

// group
// const group = new THREE.Group()
// scene.add(group)



// cube 
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
// )
// new THREE.MeshBasicMaterial({color:'yellow', wireframe: true})
// group.add(cube)

// const geometry = new THREE.BoxGeometry(1,1,1)


const positionArray = new Float32Array([
    0,0,0,
    0,1,0,
    1,0,0
])
const positionAttribute = new THREE.BufferAttribute(positionArray, 3)
const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', positionAttribute)
const material = new THREE.MeshBasicMaterial({color:'yellow' , wireframe: true})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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