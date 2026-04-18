import fotoboda from '../assets/fotoboda.jpg'
import iglesia from '../assets/iglesia.jpg'
import { Divider } from './Divider'
import { Hero } from './Hero'
import { StoryChapter } from './StoryChapter'
import { useRevealSections } from './useRevealSections'

export function WeddingPage() {
  const containerRef = useRevealSections()

  return (
    <main
      ref={containerRef}
      className="min-h-svh w-full bg-[var(--white)] text-[var(--text)]"
    >
      <Hero heroImage={fotoboda} />

      <StoryChapter
        imageSrc={fotoboda}
        imageAlt="Claudia Isela y Juan Carlos, retrato de boda"
      />

      <Divider />

      <section className="story-standalone">
        <p className="section-label">Entreacto</p>
        <h2 className="section-title">
          Dos caminos que se volvieron <em>uno solo</em>
        </h2>
        <div className="story-text">
          <p>
            Cada paso compartido fue una página más de este relato. Aprendimos a
            escucharnos, a reírnos de lo mismo y a encontrarnos en los pequeños
            gestos: un café al amanecer, una mano en la mesa, un hogar que se
            fue llenando de sueños comunes.
          </p>
          <p>
            La foto que viste al inicio no es solo un retrato: es la promesa de
            seguir escribiendo juntos lo que viene, con la misma mirada y el
            mismo sí.
          </p>
        </div>
      </section>

      <Divider />

      <section>
        <div className="love-quote">
          <blockquote>
            &ldquo;El amor es paciente, es bondadoso, no guarda rencor, todo lo
            soporta, todo lo cree, todo lo espera, todo lo puede.&rdquo;
          </blockquote>
          <cite>1 Corintios 13:4–7</cite>
        </div>
      </section>

      <Divider />

      <section id="ceremonia">
        <p className="section-label">Capítulo final</p>
        <h2 className="section-title">
          El día que <em>dijimos sí</em>
        </h2>
        <div className="story-text mb-12">
          <p>
            Bajo la mirada de Dios y de quienes más amamos, en ese espacio
            sagrado donde el tiempo se detiene, prometemos amarnos, respetarnos y
            crecer juntos. Hoy la historia comienza su capítulo más hermoso.
          </p>
        </div>
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
      </footer>
    </main>
  )
}
