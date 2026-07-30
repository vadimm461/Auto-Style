import { Bell, BriefcaseBusiness, Building2, Car, ChevronDown, Heart, Home, Menu, MessageCircle, Plus, Search, ShoppingBag, ShoppingCart, Store, User } from 'lucide-react';

const img = (id, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const categories = [
  {name:'Электроника',image:img('photo-1498049794561-7780e7231661',500)},
  {name:'Одежда и обувь',image:img('photo-1445205170230-053b83016050',500)},
  {name:'Дом и сад',image:img('photo-1416879595882-3373a0480b5b',500)},
  {name:'Красота',image:img('photo-1596462502278-27bfdc403348',500)},
  {name:'Детские товары',image:img('photo-1596461404969-9ae70f2830c1',500)},
  {name:'Спорт',image:img('photo-1517836357463-d25dfeac3438',500)},
  {name:'Автотовары',image:img('photo-1486262715619-67b85e0b08d3',500)},
  {name:'Строительство',image:img('photo-1504307651254-35680f356dfd',500)}
];

const products = [
  {name:'Смартфон Galaxy',price:'15 990 ₽',image:img('photo-1511707171634-5f897ff02aa9')},
  {name:'Букет из 25 тюльпанов',price:'1 590 ₽',image:img('photo-1490750967868-88aa4486c946')},
  {name:'Радиоуправляемый внедорожник',price:'2 490 ₽',image:img('photo-1594787318286-3d835c1d207f')},
  {name:'Смарт-часы',price:'4 990 ₽',image:img('photo-1523275335684-37898b6baf30')},
  {name:'Городской рюкзак',price:'1 290 ₽',image:img('photo-1553062407-98eeb64c6a62')}
];

const stores = [
  {name:'AutoStyle',category:'Автотовары',rating:'5.0',reviews:486,image:img('photo-1486262715619-67b85e0b08d3'),badge:'TOP'},
  {name:'Green Home',category:'Дом и сад',rating:'4.9',reviews:312,image:img('photo-1416879595882-3373a0480b5b'),badge:'TOP'},
  {name:'Tech Point',category:'Электроника',rating:'4.9',reviews:278,image:img('photo-1441986300917-64674bd600d8'),badge:'TOP'},
  {name:'Kids City',category:'Детские товары',rating:'4.8',reviews:241,image:img('photo-1596461404969-9ae70f2830c1'),badge:'TOP'},
  {name:'Beauty Room',category:'Красота',rating:'4.8',reviews:198,image:img('photo-1596462502278-27bfdc403348'),badge:'TOP'}
];

const autoOffers = [
  {name:'Skoda Octavia 2019',price:'16 900 $',image:img('photo-1503376780353-7e6692767b70'),badge:'AS Auto',meta:'Бензин · Автомат · 118 000 км'},
  {name:'BMW X5 2017',price:'29 500 $',image:img('photo-1555215695-3004980ad54e'),badge:'AS Auto',meta:'Дизель · Автомат · 164 000 км'},
  {name:'Toyota Camry 2020',price:'24 300 $',image:img('photo-1549317661-bd32c8ce0db2'),badge:'AS Auto',meta:'Бензин · Автомат · 92 000 км'},
  {name:'Mercedes-Benz Sprinter',price:'22 800 $',image:img('photo-1525609004556-c46c7d6cf023'),badge:'AS Auto',meta:'Дизель · Механика · 210 000 км'},
  {name:'Yamaha MT-07',price:'7 600 $',image:img('photo-1558981806-ec527fa84c39'),badge:'AS Auto',meta:'689 см³ · 2021 год'}
];

const jobOffers = [
  {name:'Менеджер по продажам',price:'от 12 000 ₽',image:img('photo-1521737711867-e3b97375f902'),badge:'AS Работа',meta:'Полный день · Тирасполь'},
  {name:'Водитель-экспедитор',price:'от 15 000 ₽',image:img('photo-1501339847302-ac426a4a7cbb'),badge:'AS Работа',meta:'Опыт от 1 года · Бендеры'},
  {name:'Продавец-консультант',price:'от 9 500 ₽',image:img('photo-1441986300917-64674bd600d8'),badge:'AS Работа',meta:'Сменный график · Тирасполь'},
  {name:'SMM-специалист',price:'от 11 000 ₽',image:img('photo-1611162617474-5b21e879e113'),badge:'AS Работа',meta:'Удалённо · Частичная занятость'},
  {name:'Автомеханик',price:'от 14 000 ₽',image:img('photo-1487754180451-c456f719a1fc'),badge:'AS Работа',meta:'Полный день · Рыбница'}
];

const services = [
  {key:'market',icon:ShoppingBag,title:'AS Market',text:'Товары от магазинов и частных продавцов',tags:['Магазины','Популярное','Акции'],action:'Перейти к товарам'},
  {key:'auto',icon:Car,title:'AS Auto',text:'Автомобили, мотоциклы, запчасти и спецтехника',tags:['Легковые','Мото','Запчасти'],action:'Смотреть авто'},
  {key:'estate',icon:Building2,title:'AS Недвижимость',text:'Квартиры, дома, участки и коммерческие объекты',tags:['Продажа','Аренда','Новостройки'],action:'Найти недвижимость'},
  {key:'jobs',icon:BriefcaseBusiness,title:'AS Работа',text:'Вакансии, резюме, подработка и удалённая работа',tags:['Вакансии','Резюме','Без опыта'],action:'Найти работу'}
];

const headerStyles = `
.header{height:82px!important;background:#07100d!important;border-bottom:1px solid rgba(255,255,255,.08)!important;padding:0 24px!important;position:sticky!important;top:0!important;z-index:50!important;color:#fff!important}
.header-inner{width:100%;max-width:1600px;height:100%;margin:0 auto;display:flex;align-items:center;gap:18px}
.header .logo{display:flex;align-items:center;gap:10px;min-width:230px;color:#fff;text-decoration:none}
.header .logo b{font-size:44px;line-height:1;font-style:italic;font-weight:900;color:#38b817;letter-spacing:-4px}
.header .logo span{font-size:21px;font-weight:900;letter-spacing:3px;line-height:1;color:#fff}
.header .logo small{display:block;margin-top:5px;font-size:9px;letter-spacing:.1px;font-weight:500;color:#dce3df}
.header .catalog{height:48px;display:flex;align-items:center;gap:10px;padding:0 17px;border:0;border-radius:10px;background:linear-gradient(135deg,#38b817,#218d08);color:#fff;font-weight:800;white-space:nowrap}
.header .search{height:48px;flex:1;display:flex;align-items:center;padding:0!important;border:0!important;border-radius:10px!important;overflow:hidden;background:#fff!important}
.header .search input{height:100%;flex:1;padding:0 18px;border:0;outline:0;background:#fff;color:#141414;font-size:14px}
.header .search button{width:52px;height:100%;border:0;background:linear-gradient(135deg,#38b817,#218d08);color:#fff;display:grid;place-items:center}
.header .top-actions{display:flex;align-items:stretch;gap:4px}
.header-action{position:relative;min-width:82px;height:58px;border:0;background:transparent;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:10px;border-radius:10px}
.header-action:hover{background:rgba(255,255,255,.07)}
.header-action-icon{position:relative;display:grid;place-items:center}
.header-action-icon svg{width:23px;height:23px}
.header-action-icon b{position:absolute;right:-9px;top:-8px;min-width:17px;height:17px;padding:0 4px;border-radius:999px;background:#39b817;color:#fff;font-size:10px;display:grid;place-items:center}
@media(max-width:1050px){.header .logo{min-width:185px}.header .logo b{font-size:38px}.header .logo span{font-size:18px}.header-action{min-width:60px}.header-action>span:last-child{display:none}}
@media(max-width:760px){.header{height:auto!important;padding:12px 14px!important}.header-inner{display:grid;grid-template-columns:1fr auto;gap:10px}.header .logo{min-width:0}.header .logo b{font-size:36px}.header .logo span{font-size:17px}.header .catalog{height:42px;padding:0 13px}.header .catalog svg:last-child{display:none}.header .search{grid-column:1/-1;grid-row:2;height:46px}.header .top-actions{display:none}}
`;

function CardPhoto({src,alt}){
  return <div className="photo"><img src={src} alt={alt} loading="lazy"/></div>;
}

function OfferCards({items}){
  return <div className="products">
    {items.map(item=><article className="product" key={item.name}>
      <div className="discount">{item.badge}</div>
      <button className="fav">♡</button>
      <CardPhoto src={item.image} alt={item.name}/>
      <strong>{item.price}</strong>
      <p>{item.name}</p>
      <small>{item.meta}</small>
    </article>)}
  </div>;
}

function HeaderAction({icon:Icon,label,badge}){
  return <button className="header-action">
    <span className="header-action-icon"><Icon/>{badge ? <b>{badge}</b> : null}</span>
    <span>{label}</span>
  </button>;
}

export default function App(){
  return <div className="app">
    <style>{headerStyles}</style>
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#" aria-label="AS Market">
          <b>AS</b>
          <span>MARKET<small>всё для жизни и бизнеса</small></span>
        </a>
        <button className="catalog"><Menu size={21}/><span>Каталог</span><ChevronDown size={17}/></button>
        <label className="search">
          <input placeholder="Поиск по товарам, магазинам, категориям..."/>
          <button aria-label="Найти"><Search size={22}/></button>
        </label>
        <nav className="top-actions" aria-label="Пользовательское меню">
          <HeaderAction icon={Heart} label="Избранное"/>
          <HeaderAction icon={Bell} label="Уведомления" badge="3"/>
          <HeaderAction icon={ShoppingCart} label="Корзина" badge="4"/>
          <HeaderAction icon={User} label="Профиль"/>
        </nav>
      </div>
    </header>

    <main>
      <section className="search-modes" aria-label="Разделы поиска">
        <button className="active"><ShoppingBag/>Товары</button><button><Car/>Авто</button><button><Building2/>Недвижимость</button><button><BriefcaseBusiness/>Работа</button>
      </section>

      <section className="hero-grid">
        <div className="hero">
          <div className="hero-copy"><h1>Весь регион<br/>в одном <em>AS Market</em></h1><p>Покупай, продавай, находи автомобили, жильё и работу</p><div className="buttons"><button>Начать поиск</button><button className="light">Разместить объявление</button></div></div>
          <div className="hero-art"><img src={img('photo-1607082348824-0a96f2a4b9da',1200)} alt="Покупки в AS Market"/></div>
        </div>
        <aside className="vip"><h2>Продвигай свой магазин</h2><p>VIP-рамка, приоритет в поиске и аналитика продаж</p><div className="crown">♛</div><button>Подробнее</button></aside>
      </section>

      <section className="ecosystem-section">
        <div className="section-title"><div><span className="eyebrow">Экосистема AS</span><h2>Выбери нужный сервис</h2></div></div>
        <div className="ecosystem-grid">{services.map(({key,icon:Icon,title,text,tags,action})=><article className={`service-card ${key}`} key={key}><div className="service-head"><div className="service-icon"><Icon/></div><span>Открыть →</span></div><h3>{title}</h3><p>{text}</p><div className="service-tags">{tags.map(tag=><small key={tag}>{tag}</small>)}</div><button>{action}</button></article>)}</div>
      </section>

      <section className="section"><div className="section-title"><h2>Популярные категории</h2><a>Все категории</a></div><div className="categories">{categories.map(category=><button key={category.name}><img src={category.image} alt="" loading="lazy"/><span>{category.name}</span></button>)}</div></section>

      <section className="feature-grid"><article><h3>Магазины</h3><p>Тысячи магазинов на одной площадке</p><b>Смотреть все →</b></article><article><h3>VIP-магазины</h3><p>Лучшие продавцы с особыми условиями</p><b>Смотреть все →</b></article><article><h3>Барахолка</h3><p>Покупай и продавай б/у вещи легко</p><b>Перейти →</b></article><article><h3>Новые объявления</h3><p>Самые свежие предложения рядом с тобой</p><b>Смотреть новые →</b></article><article><h3>Акции и скидки</h3><p>Выгодные предложения каждый день</p><b>Смотреть все →</b></article></section>

      <section className="section"><div className="section-title"><h2>Популярные товары</h2><a>Смотреть все</a></div><div className="products">{products.map((p,i)=><article className="product" key={p.name}><div className="discount">-{10+i*5}%</div><button className="fav">♡</button><CardPhoto src={p.image} alt={p.name}/><strong>{p.price}</strong><p>{p.name}</p><small>⭐ 4.{8-i%3}</small></article>)}</div></section>

      <section className="section"><div className="section-title"><h2>Магазины с лучшим рейтингом</h2><a>Все магазины</a></div><div className="products">{stores.map(store=><article className="product store-product" key={store.name}><div className="discount">{store.badge}</div><button className="fav">♡</button><CardPhoto src={store.image} alt={store.name}/><strong>⭐ {store.rating}</strong><p>{store.name}</p><small>{store.category} · {store.reviews} отзывов</small></article>)}</div></section>

      <section className="section"><div className="section-title"><h2>Случайные предложения AS Auto</h2><a>Все автомобили</a></div><OfferCards items={autoOffers}/></section>
      <section className="section"><div className="section-title"><h2>Случайные предложения AS Работа</h2><a>Все вакансии</a></div><OfferCards items={jobOffers}/></section>
    </main>

    <nav className="mobile-nav"><button><Home/><span>Главная</span></button><button><Store/><span>Каталог</span></button><button className="sell"><Plus/></button><button><MessageCircle/><span>Чаты</span></button><button><User/><span>Профиль</span></button></nav>
  </div>;
}