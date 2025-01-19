import express from 'express';
import bodyParser from 'body-parser';
import pinecone from './pinecone';
import dotenv from 'dotenv';
import { generateEmbedding } from './generateEmbedding';
import { Request, Response } from 'express';

// Load environment variables
dotenv.config();


const app = express();
app.use(bodyParser.json());

const port = 3000;

app.post('/store-text', async (req: Request, res: Response): Promise<void> => {
  const { text, id } = req.body;

  if (!text || !id) {
    res.status(400).json({ error: 'Text and ID are required.' });
    return;
  }

  try {
    // Generate embedding
    const embedding = await generateEmbedding(text);

    // Store in Pinecone
    const indexName = 'my-first-index';
    const index = pinecone.index(indexName);

    await index.upsert([
      {
        id,
        values: embedding,
        metadata: { text },
      },
    ]);

    res.status(200).json({ message: 'Text stored successfully.' });
  } catch (error) {
    console.error('Error storing text:', error);
    res.status(500).json({ error: 'Failed to store text.' });
  }
});


// generateEmbedding("This is me");

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});