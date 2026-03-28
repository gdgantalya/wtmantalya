import { useState } from 'react'
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import './agenda.scss'

// Type tanımlamaları
interface TopicMain {
  from: string
  to: string
  title: string
  color: 'blue' | 'red' | 'green'
  speaker?: string | null
  slides?: string | null
}

interface TopicSecondary {
  title: string
  from: string
  to: string
  color: 'blue' | 'red' | 'green'
}

interface Talk {
  topicMain: TopicMain
  topicSecondary: TopicSecondary | null
}

interface AgendaBlock {
  block: string
  talks: Talk[]
}

export default function Agenda() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  )

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const agendaInfo: AgendaBlock[] = [
    {
      block: '12:30',
      talks: [
        {
          topicMain: {
            from: '12:30',
            to: '13:00',
            title: 'Kayıt ve Açılış',
            speaker: 'Organizatörler: Beyza Çetin, Alper Bayram',
            color: 'red',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '13:00',
      talks: [
        {
          topicMain: {
            from: '13:00',
            to: '13:30',
            title: 'Girişimcilik Ekosisteminde Teknoparkların Rolü',
            color: 'blue',
            speaker: 'Dr. Aylin Tümay',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '13:50',
      talks: [
        {
          topicMain: {
            from: '13:50',
            to: '14:20',
            title:
              'Trendyolda AI ile iş kararlarından müşteriye uzanan geliştirme süreci',
            color: 'green',
            speaker: 'Buse Altaç',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '14:40',
      talks: [
        {
          topicMain: {
            from: '14:40',
            to: '15:00',
            title: 'Zenova Gym, Duruş Bozukluğu ve Nefes Egzersizi',
            speaker: 'Zenova Gym',
            color: 'red',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '15:00',
      talks: [
        {
          topicMain: {
            from: '15:00',
            to: '15:40',
            title: 'Bir Günde MVP İnşa Edin: Flutter + Firebase',
            speaker: 'Kadriye Macit',
            color: 'blue',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '15:30',
      talks: [
        {
          topicMain: {
            from: '15:30',
            to: '16:00',
            title: 'Kapanış ve Hediye Çekilişi',
            speaker: 'Hediye Çekilişi',
            color: 'green',
          },
          topicSecondary: null,
        },
      ],
    },
  ]

  return (
    <section className="agenda" id="agenda">
      <div className="agenda__title-container">
        <SectionTitle
          text="Program"
          direction="right"
          style="green"
          assetName="agenda"
        />
      </div>
      <div className="agenda__container">
        <h2 className="agenda__sub-header">
          #BreakThePattern 4 Nisan Cumartesi 2026 - 12:00 - 17:00
        </h2>

        <div className="agenda__schedule">
          {agendaInfo.map(({ block, talks }) => {
            return talks.map(({ topicMain, topicSecondary }, index) => {
              const itemKey = `${block}-${index}`
              const isExpanded = expandedItems[itemKey]

              return (
                <div
                  key={itemKey}
                  className={`agenda__schedule__item agenda__schedule__item--${topicMain.color} ${isExpanded ? 'agenda__schedule__item--expanded' : ''}`}
                  onClick={() => toggleItem(itemKey)}
                >
                  <div className="agenda__schedule__item-header">
                    <div className="agenda__schedule__item-title">
                      <span className="agenda__schedule__item-time">
                        {topicMain.from} - {topicMain.to}
                      </span>
                      <span className="agenda__schedule__item-separator">
                        :
                      </span>
                      <span className="agenda__schedule__item-name">
                        {topicMain.title}
                      </span>
                    </div>
                    <button
                      className="agenda__schedule__item-toggle"
                      aria-label={isExpanded ? 'Kapat' : 'Aç'}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`agenda__schedule__item-icon ${isExpanded ? 'agenda__schedule__item-icon--rotated' : ''}`}
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="agenda__schedule__item-content">
                      {topicMain.speaker && (
                        <div className="agenda__schedule__item-speaker">
                          {topicMain.speaker}
                        </div>
                      )}
                      {topicMain.slides && (
                        <a
                          href={topicMain.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="agenda__schedule__item-slides"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Sunumu Görüntüle
                        </a>
                      )}
                      {topicSecondary && (
                        <div
                          className={`agenda__schedule__item-secondary agenda__schedule__item-secondary--${topicSecondary.color}`}
                        >
                          <span className="agenda__schedule__item-time">
                            {topicSecondary.from} - {topicSecondary.to}
                          </span>
                          <span>{topicSecondary.title}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })
          })}
        </div>
      </div>
    </section>
  )
}
