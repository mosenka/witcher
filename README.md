# Тестовое задание #


## DEMO ##

- [Главная](https://mosenka.github.io/witcher/dist/)
- [Форма](https://mosenka.github.io/witcher/dist/form.html)



### запуск ###
Скрипты вынесены в package.json раздел scripts

Запуск в режиме разработки
```npm
npm run dev
```

Запуск в режиме продакшн c минификацией файлов и конвертация изображений
```npm
npm run build
```

Генерация svg-sprite
```npm
npm run svgSprive
```

Запуск валидатора
```npm
npm run validate:html
```

Заархивировать проект в zip для отправки
```npm
npm run zip
```

Можно запускать через **package.json scripts**

## Пути ##

Исходные файлы директория **./src/**
- **blocks** - библиотека компонентов (по БЭМ)
- **pug** html шаблоны страниц (реализовано через [gulp-pug]("https://www.npmjs.com/package/gulp-pug") )
- **scss** общие настройки стилей
- **js**  общие скрипты  подключен *WEBPACK* и **import**
- **img** картинки
- **svgicons** исходники svg изображений для генерации спрайта [gulp-svg-sprite]("https://www.npmjs.com/package/gulp-svg-sprite")
- **assets** файлы библиотек (js и css) генерируются в папку **dist/assets**


Оптимизированные файлы директория **./dist/**

- **assets** файлы библиотек
- **css** стили
  - основные **style.css**
  - шрифты **font.css**
- **fonts** шрифты
- **img** изображения
- **js** скрипты

## BLOCKS ##
библиотека копонентов (по БЭМ)
- **components** - отдельные компоненты
- **sections** - секции страниц

## PUG ##
**структура**
- **pages** - страницы
- **layouts/default.pug** - общий шаблон для всех страниц


## SCSS ##
- **fonts.scss**  - подключение шрифтов (содержит два примера для шрифта из google fonts и для шрифта из файла)
- **styles.scss** - общий файл
- **base/_general** базовые стили
- **base/_typography** стили заголовков и стилей
- **helpers/** - содержит хелперы
  - _vars - глобальные переменные
  - _mixins - миксины
  - _functions - функции
  - _breakpoint - функции для адаптива

## svgicons ##
- при сохранении в данную папку файл автоматически добавляется в общий файл **img/icons.svg**
- для дальнейшей стилизации svg через css необходимо очистить все атребуты кроме **viewBox** и в дальнейшем стилизовать иконки через css *width, height, fill/stroke*
- далее в pug использовать через миксин *+svg("ИМЯ_ФАЙЛА")*


## Библиотеки ##
- [swiper](https://swiperjs.com/)
- [Fancybox](https://fancyapps.com/fancybox/getting-started/) - для popup
- [inputmask](https://robinherbots.github.io/Inputmask/) - для валидации инпутов с номерами телефонов и email





