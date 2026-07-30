const img = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

function CategoryIcon({ type }) {
  const common = {
    viewBox: '0 0 64 64',
    className: 'category-icon',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: 'false',
  };

  const icons = {
    all: (
      <>
        <g fill="currentColor" stroke="none">
          <rect x="9" y="9" width="19" height="19" rx="4" />
          <rect x="36" y="9" width="19" height="19" rx="4" />
          <rect x="9" y="36" width="19" height="19" rx="4" />
          <rect x="36" y="36" width="19" height="19" rx="4" />
        </g>
        <g fill="var(--category-surface)" stroke="none" opacity=".8">
          <rect x="15" y="15" width="7" height="2" rx="1" />
          <rect x="42" y="15" width="7" height="2" rx="1" />
          <rect x="15" y="42" width="7" height="2" rx="1" />
          <rect x="42" y="42" width="7" height="2" rx="1" />
        </g>
      </>
    ),
    electronics: (
      <>
        <path d="M14 34v-4a18 18 0 0 1 36 0v4" strokeWidth="4" />
        <rect x="9" y="31" width="12" height="18" rx="6" fill="currentColor" stroke="none" />
        <rect x="43" y="31" width="12" height="18" rx="6" fill="currentColor" stroke="none" />
        <rect x="13" y="35" width="4" height="9" rx="2" fill="var(--category-surface)" stroke="none" opacity=".75" />
        <rect x="47" y="35" width="4" height="9" rx="2" fill="var(--category-surface)" stroke="none" opacity=".75" />
        <path d="M21 46c2 6 7 9 13 9h5" strokeWidth="2.4" />
        <circle cx="42" cy="55" r="2" fill="currentColor" stroke="none" />
      </>
    ),
    fashion: (
      <>
        <path d="M20 14l9-6h6l9 6 11 9-7 12-8-5v25H24V30l-8 5-7-12z" fill="currentColor" stroke="none" />
        <path d="M27 8c0 7 10 7 10 0" stroke="var(--category-surface)" strokeWidth="2.5" />
        <path d="M24 27v25M40 27v25M17 22l-3 9M47 22l3 9" stroke="var(--category-surface)" strokeWidth="2" opacity=".78" />
        <path d="M25 52h14" stroke="var(--category-surface)" strokeWidth="2" opacity=".78" />
      </>
    ),
    home: (
      <>
        <path d="M18 40h28l-4 17H22z" fill="currentColor" stroke="none" />
        <path d="M21 45h22M22 52h20" stroke="var(--category-surface)" strokeWidth="2" opacity=".72" />
        <path d="M32 41c0-7-1-13-5-18" strokeWidth="2.5" />
        <path d="M31 38c-10-3-14-11-13-20 9 1 15 9 13 20z" fill="currentColor" stroke="none" />
        <path d="M33 39c0-13 7-23 18-28 1 13-5 24-18 28z" fill="currentColor" stroke="none" opacity=".78" />
        <path d="M31 35c5-8 11-12 18-12" stroke="var(--category-surface)" strokeWidth="2" opacity=".65" />
      </>
    ),
    beauty: (
      <>
        <rect x="19" y="20" width="26" height="36" rx="5" fill="currentColor" stroke="none" />
        <rect x="24" y="11" width="16" height="10" rx="2.5" fill="currentColor" stroke="none" />
        <rect x="28" y="7" width="8" height="5" rx="1.5" fill="currentColor" stroke="none" />
        <rect x="23" y="30" width="18" height="12" rx="2.5" fill="var(--category-surface)" stroke="none" opacity=".82" />
        <path d="M26 35h12M28 39h8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 24h18" stroke="var(--category-surface)" strokeWidth="2" opacity=".7" />
      </>
    ),
    kids: (
      <>
        <circle cx="20" cy="18" r="10" fill="currentColor" stroke="none" />
        <circle cx="44" cy="18" r="10" fill="currentColor" stroke="none" />
        <circle cx="32" cy="34" r="21" fill="currentColor" stroke="none" />
        <ellipse cx="32" cy="43" rx="9" ry="7" fill="var(--category-surface)" stroke="none" opacity=".9" />
        <circle cx="25" cy="31" r="2.7" fill="var(--category-ink)" stroke="none" />
        <circle cx="39" cy="31" r="2.7" fill="var(--category-ink)" stroke="none" />
        <path d="M29 42h6M27 48c3 2 7 2 10 0" stroke="var(--category-ink)" strokeWidth="2" />
        <path d="M21 52h22" stroke="var(--category-surface)" strokeWidth="2" opacity=".65" />
      </>
    ),
    sport: (
      <>
        <circle cx="32" cy="32" r="25" fill="var(--category-surface)" stroke="currentColor" strokeWidth="3" />
        <path d="M32 14l10 7-4 12H26l-4-12z" fill="currentColor" stroke="none" />
        <path d="M22 21l-9 8M42 21l9 8M26 33l-6 18M38 33l6 18M14 40h12M38 40h12" stroke="currentColor" strokeWidth="3" />
        <path d="M26 33h12" stroke="var(--category-surface)" strokeWidth="2" opacity=".8" />
      </>
    ),
    auto: (
      <>
        <circle cx="32" cy="32" r="26" fill="currentColor" stroke="none" />
        <circle cx="32" cy="32" r="19" fill="var(--category-surface)" stroke="none" />
        <circle cx="32" cy="32" r="7" fill="currentColor" stroke="none" />
        <g stroke="var(--category-ink)" strokeWidth="3.5">
          <path d="M32 13v12M32 39v12M13 32h12M39 32h12" />
          <path d="M19 19l9 9M36 36l9 9M45 19l-9 9M28 36l-9 9" />
        </g>
        <circle cx="32" cy="32" r="2.5" fill="var(--category-surface)" stroke="none" />
      </>
    ),
    build: (
      <>
        <path d="M9 43h46v9H9z" fill="currentColor" stroke="none" />
        <path d="M14 41c1-16 9-26 18-28 10 2 18 12 19 28z" fill="currentColor" stroke="none" />
        <path d="M27 14h10v27H27z" fill="var(--category-surface)" stroke="none" opacity=".62" />
        <path d="M12 41h40M24 52h16" stroke="var(--category-ink)" strokeWidth="2.5" />
      </>
    ),
    pets: (
      <>
        <path d="M18 25L10 12l14 6 8-7 8 7 14-6-8 13v16c0 10-6 16-14 16s-14-6-14-16z" fill="currentColor" stroke="none" />
        <ellipse cx="32" cy="42" rx="9" ry="6.5" fill="var(--category-surface)" stroke="none" opacity=".9" />
        <circle cx="25" cy="32" r="2.6" fill="var(--category-ink)" stroke="none" />
        <circle cx="39" cy="32" r="2.6" fill="var(--category-ink)" stroke="none" />
        <path d="M29 42h6M26 50c4 2 8 2 12 0" stroke="var(--category-ink)" strokeWidth="2" />
        <path d="M16 23l-4-7M48 23l4-7" stroke="var(--category-surface)" strokeWidth="2" opacity=".7" />
      </>
    ),
    more: (
      <g fill="currentColor" stroke="none">
        <circle cx="16" cy="32" r="4" />
        <circle cx="32" cy="32" r="4" />
        <circle cx="48" cy="32" r="4" />
      </g>
    ),
  };

  return <svg {...common}>{icons[type] || icons.all}</svg>;
}

const categories = [
  { type: 'all', name: 'Все категории' },
  { type: 'electronics', name: 'Электроника' },
  { type: 'fashion', name: 'Одежда и обувь' },
  { type: 'home', name: 'Дом и сад' },
  { type: 'beauty', name: 'Красота' },
  { type: 'kids', name: 'Детские товары' },
  { type: 'sport', name: 'Спорт и отдых' },
  { type: 'auto', name: 'Автотовары' },
  { type: 'build', name: 'Строительство' },
  { type: 'pets', name: 'Животные' },
  { type: 'more', name: 'Ещё' },
];

const products = [
  { title: 'Смартфон Samsung Galaxy S24', price: '15 990 ₽', old: '18 000 ₽', discount: '-15%', rating: '4.8', image: img('photo-1511707171634-5f897ff02aa9') },
  { title: 'Букет из 25 тюльпанов', price: '1 590 ₽', old: '1 990 ₽', discount: '-20%', rating: '4.9', image: img('photo-1490750967868-88aa4486c946') },
  { title: 'Радиоуправляемый внедорожник', price: '2 490 ₽', old: '2 790 ₽', discount: '-10%', rating: '4.7', image: img('photo-1594787318286-3d835c1d207f') },
  { title: 'Смарт-часы Amazfit GTR 4', price: '4 990 ₽', old: '5 600 ₽', discount: '-12%', rating: '4.8', image: img('photo-1523275335684-37898b6baf30') },
  { title: 'Рюкзак городской унисекс', price: '1 290 ₽', old: '', discount: '', rating: '4.6', image: img('photo-1553062407-98eeb64c6a62') },
];

const cars = [
  { title: 'BMW 5 серии, 2.0 AT', price: '1 350 000 ₽', year: '2018', km: '120 000 км', image: img('photo-1555215695-3004980ad54e') },
  { title: 'Volkswagen Passat, 1.8 AT', price: '890 000 ₽', year: '2016', km: '98 000 км', image: img('photo-1549317661-bd32c8ce0db2') },
  { title: 'Toyota RAV4, 2.5 AT', price: '1 690 000 ₽', year: '2020', km: '45 000 км', image: img('photo-1541899481282-d53bffe3c35d') },
  { title: 'Audi A4, 2.0 AT', price: '1 250 000 ₽', year: '2017', km: '110 000 км', image: img('photo-1503376780353-7e6692767b70') },
];

const stores = [
  ['Flowers Shop', 'Цветы и подарки', 'FS', '4.9'],
  ['Techno Store', 'Электроника', 'TS', '4.8'],
  ['Kids World', 'Детские товары', 'KW', '4.9'],
  ['AutoStyle', 'Автотовары', 'AS', '4.8'],
  ['Home Comfort', 'Дом и интерьер', 'HC', '4.7'],
];

const ecosystem = [
  { key: 'market', title: 'AS Market', subtitle: 'Товары и магазины', icon: '▦', accent: 'green' },
  { key: 'auto', title: 'AS Auto', subtitle: 'Авто и транспорт', icon: '◇', accent: 'orange' },
  { key: 'realty', title: 'AS Недвижимость', subtitle: 'Продажа и аренда', icon: '⌂', accent: 'blue' },
  { key: 'jobs', title: 'AS Работа', subtitle: 'Вакансии и резюме', icon: '▣', accent: 'purple' },
];

const pageData = {
  market: {
    label: 'AS Market', title: 'Всё необходимое — в одном месте', text: 'Товары, локальные магазины, услуги и частные объявления.', action: 'Разместить товар',
    sections: [['▦', 'Каталог товаров'], ['🏪', 'Магазины'], ['♛', 'VIP-магазины'], ['♲', 'Барахолка'], ['%', 'Акции']],
  },
  auto: {
    label: 'AS Auto', title: 'Автомобили и транспорт', text: 'Покупка, продажа и подбор транспорта в одном разделе.', action: 'Продать автомобиль',
    sections: [['◇', 'Легковые авто'], ['▱', 'Мото'], ['▰', 'Грузовые'], ['⚙', 'Спецтехника'], ['◉', 'Запчасти']],
  },
  realty: {
    label: 'AS Недвижимость', title: 'Недвижимость рядом', text: 'Квартиры, дома, коммерческие помещения и участки.', action: 'Подать объявление',
    sections: [['⌂', 'Квартиры'], ['⌂', 'Дома'], ['▤', 'Коммерция'], ['⌖', 'Участки'], ['◇', 'Новостройки']],
  },
  jobs: {
    label: 'AS Работа', title: 'Работа и сотрудники', text: 'Свежие вакансии, резюме и прямой контакт с работодателями.', action: 'Создать вакансию',
    sections: [['▣', 'Вакансии'], ['♙', 'Резюме'], ['🏢', 'Компании'], ['⌁', 'Подработка'], ['◷', 'Удалённая работа']],
  },
};

function HeaderAction({ icon, title, badge }) {
  return <button className="head-action"><span className="head-icon">{icon}{badge && <b>{badge}</b>}</span><small>{title}</small></button>;
}

function Header() {
  return <header className="header">
    <a className="logo" href="#/"><b>AS</b><span>MARKET<small>всё для жизни и бизнеса</small></span></a>
    <button className="catalog">☰ <span>Каталог</span>⌄</button>
    <form className="header-search" onSubmit={e => e.preventDefault()}><input placeholder="Поиск по товарам, магазинам и объявлениям..."/><button>⌕</button></form>
    <nav className="header-actions">
      <HeaderAction icon="♡" title="Избранное" />
      <HeaderAction icon="♧" title="Уведомления" badge="3" />
      <HeaderAction icon="🛒" title="Корзина" badge="4" />
      <HeaderAction icon="♙" title="Войти / Профиль" />
    </nav>
  </header>;
}

function MobileNav() {
  return <nav className="mobile-nav"><a className="active" href="#/">⌂<small>Главная</small></a><button>▦<small>Каталог</small></button><button className="sell">＋</button><button>♡<small>Чаты</small></button><button>♙<small>Профиль</small></button></nav>;
}

function ProductCard({ item }) {
  return <article className="product-card"><div className="product-image">{item.discount && <span className="discount">{item.discount}</span>}<button className="fav">♡</button><img src={item.image} alt={item.title} loading="lazy" /></div><div className="product-body"><div className="price-line"><strong>{item.price}</strong>{item.old && <del>{item.old}</del>}</div><p>{item.title}</p><small className="rating">★ {item.rating}</small></div></article>;
}

function CarCard({ item }) {
  return <article className="car-card"><div className="car-image"><span>{item.year}</span><button>♡</button><img src={item.image} alt={item.title} loading="lazy" /></div><strong>{item.price}</strong><p>{item.title}</p><small>{item.km}</small></article>;
}

function SectionTitle({ children, action = 'Смотреть все' }) {
  return <div className="section-title"><h2>{children}</h2><button>{action}</button></div>;
}

function EcosystemSlider() {
  return <section className="ecosystem-block">
    <div className="ecosystem-heading"><small>Экосистема AS</small><span>Листайте →</span></div>
    <div className="ecosystem-slider">
      {ecosystem.map(item => <a className={`ecosystem-card ${item.accent}`} href={`#/${item.key}`} key={item.key}>
        <span className="ecosystem-icon">{item.icon}</span><span><strong>{item.title}</strong><small>{item.subtitle}</small></span><b>→</b>
      </a>)}
    </div>
  </section>;
}

function EcosystemPage({ type }) {
  const data = pageData[type] || pageData.market;
  return <div className="page"><Header/><main className="service-page">
    <a className="back-home" href="#/">← На главную</a>
    <section className={`service-hero service-${type}`}><div><small>{data.label}</small><h1>{data.title}</h1><p>{data.text}</p><button>{data.action}</button></div><span className="service-mark">AS</span></section>
    <section className="service-sections">{data.sections.map(([icon, title]) => <button key={title}><span>{icon}</span><strong>{title}</strong><small>Перейти →</small></button>)}</section>
    <section className="service-content"><div><small>Раздел готов к наполнению</small><h2>Здесь появятся актуальные предложения</h2><p>Каркас страницы уже создан. Следующим этапом подключим категории, фильтры, карточки и данные из Firebase.</p></div><button>{data.action}</button></section>
    <EcosystemSlider/>
  </main><MobileNav/></div>;
}

function Home() {
  return <div className="page"><Header/><main id="top" className="layout"><div className="main-column">
    <section className="hero"><div className="hero-copy"><h1>Покупай и продавай<br/>что угодно на<br/><em>AS Market</em></h1><p>Одна площадка для миллионов возможностей</p><div className="hero-buttons"><button>К покупкам →</button><button className="outline">Стать продавцом</button></div><div className="trust"><span>✓ Безопасные сделки</span><span>✓ Защита покупателей</span><span>◉ Поддержка 24/7</span><span>✓ Выгодные условия</span></div></div><div className="hero-art"><div className="blob one"></div><div className="blob two"></div><div className="hero-items"><span>💐</span><span>📱</span><span>🧸</span><span>👜</span><span>🛠️</span><span>🚗</span></div></div></section>
    <EcosystemSlider/>
    <section className="categories">{categories.map(({ type, name }, i) => <button className={i === 0 ? 'active' : ''} key={name}><span><CategoryIcon type={type}/></span><small>{name}</small></button>)}</section>
    <section className="promo-grid"><article><h3>Магазины</h3><p>Тысячи магазинов<br/>на одной площадке</p><button>Смотреть все →</button><span>🏪</span></article><article><h3>VIP-магазины</h3><p>Лучшие продавцы<br/>с особыми условиями</p><button>Смотреть все →</button><span>♛</span></article><article><h3>Барахолка</h3><p>Покупай и продавай<br/>б/у вещи легко</p><button>Перейти →</button><span>🪑</span></article><article><h3>Автомобили</h3><p>Новые и б/у авто<br/>по лучшим ценам</p><a href="#/auto">Смотреть авто →</a><span>🚘</span></article><article><h3>Акции и скидки</h3><p>Выгодные предложения<br/>каждый день</p><button>Смотреть все →</button><span>%</span></article></section>
    <div className="split-products"><section><SectionTitle>Популярные товары</SectionTitle><div className="cards-row">{products.map(p => <ProductCard item={p} key={p.title}/>)}</div></section><section><SectionTitle>Б/у автомобили</SectionTitle><div className="cars-row">{cars.map(c => <CarCard item={c} key={c.title}/>)}</div></section></div>
    <section className="benefits"><div><b>♡</b><span><strong>Безопасные сделки</strong><small>Проверяем продавцов</small></span></div><div><b>▣</b><span><strong>Удобная доставка</strong><small>По всей стране и миру</small></span></div><div><b>◉</b><span><strong>Поддержка 24/7</strong><small>Мы всегда на связи</small></span></div><div><b>▭</b><span><strong>Простая оплата</strong><small>Карты и рассрочка</small></span></div></section>
  </div><aside className="sidebar"><section className="vip-card"><div><h2>Продвигай свой магазин</h2><p>VIP-рамка, приоритет в поиске и специальные места</p><button>Подробнее</button></div><span className="crown">♛<small>VIP</small></span><div className="vip-features"><span>♕ VIP-магазин</span><span>◉ Продвижение</span><span>⌁ Аналитика</span></div><div className="featured-store"><div className="round-logo">FS</div><div><strong>Flowers Shop <i>VIP</i></strong><small>Цветы и подарки</small><span>★ 4.9 · 1250 продаж</span></div><button>Перейти</button></div></section><section className="auto-side"><div><h2>🚘 AS AUTO</h2><p>Новые и б/у автомобили<br/>в одном месте</p><a href="#/auto">Перейти к авто</a></div><img src={img('photo-1555215695-3004980ad54e', 900)} alt="AS Auto"/><div className="auto-links"><span>Новые авто</span><span>С пробегом</span><span>Подбор авто</span><span>Автосалоны</span></div></section><section className="purple-banner"><div><strong>Станьте VIP-продавцом<br/>и увеличьте продажи!</strong><button>Подробнее</button></div><span>VIP</span></section><section className="new-stores"><SectionTitle>Новые магазины</SectionTitle><div className="store-list">{stores.map(([name, cat, initials, rating]) => <article key={name}><div>{initials}</div><strong>{name}</strong><small>{cat}</small><span>★ {rating}</span></article>)}</div></section><section className="app-box"><div><strong>Приложение AS Market</strong><p>Покупайте и продавайте<br/>со смартфона</p></div><div className="store-buttons"><button> App Store</button><button>▶ Google Play</button></div><div className="qr">▦</div></section></aside></main><MobileNav/></div>;
}

export default function App() {
  const route = window.location.hash.replace('#/', '').split('/')[0];
  return route && pageData[route] ? <EcosystemPage type={route}/> : <Home/>;
}
