import { useRef, useState } from 'react'
import fotoboda from '../assets/fotoboda.jpeg'
import fotoinicio from '../assets/fotoinicio2.jpeg'
import iglesia from '../assets/iglesia.jpg'
import rosas from '../assets/rosas.png'
import musica from '../assets/musica.mp3'
import { Divider } from './Divider'
import { Hero } from './Hero'
import { StoryChapter } from './StoryChapter'
import { useRevealSections } from './useRevealSections'

export function WeddingPage() {
  const containerRef = useRevealSections()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

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

      <section>
        <div className="love-quote">
          <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-left-sm" />
          <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-right-sm" />
          <blockquote>
            &ldquo;El amor es paciente, es bondadoso, no guarda rencor, todo lo
            soporta, todo lo cree, todo lo espera, todo lo puede.&rdquo;
          </blockquote>
          <cite>1 Corintios 13:4–7</cite>
        </div>
      </section>

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

      <section id="padrinos">
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-left-sm" />
        <p className="section-label">Padrinos</p>
        <h2 className="section-title">
          Quienes nos <em>acompañan</em>
        </h2>
        <div className="sponsors-grid">
          <div className="sponsor-card">
            <p className="sponsor-name">Alcides Landívar Somosa</p>
            <p className="sponsor-role">Padrino</p>
          </div>
          <div className="sponsor-card">
            <p className="sponsor-name">Bertha Ardaya Somosa</p>
            <p className="sponsor-role">Madrina (Tía)</p>
          </div>
          <div className="sponsor-card">
            <p className="sponsor-name">Ivana Carolina Justiniano Sandoval</p>
            <p className="sponsor-role">Madrina de Boda Religiosa</p>
          </div>
          <div className="sponsor-card">
            <p className="sponsor-name">José Ernesto Senseve</p>
            <p className="sponsor-role">Padrino de Boda Religiosa</p>
          </div>
        </div>
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-bottom-right-sm" />
      </section>

      <Divider />

      <section id="ceremonia">
        <img src={rosas} alt="rosas decorativas" className="rose-decoration rose-top-right-sm" />
        <p className="section-label">Capítulo final</p>
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
              <p className="ceremony-address">Bolivia</p>
              <span className="ceremony-time">
                Sábado, 18 de Julio de 2026 &nbsp;·&nbsp; 18:00 hrs.
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
            <div className="ceremony-card-inner">
              <p className="ceremony-place">Celebración posterior</p>
              <p className="ceremony-address">Lugar del evento después de la boda</p>
              <span className="ceremony-time">
                Después de la ceremonia
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

      <footer>
        <p className="footer-names">
          <em>Claudia Isela</em> &amp; <em>Juan Carlos</em>
        </p>
        <span className="footer-ornament" />
        <p className="footer-date">18 · Julio · 2026</p>
        <span className="footer-ornament" />
        <p className="footer-small">Con amor eterno</p>
        <span className="footer-ornament" />
        <p className="footer-small">Realizado por: <br/> Nicol y Marcelo</p>
        <a
          className="whatsapp-button"
          href="https://wa.me/59162140456?text=Hola,%20confirmo%20mi%20asistencia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aceptar invitación
        </a>
      </footer>
    </main>
  )
}
