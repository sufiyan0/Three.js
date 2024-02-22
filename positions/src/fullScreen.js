import * as THREE from 'three'

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

const scene = new THREE.Scene()

const group = new THREE.Group()
// group.position.z = 3
scene.add(group)

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube.scale.y = 1
group.add(cube)


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)


const tick = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()