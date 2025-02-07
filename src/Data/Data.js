export const TrData = {
  heroSection: 
  {
    greeting: 'Oğuz',
    intro:
      ' Mesleğim Önyüz Tasarımcısı...',
    altText : ' ...sağlam ve kaliteli ürünler tasarlayabilirim. Haydi Tanışalım!',
    profilImg: '/public/myImg/myImg.jpeg',
    socials: [
      {
        logo: '/public/Logos/linkedn.logo.png',
        alt_text: 'linkedIn',
        link: 'https://www.linkedin.com/in/o%C4%9Fuz-akca/',
      },
      {
        logo: '/public/Logos/GithubLogo.png',
        alt_text: 'GitHub',
        link: 'https://github.com/OguzAkca',
      },
    ],
  },
  skillsSection: 
  {
    title: 'Yetenekler',
    skills: 
    [
      {
        name: 'JAVASCRIPT',
        icon: '/public/Icons/js-icon.png'
      },
      {
        name: 'REACT',
        icon: '/public/Icons/react-icon.png'
      },
      {
        name: 'REDUX',
        icon: '/public/Icons/redux-icon.png'
      },
      {
        name: 'NODE',
        icon: '/public/Icons/nodejs-icon.png'
      },
      {
        name: 'VS CODE',
        icon: '/public/Icons/vscode-icon.png'
      },
      {
        name: 'FIGMA',
        icon: '/public/Icons/figma-icon.png'
      }
    ],
    names: ['JavaScript', 'React', 'Redux', 'Node Js', 'Vs Code', 'Figma']

  },
  profileSection : 
  {
    title: 'Profil',
    basicInfo : 
    [
      {
      baslik: 'Bilgilerim',
      dogumTarihi : '01.03.1996',
      ikamet : 'İstanbul',
      egitim : 'İstanbul Teknik Üniversitesi-İmalat Mühendisliği, 2024',
      rol : 'Frontend, UI',
      }
    ],
    ortaResim: '/public/MiddleImg/orta-resim.png',
    hakkimda : 
    [
      {
        baslik: 'Hakkımda',
        metinBir: 'İstanbul Teknik Üniversitesi İmalat Mühendisliği bölümünden mezun oldum. Yazılıma olan ilgim doğrultusunda Full Stack Developer eğitimi alarak bu alanda kendimi geliştirdim. Edindiğim bilgi ve becerilerle, kariyerimi yazılım geliştirme alanında sürdürmeyi hedefliyorum.',
        metinIki: 'Hızlı öğrenme yeteneğim, güçlü zaman yönetimi becerilerim ve takım çalışmasına yatkınlığım sayesinde dinamik ve yenilikçi projelerde etkili bir şekilde yer alabileceğime inanıyorum. Sürekli öğrenmeye ve kendimi geliştirmeye açık bir profesyonel olarak, yazılım dünyasında kalıcı katkılar sağlamayı amaçlıyorum.'
      }
    ]

  },
  projectSection: 
  {
    projeBir : [
      {
        baslik: 'Pizza Sipariş Sitesi',
        metin : 'Tamamı benim tarafımdan tasarlanmış online sipariş için tasarlanmış bir websitesi. ',
        react : 'React',
        node : 'Node Js',
        siteler :[ {alt_text : "GitHub'ta göster", link: 'https://github.com/Workintech/fsweb-s8-challenge-pizza' },{alt_text : "Websitesine git", link: 'https://github.com/Workintech/fsweb-s8-challenge-pizza' }],
      }
    ],
    projeIki : [
      {
        baslik: 'Günlük',
        metin : 'Gün içinde aklınıza gelen notları kaydedip daha sonrasında hatırlamanızı sağlayacak bir web sitesi',
        react : 'React',
        redux : 'Redux',
        router : 'Router',
        node : 'Node Js',
        siteler :[ {alt_text : "GitHub'ta göster", link: 'https://github.com/OguzAkca/Sukran-Gunlugu' },{alt_text : "Websitesine git", link: 'https://github.com/OguzAkca/Sukran-Gunlugu' }],
      }
    ],
    footerSection: 
    {
      metin: ' Haydi bir sonraki projenizde birlikte çalışalım.'
    }
  }
};
