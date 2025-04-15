export const metadata = {
  title: 'Service Child'
}

export default function ServiceLayout({ children }) {
    return (
      <>
        <header style={{ background: "yellow"}}>ServiceLayout</header>
        {children}
      </>
    );
  }