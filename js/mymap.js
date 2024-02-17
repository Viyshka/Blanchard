//карта
ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map ("map", {
        center: [55.405590, 33.888706],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );
  myMap.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark([55.405590, 33.888706], {}, {
      iconLayout:'default#image',
      iconImageHref: 'img/Subtract.svg',
      iconImageSize: [30,42],
      iconImageOffset: [-3,-42],
    });

  myMap.geoObjects.add(myPlacemark);
}
