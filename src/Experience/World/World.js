import Experience from '../Experience.js'
import Gradient from './background/Gradient.js'
import Smoke from './background/Smoke.js'
import Particles from './background/Particles.js'
import Vignette from './background/Vignette.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('groupEnd', (_group) =>
        {
            // Setup
            if(_group.name === 'base')
            {
                this.setGradient()
                this.setSmoke()
                this.setVignette()
                this.setParticles()
            }
        })
    }

    setGradient()
    {
        this.gradient = new Gradient()
    }

    setSmoke()
    {
        this.smoke = new Smoke()
    }

    setParticles()
    {
        this.particles = new Particles()
    }

    setVignette()
    {
        this.vignette = new Vignette()
    }

    update()
    {
        if(this.gradient)
            this.gradient.update()

        if(this.smoke)
            this.smoke.update()

        if(this.particles)
            this.particles.update()
    }


}