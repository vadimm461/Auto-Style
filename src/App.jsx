import { Bell, Car, Heart, Home, MessageCircle, Plus, Search, ShoppingCart, Store, User } from 'lucide-react';

const categories = ['Электроника','Одежда и обувь','Дом и сад','Красота','Детские товары','Спорт','Автотовары','Строительство'];
const products = [
  {name:'Смартфон Galaxy',price:'15 990 ₽',emoji:'📱'},
  {name:'Букет из 25 тюльпанов',price:'1 590 ₽',emoji:'💐'},
  {name:'Радиоуправляемый внедорожник',price:'2 490 ₽',emoji:'🚙'},
  {name:'Смарт-часы',price:'4 990 ₽',emoji:'⌚'},
  {name:'Городской рюкзак',price:'1 290 ₽',emoji:'🎒'}
];

export default function App(){
  return <div className="app">
    <header className="header">
      <div className="logo"><b>AS</b><span>MARKET<small>всё для жизни и бизнеса</small></span></div>
      <button className="catalog">☰ Каталог</button>
      <div className="search"><input placeholder="Поиск по товарам, магазинам и объявлениям..."/><Search size={20}/></div>
      <nav className="top-actions"><Heart/><Bell/><ShoppingCart/><User/></nav>
    </header>

    <main>
      <section className="hero-grid">
        <div className="hero">
          <div><h1>Покупай и продавай<br/>что угодно на <em>AS Market</em></h1><p>Одна площадка для миллионов возможностей</p><div className="buttons"><button>К покупкам</button><button className="light">Стать продавцом</button></div></div>
          <div className="hero-art">💐 📱 🛋️ 🧸 🚗 👜 🤖 🛞</div>
        </div>
        <aside className="vip"><h2>Продвигай свой магазин</h2><p>VIP-рамка, приоритет в поиске и аналитика продаж</p><div className="crown">♛</div><button>Подробнее</button></aside>
      </section>

      <section className="categories">{categories.map((c,i)=><button key={c}><span>{['💻','👕','🪴','🧴','🧸','⚽','🛞','👷'][i]}</span>{c}</button>)}</section>

      <section className="feature-grid">
        <article><h3>Магазины</h3><p>Тысячи магазинов на одной площадке</p><b>Смотреть все →</b></article>
        <article><h3>VIP-магазины</h3><p>Лучшие продавцы с особыми условиями</p><b>Смотреть все →</b></article>
        <article><h3>Барахолка</h3><p>Покупай и продавай б/у вещи легко</p><b>Перейти →</b></article>
        <article><h3>Автомобили</h3><p>Новые и б/у авто по лучшим ценам</p><b>Смотреть авто →</b></article>
        <article><h3>Акции и скидки</h3><p>Выгодные предложения каждый день</p><b>Смотреть все →</b></article>
      </section>

      <section className="section"><div className="section-title"><h2>Популярные товары</h2><a>Смотреть все</a></div><div className="products">{products.map((p,i)=><article className="product" key={p.name}><div className="discount">-{10+i*5}%</div><button className="fav">♡</button><div className="photo">{p.emoji}</div><strong>{p.price}</strong><p>{p.name}</p><small>⭐ 4.{8-i%3}</small></article>)}</div></section>

      <section className="cars"><div><Car/><h2>AS CARS</h2><p>Новые и б/у автомобили в одном месте</p><button>Перейти к авто</button></div><div className="car-art">🚘</div></section>
    </main>

    <nav className="mobile-nav"><button><Home/><span>Главная</span></button><button><Store/><span>Каталог</span></button><button className="sell"><Plus/></button><button><MessageCircle/><span>Чаты</span></button><button><User/><span>Профиль</span></button></nav>
  </div>
}
