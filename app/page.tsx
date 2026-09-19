export default function Page() {
  return (
    <main style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <iframe
        src="https://kiwigames.fun"
        title="Kiwi Games"
        style={{ border: 0, display: 'block', height: '100%', width: '100%' }}
        allow="fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </main>
  )
}

