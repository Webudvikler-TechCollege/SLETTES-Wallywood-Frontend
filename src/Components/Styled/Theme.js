export const theme = {
	colors: {
		primary: "#5C1F06",
		secondary: "#D97852",
		tertiary: "#524641",
		quaternary: "#707070",
		quinary: "#D1B3A7",
		senary: "#A68E85",
		dark: "#000",
		light: "#fff"
	},
	fonts: ['Titillium Web', 'Open Sans'],
	fontsizes: {
		xs: '0.8rem',
		s: '0.9rem',
		m: '1rem',
		l: '1.1rem',
		xl: '1.5rem'
	},
	grid: {
		breakpoints: {
			xs: "320px",
			s: "480px",
			m: "768px",
			l: "992px",
			xl: "1200px"	
		},
		mobile: {
			primary: {
				rows: "1fr",
				columns: "3fr 1fr",
				areas: `
					"header header header navbar"
					"hero hero hero hero"
					"main main main main"
					"footer footer footer footer"
					`
			}
		},
		tablet: {
			primary: {
				rows: "1fr",
				columns: "1fr 2fr",
				areas: `
					"header header header navbar"
					"hero hero hero hero"
					"main main main main"
					"footer footer footer footer"
					`
			}
		},
		desktop: {
			primary: {
				rows: "1fr",
				columns: "1fr",
				areas: `
					"header header navbar navbar"
					"hero hero hero hero"
					"main main main main"
					"footer footer footer footer"
					`
			}
		}
	
	}
}