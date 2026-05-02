type StoryChapterProps = {
  imageSrc: string
  imageAlt: string
}

export function StoryChapter({ imageSrc, imageAlt }: StoryChapterProps) {
  return (
    <section id="story" className="story-beat" aria-labelledby="story-heading">
      <div className="story-copy">
        <p className="section-label">Con la bendición de Dios y Nuestros padres</p>
        <h2 id="story-heading" className="section-title">
          ! Nos vamos a <em>casar ¡</em>
        </h2>
        <div className="story-text">
          <p>
            Te invitamos a celebrar con nosotros este día tan importante.
            Encuentra aquí los detalles de la ceremonia y de la fiesta posterior,
            para que puedas acompañarnos desde el primer momento.
          </p>
        </div>
      </div>
      <figure className="story-visual">
        <div className="story-image-frame">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="couple-names">
          <p><em>Claudia Isela</em> &amp; <em>Juan Carlos</em></p>
        </div>
      </figure>
    </section>
  )
}
