import pinecone from './pinecone';

async function createIndex() {
  const indexName = 'my-first-index';
  const dimension = 1024; // Example dimension for OpenAI embeddings

  try {
    await pinecone.createIndex({
      name: indexName,
      dimension,
      metric: 'cosine', // Default metric for similarity search
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-east-1',
        },
      },
    });
    console.log(`Index "${indexName}" created successfully.`);
  } catch (error) {
    console.error('Error creating index:', error);
  }
}

createIndex();