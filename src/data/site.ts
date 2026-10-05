// Content source: the live homepage and its current _config.yml, retrieved 2026-10-06.
// https://ryuhaerang.github.io/ryuhaerangchoi/

export const profile = {
  name: 'Haerang (Ryuhaerang) Choi',
  role: 'Postdoctoral Researcher',
  affiliation: 'KAIST',
  email: 'ryuhaerang.choi@kaist.ac.kr',
  cvUrl: 'https://drive.google.com/file/d/1ga-54KU_h7bz6NE16qCDWBFeNl870XZe/view?usp=sharing',
  linkedinUrl: 'https://www.linkedin.com/in/ryuhaerang-choi-75ba76233',
  scholarUrl: 'https://scholar.google.com/citations?user=WabTploAAAAJ&hl=en',
  websiteUrl: 'https://ryuhaerangchoi.com/',
  researchInterests: [
    'Human-Computer Interaction (HCI)',
    'Ubiquitous Computing',
    'Human-Centered AI',
    'Digital Health & Well-being',
  ],
};

export const aboutParagraphs: string[] = [
  'I am Ryuhaerang Choi, a postdoctoral researcher in the Mobile Intelligence & Interaction Lab at KAIST, working with Prof. Sung-Ju Lee.',
  'My research lies at the intersection of human-computer interaction (HCI) and ubiquitous computing. I build interactive systems that offer timely and context-sensitive support for people’s well-being in everyday life. Beyond individual-level support, I study how technology can support well-being through people’s relationships and social support networks.',
  'My work has been published at CHI and CSCW and received Best Paper Honorable Mention awards at CHI 2024 and CHI 2025. I also received the Outstanding Dissertation Award from the KAIST School of Electrical Engineering in 2026.',
];

export const aboutLinks: { label: string; url: string }[] = [
  { label: 'Mobile Intelligence & Interaction Lab', url: 'https://miil.kaist.ac.kr' },
  { label: 'KAIST', url: 'https://www.kaist.ac.kr/en/' },
  { label: 'Sung-Ju Lee', url: 'https://sites.google.com/site/wewantsj/' },
];

export const authorWebsites: Record<string, string> = {
  'Seohyeon Yoo': 'https://seohyeon-yoo.github.io/',
  'Xuhai “Orson” Xu': 'https://orsonxu.com/?section=1',
  'Sung-Ju Lee': 'https://sites.google.com/site/wewantsj/',
  'Subin Park': 'https://subin-park.com/',
  'Jennifer G. Kim': 'https://faculty.cc.gatech.edu/~jkim693/',
  'Soumyajit Chatterjee': 'https://sites.google.com/view/sjitiit/home',
  'Dimitris Spathis': 'https://dispathis.com',
  'Fahim Kawsar': 'https://fahim-kawsar.net/',
  'Mohammad Malekzadeh': 'https://mmalekzadeh.github.io',
  'Sujin Han': 'https://vilotgit.github.io/',
  'Hyunsung Cho': 'https://hyunsungcho.com/',
  'Hwajung Hong': 'https://galaxytourist.notion.site/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423',
  'Uichin Lee': 'https://ic.kaist.ac.kr/',
  'Taesik Gong': 'https://taesikgong.com/',
  'Yeonsu Kim': 'https://www.yeonsu.xyz/',
  'Jinwoo Shin': 'https://alinlab.kaist.ac.kr/shin.html',
  'Taeckyung Lee': 'https://taeckyung.github.io/',
  'Seungjoo Lee': 'https://seungjoo.com/',
  'Hyeongheon Cha': 'https://chahh9808.github.io/',
  'Hyungjun Yoon': 'https://hjyoon.com/',
  'Song Min Kim': 'https://sites.google.com/view/songminkim/home',
};

export const news: { date: string; label: string; text: string }[] = [
  {
    date: '2026-10',
    label: 'Oct 2026',
    text: 'Poster presentation at UbiComp ’26 and program co-chair at WellComp@UbiComp ’26',
  },
  {
    date: '2026-03',
    label: 'Mar 2026',
    text: 'Outstanding Dissertation Award from KAIST School of Electrical Engineering',
  },
  {
    date: '2026-01',
    label: 'Jan 2026',
    text: 'Paper (Recovery is Relational) accepted at CHI ’26',
  },
  {
    date: '2025-03',
    label: 'Mar 2025',
    text: 'Paper (Private Yet Social) won a Best Paper Honorable Mention at CHI ’25',
  },
  {
    date: '2025-02',
    label: 'Feb 2025',
    text: 'Invited talk at the SIGCHI-sponsored top conference session at HCI Korea',
  },
];

export type PublicationCategory = 'conference-journal' | 'poster-demo-workshop' | 'preprint';

export type Publication = {
  id: string;
  category: PublicationCategory;
  title: string;
  authors?: string;
  venue?: string;
  year?: number;
  url?: string;
  award?: string;
  status?: string;
  links?: { label: string; url: string }[];
  thumbnail?: { src: string; alt: string; width?: number; height?: number };
};

export const publications: Publication[] = [
  {
    id: 'recovery-is-relational',
    thumbnail: { src: '/images/publications/recovery-is-relational.png', alt: 'Study overview showing design sessions and an in-situ diary study', width: 1877, height: 729 },
    category: 'conference-journal',
    title: 'Recovery is Relational: Digital Support Needs for Patients and Supporters in Eating Disorder Recovery',
    authors: 'Ryuhaerang Choi, Seohyeon Yoo, Xuhai “Orson” Xu, and Sung-Ju Lee',
    venue: 'ACM CHI',
    year: 2026,
    url: 'https://dl.acm.org/doi/10.1145/3772318.3791262',
    links: [
      { label: 'Project', url: 'https://miil.kaist.ac.kr/projects/recoveryisrelational/' },
      { label: 'Video', url: 'https://youtu.be/g2ne5c42UQI' },
    ],
  },
  {
    id: 'private-yet-social',
    thumbnail: { src: '/images/publications/private-yet-social.png', alt: 'WellnessBot system and example supportive conversation', width: 1968, height: 982 },
    category: 'conference-journal',
    title: 'Private Yet Social: How LLM Chatbots Support and Challenge Eating Disorder Recovery',
    authors: 'Ryuhaerang Choi, Taehan Kim, Subin Park, Jennifer G. Kim, and Sung-Ju Lee',
    venue: 'ACM CHI',
    year: 2025,
    url: 'https://dl.acm.org/doi/full/10.1145/3706598.3713485',
    award: 'Best Paper Honorable Mention Award (Top 5%)',
    links: [
      { label: 'Project', url: 'https://nmsl.kaist.ac.kr/projects/chatbot4ed/' },
      { label: 'Video', url: 'https://youtu.be/eUKD5Sb6ytc' },
    ],
  },
  {
    id: 'soundcollage',
    thumbnail: { src: '/images/publications/soundcollage.png', alt: 'SoundCollage audio processing and class discovery pipeline', width: 1658, height: 1000 },
    category: 'conference-journal',
    title: 'SoundCollage: Automated Discovery of New Classes in Audio Datasets',
    authors: 'Ryuhaerang Choi, Soumyajit Chatterjee, Dimitris Spathis, Sung-Ju Lee, Fahim Kawsar, and Mohammad Malekzadeh',
    venue: 'IEEE ICASSP',
    year: 2025,
    url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10890645',
    links: [
      { label: 'Code', url: 'https://github.com/nokia-bell-labs/audio-class-discovery' },
      { label: 'Video', url: 'https://drive.google.com/file/d/1e5P373nTUTKnss4yQZeHSo7yhPVMFTqO/view?usp=share_link' },
    ],
  },
  {
    id: 'foodcensor',
    thumbnail: { src: '/images/publications/foodcensor.png', alt: 'FoodCensor interface for mindful digital food content consumption', width: 1854, height: 1016 },
    category: 'conference-journal',
    title: 'FoodCensor: Promoting Mindful Digital Food Content Consumption for People with Eating Disorders',
    authors: 'Ryuhaerang Choi, Subin Park, Sujin Han, and Sung-Ju Lee',
    venue: 'ACM CHI',
    year: 2024,
    url: 'https://dl.acm.org/doi/abs/10.1145/3613904.3641984',
    award: 'Best Paper Honorable Mention Award (Top 5%)',
    links: [
      { label: 'Project', url: 'https://nmsl.kaist.ac.kr/projects/foodcensor/' },
      { label: 'Code', url: 'https://github.com/Ryuhaerang/FoodCensor' },
      { label: 'Video', url: 'https://youtu.be/2FYkHdRfV-0' },
    ],
  },
  {
    id: 'you-are-not-alone',
    thumbnail: { src: '/images/publications/you-are-not-alone.png', alt: 'StressTrendmeter trending topics and peer support interface', width: 2543, height: 1439 },
    category: 'conference-journal',
    title: 'You Are Not Alone: How Trending Stress Topics Brought #Awareness and #Resonance on Campus',
    authors: 'Ryuhaerang Choi, Chanwoo Yun, Hyunsung Cho, Hwajung Hong, Uichin Lee, and Sung-Ju Lee',
    venue: 'ACM CSCW',
    year: 2022,
    url: 'https://dl.acm.org/doi/abs/10.1145/3555612',
    links: [
      { label: 'Project', url: 'https://nmsl.kaist.ac.kr/projects/stresstrendmeter/' },
      { label: 'Video', url: 'https://youtu.be/u_lSLpPVbFg' },
    ],
  },
  {
    id: 'adapting-to-unknown-conditions',
    thumbnail: { src: '/images/publications/adapting-to-unknown-conditions.png', alt: 'MetaSense training and adaptation workflow', width: 1840, height: 1035 },
    category: 'conference-journal',
    title: 'Adapting to Unknown Conditions in Learning-based Mobile Sensing',
    authors: 'Taesik Gong, Yeonsu Kim, Ryuhaerang Choi, Jinwoo Shin, and Sung-Ju Lee',
    venue: 'IEEE TMC',
    year: 2022,
    url: 'https://ieeexplore.ieee.org/abstract/document/9361223',
    links: [
      { label: 'Project', url: 'https://nmsl.kaist.ac.kr/projects/metasense/' },
      { label: 'Code', url: 'https://github.com/TaesikGong/MetaSense_public' },
    ],
  },
  {
    id: 'call-me-before-i-open-the-fridge',
    thumbnail: { src: '/images/publications/call-me-before-i-open-the-fridge.png', alt: 'First page of the Call Me Before I Open the Fridge paper' },
    category: 'poster-demo-workshop',
    title: '“Call Me Before I Open the Fridge”: Designing Conversational Support for Binge Eating Risk in Solitary Eating',
    authors: 'Ryuhaerang Choi, Seohyeon Yoo, and Sung-Ju Lee',
    venue: 'ACM UbiComp Poster',
    year: 2026,
    url: 'https://drive.google.com/file/d/1TeyOKtxLOSxhOn-FgP9GDzegdwVH7Clt/view?usp=sharing',
    status: 'To appear',
  },
  {
    id: 'crashsniffer',
    thumbnail: { src: '/images/publications/crashsniffer.png', alt: 'CrashSniffer pedestrian collision prediction scenario' },
    category: 'poster-demo-workshop',
    title: 'CrashSniffer: UWB-Based Anchor-Free Pedestrian Collision Prediction for Personal Mobility Vehicles',
    authors: 'Taeckyung Lee, Juseung Lee, Ryuhaerang Choi, Seungjoo Lee, Hyeongheon Cha, Hyungjun Yoon, Song Min Kim, Sangwook Bak, and Sung-Ju Lee',
    venue: 'ACM MobiSys · EnvSys Workshop',
    year: 2025,
    url: 'https://dl.acm.org/doi/10.1145/3742460.3742982',
  },
  {
    id: 'pushing-the-decision-boundaries',
    thumbnail: { src: '/images/publications/soundcollage.png', alt: 'Audio class discovery pipeline from the SoundCollage project' },
    category: 'poster-demo-workshop',
    title: 'Pushing the Decision Boundaries: Discovering New Classes in Audio Data',
    authors: 'Ryuhaerang Choi, Soumyajit Chatterjee, Dimitris Spathis, Fahim Kawsar, and Mohammad Malekzadeh',
    venue: 'ICML · DMLR Workshop',
    year: 2024,
    url: 'https://drive.google.com/file/d/17iq_qG2wQQ954OkJL3FFBXJ5gkXKp0rW/view?usp=sharing',
  },
  {
    id: 'facilitating-instant-interactions',
    thumbnail: { src: '/images/publications/you-are-not-alone.png', alt: 'StressTrendmeter topics and peer support conversations' },
    category: 'poster-demo-workshop',
    title: 'Facilitating Instant Interactions for Stressful Experiences Sharing and Peer Support',
    authors: 'Ryuhaerang Choi, Chanwoo Yun, Hyunsung Cho, Hwajung Hong, Uichin Lee, and Sung-Ju Lee',
    venue: 'ACM MobiSys Demo',
    year: 2022,
    url: 'https://dl.acm.org/doi/abs/10.1145/3498361.3538672',
    links: [
      { label: 'Project', url: 'https://nmsl.kaist.ac.kr/projects/stresstrendmeter/' },
      { label: 'PDF', url: 'https://ic.kaist.ac.kr/publications/papers/choi2022facilitating.pdf' },
    ],
  },
  {
    id: 'collective-voice',
    thumbnail: { src: '/images/publications/collective-voice.png', alt: 'RecoveryTeller system workflow and example chatbot responses' },
    category: 'preprint',
    title: 'Collective Voice: Recovered-Peer Support Mediated by An LLM-Based Chatbot for Eating Disorder Recovery',
    authors: 'Ryuhaerang Choi, Taehan Kim*, Subin Park*, Seohyeon Yoo, Jennifer G. Kim, and Sung-Ju Lee',
    venue: 'arXiv',
    year: 2025,
    url: 'https://arxiv.org/abs/2509.15289',
    status: 'Under review',
  },
  {
    id: 'impact-ambivalence',
    thumbnail: { src: '/images/publications/impact-ambivalence.png', alt: 'Flowchart of digital food content engagement and avoidance' },
    category: 'preprint',
    title: 'Impact Ambivalence: How People with Eating Disorders Get Trapped in the Perpetual Cycle of Digital Food Content Engagement',
    authors: 'Ryuhaerang Choi, Subin Park, Sujin Han, Jennifer G. Kim, and Sung-Ju Lee',
    venue: 'arXiv',
    year: 2023,
    url: 'https://arxiv.org/abs/2311.05920',
    status: 'Under review',
  },
  {
    id: 'multimodal-eating-disorder-dataset',
    category: 'preprint',
    title: 'Topic: A Multimodal Dataset for Eating Disorder Symptom Detection and Prediction',
    authors: 'Ryuhaerang Choi, Seohyeon Yoo, Taeckyung Lee, Uichin Lee, and Sung-Ju Lee',
    status: 'Under review',
  },
];

export const appointments: { period: string; institution: string; role: string }[] = [
  {
    period: 'Mar 2026 – Present',
    institution: 'KAIST',
    role: 'Postdoctoral Researcher in Electrical Engineering',
  },
  {
    period: 'Jul – Sep 2023',
    institution: 'Nokia Bell Labs, Cambridge, UK',
    role: 'Research Intern, Device Intelligence Team',
  },
];

export const education: { period: string; institution: string; degree: string; note?: string }[] = [
  {
    period: 'Aug 2021 – Feb 2026',
    institution: 'KAIST',
    degree: 'Ph.D., School of Electrical Engineering',
    note: 'Outstanding Dissertation Award, Top 1 in Computer Division',
  },
  {
    period: 'Aug 2019 – Aug 2021',
    institution: 'KAIST',
    degree: 'M.S., School of Computing',
  },
  {
    period: 'Mar 2016 – Aug 2019',
    institution: 'Inha University',
    degree: 'B.S., Computer Science',
    note: 'Summa Cum Laude, Early Graduation',
  },
];
