import './about.scss'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__text-container container">
        <h2 className="about__title">
          <span className="about__event">Etkinlik</span> Hakkında
        </h2>
        <p className="about__text">
         Her yıl Google Developer toplulukları tarafından Mart ve Nisan aylarında organize edilen IWD etkinlikleri, teknoloji dünyasında kadınların görünürlüğünü ve yetkinliğini artırmayı hedefliyor.

        💡 Konuşmalar, paneller, atölyeler ve ilham dolu hikâyelerle, kadın-erkek herkesin katılımına açık bu etkinliklerde birlikte öğreniyor, birlikte gelişiyoruz.

        Bu yıl biz de GDG Antalya ve Women Techmakers Antalya olarak IWD 2026’i kutlamak için heyecanla hazırlanıyoruz. Çünkü biliyoruz ki teknoloji, ancak çeşitlilikle gelişir 💪
          <span className="about__slogan">'BreakThePattern'</span>,
        </p>
        <a
          href="https://developers.google.com/womentechmakers?hl=es-419"
          className="about__link"
          target="_blank"
        >
          womentechmakers.com
        </a>
        <p>   </p>
        <a
          href="https://gdg.community.dev/gdg-antalya/"
          className="about__link"
          target="_blank"
        >
          GDG Antalya
        </a>
      </div>
    </section>
  )
}
