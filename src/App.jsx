const img = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

function CategoryIcon({ type }) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const icons = {
    all: <><rect x="7" y="7" width="13" height="13" rx="3"/><rect x="28" y="7" width="13" height="13" rx="3"/><rect x="7" y="28" width="13" height="13" rx="3"/><rect x="28" y="28" width="13" height="13" rx="3"/></>,
    electronics: <><rect x="10" y="7" width="28" height="34" rx="5"/><line x1="19" y1="12" x2="29" y2="12"/><circle cx="24" cy="35.5" r="1.2"/></>,
    fashion: <><path d="M16 10l5-3h6l5 3 7 6-5 7-4-3v20H18V20l-4 3-5-7 7-6z"/><path d="M21 7c0 3 1.4 5 3 5s3-2 3-5"/></>,
    home: <><path d="M8 22L24 8l16 14"/><path d="M12 20v20h24V20"/><path d="M20 40V28h8v12"/></>,
    beauty: <><path d="M18 17h12l2 23H16l2-23z"/><path d="M21 17v-5h6v5"/><path d="M20 12h8"/><path d="M24 7v5"/></>,
    kids: <><rect x="10" y="19" width="28" height="19" rx="4"/><path d="M15 19v-5h6v5M27 19v-5h6v5"/><circle cx="18" cy="29" r="3"/><circle cx="30" cy="29" r="3"/></>,
    sport: <><circle cx="24" cy="24" r="17"/><path d="M24 15l6 4-2 7h-8l-2-7 6-4z"/><path d="M18 19l-7-2M30 19l7-2M20 26l-4 8M28 26l4 8M16 34l-1 4M32 34l1 4"/></>,
    auto: <><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="5"/><path d="M24 7v12M9 30l11-4M39 30l-11-4"/><circle cx="24" cy="24" r="12"/></>,
    build: <><path d="M8 30h32"/><path d="M12 30c0-9 5-16 12-16s12 7 12 16"/><path d="M24 14V8"/><path d="M17 16v10M31 16v10"/><path d="M10 30v5h28v-5"/></>,
    pets: <><path d="M15 24c-3-2-5-6-3-9 2-3 6-1 7 3M33 24c3-2 5-6 3-9-2-3-6-1-7 3"/><path d="M16 22c2-5 14-5 16 0 3 8-1 17-8 17s-11-9-8-17z"/><circle cx="20" cy="27" r="1" fill="currentColor" stroke="none"/><circle cx="28" cy="27" r="1" fill="currentColor" stroke="none"/><path d="M21 33c2 2 4 2 6 0"/><path d="M23 31h2"/></>,
    more: <><circle cx="12" cy="24" r="2" fill="currentColor" stroke="none"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/><circle cx="36" cy="24" r="2" fill="currentColor" stroke="none"/></>,
  };

  return <svg {...common}>{icons[type]}</svg>;
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
