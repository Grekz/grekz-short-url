import { shortUrl } from "./_actions/actions"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ire.mx - Tu acortador de urls</h1>
      <form action={shortUrl}>
        <input name="link" className="text-black" />
        <button type="submit">Acortar!</button>
      </form>
    </main>
  )
}
