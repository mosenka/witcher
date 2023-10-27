// скрипт для активации карты при наведении (актуально если на макете не более 3х меток)

export const map = () => {

	const apikey = 'f0235302-22bd-45dc-a933-5ef9c7d6e6f0';
	const url = `https://api-maps.yandex.ru/2.1/?apikey=${apikey}&lang=ru_RU`;

	const mapWrapper = document.querySelector('.js--map-wrapper');
	if(!mapWrapper) return;

	const mapId = mapWrapper.querySelector('.map__container').id;
	if(!mapId) return;

	const centerPoints = [55.72290181753218,37.769341610642485];
	const placePointsArr = [
		[55.718982083193815,37.76770476300049],
		[55.72161028219671,37.76901368099971],
		[55.723136251726196,37.77386311489866]

	];

	const mapCardContent = '<div class="contact-item__title">Режим работы</div><div class="contact-item__text"><p>Пн-Пт 8:00 - 18:00</p><p>Сб 10:00 - 14:00</p></div>';

	ymap(mapWrapper, mapId, url);

	function ymap(mapWrapper, id, url ) {
		let check_if_load = false;

		mapWrapper.addEventListener('mouseenter', function (e) {
			const spinner = mapWrapper.querySelector('.loader');

			if (!check_if_load) {

				check_if_load = true;
				spinner.classList.add('is-active');

				loadScript(url, function () {
					ymaps.load(() => init(spinner, id, centerPoints));
				});

			}
		})
		mapWrapper.addEventListener('click', function (e) {
			const spinner = mapWrapper.querySelector('.loader');

			if (!check_if_load) {

				check_if_load = true;
				spinner.classList.add('is-active');

				loadScript(url, function () {
					ymaps.load(() => init(spinner, id, centerPoints));
				});

			}
		})
	}

	function init(spinner, id) {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		let myMap = new ymaps.Map(id, {
			center: centerPoints,
			zoom: 15,
			controls: ['smallMapDefaultSet']
		})

		const myIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-icon"></div>');

		const placemarkSettings = [
			{
				balloonContent: mapCardContent,
			}, {
				hideIconOnBalloonOpen: false,
				iconLayout: myIconContentLayout,
				iconShape: {
					type: 'Circle',
					coordinates: [0, 0],
					radius: 25
				},

			}
		]

		placePointsArr.forEach(placePoints => {
			myMap.geoObjects.add(new ymaps.Placemark(placePoints, ...placemarkSettings ));

		})




		myMap.controls.remove('searchControl').remove('typeSelector').remove('rulerControl').remove('routeButtonControl');

		let layer = myMap.layers.get(0).get(0);

		waitForTilesLoad(layer).then(function () {
			spinner.classList.remove('is-active');
		});

		return myMap;

	}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
	function waitForTilesLoad(layer) {
		return new ymaps.vow.Promise(function (resolve, reject) {
			var tc = getTileContainer(layer), readyAll = true;
			tc.tiles.each(function (tile, number) {
				if (!tile.isReady()) {
					readyAll = false;
				}
			});

			if (readyAll) {
				resolve();
			} else {
				tc.events.once("ready", function () {
					resolve();
				});
			}
		});
	}

	function getTileContainer(layer) {
		for (var k in layer) {
			if (layer.hasOwnProperty(k)) {
				if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
					|| layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
					return layer[k];
				}
			}
		}
		return null;
	}


// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
	function loadScript(url, callback) {
		if (isLoadingMapScript(url)) {
			callback();
			return;
		}

		var script = document.createElement("script");


		if (script.readyState) {  // IE
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			}
		} else {  // Другие браузеры
			script.onload = function () {
				callback();
			};
		}

		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}

	function isLoadingMapScript(url) {
		const scriptsArr = document.querySelectorAll('script');

		for (const item of scriptsArr) {
			if (item.src === url) {
				return true;
			}
		}

		return false;
	}
}








