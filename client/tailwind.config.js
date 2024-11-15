/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-dev-light-orange": "#FFF6F3",
        "text-dev-orange": "#FD4F13",
        "text-dev-faded-base": "rgba(18, 20, 29, 0.6)",
        "dev-black": "#292422",
        "dev-dark-brown": "#292422",
        pinkish: "#FFF6F3",
        neutral400: "#C5BDB9",
        neutral600: "#7A6C65",
        neutral800: "#292422",
        neutral900: "#101828",
        neutralGrey: "#F3F3F3",
        primary500: "#FD4F13",
        primary600: "#EC3E02",
        primary700: "#B91C1C",
        gray700: "#534F4B",
        grey700: "#344054",
        error50: "#FEF3F2",
        gray600: "#D4CECB",
        lightPink: "#FFF6F3",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        input: "0px 4px 80px 0px rgba(0, 0, 0, 0.06)",
      },
      font: {
        Manrope: ["Manrope", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        bounce1: "bounce 1s infinite ease-in-out",
        bounce2: "bounce 1s infinite ease-in-out 0.2s",
        bounce3: "bounce 1s infinite ease-in-out 0.4s",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
