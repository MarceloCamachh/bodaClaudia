import { useEffect, useRef, useState } from 'react'
import fotoboda from '../assets/fotoboda.jpeg'
import fotoinicio from '../assets/fotoinicio2.jpeg'
import iglesia from '../assets/iglesia.jpg'
import rosas from '../assets/rosas.png'
import brindis from '../assets/BRINDIS.png'
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
        <p className="section-label">Padrinos</p>
        <h2 className="section-title">
          Quienes nos <em>acompañan</em>
        </h2>
        <div className="sponsors-grid">
          <div className="sponsor-card">
            <p className="sponsor-card-label">Padres de la novia</p>
            <div className="sponsor-group">
              <div className="sponsor-person">
                <p className="sponsor-name">Freddy Raúl Oliveira Flores</p>
                <p className="sponsor-role">Padre de la novia</p>
              </div>
              <div className="sponsor-person">
                <p className="sponsor-name">María Lourdes Justiniano Suárez</p>
                <p className="sponsor-role">Madre de la novia</p>
              </div>
            </div>
          </div>
          <div className="sponsor-card">
            <p className="sponsor-card-label">Padres del novio</p>
            <div className="sponsor-group">
              <div className="sponsor-person">
                <p className="sponsor-name">Alcides Landívar Somosa</p>
                <p className="sponsor-role">Padre del novio</p>
              </div>
              <div className="sponsor-person">
                <p className="sponsor-name">Bertha Ardaya Somosa</p>
                <p className="sponsor-role">Madre del novio</p>
              </div>
            </div>
          </div>
          <div className="sponsor-card">
            <p className="sponsor-card-label">Padrinos</p>
            <div className="sponsor-group">
              <div className="sponsor-person">
                <p className="sponsor-name">Ivana Carolina Justiniano Sandoval</p>
                <p className="sponsor-role">Madrina de Boda Religiosa</p>
              </div>
              <div className="sponsor-person">
                <p className="sponsor-name">José Ernesto Senseve</p>
                <p className="sponsor-role">Padrino de Boda Religiosa</p>
              </div>
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
            <p className="instruction-title">Vestimenta formal</p>
            <p className="instruction-text">Por favor, ven con ropa elegante acorde a la celebración.</p>
          </div>
          <div className="instruction-card">
            <p className="instruction-title">No ir de blanco</p>
            <p className="instruction-text">Reservamos el blanco para los novios.</p>
          </div>
          <div className="instruction-card">
            <p className="instruction-title">No llevar niños</p>
            <p className="instruction-text">La ceremonia y recepción son para adultos, gracias por comprender.</p>
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
        <a
          className="whatsapp-button"
          href="https://wa.me/59175073422?text=Hola,%20confirmo%20mi%20asistencia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirmar Asistencia
        </a>
        <p className="footer-small"><br/> Realizado por: <br/> Nicol y Marcelo</p>

      </footer>
    </main>
  )
}
