export const particlesConfig = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: ["#ffffff", "#87ceeb", "#add8e6"],
      animation: {
        enable: true,
        speed: 20,
        sync: false
      }
    },
    shape: {
      type: ["circle", "triangle"],
    },
    opacity: {
      value: 0.6,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.1
      }
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"]
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.8
        }
      },
      bubble: {
        distance: 250,
        size: 10,
        duration: 2,
        opacity: 0.8
      },
      push: {
        quantity: 4
      }
    }
  },
  background: {
    color: "#000000"
  },
  detectRetina: true
} as const;
