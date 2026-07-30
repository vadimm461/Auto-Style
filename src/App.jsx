import { Bell, BriefcaseBusiness, Building2, Car, Heart, Home, MessageCircle, Plus, Search, ShoppingBag, ShoppingCart, Store, User } from 'lucide-react';

const categories = ['Электроника','Одежда и обувь','Дом и сад','Красота','Детские товары','Спорт','Автотовары','Строительство'];
const products = [
  {name:'Смартфон Galaxy',price:'15 990 ₽',emoji:'📱'},
  {name:'Букет из 25 тюльпанов',price:'1 590 ₽',emoji:'💐'},
  {name:'Радиоуправляемый внедорожник',price:'2 490 ₽',emoji:'🚙'},
  {name:'Смарт-часы',price:'4 990 ₽',emoji:'⌚'},
  {name:'Городской рюкзак',price:'1 290 ₽',emoji:'🎒'}
];

const stores = [
  {name:'AutoStyle',category:'Автотовары',rating:'5.0',reviews:486,emoji:'🛞',badge:'TOP'},
  {name:'Green Home',category:'Дом и сад',rating:'4.9',reviews:312,emoji:'🪴',badge:'TOP'},
  {name:'Tech Point',category:'Электроника',rating:'4.9',reviews:278,emoji:'💻',badge:'TOP'},
  {name:'Kids City',category:'Детские товары',rating:'4.8',reviews:241,emoji:'🧸',badge:'TOP'},
  {name:'Beauty Room',category:'Красота',rating:'4.8',reviews:198,emoji:'🧴',badge:'TOP'}
];

const services = [
  {
    key:'market',
    icon: ShoppingBag,
    title:'AS Market',
    text:'Товары от магазинов и частных продавцов',
    tags:['Магазины','Популярное','Акции'],
    action:'Перейти к товарам'
  },
  {
    key:'auto',
    icon: Car,
    title:'AS Auto',
    text:'Автомобили, мотоциклы, запчасти и спецтехника',
    tags:['Легковые','Мото','Запчасти'],
    action:'Смотреть авто'
  },
  {
    key:'estate',
    icon: Building2,
    title:'AS Недвижимость',
    text:'Квартиры, дома, участки и коммерческие объекты',
    tags:['Продажа','Аренда','Новостройки'],
    action:'Найти недвижимость'
  },
  {
    key:'jobs',
    icon: BriefcaseBusiness,
    title:'AS Работа',
    text:'Вакансии, резюме, подработка и удалённая работа',
    tags:['Вакансии','Резюме','Без опыта'],
    action:'Найти работу'
  }
];

export default function App(){
  return <div className="app">
    <header className="header">
      <div className="logo"><b>AS</b><span>MARKET<small>всё для жизни и бизнеса</small></span></div>
      <button className="catalog">☰ Каталог</button>
      <div className="search"><input placeholder="Поиск товаров, авто, недвижимости и работы..."/><Search size={20}/></div>
      <nav className="top-actions"><Heart/><Bell/><ShoppingCart/><User/></nav>
    </header>

    <main>
      <section className="search-modes" aria-label="Разделы поиска">
        <button className="active"><ShoppingBag/>Товары</button>
        <button><Car/>Авто</button>
        <button><Building2/>Недвижимость</button>
        <button><BriefcaseBusiness/>Работа</button>
      </section>

      <section className="hero-grid">
        <div className="hero">
          <div><h1>Весь регион<br/>в одном <em>AS Market</em></h1><p>Покупай, продавай, находи автомобили, жильё и работу</p><div className="buttons"><button>Начать поиск</button><button className="light">Разместить объявление</button></div></div>
          <div className="hero-art">💐 📱 🛋️ 🧸 🚗 🏠 💼 🛞</div>
        </div>
        <aside className="vip"><h2>Продвигай свой магазин</h2><p>VIP-рамка, приоритет в поиске и аналитика продаж</p><div className="crown">♛</div><button>Подробнее</button></aside>
      </section>

      <section className="ecosystem-section">
        <div className="section-title"><div><span className="eyebrow">Экосистема AS</span><h2>Выбери нужный сервис</h2></div></div>
        <div className="ecosystem-grid">
          {services.map(({key,icon:Icon,title,text,tags,action})=><article className={`service-card ${key}`} key={key}>
            <div className="service-head"><div className="service-icon"><Icon/></div><span>Открыть →</span></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="service-tags">{tags.map(tag=><small key={tag}>{tag}</small>)}</div>
            <button>{action}</button>
          </article>)}
        </div>
      </section>

      <section className="section"><div className="section-title"><h2>Популярные категории</h2><a>Все категории</a></div><div className="categories">{categories.map((c,i)=><button key={c}><span>{['💻','👕','🪴','🧴','🧸','⚽','🛞','👷'][i]}</span>{c}</button>)}</div></section>

      <section className="feature-grid">
        <article><h3>Магазины</h3><p>Тысячи магазинов на одной площадке</p><b>Смотреть все →</b></article>
        <article><h3>VIP-магазины</h3><p>Лучшие продавцы с особыми условиями</p><b>Смотреть все →</b></article>
        <article><h3>Барахолка</h3><p>Покупай и продавай б/у вещи легко</p><b>Перейти →</b></article>
        <article><h3>Новые объявления</h3><p>Самые свежие предложения рядом с тобой</p><b>Смотреть новые →</b></article>
        <article><h3>Акции и скидки</h3><p>Выгодные предложения каждый день</p><b>Смотреть все →</b></article>
      </section>

      <section className="section"><div className="section-title"><h2>Популярные товары</h2><a>Смотреть все</a></div><div className="products">{products.map((p,i)=><article className="product" key={p.name}><div className="discount">-{10+i*5}%</div><button className="fav">♡</button><div className="photo">{p.emoji}</div><strong>{p.price}</strong><p>{p.name}</p><small>⭐ 4.{8-i%3}</small></article>)}</div></section>

      <section className="section">
        <div className="section-title"><h2>Магазины с лучшим рейтингом</h2><a>Все магазины</a></div>
        <div className="products">
          {stores.map(store=><article className="product store-product" key={store.name}>
            <div className="discount">{store.badge}</div>
            <button className="fav">♡</button>
            <div className="photo">{store.emoji}</div>
            <strong>⭐ {store.rating}</strong>
            <p>{store.name}</p>
            <small>{store.category} · {store.reviews} отзывов</small>
          </article>)}
        </div>
      </section>

      <section className="cars"><div><Car/><h2>AS Auto</h2><p>Новые и б/у автомобили, мотоциклы и запчасти</p><button>Перейти в AS Auto</button></div><div className="car-art">🚘</div></section>
    </main>

    <nav className="mobile-nav"><button><Home/><span>Главная</span></button><button><Store/><span>Каталог</span></button><button className="sell"><Plus/></button><button><MessageCircle/><span>Чаты</span></button><button><User/><span>Профиль</span></button></nav>
  </div>
}