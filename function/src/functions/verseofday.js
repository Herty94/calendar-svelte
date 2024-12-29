const { app } = require("@azure/functions");
const YouVersion = require("@glowstudent/youversion");

app.http("verseofday", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    content = await YouVersion.getVerseOfTheDay("sk");
    return { body: JSON.stringify(content) };
  },
});
