type StoryChapterProps = {
  imageSrc: string
  imageAlt: string
}

export function StoryChapter({ imageSrc, imageAlt }: StoryChapterProps) {
  return (
    <section id="story" className="story-beat" aria-labelledby="story-heading">
      <div className="story-copy">
        <h2 id="story-heading" className="section-title">
          Nos <em>casamos</em>
        </h2>
      </div>
      <figure className="story-visual">
        <img src={imageSrc} alt={imageAlt} />
        <figcaption className="story-caption">
          El instante en que el tiempo se detuvo
        </figcaption>
        <div className="couple-names">
          <p><em>Claudia Isela</em> &amp; <em>Juan Carlos</em></p>
        </div>
      </figure>
    </section>
  )
}
