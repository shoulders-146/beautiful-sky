import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.debug = this.experience.debug

        this.setInstance()
        this.setControls()
        this.setDebugs()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(-.57, -2.29, 5.33)
        this.instance.rotation.reorder('YXZ')
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        // this.controls.enableDamping = true   //to make it more smooth
        // this.controls.screenSpacePanning = false   
        // this.controls.enableKeys = false   
        // this.controls.zoomSpeed = 0.25   
        this.controls.enabled = false
    }

    setDebugs()
    {
        if(this.debug.active)
        {
            this.debug.ui.add(this.instance.position, 'x', -10, 10, 0.01)
            this.debug.ui.add(this.instance.position, 'y', -10, 10, 0.01)
            this.debug.ui.add(this.instance.position, 'z', -10, 10, 0.01)
        }
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}