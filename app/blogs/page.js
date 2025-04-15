import Link from "next/link";

export const metadata = {
  title: 'Blog'
}

export default function Blogs() {
  return (
    <>
      <h1>Blogs Page</h1>
      <Link href="/">home</Link>
      <h4>Dynamic Routing</h4>
      <p><Link href="/blogs/101">Blog 101 - Dynamic Routing</Link></p>
      <p><Link href="/blogs/102">Blog 102 - Dynamic Routing</Link></p>

      <h4>Nested Dynamic Routing</h4>

      <p><Link href="/blogs/101/comments">Blog 101 Comments- Nested Dynamic Routing</Link></p>
      <p><Link href="/blogs/102/comments">Blog 102 Comments- Nested Dynamic Routing</Link></p>
    </>
  );
}
