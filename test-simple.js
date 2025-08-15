// Simple test script to check theme behavior
console.log(`
Open http://localhost:5173/ in your browser and run these commands in the console:

// Check current theme
console.log('Current theme:', document.documentElement.getAttribute('data-theme'));

// Check background color
console.log('Background:', getComputedStyle(document.body).backgroundColor);

// Check if toggle exists
const toggle = document.querySelector('.theme-toggle');
console.log('Toggle exists:', !!toggle);

// Check icon visibility
const darkIcon = document.querySelector('.theme-icon-dark');
const lightIcon = document.querySelector('.theme-icon-light');
console.log('Dark icon display:', darkIcon ? getComputedStyle(darkIcon).display : 'not found');
console.log('Light icon display:', lightIcon ? getComputedStyle(lightIcon).display : 'not found');

// Click the toggle
if (toggle) {
  toggle.click();
  setTimeout(() => {
    console.log('After click - theme:', document.documentElement.getAttribute('data-theme'));
    console.log('After click - background:', getComputedStyle(document.body).backgroundColor);
    console.log('LocalStorage:', localStorage.getItem('theme'));
  }, 100);
}
`);