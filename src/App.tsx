import { Analytics } from '@vercel/analytics/react'
import { WeddingPage } from './wedding/WeddingPage'

function App() {
  return (
    <>
      <WeddingPage />
      <Analytics />
    </>
  )
}

export default App
