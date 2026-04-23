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

        particles: {
          number: {
            value: 35, // 👈 reduced particles (less crowded)
            density: {
              enable: true,
              area: 900,
            },
          },

          color: { value: "#ffffff" },

          links: {
            enable: true,
            color: "#ffffff",
            distance: 150, // 👈 more spacing = cleaner look
            opacity: 0.3,  // 👈 softer lines
          },

          move: {
            enable: true,
            speed: 0.6, // 👈 slower = smoother feel
            outModes: {
              default: "out",
            },
          },

          size: {
            value: { min: 1, max: 2 }, // 👈 small particles
          },

          opacity: {
            value: 0.5,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // 👈 MUCH softer than repulse
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },

          modes: {
            grab: {
              distance: 140,   // 👈 soft interaction range
              links: {
                opacity: 0.4,
              },
            },

            push: {
              quantity: 2, // 👈 small burst (not 4–5 aggressive)
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;