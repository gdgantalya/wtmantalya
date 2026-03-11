import SectionTitle from '../../components/sectionTitle/sectionTitle'
import Cta from '../../components/cta/cta'
import supporters from '../../assets/data/supporters.tsx'
import './supporters.scss'

export default function Supporters() {
  return (
    <section className="supporters" id="supporters">
      <div className="supporters__container">
        <div className="supporters__title-container">
          <SectionTitle
            text="Sponsorlar"
            direction="right"
            style="green"
            assetName="badge"
          />
        </div>
        <ul className="supporters__list">
          {supporters.map(
            (
              element: { name: string; logo: string; url: string },
              index: number
            ) => {
              const image = new URL(
                `../../assets/logos-supporters/${element.logo}.png`,
                import.meta.url
              ).href

              return (
                <li key={index}>
                  <a href={element.url} target="blank">
                    <div className="supporters__card-inner">
                      <img src={image} alt={`${element.name} logo`} />
                    </div>
                    {/* <span className="supporters__card-name"></span> */}
                  </a>
                </li>
              )
            }
          )}
        </ul>

        <div className="supporters__content">
          <div className="supporters__text">
            {/* <p>
              Sponsor olmak için
            </p>
            <br /> */}
          </div>
          <div className="supporters__cta">
            <Cta text="Sponsor Ol" url="https://docs.google.com/forms/d/e/1FAIpQLScfCXOVioReCPgkIcgnTdAqvq7F1DQpkU2ehdAB-2vTwgQKEw/viewform?" />
          </div>
        </div>
      </div>
    </section>
  )
}
