// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('LaceUp backend is running!');
// });

// app.get('/api/test', (req, res) => {
//   res.json({ message: "Hello from backend 👋" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRoute from './routes/productsRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error');
    console.error(err.message);
  });

app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
  res.send('LaceUp backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
