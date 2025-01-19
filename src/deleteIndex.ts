import pinecone from './pinecone';

async function deleteIndex() {
  const indexName = 'my-first-index';

  try {
    await pinecone.deleteIndex(indexName);
    console.log(`Index "${indexName}" deleted successfully.`);
  } catch (error) {
    console.error('Error deleting index:', error);
  }
}

deleteIndex();