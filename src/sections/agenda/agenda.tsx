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
      block: '12:00',
      talks: [
        {
          topicMain: {
            from: '12:00',
            to: '13:00',
            title: 'Kayıt ve Açılış',
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
            title: 'Konuşma 1 Konusu',
            color: 'blue',
            speaker: 'Konuşmacı 1',
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
            to: '14:30',
            title: 'Konuşma 2 Konusu',
            color: 'green',
            speaker: 'Konuşmacı 2',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '14:50',
      talks: [
        {
          topicMain: {
            from: '14:50',
            to: '15:30',
            title: 'Konuşma 3 Konusu',
            speaker: 'Konuşmacı 3',
            color: 'red',
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
            color: 'blue',
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
