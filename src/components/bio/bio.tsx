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
        <div>
          {props.social?.map((social, index) => {
            const socialLogo = new URL(
              `../../assets/social/${social.name}.svg`,
              import.meta.url
            ).href

            return (
              <a href={social.url} target="blank" key={index}>
                <img src={socialLogo} className="bio__social-logo" />
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
