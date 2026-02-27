import './sectionTitle.scss'

type sectionTitleProps = {
  text: string
  direction: 'right' | 'left'
  style: 'blue' | 'pink' | 'green'
  assetName: string //relative to the /assets/illustrations path without the extension
}

export default function sectionTitle(props: sectionTitleProps) {
  const image = new URL(
    `../../assets/illustrations/${props.assetName}.svg`,
    import.meta.url
  ).href

  return (
    <div className={`title title--${props.direction} title--${props.style}`}>
      <div className="title__background">
        <img className="title__img" src={image} />
        <h2 className="title__text">{props.text}</h2>
      </div>
    </div>
  )
}
