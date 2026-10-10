export const DICTIONARY: Record<string, Record<string, unknown>> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      'eis-heauton': 'Eis-heauton',
      psychotherapy: 'Psychotherapy',
      couple: 'Couple Therapy',
      group: 'Group Therapy',
      project: 'Projects'
    },
    home: {
      title: 'Welcome to Wade Jen',
      description: 'Academic and professional resources on psychotherapy and counseling.',
      content: 'This site shares work on psychotherapy, counselling and related projects.'
    },
    about: {
      title: 'About Wade Jen',
      description: 'Professional background and academic work.',
    },
    'eis-heauton': {
      title: 'Eis-heauton',
      description: 'Thoughts and writings.'
    },
    psychotherapy: {
      title: 'Psychotherapy',
      description: 'Approaches and resources.'
    },
    group: {
      title: 'Group Therapy',
      description: 'Group processes and research.'
    },
    project: {
      title: 'Projects',
      description: 'Research and community projects.'
    },
    couple: {
      title: 'Couple Therapy',
      hero: {
        heading: ['Attachment × Emotional Interaction', 'The First Step in Couple Therapy'],
        intro: 'How we manage intimacy is shaped by attachment patterns — not labels, but ways we maintain safety and respond to distance and conflict.'
      },
      sections: {
        attachmentNoteTitle: 'Attachment is not good or bad',
        attachmentNoteBody: 'Different ways of approaching intimacy can create repeated misunderstandings in relationships.'
      },
      qa: [
        {
          q: 'How does the therapist work in couple therapy?',
          a: 'Therapists help couples notice interaction patterns as they occur in the room rather than repeatedly analyzing events; the focus is on the present interaction rather than rehashing the past.'
        },
        {
          q: 'Can therapy continue if one partner is exhausted or unsure?',
          a: 'Fatigue is treated as an important relational signal—not a failure. Therapy starts by understanding the interactional pattern rather than requiring immediate commitment.'
        },
        {
          q: 'Will I be asked to share emotions I am not ready for?',
          a: 'Therapists adjust pacing so emotional experience is accessed within tolerable limits; depth and speed are tailored to each person.'
        }
      ]
    },
  },
  zh: {
    navigation: {
      home: '首頁',
      about: '關於',
      'eis-heauton': '思想起',
      psychotherapy: '心理治療',
      couple: '伴侶治療',
      group: '團體治療',
      project: '專案計畫'
    },
    home: {
      title: '歡迎來到 Wade Jen',
      description: '心理治療與諮商的學術與專業資源。',
      content: '本站分享心理治療、諮商與相關計畫工作。'
    },
    about: {
      title: '關於 Wade Jen',
      description: '專業背景與學術工作。',
    },
    'eis-heauton': {
      title: '思想起',
      description: '思考與書寫。'
    },
    psychotherapy: {
      title: '心理治療',
      description: '治療方法與資源。'
    },
    group: {
      title: '團體治療',
      description: '團體過程與研究。'
    },
    project: {
      title: '專案計畫',
      description: '研究與社群計畫。'
    },
    couple: {
      title: '伴侶治療',
      hero: {
        heading: ['依附關係 × 情緒互動', '伴侶治療的第一步'],
        intro: '我們每個人處理親密關係的方式，其實都跟「依附」有關。這不是某種標籤，而是我們在關係裡怎麼維持安全感、怎麼面對距離與衝突的一套自動反應。'
      },
      sections: {
        attachmentNoteTitle: '依附位置不是好或壞',
        attachmentNoteBody: '只是在親密關係裡，兩個人帶著不同的方式靠近彼此，就可能出現互相誤解的模式。'
      },
      qa: [
        {
          q: '在伴侶治療中，治療師會如何工作？',
          a: '治療師會協助你們在當下覺察互動模式，而不是只是重複討論事件；工作的重點放在當下的互動，而非一次次回顧過去。'
        },
        {
          q: '如果其中一方其實已經很累，甚至不確定還想不想繼續，治療還能進行嗎？',
          a: '疲累被視為重要的關係訊號而非治療無效的指標；治療先理解互動模式，而不是要求立刻承諾。'
        },
        {
          q: '治療時，會不會被要求說出自己其實還沒準備好的情緒或想法？',
          a: '治療師會調整節奏，確保情緒在可承受範圍內被觸及；表達的深度與速度會依個別狀態調整。'
        }
      ]
    },
  },
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
