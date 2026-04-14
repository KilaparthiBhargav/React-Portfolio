import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
     options={{
  fullScreen: {
    enable: true,
    zIndex: 0
  },

  fpsLimit: 120,
  detectRetina: true,

  background: {
    color: "#000000"
  },

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },

    color: {
      value: "#ffffff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: { min: 1, max: 3 }
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: {
        default: "out"
      }
    },

    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    }
  },

  interactivity: {
    detectsOn: "window",

    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },

    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      },

      push: {
        quantity: 4
      }
    }
  }
}}
    />
  );
}

export default HeroParticles;