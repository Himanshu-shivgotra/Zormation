import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'c8ln7xdv',
  dataset: 'production',
  apiVersion: '2023-08-21', // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;