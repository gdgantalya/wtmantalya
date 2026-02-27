import './footer.scss'
import wtmLogo from '../../assets/wtm-logo-bw.svg'
import gdgLogo from '../../assets/gdgLogo.png'

export default function Footer() {
  const socialLinks = [
    { name: 'instagram', link: 'https://www.instagram.com/wtmmed' },
    { name: 'linkedin', link: 'https://www.linkedin.com' },
    { name: 'facebook', link: 'https://www.facebook.com/wtmantalya/?locale=tr_TR' },
    { name: 'x', link: 'https://twitter.com/WTMmed' },
  ]

  // Nav items copied from navigation component
  const navItems = [
    { text: 'Kayıt', url: 'https://gdg.community.dev/events/details/google-gdg-antalya-presents-iwd26-antalya/' },
    { text: 'Etkinlik Hakkında', url: '/', id: '#about' },
    { text: 'Konuşmacılar', url: '/', id: '#speakers' },
    { text: 'Sponsorlar', url: '/', id: '#supporters' },
    { text: 'Program', url: '/', id: '#agenda'},
  ]

  const navColumns = [
      // left column: main nav items
      navItems.map(i => ({ label: i.text, link: i.id || i.url })),
      // center column: sponsor call-to-action
      [
        {
          label: 'Sponsor Olmak İçin Başvur',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLScfCXOVioReCPgkIcgnTdAqvq7F1DQpkU2ehdAB-2vTwgQKEw/viewform',
        },
      ],
      // right column: stacked community/contact links
      [
        { label: 'Topluluğumuza Katıl', link: '#community' },
        { label: 'Bize Ulaş', link: '#contact' },
      ],
  ]

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__logos">
            <img src={wtmLogo} alt="WTM Logo" />
            <img src={gdgLogo} alt="GDG Logo" />
          </div>

          <p>WTM Antalya 2026</p>

          <div className="footer__social">
            <p>Sosyal medyada bizi takip et</p>
            <ul>
              {socialLinks.map((social, index) => {
                const image = new URL(`../../assets/social/${social.name}.svg`, import.meta.url).href

                return (
                  <li className="footer__social-item" key={index}>
                    <a href={social.link} target="blank" rel="noreferrer">
                      <img className="footer__social-logo" src={image} alt={social.name} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <p className="footer__copyright">@WTMANTALYA2026. Tüm Hakları Saklıdır</p>
        </div>

        <div className="footer__nav">
          {navColumns.map((col, cIndex) => (
            <ul className="footer__nav-column" key={cIndex}>
              {col.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  )
}
