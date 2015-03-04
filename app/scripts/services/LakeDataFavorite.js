'use strict';
angular.module('badeseenApp').factory('LakeDataFavorite', 
	function () {
		var service = {

			getData: function () {

				var favoriteArray = [
		{
        "name": "Waldsee Raunheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/waldsee-raunheim.html",
        "latitude": "50.012900",
        "longitude": "8.482000",
        "openFrom": "2014-05-15T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Der Name lässt es schon vermuten, dieser Baggersee ist von Wald umgeben. Das durch den noch nicht abgeschlossenen Kiesabbau etwas getrübte Wasser bedeckt eine Fläche von 14 ha. Auf Gefährdungen durch Untiefen wird hingewiesen.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "30",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            }],
            "yearratings": [
            {
                "year": "2011",
                "rating": 1
            },
            {
                "year": "2012",
                "rating": 1
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Waldsee_Raunheim/Raunheimer_Waldsee02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Waldsee_Raunheim/Raunheimer_Waldsee01-T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Raunheim",
        "heightAboveSeaLevel": 95,
        "areaHa": 21.6,
        "depthMax": 22.23,
        "depthAvg": 8.64,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Stadtwerke Raunheim, Florian Walther",
            "street": "Gottfried-Keller-Straße 21 - 25",
            "zipcodeCity": "65479  Raunheim",
            "email": "f.walther@raunheim.de",
            "telephone": "06142 942 931 268",
            "fax": "06142 92 64 60",
            "website": "http://www.raunheim.de/sites/gensite.asp?SID=cms230620100912109118&Art=0451"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Groß-Gerau",
            "address": "Landkreis Groß-Gerau",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Wilhelm-Seipp-Str. 9",
            "zipcodeCity": "64521 Groß-Gerau",
            "telephone": "06152/989-247"
        }
    	},
    	{
        "name": "Heuchelheimer See II",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/giessen/heuchelheimer-see-ii.html",
        "latitude": "50.565300",
        "longitude": "8.625000",
        "openFrom": "2014-05-31T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der 8,8 ha große See hat meist sehr sauberes Wasser. Er wird wegen einer Wasserskianlage besonders von Wasserski- und Wakeboard-Fahrern geschätzt, jedoch besitzt er am südöstlichen Ufer auch eine Liegewiese von der man zum Baden ans Wasser gelangt.",
        "measurements": [
            {
                "date": "2014-08-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 1
            },
            {
                "year": "2012",
                "rating": 1
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Heuchelheimer_See_II/Heuchelheimer_See_2_03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Heuchelheimer_See_II/Heuchelheimer_See_2_02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Heuchelheimer_See_II/Heuchelheimer_See_2_01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Heuchelheim",
        "heightAboveSeaLevel": 160,
        "areaHa": 8.8,
        "depthMax": 11.58,
        "depthAvg": 5.71,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Baden",
            "Wasserski"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Dr. Uwe Vorpahl",
            "street": "Beethovenstraße 18",
            "zipcodeCity": "35452 Heuchelheim",
            "email": "",
            "telephone": "0641/6868888",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Gießen",
            "address": "Landkreis Gießen",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Riversplatz 1-9",
            "zipcodeCity": "35394 Gießen",
            "telephone": "0641 9390-1422"
        }
    },
    {
        "name": "Dutenhofener Badesee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/lahn-dill-kreis/dutenhofener-badesee.html",
        "latitude": "50.565700",
        "longitude": "8.612100",
        "openFrom": "2014-05-18T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Im Tal der Lahn zwischen Gießen und Wetzlar ist der Dutenhofer See mit 29,4 ha Fläche nicht der einzige Badesee, der durch das Ausbaggern von Kiesvorkommen entstanden ist. Die Umgebung ist als Erholungs- und Naturschutzgebiet beliebtes Ziel für einen sommerlichen Badeausflug. Das ansonsten klare Wasser kann durch Algenwachstum grünlich werden, ein Sandstrand wird jährlich für die Badesaison neu aufgeschüttet.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 1
            },
            {
                "year": "2012",
                "rating": 1
            },
            {
                "year": "2013",
                "rating": 2
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Dutenhofener_Badesee/Dutenhofener_See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Dutenhofener_Badesee/Dutenhofener_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Dutenhofener_Badesee/Dutenhofener_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Wetzlar",
        "heightAboveSeaLevel": 133,
        "areaHa": 29.4,
        "depthMax": 11.4,
        "depthAvg": 4.04,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Strasser, Müller, Auffeger GbR",
            "street": "Am Dutenhofener See 1",
            "zipcodeCity": "35582 Wetzlar-Dutenhofen",
            "email": "info@dutenhofenersee.de",
            "telephone": "0641 21245",
            "fax": "0641 250 95 25",
            "website": "www.dutenhofenersee.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Lahn-Dill-Kreis",
            "address": "Lahn-Dill-Kreis",
            "addressAdditional": "-Abt. Gesundheit-",
            "street": "Schlossstr. 20",
            "zipcodeCity": "35745 Herborn",
            "telephone": "06441 407-1616"
        }
    }
		]
	localStorage.setItem('favorites', JSON.stringify(favoriteArray));
			}
		};

		return service;
	})