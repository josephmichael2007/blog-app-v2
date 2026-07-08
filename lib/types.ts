export interface Post {
  id: string;
  title?: string;
  body?: string;
  content?: string;
  author?: string;
  createdAt?: string;
  avatar?: string;
  image?: string;
}

export function getTitle(post: Post): string {
  return post.title || `Untitled post #${post.id}`;
}

export function getBody(post: Post): string {
  return (
    post.body ||
    post.content ||
    'No content yet — add a "body" field to your mockapi schema.'
  );
}

export function getAuthor(post: Post): string {
  return post.author || 'Unknown author';
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
