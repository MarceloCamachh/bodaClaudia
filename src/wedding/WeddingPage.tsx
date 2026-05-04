import { useEffect, useRef, useState } from 'react'
import fotoboda from '../assets/fotoboda.jpeg'
import fotoinicio from '../assets/fotoinicio2.jpeg'
import iglesia from '../assets/iglesia.jpg'
import rosas from '../assets/rosas.png'
import brindis from '../assets/BRINDIS.png'
import traje from '../assets/traje.png'
import musica from '../assets/musica.mp3'
import { Divider } from './Divider'
import { Hero } from './Hero'
import { StoryChapter } from './StoryChapter'
import { useRevealSections } from './useRevealSections'
import WeddingTimeline from './WeddingTimeLine'

export function WeddingPage() {
  const containerRef = useRevealSections()
  const [isPlaying, setIsPlaying] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const weddingDate = new Date('2026-07-18T18:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const totalSeconds = Math.floor(diff / 1000)
      setCountdown({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      })
    }

    updateCountdown()
    const timerId = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(timerId)
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <main
      ref={containerRef}
      className="min-h-svh w-full bg-[var(--white)] text-[var(--text)]"
    >
      <Hero heroImage={fotoinicio} />

      <Divider />

      <StoryChapter
        imageSrc={fotoboda}
        imageAlt="Claudia Isela y Juan Carlos, retrato de boda"
      />

      <Divider />

      <section id="musica" className="music-section">
        <p className="section-label">Escucha</p>
        <h2 className="section-title">Escucha nuestra canción</h2>
        <div className="music-card music-card--split">
          <div className="music-card-copy">
            <p className="music-description">Dale Play para escuchar</p>
            <p className="music-note">Una canción para el recuerdo en nuestra boda.</p>
          </div>
          <button type="button" className="music-play-button" onClick={toggleMusic}>
            <span className="music-play-icon" aria-hidden="true">
              {isPlaying ? '❚❚' : '▶'}
            </span>
            <span>{isPlaying ? 'Pausar canción' : 'Reproducir canción'}</span>
          </button>
        </div>
        <audio
          ref={audioRef}
          src={musica}
          onEnded={() => setIsPlaying(false)}
          preload="metadata"
          className="music-player"
        />
      </section>

      <Divider />

      <section>
        
          <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-left-sm" />
          <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-right-sm" />
        <div className="love-quote">
          <blockquote>
            &ldquo;El amor es paciente, es bondadoso, no guarda rencor, todo lo
            soporta, todo lo cree, todo lo espera, todo lo puede.&rdquo;
          </blockquote>
          <cite>1 Corintios 13:4–7</cite>
        </div>
      </section>

      <Divider />

      <section id="padrinos">
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-left-sm" />
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-right-sm" />
        <h2 className="section-title">
          Quienes nos <em>acompañan</em>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '3rem', textAlign: 'center' }}>
          <div>
            <p className="sponsor-card-label" style={{ marginBottom: '1rem' }}>Padres de la novia</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="sponsor-name">Freddy Raúl Oliveira Flores</p>
              <p className="sponsor-name">María Lourdes Justiniano Suárez</p>
            </div>
          </div>
          <div>
            <p className="sponsor-card-label" style={{ marginBottom: '1rem' }}>Padres del novio</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="sponsor-name">Alcides Landívar Somosa</p>
              <p className="sponsor-name">Bertha Ardaya Somosa</p>
            </div>
          </div>
          <div>
            <p className="sponsor-card-label" style={{ marginBottom: '1rem' }}>Padrinos</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="sponsor-name">Ivana Carolina Justiniano Sandoval</p>
              <p className="sponsor-name">José Ernesto Senseve</p>
            </div>
          </div>
        </div>
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-bottom-right-sm" />
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-bottom-left-sm" />
      </section>

      <Divider />

      <section id="countdown" className="countdown-section">
        <p className="section-label">Cuenta regresiva</p>
        <h2 className="section-title">Faltan para nuestra boda</h2>
        <div className="countdown-card">
          <div className="countdown-timer">
            <div className="countdown-unit">
              <span className="countdown-number">{String(countdown.days).padStart(2, '0')}</span>
              <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{String(countdown.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Minutos</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{String(countdown.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Segundos</span>
            </div>
          </div>
        </div>
      </section>

      <Divider />
      
      <section id="instrucciones" className="instructions-section">
        
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-left-sm" />
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-right-sm" />
        <p className="section-label">Atuendo</p>
        <h2 className="section-title">Instrucciones importantes</h2>
        <div className="instructions-grid">
          <div className="instruction-card">
            <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', width: '68px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-dark, #a37536)', zIndex: 2 }}>
              <div style={{
                width: '30px',
                height: '30px',
                backgroundColor: 'currentColor',
                WebkitMaskImage: `url(${traje})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url(${traje})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }} />
            </div>
            <p className="instruction-title">Vestimenta formal</p>
            <p className="instruction-text">Nos encantará que nos acompañes con un atuendo elegante acorde a la ocasión.</p>
          </div>
          <div className="instruction-card">
            <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', width: '68px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-dark, #a37536)', zIndex: 2 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.6 0-.4-.1-.8-.3-1.1-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h1.4c2.8 0 5.1-2.3 5.1-5.1C21.2 6.3 17.1 2 12 2Z"/></svg>
            </div>
            <p className="instruction-title">Evitar el color blanco</p>
            <p className="instruction-text">Agradecemos reservar el blanco para los novios en este día tan especial.</p>
          </div>
          <div className="instruction-card">
            <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', width: '68px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-dark, #a37536)', zIndex: 2 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <p className="instruction-title">Evento para adultos</p>
            <p className="instruction-text">Con mucho cariño, hemos organizado la ceremonia y recepción como un espacio para adultos. Gracias por tu comprensión.</p>
          </div>
        </div>
      </section>

      <Divider />

      <section id="ceremonia">
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-right-sm" />
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-left-sm" />
        <h2 className="section-title">Ubicaciones del día</h2>

        <div className="ceremony-grid">
          <div className="ceremony-card ceremony-card--photo">
            <img
              className="ceremony-photo"
              src={iglesia}
              alt="Fachada de la Iglesia San Martín de Porres"
            />
            <div className="ceremony-card-inner">
              <p className="ceremony-place">Iglesia San Martín de Porres</p>
              <span className="ceremony-time">
                18:00 hrs.
              </span>
              <a
                className="ceremony-map-link"
                href="https://maps.app.goo.gl/McfBmV1m7bENbD4q7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar en Google Maps
              </a>
            </div>
          </div>

          <div className="ceremony-card ceremony-card--event">
            <img
              className="ceremony-photo"
              src={brindis}
              alt="Brindis de celebración"
            />
            <div className="ceremony-card-inner">
              <p className="ceremony-place">Lugar del evento después de la ceremonia</p>
              <span className="ceremony-time">
               19:30 hrs.
              </span>
              <a
                className="ceremony-map-link"
                href="https://maps.app.goo.gl/3sNLk3stVNkqAaDb6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar al evento
              </a>
            </div>
          </div>
        </div>
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-bottom-left-sm" />
      </section>

      <Divider />
      <WeddingTimeline />
      <footer>
        <p className="footer-names">
          <em>! Te esperamos ¡</em>
        </p>
        <span className="footer-ornament" />
        <p className="footer-date">18 · Julio · 2026</p>
        <span className="footer-ornament" />
        <p className="footer-small">Con amor</p>
        <span className="footer-ornament" />
        <p style={{ fontFamily: '"Mea Culpa", cursive', fontSize: 'clamp(3rem, 6vw, 4rem)', color: 'var(--gold-dark, #a37536)', margin: '1.5rem 0 0.5rem', fontWeight: 100, lineHeight: 1 }}>Confirmar asistencia</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
          <a
            className="whatsapp-button"
            style={{ marginTop: 0, width: '100%', maxWidth: '320px' }}
            href="https://wa.me/59175073422?text=Hola Claudia,%20confirmo%20mi%20asistencia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar invitados de la novia
          </a>
          <a
            className="whatsapp-button"
            style={{ marginTop: 0, width: '100%', maxWidth: '320px' }}
            href="https://wa.me/59176082787?text=Hola Juan Carlos,%20confirmo%20mi%20asistencia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar invitados del novio
          </a>
        </div>
        <p className="footer-small"><br/> Realizado por: <br/> Nicol y Marcelo</p>

      </footer>
    </main>
  )
}
