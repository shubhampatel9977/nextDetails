import Link from "next/link";

export default function services() {
    return (
      <>
        <h1>Services Page</h1>
        <Link href="/">home</Link>

        <div>
          <p><Link href="/services/app-dev">App Development</Link></p>
          <p><Link href="/services/seo">SEO Development</Link></p>
          <p><Link href="/services/web-dev">Web Development</Link></p>
        </div>
      </>
    );
  }