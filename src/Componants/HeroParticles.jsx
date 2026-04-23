import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBg = () => {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
  <Particles
  init={init}
  options={{
    fullScreen: { enable: true },
    background: { color: "#050816" },

    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      size: { value: { min: 1, max: 3 } },

      move: {
        enable: true,
        speed: 0.5, // slow = smooth
      },

      opacity: {
        value: 0.5,
      },

      links: {
        enable: true,
        distance: 140,
        color: "#8888ff",
        opacity: 0.2,
        width: 1,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 150,
        },
      },
    },
  }}
/>
  );
};

export default ParticlesBg;