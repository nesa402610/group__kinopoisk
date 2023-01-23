export function AboutPage() {
  const authors = [
    {
      name: 'Феррис Аргайл',
      info: 'А тут я',
      checkList: ['Страница регистрации и авторизации', 'Страница "О проекте"', 'Создал базу приложения'],
    },
    {
      name: 'Владимир Матвеев',
      info: 'Тут крч ты пропишешь, что делал',
      checkList: ['Главная страница', 'Страница фильмов', 'Аренда хоста и настройка сервера'], // а это по пунктам, что делал
    },
  ]
  return (
    <div className="w-full container">
      <div>
        <h1 className="text-2xl font-bold text-center my-4">Над проектом работали</h1>
        <div className="flex gap-4">
          {authors.map((author) => (
            <div className="flex flex-col gap-2 bg-neutral-700 p-4 flex-1 rounded-lg">
              <h2 className="font-bold">{author.name}</h2>
              <div>
                {author.info}
              </div>
              <div className="bg-neutral-800 p-2 rounded-lg">
                <ul className="list-disc list-inside">
                  {author.checkList.map((item) => (
                    <li>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center my-4">Информация о проекте</h1>
        <div className="bg-neutral-700 p-4 rounded-lg">
          <p>Дипломный проект, разрабатываемый в команде. </p>
          <ul>
            <li>ReactJS</li>
            <li>Axios</li>
            <li>TailwindCSS</li>
            <li>ReactJS</li>
            <li>ReactJS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
