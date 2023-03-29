let page;

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 60000);
});

test("Learn more about GitHub Enterprise", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise");
  const btnSelector = ".btn-mktg.mr-2.mt-2";
  await page.waitForSelector(btnSelector, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector, (link) => link.textContent);
  expect(actual).toContain("Start a free trial");
}, 60000);

test("Learn more about GitHub Enterprise", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise");
  const btnSelector = ".btn-mktg.mr-2.mt-2";
  await page.waitForSelector(btnSelector, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector, (link) => link.textContent);
  expect(actual).toContain("Start a free trial");
}, 60000);

test("Forum March 29, 2023", async () => {
  page = await browser.newPage();
  await page.goto(
    "https://galaxy.github.com/session/day-1-remove-developer-roadblocks-and-streamline-productivity-with-github"
  );
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual(
    "Remove developer roadblocks and streamline productivity with GitHub - GitHub Galaxy 2023"
  );
}, 60000);
