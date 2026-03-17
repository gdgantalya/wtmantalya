import './bio.scss'

type bioProps = {
  name: string
  picture: string
  bio: string
  social?: {
    name: string
    url: string
  }[]
}

export default function Bio(props: bioProps) {
  const image = new URL(
    `../../assets/pictures/${props.picture}`,
    import.meta.url
  ).href

  return (
    <div className="bio__container">
      <div className="bio__picture-container">
        <img className="bio__picture" src={image} />
      </div>
      <h2 className="bio__name">{props.name}</h2>
      <p className="bio__description">{props.bio}</p>
      {props.social && (
        <div className="bio__social">
          {props.social?.map((social, index) => {
            return (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bio__social-btn"
              >
                <span>LinkedIn</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
