const particlesConfig = {
  fullScreen: { enable: true },
  background: {
    color: {
      value: "",
    },
  },
  fpslimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 90,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#2e79b2",
    },
    links: {
      color: "#44a6f0",
      distance: "150",
      enable: "true",
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: "true",
      outModes: {
        default: "bounce",
      },
      random: "false",
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 100,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 10 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
