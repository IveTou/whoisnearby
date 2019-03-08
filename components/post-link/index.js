import Link from 'next/link'

const PostLink = (props) => (
  <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
    <a>{props.name}</a>
  </Link>
);

export default PostLink;