const { app } = require('@azure/functions')
const YouVersion = require('@glowstudent/youversion')

app.http('verseofday', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    try {
      content = await YouVersion.getVerseOfTheDay('sk')
      return { body: JSON.stringify(content) }
    } catch (error) {
      return { status: 500, body: error }
    }
  }
})
