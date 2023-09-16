<template>
  <Particles
    id="tsparticles"
    :options="options"
    :particlesInit="particlesInit"
  />
</template>

<script lang="ts">
import type { Engine } from "tsparticles-engine";

import { loadFull } from "tsparticles";

export default {
  data() {
    return {
      // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
      // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
      options: {
        fullScreen: {
          enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
          zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
        },
        interactivity: {
          events: {
            onClick: {
              enable: true, // enables the click event, it's disabled by default
              mode: "push", // adds the particles on click
            },
          },
        },
        particles: {
          move: {
            enable: false, // enabling this will make particles move in the canvas
            speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
          },
          number: {
            value: 130,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.3,
              opacity_min: 0.05,
            },
          },
          size: {
            value: { min: 1, max: 1.5 }, // let's randomize the particles size a bit
          },
        },
        retina_detect: true,
      },
    };
  },
  methods: {
    async particlesInit(engine: Engine) {
      // await loadSlim(engine);
      await loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    },
  },
};
</script>
