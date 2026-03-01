import './registration.scss'
import Cta from '../../components/cta/cta'
import locationIcon from '../../assets/illustrations/icon-location.svg'
import dateIcon from '../../assets/illustrations/icon-calendar.svg'

export default function Registration() {
  const content = {
    title: '#WTMBreakThePattern',
  }
  return (
    <section className="registration container" id="registration">
      <h2 className="registration__title">{content.title}</h2>
      <div className="registration__content">
        {/* <div className="registration__text-container">
          <p>
            En este Día Internacional de la Mujer 2024, te invitamos a una
            celebración llena de inspiración y acción.
            <br />
            <br />
            Reflexiona sobre estas preguntas:
          </p>
          <ul>
            <li>
              •⁠ ⁠¿Qué proyecto te apasiona y tiene el potencial de cambiar el
              mundo?
            </li>
            <li>
              •⁠ ⁠¿Cómo estás utilizando tus talentos y habilidades para crear
              un futuro mejor para todos?
            </li>
          </ul>
          <p>
            <br />
            ¡Juntas, podemos soñar en grande y ser audaces para "Impactar el
            Futuro"!
          </p>
        </div> */}
        <div className="registration__info-container">
          <div className="registration__info">
            <img className="registration__icon" src={dateIcon} />

            <p>
              4 Nisan Cumartesi 2026
              <br />
              12:00 - 17:00
            </p>
          </div>
          <div className="registration__info">
            <img className="registration__icon" src={locationIcon} />
            <p>
              Gişimcilik ve Kariyer Ofisi
              <br />
              Konyaaltı, Antalya, Türkiye
            </p>
          </div>
          <Cta
            text="Kayıt olmak için"
            url="https://kommunity.com/gdg-antalya/events/iwd26-antalya-b7070600"
          />
        </div>
      </div>
    </section>
  )
}
