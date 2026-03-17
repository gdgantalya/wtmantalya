import './footer.scss'
import wtmLogo from '../../assets/logos-supporters/WTM_Logo_Horizontal Logo with Technovation.png'
import gdgLogo from '../../assets/GDG Professional - Horizontal - Dark adlı dosyanın beyaz.png'

export default function Footer() {
  const socialLinks = [
    { name: 'instagram', link: 'https://www.instagram.com/gdgantalya' },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/gdg-antalya/posts/?feedView=all',
    },
    {
      name: 'facebook2',
      link: 'https://www.facebook.com/gdgantalya/?locale=tr_TR',
    },
    { name: 'x', link: 'https://twitter.com/gdgantalya' },
  ]

  // Nav items copied from navigation component
  const navItems = [
    {
      text: 'Kayıt',
      url: 'https://kommunity.com/gdg-antalya/events/iwd26-antalya-b7070600',
    },
    { text: 'Etkinlik Hakkında', url: '/', id: '#about' },
    { text: 'Konuşmacılar', url: '/', id: '#speakers' },
    { text: 'Program', url: '/', id: '#agenda' },
    { text: 'Sponsorlar', url: '/', id: '#supporters' },
  ]

  const navColumns = [
    // left column: main nav items
    navItems.map((i) => ({ label: i.text, link: i.id || i.url })),
    // center column: sponsor call-to-action
    [
      {
        label: 'Sponsor Olmak İçin Başvur',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScfCXOVioReCPgkIcgnTdAqvq7F1DQpkU2ehdAB-2vTwgQKEw/viewform',
      },
    ],
    // right column: stacked community/contact links
    [
      {
        label: 'Topluluğumuza Katıl',
        link: 'https://gdg.community.dev/gdg-antalya/',
      },
      { label: 'Bize Ulaş', link: 'mailto:gdgantalya@gmail.com' },
    ],
  ]

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__logos">
            <img src={wtmLogo} alt="WTM Logo" />
            <img
              src={gdgLogo}
              alt="GDG Logo"
              className="footer__logo--horizontal"
            />
            <img
              src={gdgLogo}
              alt="GDG Logo"
              className="footer__logo--stacked"
            />
          </div>

          <div className="footer__social">
            <p>Sosyal medyada bizi takip et</p>
            <ul>
              {socialLinks.map((social, index) => {
                const image = new URL(
                  `../../assets/social/${social.name}.svg`,
                  import.meta.url
                ).href

                return (
                  <li className="footer__social-item" key={index}>
                    <a href={social.link} target="blank" rel="noreferrer">
                      <img
                        className="footer__social-logo"
                        src={image}
                        alt={social.name}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <p className="footer__copyright">
            @GDGAntalya2026. Tüm Hakları Saklıdır
          </p>
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
