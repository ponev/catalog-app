const HomePage = () => (
  <>
    <h1>Тестовое задание</h1>
    <ol className="tz">
      <li>
        Реализовать с помощью React две страницы: каталог товаров и страницу
        отдельного товара;
      </li>
      <li>
        На странице каталога товаров должны присутствовать:
        <ul>
          <li>поле для поиска товара по названию</li>
          <li>блок с фильтрами</li>
          <li>список товаров</li>
          <li>пагинация для списка товаров</li>
        </ul>
      </li>
      <li>На странице товара выводить информацию о соответствующем товаре</li>
      <li>
        На странице каталога по клику на товар - выполнять переход на страницу
        товара
      </li>
    </ol>
    <hr />
    <p>
      В качестве сервиса для получения данных был использован -{' '}
      <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer">
        https://fakestoreapi.com/
      </a>
    </p>
    <p>Стек: React, React Hooks, Redux, React Router, Sass</p>
  </>
)

export default HomePage
