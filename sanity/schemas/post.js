// schemas/post.js

export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }], // This allows for rich text content
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }], // Reference the author schema
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
      // Add more fields like categories, tags, featured image, etc.
    ],
  };
  