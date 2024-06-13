import { test, expect } from '@playwright/test';

test.describe('First Test Case with help Playwright', ()=> {
    test('Search testing', async ({ page }) => {
        await page.goto('http://localhost:3000/');
          
        await page.getByRole('searchbox', { name: 'Search' }).click();
        expect(await page.getByRole('searchbox', { name: 'Search' }).isVisible()).toBe(true);
        
        await page.getByRole('searchbox', { name: 'Search' }).fill('Search value');
        expect(await page.getByRole('searchbox', { name: 'Search' }).inputValue()).toBe('Search value');
      });
})