import { IBlog } from '@/types';
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;
const token = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN; // Add your token here

export const getBlogs = async () => {
  const client = new GraphQLClient(graphqlAPI, {
    headers: {
      Authorization: `Bearer ${token}`, // Pass the token here
    },
  });

  const query = gql`
    query MyQuery {
      blogs {
        title
        createdAt
        author {
          name
          image {
            url
          }
        }
        category {
          name
          slug
        }
        description
        tag {
          name
          slug
        }
        image {
          url
        }
        content {
          html
        }
      }
    }
  `;

  const { blogs } = await client.request<{ blogs: IBlog[] }>(query);
  return blogs;
};
