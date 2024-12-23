const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Teslup Backend Server');
});


//s


// Step 2. retrieve user authentication, (everytime? only during expiry or after login.)
// Step 3.  retrieve vehicle VIN 
app.get('/api/tesla/vehicles', async (req, res) => {
  try {
    // You'll need to implement proper authentication here
    const teslaApiResponse = await axios.get('https://fleet-api.prd.na.vn.cloud.tesla.com/api/1/vehicles', {
      headers: {
        'Authorization': `Bearer ${process.env.BEARER}`
      }
    });
    res.json(teslaApiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Tesla API' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
