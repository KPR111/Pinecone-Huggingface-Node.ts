import { pipeline } from '@xenova/transformers';

export const generateEmbedding = async (text: string): Promise<number[]> => {
  try {
    const modelName = 'mixedbread-ai/mxbai-embed-large-v1';
    // console.log("first")
    const extractor = await pipeline('feature-extraction', modelName, {
        quantized:false
    });
    console.log("Model loaded successfully");

    const output = await extractor(text, { pooling: 'mean', normalize: true });
    console.log('Output tensor:', output);

    return output.tolist();
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error('Failed to generate embedding.');
  }
};

// Test the function
// generateEmbedding("This is me")
//   .then((embedding) => {
//     console.log('Generated embedding:', embedding);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });