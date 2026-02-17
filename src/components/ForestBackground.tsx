'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function ForestBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: { value: '#0b1d13' }, // deep forest green
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: ['#a7f3d0', '#fef08a', '#86efac'], // fireflies / leaves
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: { min: 0.3, max: 0.9 },
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            outModes: {
              default: 'bounce',
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
