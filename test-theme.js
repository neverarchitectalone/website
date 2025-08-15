import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Testing theme functionality...\n');

  // Navigate to the site
  await page.goto('http://localhost:5173/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Check initial state (should be dark theme)
  const initialTheme = await page.getAttribute('html', 'data-theme');
  console.log(`Initial theme attribute: ${initialTheme}`);
  
  // Get background color of body
  const initialBgColor = await page.evaluate(() => {
    return window.getComputedStyle(document.body).backgroundColor;
  });
  console.log(`Initial background color: ${initialBgColor}`);
  
  // Check if theme toggle button exists
  const themeToggle = await page.$('.theme-toggle');
  if (!themeToggle) {
    console.log('ERROR: Theme toggle button not found!');
  } else {
    console.log('Theme toggle button found');
  }
  
  // Check which icon is visible initially
  const darkIconVisible = await page.isVisible('.theme-icon-dark');
  const lightIconVisible = await page.isVisible('.theme-icon-light');
  console.log(`Dark icon visible: ${darkIconVisible}`);
  console.log(`Light icon visible: ${lightIconVisible}`);
  
  // Click the theme toggle
  console.log('\nClicking theme toggle...');
  await page.click('.theme-toggle');
  await page.waitForTimeout(500); // Wait for transition
  
  // Check theme after toggle
  const newTheme = await page.getAttribute('html', 'data-theme');
  console.log(`Theme after toggle: ${newTheme}`);
  
  // Get new background color
  const newBgColor = await page.evaluate(() => {
    return window.getComputedStyle(document.body).backgroundColor;
  });
  console.log(`Background color after toggle: ${newBgColor}`);
  
  // Check icon visibility after toggle
  const darkIconVisibleAfter = await page.isVisible('.theme-icon-dark');
  const lightIconVisibleAfter = await page.isVisible('.theme-icon-light');
  console.log(`Dark icon visible after toggle: ${darkIconVisibleAfter}`);
  console.log(`Light icon visible after toggle: ${lightIconVisibleAfter}`);
  
  // Check localStorage
  const savedTheme = await page.evaluate(() => {
    return localStorage.getItem('theme');
  });
  console.log(`Theme saved in localStorage: ${savedTheme}`);
  
  // Test hero headline visibility
  const heroHeadline = await page.$('.hero-headline');
  if (heroHeadline) {
    const headlineColor = await page.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        background: styles.background,
        webkitTextFillColor: styles.webkitTextFillColor,
        color: styles.color
      };
    }, heroHeadline);
    console.log('\nHero headline styles:', headlineColor);
  }
  
  // Summary
  console.log('\n=== TEST SUMMARY ===');
  if (initialTheme === 'dark' || initialTheme === null) {
    console.log('✓ Initial theme is dark');
  } else {
    console.log('✗ Initial theme is not dark');
  }
  
  if (newTheme === 'light') {
    console.log('✓ Theme switches to light');
  } else {
    console.log('✗ Theme does not switch to light');
  }
  
  if (initialBgColor !== newBgColor) {
    console.log('✓ Background color changes');
  } else {
    console.log('✗ Background color does not change');
  }
  
  await browser.close();
})();