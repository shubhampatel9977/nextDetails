// import "./globals.css";

// export const metadata = {
//   title: 'NEXT Details'
// }

export const metadata = {
  title: {
    template: "%s | NEXT Details",
    default: "NEXT Details"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "teal"}}>Header</header>
        {children}
        <footer style={{ background: "brown"}}>footer</footer>
      </body>
    </html>
  );
}
