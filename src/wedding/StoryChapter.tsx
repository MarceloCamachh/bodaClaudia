type StoryChapterProps = {
  imageSrc: string
  imageAlt: string
}

export function StoryChapter({ imageSrc, imageAlt }: StoryChapterProps) {
  return (
    <section id="story" className="story-beat" aria-labelledby="story-heading">
      <figure className="story-visual">
        <img src={imageSrc} alt={imageAlt} />
        <figcaption className="story-caption">
          El instante en que el tiempo se detuvo
        </figcaption>
      </figure>
      <div className="story-copy">
        <p className="section-label">Capítulo I</p>
        <h2 id="story-heading" className="section-title">
          Cuando el amor <em>llegó sin avisar</em>
        </h2>
        <div className="story-text">
          <p className="dropcap">
            Hay encuentros que el destino teje con paciencia, como si el universo
            entero conspirara para que dos almas se reconozcan en el momento
            exacto. Así comenzó nuestra historia: sin prisa, sin guión, solo con
            la certeza de que algo extraordinario acababa de empezar.
          </p>
          <p>
            Desde aquella primera conversación, el tiempo tomó otro ritmo. Las
            horas se volvieron cómplices, los días se llenaron de risas y los
            silencios —esos silencios que solo los enamorados comprenden— se
            convirtieron en el idioma secreto de dos corazones que latían al
            mismo tiempo.
          </p>
        </div>
      </div>
    </section>
  )
}
