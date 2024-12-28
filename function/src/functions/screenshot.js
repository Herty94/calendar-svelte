const { app } = require("@azure/functions");

const playwright = require("playwright-chromium");

app.http("screenshot", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    // context.log(`Http function processed request for url "${request.url}"`);

    // const name = request.query.get('name') || await request.text() || 'world';

    // return { body: `Hello, ${name}!` };

    try {
      // Launch Puppeteer browser
      const browser = await playwright.chromium.launch({
        executablePath:".\\chromium_headless_shell\\chrome-win\\headless_shell.exe"
      });
      const page = await browser.newPage();

      // Set viewport width and height
      await page.setViewportSize({ width: 480, height: 800 });

      // Navigate to the URL
      try {
        await page.goto("https://white-tree-09a2dcd03.4.azurestaticapps.net/", {
          waitUntil: "networkidle",
        });
      } catch (error) {
        return {
          status:500,
          body:"Error occurred while connecting to webpage: "+error
        }
      }

      // Take a screenshot of the page
      const imageBuffer = await page.screenshot({
        type:'jpeg'
      });
      // Close the browser
      await browser.close();

      // Set the response type to image/png and send the screenshot
      return {
        status: 200,
        headers: {
          'Content-Type': 'image/jpeg',
        },
        body: imageBuffer,
        isRaw: true, // Ensure the response is sent as raw binary
      };
 
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      return {
        status:500,
        body:"An error occurred while capturing the screenshot. "+error
      }
    }
  },
});
