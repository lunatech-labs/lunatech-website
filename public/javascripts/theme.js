console.clear()

const themes = ['light', 'dark', 'neon'];
let count = 0;
const themePicker = document.getElementById('themePicker');
const themeList = document.getElementById('themeGrid');

// Change the CSS variables on the root element, depending on the curent theme
const changeTheme = (theme) => {
	
	if(count < 2) {
		count += 1;
	} else {
		count = 0
	}
	
    document.documentElement.style.setProperty('--surface', `var(--${theme}-surface)`);
	document.documentElement.style.setProperty('--bg', `var(--${theme}-bg)`);
    document/documentElement.style.setProperty('--bottom-bg', `var(--${theme}-bottom-bg)`);
    document.documentElement.style.setProperty('--border', `var(--${theme}-border)`);
    document.documentElement.style.setProperty('--primary', `var(--${theme}-primary)`);
	document.documentElement.style.setProperty('--text-primary', `var(--${theme}-text-primary)`);
	document.documentElement.style.setProperty('--text-secondary', `var(--${theme}-text-secondary)`);
	
	const themeGrid = themePicker.querySelector('.c-theme__grid')
	
	if(themeList.querySelector('.c-box--active')) {
		themeList.querySelector('.c-box--active').classList.remove('c-box--active')
	}
	
	themeList.querySelectorAll('.c-box').forEach(item => {
		if(item.dataset.theme === theme) {
			item.classList.add('c-box--active')
		}
	})
	
	switch(theme) {
        case theme = 'light':
			themeGrid.style.top = '0'
			break;
		case theme = 'dark':
			themeGrid.style.top = '-3.6rem'
			break;
		case theme = 'neon':
			themeGrid.style.top = '-7.1rem'
			break;
	}
}

// Define Icons
const lightIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Light"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>`
const darkIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Dark"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>`
const neonIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Sunrise"><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`


// Content and click function for the theme picker
themePicker.innerHTML = `
	<div class="c-theme__grid">
        ${lightIcon}
		${darkIcon}
		${neonIcon}
	</div>
`

themePicker.onclick = () => {
	changeTheme(themes[count])
}

const capitalized = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

changeTheme(themes[0])