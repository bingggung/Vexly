const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());

const CJ_API_KEY = 'YOUR_CJ_API_KEY';
const CJ_API_SECRET = 'YOUR_CJ_API_SECRET';

app.get('/products', async (req, res) => {
  try {
    const response = await fetch(`https://developers.cjdropshipping.com/api2.0/product/list?pageSize=10&page=1&apiKey=${CJ_API_KEY}&sign=${CJ_API_SECRET}`);
    const data = await response.json();
    const products = data.data.map(item => ({
      name: item.pName,
      price: item.sPrice,
      image: item.imageList[0],
      link: item.productUrl
    }));
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch CJ products' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
