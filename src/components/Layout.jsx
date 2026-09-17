function Layout({ children }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>🐱 댄싱 캣</h1>
        <p>버튼을 눌러 고양이의 춤을 시작하거나 멈춰보세요</p>
      </header>
      <main className="page-main">{children}</main>
      <footer className="page-footer">
        <p>Made with React + CSS Animation</p>
      </footer>
    </div>
  )
}

export default Layout
