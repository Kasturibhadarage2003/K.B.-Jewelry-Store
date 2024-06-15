const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/js', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define a simple schema and model
const itemSchema = new mongoose.Schema({
  name: String
});
const Item = mongoose.model('Item', itemSchema);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Route to fetch data from MongoDB
app.get('/data', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
