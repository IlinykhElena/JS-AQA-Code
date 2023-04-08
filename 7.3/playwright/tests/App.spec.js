const { test, expect } = require("@playwright/test");
const user = require("./user.js");
test.setTimeout(60000);

test.beforeEach(async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
});

test("sucsessful login", async ({ page }) => {
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(user.password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
});

test("login with false password", async ({ page }) => {
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill("wrong password");
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
});
