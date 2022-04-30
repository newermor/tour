module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        82: "27rem",
      },
      lineClamp: {
        7: "7",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
