var imagenes = [];
imagenes["Billete50"] = "https://cdn.bancentral.gov.do/documents/sala-de-prensa/noticias/images/A50-20190213.jpg";
imagenes["Billete100"] = "https://images3.cgb.fr/images/billets/b78/b78_0389a.jpg";
imagenes["Billete200"] = "https://cdn.bancentral.gov.do/documents/billetes-y-monedas/images/200_a.jpg";
imagenes["Billete500"] = "https://cronicanumismatica.com/wp-content/uploads/2021/11/Anverso-billete-500-pesos-Rep-Dominicana.jpg";
imagenes["Billete1000"] = "https://images3.cgb.fr/images/billets/b78/b78_0390a.jpg";
imagenes["Billete2000"] = "https://z101digital.com/wp-content/uploads/2020/09/billete-2000.jpg";
imagenes["Billete3000"] = "https://i.imgur.com/toPa4Jr.jpg";

var box = [];
box.push(new Billete("Billete2000", 2000, 15));
box.push(new Billete("Billete1000", 1000, 20));
box.push(new Billete("Billete500", 500, 15));
box.push(new Billete("Billete200", 200, 25));
box.push(new Billete("Billete100", 100, 100));
box.push(new Billete("Billete50", 50, 20));
