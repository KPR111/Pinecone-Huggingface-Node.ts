import pinecone from './pinecone';

async function queryData() {
  const indexName = 'my-first-index';
  const index = pinecone.index(indexName);

  const queryVector = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]; // Example query vector

  try {
    const results = await index.query({
      vector: queryVector,
      topK: 2, // Number of results to return
      includeMetadata: true,
    });
    console.log('Query results:', results);
  } catch (error) {
    console.error('Error querying data:', error);
  }
}

queryData();