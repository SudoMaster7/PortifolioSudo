import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col justify-center py-20">
      <p className="mono text-xs text-gold">leo@sudo:~$ cd /pagina-inexistente</p>
      <h1 className="mt-6 text-4xl sm:text-5xl">404</h1>
      <p className="mt-4 text-muted">
        Essa página não existe. / This page does not exist.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/pt"
          className="mono rounded-md bg-gold px-5 py-2.5 text-xs font-medium text-bg hover:opacity-90"
        >
          Início
        </Link>
        <Link
          href="/en"
          className="mono rounded-md border border-line px-5 py-2.5 text-xs hover:border-gold hover:text-gold"
        >
          Home (EN)
        </Link>
      </div>
    </div>
  );
}
