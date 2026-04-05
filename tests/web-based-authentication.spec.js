import { test } from '@playwright/test';

test('Bypass authentication by embedding the credentials in the URL', async ({ page }) => {

    // https://username:password@practice.cydeo.com/basic_auth
    await page.goto("https://admin:admin@the-internet-5chk.onrender.com/basic_auth");

    await page.waitForTimeout(3000);

  
});


test('Bypass authentication by encoding the credentials in base64 format', async ({ page }) => {

  // Encode credentials in base64
  const encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString('base64');

  // Set the Authorization header
  await page.setExtraHTTPHeaders({
    'Authorization': `Basic ${encodedCredential}`
  });

  // Navigate to the protected page
  await page.goto('https://the-internet-5chk.onrender.com/basic_auth');

  // Wait for 3 seconds
  await page.waitForTimeout(3000);

});