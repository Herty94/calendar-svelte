const express = require('express')
const puppeteer = require('puppeteer')

const app = express()
const PORT = process.env.PORT || 3000

// Endpoint to capture screenshot and return as an image
app.get('/screenshot', async (req, res) => {
  // Get the URL to capture from the query parameter
  // const url = req.query.url
  // if (!url) {
  //   return res.status(400).send('Please provide a URL as a query parameter.')
  // }

  try {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Set viewport width and height
    await page.setViewport({ width: 480, height: 800 })

    // Navigate to the URL
    await page.goto('http://localhost:5173/', {
      waitUntil: 'networkidle2'
    })

    // Take a screenshot of the page
    await page.screenshot({
      path: 'test.jpg'
    })
    // Close the browser
    await browser.close()

    // Set the response type to image/png and send the screenshot
    res.setHeader('Content-Type', 'image/jpeg')
    res.sendFile('D:\\David\\Experimenty\\svelte\\calendar\\backend\\test.jpg')
  } catch (error) {
    console.error('Error capturing screenshot:', error)
    res.status(500).send('An error occurred while capturing the screenshot.')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
