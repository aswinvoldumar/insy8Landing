import Container from '../ui/Container.jsx'
import Logo from '../ui/Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-zinc-500">
          <span>© 2026 Bizintellis.</span>
          <Logo className="text-sm" />
        </p>
      </Container>
    </footer>
  )
}
