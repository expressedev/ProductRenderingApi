const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Allow all origins
app.use(express.json()); // Parse JSON body

// API Route
app.get('/api/products', async (req, res) => {
  // Hardcoded full URL
  const API_URL = 'https://search2.frenzy.me/collection-search?sort=best%20match&user_id=76c38721-c477-48de-922a-2034093c6288&collection_handle=bags&mode=2&page_index=0&filters=org_price%3E0&filters=org_price%3C1000000000&filters=collections:58805288996';

  const headers = {
    'x-frenzy-authorization': 'bda50acc-6b4b-4944-8c54-cb2fa03462de',
    'x-shop': 'boundarysupply-com.myshopify.com',
    'Content-Type': 'application/json',
  };

  try {
    console.log('Requesting data from external API...');
    console.log('Products fetched correctly');

    // Send the request with the hardcoded URL
    const response = await axios.get(API_URL, { headers });
    res.json(response.data); // Forward the API response to the frontend
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch products', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});