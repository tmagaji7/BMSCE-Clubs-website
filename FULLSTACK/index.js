const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path'); // Added for serving static files

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/loginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('users', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: false }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/login', async (req, res) => {
  const { email1, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      // Redirect to the link page (replace with your desired route)
      res.redirect('http://localhost:3000/link.html');

    } else {
      // Show an alert for incorrect credentials
      res.status(401).send('Email or password is incorrect');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
