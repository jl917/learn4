import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from '~/post';

export const loader = () => {
  return getPosts();
}

export default function Index () {
  const posts = useLoaderData<Post[]>();
  console.log(posts);
  return (
    <div>
      <h1>posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
