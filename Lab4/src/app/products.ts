export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  pic: string;
}

export const products = [
  {
    id: 1,
    name: 'ASUS TUF Gaming A15',
    price: 369000,
    description: 'Игровой ноутбук черный',
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg'
  },
  {
    id: 2,
    name: 'Apple AirPods',
    price: 67000,
    description: ' Внутриканальные наушники',
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg'
  },
  {
    id: 3,
    name: 'Maxmoll MM3703',
    price: 1900,
    description: 'Светодиодная лента',
    url: 'https://kaspi.kz/shop/p/maxmoll-mm3703-1-7-m-102805780/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/h47/47025331535902/maxmoll-mm3703-1-7-m-102805780-1.jpg'
  },
  {
    id: 4,
    name: 'Xiaomi Mijia Electric Shaver S500',
    price: 19200,
    description: 'Роторная бритва от аккумулятора', 
    url: 'https://kaspi.kz/shop/p/xiaomi-mijia-electric-shaver-s500-rotornaja-ot-akkumuljatora-100328703/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/heb/47425142947870/xiaomi-mijia-electric-shaver-s500-100328703-1-Container.jpg'
  },
  {
    id: 5, 
    name: 'Яндекс Станция Мини', 
    price: 43800, 
    description: 'умная колонка с часами',
    url: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-belyi-102580001/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h05/46546975817758/yandeks-novaya-stantsiya-mini-s-chasami-seryi-102580001-1.jpg'
  },
  {
    id:6, 
    name:'Samsung WW60A4S00CE', 
    price:200000,
    description:'стиральная машинка белая', 
    url:'https://kaspi.kz/shop/p/samsung-ww60a4s00ce-ld-belyi-102608083/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h7e/49726905352222/stiralnaa-masina-samsung-ww60a4s00ce-ld-white-102608083-1.jpg'
  },
  {
    id:7, 
    name:'Trend комплект 6789999',
    price:15900, 
    description:'стол туристический + 4 стульчика', 
    url:'https://kaspi.kz/shop/p/trend-komplekt-6789999-stol-turisticheskii-4-stul-chika-101899561/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/h90/50421566668830/stol-turisticeskij-4stulcika-101899561-1-Container.jpg'

  },{
    id:8, 
    name:'Hisense H20MOWP1', 
    price:30900, 
    description:'микроволновая печь белая', 
    url:'https://kaspi.kz/shop/p/hisense-h20mowp1-belyi-106582662/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/ha4/62707818758174/h20mobs2-h20mowp1-106582662-1.jpg'
  },
  {
    id:9, 
    name:'Kingston DTXM/128GB', 
    price:4000, 
    description: 'USB Flash карта', 
    url:'https://kaspi.kz/shop/p/kingston-dtxm-128gb-128-gb-105073150/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h18/51996755689502/kingston-dtxm-128gb-128-gb-105073150-1.jpg'
  },
  {
    id: 10, 
    name:'TT ТЭ-5КП', 
    price:10800, 
    description:'Инфракрасный обогреватель красный', 
    url:'https://kaspi.kz/shop/p/infrakrasnyi-obogrevatel-tt-te-5kp-krasnyi-102144782/?c=750000000&ref=shared_link#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h27/44904909340702/tt-te-5kp-krasnyj-102144782-1-Container.jpg'
  },
];
/*
 1)id: 1, name: ASUS TUF Gaming A15, price: 369000, description: Игровой ноутбук черный, url: https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000&ref=shared_link#!/item
 2)id: 2, name: Apple AirPods, price: 67000, description: Внутриканальные наушники, url: https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000&ref=shared_link#!/item
 3)id: 3, name: Maxmoll MM3703, price: 1900, description: Светодиодная лента, url: https://kaspi.kz/shop/p/maxmoll-mm3703-1-7-m-102805780/?c=750000000&ref=shared_link#!/item
 4)id: 4, name: Xiaomi Mijia Electric Shaver S500, price: 19200, description: Роторная бритва от аккумулятора, url: https://kaspi.kz/shop/p/xiaomi-mijia-electric-shaver-s500-rotornaja-ot-akkumuljatora-100328703/?c=750000000&ref=shared_link#!/item
 5)id: 5, name: Яндекс Станция Мини, price: 43800, description: умная колонка с часами, url: https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-belyi-102580001/?c=750000000&ref=shared_link#!/item
 6) id:6, name:Samsung WW60A4S00CE, price:200000, description:стиральная машинка белая, url:https://kaspi.kz/shop/p/samsung-ww60a4s00ce-ld-belyi-102608083/?c=750000000&ref=shared_link#!/item
 7) id:7, name:Trend комплект 6789999, price:15900, description:стол туристический + 4 стульчика, url:https://kaspi.kz/shop/p/trend-komplekt-6789999-stol-turisticheskii-4-stul-chika-101899561/?c=750000000&ref=shared_link#!/item
 8) id:8, name:Hisense H20MOWP1, price:30900, description:микроволновая печь белая, url:https://kaspi.kz/shop/p/hisense-h20mowp1-belyi-106582662/?c=750000000&ref=shared_link#!/item
 9) id:9, name:Kingston DTXM/128GB, price:4000, description: USB Flash карта, url:https://kaspi.kz/shop/p/kingston-dtxm-128gb-128-gb-105073150/?c=750000000&ref=shared_link#!/item
 10) id10:, name:TT ТЭ-5КП, price:10800, description:Инфракрасный обогреватель красный, url:https://kaspi.kz/shop/p/infrakrasnyi-obogrevatel-tt-te-5kp-krasnyi-102144782/?c=750000000&ref=shared_link#!/item
*/


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/