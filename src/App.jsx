const img = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const categories = [
  ['▦', 'Все категории'], ['◉', 'Электроника'], ['♟', 'Одежда и обувь'], ['♣', 'Дом и сад'],
  ['✿', 'Красота'], ['●', 'Детские товары'], ['⚽', 'Спорт и отдых'], ['◌', 'Автотовары'],
  ['▲', 'Строительство'], ['♙', 'Животные'], ['•••', 'Ещё'],
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

function HeaderAction({ icon, title, badge }) {
  return <button className="head-action"><span className="head-icon">{icon}{badge && <b>{badge}</b>}</span><small>{title}</small></button>;
}

function ProductCard({ item }) {
  return <article className="product-card">
    <div className="product-image">
      {item.discount && <span className="discount">{item.discount}</span>}
      <button className="fav">♡</button>
      <img src={item.image} alt={item.title} loading="lazy" />
    </div>
    <div className="product-body">
      <div className="price-line"><strong>{item.price}</strong>{item.old && <del>{item.old}</del>}</div>
      <p>{item.title}</p>
      <small className="rating">★ {item.rating}</small>
    </div>
  </article>;
}

function CarCard({ item }) {
  return <article className="car-card">
    <div className="car-image"><span>{item.year}</span><button>♡</button><img src={item.image} alt={item.title} loading="lazy" /></div>
    <strong>{item.price}</strong><p>{item.title}</p><small>{item.km}</small>
  </article>;
}

function SectionTitle({ children, action = 'Смотреть все' }) {
  return <div className="section-title"><h2>{children}</h2><button>{action}</button></div>;
}

export default function App() {
  return <div className="page">
    <header className="header">
      <a className="logo" href="#top"><b>AS</b><span>MARKET<small>всё для жизни и бизнеса</small></span></a>
      <button className="catalog">☰ <span>Каталог</span>⌄</button>
      <form className="header-search" onSubmit={e => e.preventDefault()}><input placeholder="Поиск по товарам, магазинам и объявлениям..."/><button>⌕</button></form>
      <nav className="header-actions">
        <HeaderAction icon="♡" title="Избранное" />
        <HeaderAction icon="♧" title="Уведомления" badge="3" />
        <HeaderAction icon="🛒" title="Корзина" badge="4" />
        <HeaderAction icon="♙" title="Войти / Профиль" />
      </nav>
    </header>

    <main id="top" className="layout">
      <div className="main-column">
        <section className="hero">
          <div className="hero-copy">
            <h1>Покупай и продавай<br/>что угодно на<br/><em>AS Market</em></h1>
            <p>Одна площадка для миллионов возможностей</p>
            <div className="hero-buttons"><button>К покупкам →</button><button className="outline">Стать продавцом</button></div>
            <div className="trust"><span>✓ Безопасные сделки</span><span>✓ Защита покупателей</span><span>◉ Поддержка 24/7</span><span>✓ Выгодные условия</span></div>
          </div>
          <div className="hero-art">
            <div className="blob one"></div><div className="blob two"></div>
            <div className="hero-items"><span>💐</span><span>📱</span><span>🧸</span><span>👜</span><span>🛠️</span><span>🚗</span></div>
          </div>
        </section>

        <section className="categories">
          {categories.map(([icon, name], i) => <button className={i === 0 ? 'active' : ''} key={name}><span>{icon}</span><small>{name}</small></button>)}
        </section>

        <section className="promo-grid">
          <article><h3>Магазины</h3><p>Тысячи магазинов<br/>на одной площадке</p><button>Смотреть все →</button><span>🏪</span></article>
          <article><h3>VIP-магазины</h3><p>Лучшие продавцы<br/>с особыми условиями</p><button>Смотреть все →</button><span>♛</span></article>
          <article><h3>Барахолка</h3><p>Покупай и продавай<br/>б/у вещи легко</p><button>Перейти →</button><span>🪑</span></article>
          <article><h3>Автомобили</h3><p>Новые и б/у авто<br/>по лучшим ценам</p><button>Смотреть авто →</button><span>🚘</span></article>
          <article><h3>Акции и скидки</h3><p>Выгодные предложения<br/>каждый день</p><button>Смотреть все →</button><span>%</span></article>
        </section>

        <div className="split-products">
          <section><SectionTitle>Популярные товары</SectionTitle><div className="cards-row">{products.map(p => <ProductCard item={p} key={p.title}/>)}</div></section>
          <section><SectionTitle>Б/у автомобили</SectionTitle><div className="cars-row">{cars.map(c => <CarCard item={c} key={c.title}/>)}</div></section>
        </div>

        <section className="benefits">
          <div><b>♡</b><span><strong>Безопасные сделки</strong><small>Проверяем продавцов</small></span></div>
          <div><b>▣</b><span><strong>Удобная доставка</strong><small>По всей стране и миру</small></span></div>
          <div><b>◉</b><span><strong>Поддержка 24/7</strong><small>Мы всегда на связи</small></span></div>
          <div><b>▭</b><span><strong>Простая оплата</strong><small>Карты и рассрочка</small></span></div>
        </section>
      </div>

      <aside className="sidebar">
        <section className="vip-card">
          <div><h2>Продвигай свой магазин</h2><p>VIP-рамка, приоритет в поиске и специальные места</p><button>Подробнее</button></div><span className="crown">♛<small>VIP</small></span>
          <div className="vip-features"><span>♕ VIP-магазин</span><span>◉ Продвижение</span><span>⌁ Аналитика</span></div>
          <div className="featured-store"><div className="round-logo">FS</div><div><strong>Flowers Shop <i>VIP</i></strong><small>Цветы и подарки</small><span>★ 4.9 · 1250 продаж</span></div><button>Перейти</button></div>
        </section>

        <section className="auto-side"><div><h2>🚘 AS CARS</h2><p>Новые и б/у автомобили<br/>в одном месте</p><button>Перейти к авто</button></div><img src={img('photo-1555215695-3004980ad54e', 900)} alt="AS Cars"/><div className="auto-links"><span>Новые авто</span><span>С пробегом</span><span>Подбор авто</span><span>Автосалоны</span></div></section>

        <section className="purple-banner"><div><strong>Станьте VIP-продавцом<br/>и увеличьте продажи!</strong><button>Подробнее</button></div><span>VIP</span></section>

        <section className="new-stores"><SectionTitle>Новые магазины</SectionTitle><div className="store-list">{stores.map(([name, cat, initials, rating]) => <article key={name}><div>{initials}</div><strong>{name}</strong><small>{cat}</small><span>★ {rating}</span></article>)}</div></section>

        <section className="app-box"><div><strong>Приложение AS Market</strong><p>Покупайте и продавайте<br/>со смартфона</p></div><div className="store-buttons"><button> App Store</button><button>▶ Google Play</button></div><div className="qr">▦</div></section>
      </aside>
    </main>

    <nav className="mobile-nav"><button className="active">⌂<small>Главная</small></button><button>▦<small>Каталог</small></button><button className="sell">＋</button><button>♡<small>Чаты</small></button><button>♙<small>Профиль</small></button></nav>
  </div>;
}
