import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* Futuristic Portfolio Colors */
				'glow-cyan': 'hsl(var(--glow-cyan))',
				'glow-aqua': 'hsl(var(--glow-aqua))',
				'deep-space': 'hsl(var(--deep-space))',
				'space-gray': 'hsl(var(--space-gray))',
				'tech-blue': 'hsl(var(--tech-blue))',
				'neural-purple': 'hsl(var(--neural-purple))',
				'hologram-blue': 'hsl(var(--hologram-blue))',
				'matrix-green': 'hsl(var(--matrix-green))'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-space': 'var(--gradient-space)',
				'gradient-tech': 'var(--gradient-tech)',
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-matrix': 'var(--gradient-matrix)',
				'gradient-hologram': 'var(--gradient-hologram)',
				'gradient-particle': 'var(--gradient-particle)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'aqua-glow': 'var(--shadow-aqua-glow)',
				'deep': 'var(--shadow-deep)',
				'tech': 'var(--shadow-tech)'
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'data-stream': 'data-stream 4s linear infinite',
				'matrix': 'matrix-rain 4s linear infinite',
				'hologram': 'hologram-flicker 3s ease-in-out infinite',
				'particle': 'particle-float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(203 100% 50% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(203 100% 50% / 0.6)' }
				},
				'neural-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'data-stream': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
