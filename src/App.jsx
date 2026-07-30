import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Car,
  ChevronRight,
  Heart,
  Home,
  Menu,
  Package,
  Plus,
  Search,
  ShoppingCart,
  Smartphone,
  Sofa,
  Sparkles,
  Store,
  Tag,
  User,
  Wrench,
} from 'lucide-react';

const categories = [
  { name: 'Электроника', icon: Smartphone },
  { name: 'Дом и сад', icon: Sofa },
  { name: 'Автотовары', icon: Wrench },
  { name: 'Одежда', icon: Tag },
  { name: 'Красота', icon: Sparkles },
  { name: 'Детское', icon: Package },
  { name: 'Авто', icon: Car },
  { name: 'Недвижимость', icon: Building2 },
];

const popular = [
  { title: 'Смартфон Galaxy S25', price: '15 990 ₽', label: 'Хит', tone: 'violet' },
  { title: 'Набор инструментов', price: '2 490 ₽', label: '-20%', tone: 'green' },
  { title: 'Кресло для дома', price: '4 800 ₽', label: 'Новинка', tone: 'orange' },
  { title: 'Смарт-часы', price: '3 250 ₽', label: 'Хит', tone: 'blue' },
  { title: 'Городской рюкзак', price: '1 290 ₽', label: '-15%', tone: 'pink' },
];

const stores = [
  { name: 'AutoStyle', category: 'Автотовары', rating: '5.0', initials: 'AS' },
  { name: 'Tech Point', category: 'Электроника', rating: '4.9', initials: 'TP' },
  { name: 'Green Home', category: 'Дом и сад', rating: '4.9', initials: 'GH' },
  { name: 'Kids City', category: 'Детские товары', rating: '4.8', initials: 'KC' },
  { name: 'Beauty Room', category: 'Красота', rating: '4.8', initials: 'BR' },
];

const services = [
  {
    key: 'auto',
    icon: Car,
    eyebrow: 'AS Auto',
    title: 'Автомобили и транспорт',
    text: 'Легковые авто, мотоциклы, спецтехника и запчасти.',
    meta: '1 248 предложений',
    action: 'Смотреть авто',
  },
  {
    key: 'estate',
    icon: Building2,
    eyebrow: 'AS Недвижимость',
    title: 'Жильё и коммерция',
    text: 'Квартиры, дома, участки, аренда и коммерческие объекты.',
    meta: '684 объекта',
    action: 'Найти недвижимость',
  },
  {
    key: 'jobs',
    icon: BriefcaseBusiness,
    eyebrow: 'AS Работа',
    title: 'Вакансии и резюме',
    text: 'Работа рядом, подработка, удалённые вакансии и специалисты.',
    meta: '392 вакансии',
    action: 'Найти работу',
  },
];

function SectionHeader({ title, action = 'Все' }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <button className="text-link">{action}<ChevronRight /></button>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className={`product-visual ${item.tone}`}>
        <span className="product-label">{item.label}</span>
        <button className="heart-button" aria-label={`Добавить ${item.title} в избранное`}><Heart /></button>
        <Package aria-hidden="true" />
      </div>
      <div className="product-info">
        <strong>{item.price}</strong>
        <p>{item.title}</p>
        <button className="cart-button"><ShoppingCart />В корзину</button>
      </div>
    </article>
  );
}

function StoreCard({ store }) {
  return (
    <article className="store-card">
      <div className="store-logo">{store.initials}</div>
      <div className="store-copy">
        <strong>{store.name}</strong>
        <span>{store.category}</span>
        <small>★ {store.rating}</small>
      </div>
      <ChevronRight />
    </article>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="icon-button menu-button" aria-label="Открыть меню"><Menu /></button>
        <a className="brand" href="#top" aria-label="AS Market">
          <span className="brand-mark">AS</span>
          <span className="brand-name">Market</span>
        </a>
        <nav className="header-actions" aria-label="Пользовательское меню">
          <button className="icon-button" aria-label="Уведомления"><Bell /><b>3</b></button>
          <button className="icon-button" aria-label="Избранное"><Heart /></button>
          <button className="icon-button" aria-label="Корзина"><ShoppingCart /><b>4</b></button>
          <button className="icon-button" aria-label="Профиль"><User /></button>
        </nav>
      </header>

      <main id="top">
        <section className="search-section" aria-label="Поиск">
          <div className="search-copy">
            <span>Весь регион в одном месте</span>
            <h1>Что вы ищете?</h1>
          </div>
          <form className="main-search">
            <Search />
            <input aria-label="Поисковый запрос" placeholder="Товары, магазины, авто, жильё или работа" />
            <button type="submit">Найти</button>
          </form>
          <div className="search-chips">
            <button>Товары</button><button>Магазины</button><button>Авто</button><button>Недвижимость</button><button>Работа</button>
          </div>
        </section>

        <section className="hero-banner">
          <div>
            <span className="hero-kicker">AS Market</span>
            <h2>Покупай и продавай<br />по всему региону</h2>
            <p>Магазины, частные объявления и сервисы AS в одном приложении.</p>
            <div className="hero-actions">
              <button className="primary-button">Смотреть предложения</button>
              <button className="secondary-button"><Plus />Разместить объявление</button>
            </div>
          </div>
          <div className="hero-symbol" aria-hidden="true"><span>AS</span></div>
        </section>

        <section className="content-section categories-section">
          <SectionHeader title="Категории" action="Все категории" />
          <div className="category-list">
            {categories.map(({ name, icon: Icon }) => (
              <button className="category-item" key={name}>
                <span><Icon /></span>
                <b>{name}</b>
              </button>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader title="Популярное" />
          <div className="horizontal-grid product-grid">
            {popular.map(item => <ProductCard item={item} key={item.title} />)}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader title="Лучшие магазины" />
          <div className="horizontal-grid store-grid">
            {stores.map(store => <StoreCard store={store} key={store.name} />)}
          </div>
        </section>

        <section className="service-stack" aria-label="Сервисы AS">
          {services.map(({ key, icon: Icon, eyebrow, title, text, meta, action }) => (
            <article className={`service-banner ${key}`} key={key}>
              <div className="service-icon"><Icon /></div>
              <div className="service-content">
                <span>{eyebrow}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <small>{meta}</small>
              </div>
              <button>{action}<ChevronRight /></button>
            </article>
          ))}
        </section>
      </main>

      <nav className="bottom-nav" aria-label="Нижняя навигация">
        <button className="active"><Home /><span>Главная</span></button>
        <button><Search /><span>Поиск</span></button>
        <button className="add-button" aria-label="Разместить объявление"><Plus /></button>
        <button><Heart /><span>Избранное</span></button>
        <button><User /><span>Профиль</span></button>
      </nav>
    </div>
  );
}
