export default function AdminLayout({ children }) {
    return (
        <>
          <header style={{ background: "yellow"}}>Admin Header</header>
            {children}
          <footer style={{ background: "red"}}>Admin footer</footer>
        </>
    );
  }