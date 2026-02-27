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
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const agendaInfo: AgendaBlock[] = [
    {
      block: '09:00',
      talks: [
        {
          topicMain: {
            from: '9:00',
            to: '9:30',
            title: 'Açılış',
            color: 'blue',
            speaker: null,
            slides: null,
          },
          topicSecondary: null,
        },
        {
          topicMain: {
            from: '9:30',
            to: '10:00',
            title: '2026 Dünya Kadınlar Gününe hoş geldiniz',
            color: 'red',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '10:00',
      talks: [
        {
          topicMain: {
            from: '10:10',
            to: '10:40',
            speaker: 'Rümeysa Kara',
            title: 'AI/ML',
            color: 'green',
            slides:
              'https://drive.google.com/file/d/1lMV0M65uaeL5ueEUTn6dyxTv-rC755FC/view?usp=sharing',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '11:00',
      talks: [
        {
          topicMain: {
            from: '10:50',
            to: '11:20 AM',
            title: 'Machine Learning',
            speaker: 'İrem Kömürcü',
            color: 'blue',
            slides:
              'https://drive.google.com/drive/u/0/folders/1wKRMo8pXYsFpwjGqY7tdwnOkyXoH0G1e',
          },
          topicSecondary: null,
        },
        {
          topicMain: {
            from: '11:30',
            to: '12:00',
            title: 'Angular',
            speaker: 'Selin Karagülle Tunç',
            color: 'green',
            slides:
              'https://drive.google.com/file/d/17lsvutbFBLA1L8ajv8EcL4oXtSIxareR/view?usp=sharing',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '12:00',
      talks: [
        {
          topicMain: {
            from: '12:00',
            to: '13:00',
            title: 'Öğlen Arası',
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
            from: '13:15',
            to: '13:45',
            title: 'Flutter&Dart &  Firebase',
            color: 'blue',
            speaker: 'Kadriye Macit',
            slides:
              'https://drive.google.com/file/d/1yHLnZ2yfye-Io2b9Zu4VBeodrHIvZ4iB/view',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '14:00',
      talks: [
        {
          topicMain: {
            from: '14:00',
            to: '14:45',
            title: 'Community Manager',
            color: 'green',
            speaker: 'Beyza Sunay Güler',
            slides: null,
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
            to: '16:45',
            title: 'AI',
            speaker: 'Merve Noyan',
            color: 'red',
            slides: null,
          },
          topicSecondary: {
            title:
              'Mentorías para empleabilidad y hoja de ruta profesional',
            from: '15:30',
            to: '16:45',
            color: 'blue',
          },
        },
      ],
    },
    {
      block: '17:00',
      talks: [
        {
          topicMain: {
            from: '17:00',
            to: '17:30',
            title: 'AI',
            speaker: 'Nisanur Ilhan',
            color: 'blue',
            slides: null,
          },
          topicSecondary: null,
        },
        {
          topicMain: {
            from: '17:30',
            to: '18:00',
            title: 'Networking',
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
          #WTMBreakThePattern 4 Nisan Cumartesi 2026 - 12:00 - 17:00
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
                      <span className="agenda__schedule__item-separator">:</span>
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
                        <div className={`agenda__schedule__item-secondary agenda__schedule__item-secondary--${topicSecondary.color}`}>
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