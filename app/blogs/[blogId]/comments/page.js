import Link from "next/link";

export async function generateMetadata({ params }) {
  const { blogId } = await params;

  return {
    title: `Blog ${blogId}`
  }
}

export default async function BlogComments({ params }) {

  const { blogId } = await params;
    return (
      <>
        <h1>Blog All Comments</h1>
        <p><Link href="/">Home</Link></p>
        <p><Link href="/blogs">Blogs</Link></p>
        <p>Blog Id - {blogId}</p>
        <p>All Comments</p>
      </>
    );
}
