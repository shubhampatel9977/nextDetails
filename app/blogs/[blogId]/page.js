export default async function DynamicBlog({ params }) {

  const { blogId } = await params;
    return (
      <>
        <h1>Dynamic Blog</h1>
        <p>Blog Id - {blogId}</p>
      </>
    );
  }