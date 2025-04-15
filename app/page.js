import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to NEXT</h1>

      <div>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/services">Services - Nested Routing</Link></p>
        <p><Link href="/blogs">Blog - Dynamic / Nested Dynamic Routing</Link></p>
        <p><Link href="/static-files/a/b/c/d/e">FilePath - Catch All Routes</Link></p>
        <p><Link href="/static-files2">FilePath - Optinal Catch All Routes</Link></p>
        <p><Link href="/not-found-page">Common Not Found Page</Link></p>
        <p><Link href="/services/abc123">Specific Not Found Page</Link></p>
      </div>
    </>
  );
}
