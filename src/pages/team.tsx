import Navigation from '../sections/navigation/navigation'
import Footer from '../sections/footer/footer'
import team from '../assets/data/team'
import Bio from '../components/bio/bio'
import './team.scss'

export default function Team() {
  return (
    <>
      <Navigation />
      <section className="team">
        <div className="team__title-container">
          <h1 className="team__title">Organizadoras</h1>
        </div>
        <ul className="team__list container">
          {team.map((element, index) => {
            return (
              <li key={index}>
                <Bio {...element} />
              </li>
            )
          })}
        </ul>
      </section>
      <Footer />
    </>
  )
}
