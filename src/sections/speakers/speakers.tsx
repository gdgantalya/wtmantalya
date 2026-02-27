import './speakers.scss'
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import speakersList from '../../assets/data/speakers'
import Bio from '../../components/bio/bio'

const SECTION = {
  TITLE: 'Konuşmacılar',
}

export default function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="speakers__title-container">
        <SectionTitle
          text={SECTION.TITLE}
          direction="left"
          style="blue"
          assetName="mic"
        />
      </div>
      <ul className="speakers__list container">
        {speakersList.map((element, index) => {
          return (
            <li key={index} className="speakers__element">
              <Bio {...element} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
