import './registration.scss'
import Cta from '../../components/cta/cta'
import locationIcon from '../../assets/illustrations/icon-location.svg'
import dateIcon from '../../assets/illustrations/icon-calendar.svg'
import tanitimPdf from '../../assets/ıwd antalya 2026 tanıtım.pdf'
import SectionTitle from '../../components/sectionTitle/sectionTitle'

export default function Registration() {
  const content = {
    title: '#BreakThePattern',
  }
  return (
    <section className="registration" id="about">
      <div className="speakers__title-container">
        <SectionTitle
          text={content.title}
          direction="right"
          style="green"
          assetName="badge-vector"
        />
      </div>
      <div className="registration__content">
        <section className="about">
          <div className="about__text-container container">
            <h2 className="about__title">
              <span className="about__event">Etkinlik</span> Hakkında
            </h2>
            <p className="about__text">
              Google Developer Group Antalya ve Women Techmakers iş birliğiyle,
              International Women’s Day 2026 kapsamında bir araya geliyoruz!
            </p>
            <p className="about__text">
              <span className="about__slogan">
                &quot;Break the Pattern&quot;
              </span>{' '}
              temasıyla hazırladığımız bu özel günde; ilham veren konuşmalar,
              girişimcilik hikayeleri ve teknolojiyle şekillenen bir gelecek
              bizi bekliyor. 👩‍💻💜
            </p>
            <p className="about__text">
              Her yıl Google Developer toplulukları tarafından Mart ve Nisan
              aylarında organize edilen IWD etkinlikleri, teknoloji dünyasında
              kadınların görünürlüğünü ve yetkinliğini artırmayı hedefliyor.
              <br />
              Konuşmalar, paneller, atölyeler ve ilham dolu hikâyelerle,
              kadın-erkek herkesin katılımına açık bu etkinliklerde birlikte
              öğreniyor, birlikte gelişiyoruz.
            </p>
            <a
              href={tanitimPdf}
              className="about__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              IWD Antalya 2026 Tanıtım
            </a>
          </div>
        </section>
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
