function Layout({children}: {children : React.ReactNode}) {
  return (
    <main>
      <nav>Navegaciond de las categorias</nav>
      {children}
      <footer>Footer de la tienda</footer>
    </main>
  )
}

export default Layout
