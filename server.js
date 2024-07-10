const express = require('express');
const markdownIt = require('markdown-it');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());  

// Configure markdown-it
const md = markdownIt();

app.post('/api/convert', (req, res) => {
  const markdownText = req.body.markdown;

  if (!markdownText) {
    return res.status(400).json({ error: 'Markdown text is required' });
  }

  // Convert Markdown to HTML using markdown-it
  const html = md.render(markdownText);

  res.json({ html });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
