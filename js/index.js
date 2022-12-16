/*map*/
type = "text/javascript" >
  ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.143054569569955,61.4271224999999],
    zoom: 17
  });

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

    myPlacemarkWithContent = new ymaps.Placemark([55.143054569569955,61.4271224999999], {
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/Subtract.svg',
      iconImageSize: [48, 48],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects.add(myPlacemarkWithContent);
};