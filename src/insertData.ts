import pinecone from './pinecone';

async function insertData() {
  const indexName = 'my-first-index';
  const index = pinecone.index(indexName);

  const vectors = [
    {
      id: 'vec1',
      values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8], // Example vector
      metadata: { category: 'example', type: 'test' },
    },
    {
      id: 'vec2',
      values: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      metadata: { category: 'example', type: 'test' },
    },
  ];

  try {
    await index.upsert(vectors);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertData();