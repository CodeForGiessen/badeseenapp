/**
Factory LakeDataImport pulls the required data for every lake from the backend and stores it in the localStorage.
*/
'use strict';
angular.module('badeseenApp').factory('LakeDataImport',
	function () {
		var service = {

			getData: function () {

				var lakes = [
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
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "61",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "30",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2009-09-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "60",
                "escherichiaColi": "15",
                "rating": 0,
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
        "name": "Edertalsperre - Asel Süd",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/edertalsperre-asel-sued.html",
        "latitude": "51.182400",
        "longitude": "8.952400",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Was für ein Stausee! Mehr als 25 Millionen Goldmark hat er das Königreich Preussen gekostet! 1914 war das gewaltige Bauwerk fertiggestellt: Stärke der Staumauer an der Sohle 36 m, Länge an der Krone 400 m, Stauhöhe 47 m, Länge des Sees 27 km mit einer Uferlänge von 69 km. Als das Wasser der Eder sich staute, mussten etwa 900 Menschen ihre Häuser verlassen. Die Errichtung eines großen Wasserreservoirs war erforderlich für die Speisung des neu gebauten Mittellandkanals. Zusätzlich schützte man so das untere Edertal und die Fulda gegen Hochwasser und konnte die Wasserkraft zur Gewinnung von Elektrizität nutzen. Der See wirkt aber auch elektrisierend auf Freunde des Wassersports und Erholungssuchende aus ganz Deutschland, in dessen Mitte dieses Ferienparadies liegt.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "10",
                "escherichiaColi": "130",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "21",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "6",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "50",
                "escherichiaColi": "540",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "130",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "7",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "100",
                "escherichiaColi": "760",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "26",
                "escherichiaColi": "180",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "16",
                "escherichiaColi": "160",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "4",
                "escherichiaColi": "98",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "18",
                "escherichiaColi": "250",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "18",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "21",
                "escherichiaColi": "360",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "48",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "168",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "16",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "20",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "5",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "25",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Vöhl",
        "heightAboveSeaLevel": 245,
        "areaHa": 1.05,
        "depthMax": 15,
        "depthAvg": 7,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Gemeinde Vöhl",
            "street": "Schloßstr.1",
            "zipcodeCity": "34516 Vöhl",
            "email": "bauamt@voehl.de",
            "telephone": "05635-9931-11",
            "fax": "05635-9931-99",
            "website": "www.voehl.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Meinhardsee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/werra-meissner-kreis/meinhardsee.html",
        "latitude": "51.205100",
        "longitude": "10.041300",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Früher fand man hier Kies, jetzt findet man Vergnügen an diesem Baggersee mit seinem Freizeit- und Erholungszentrum. Die klare Wasserfläche erstreckt sich über 30 ha, die Hälfte dient als Badesee, davon stehen knapp 13 ha zum Baden und 17 ha für die Nutzung des Wassersports zur Verfügung.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "372",
                "escherichiaColi": "1700",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "390",
                "escherichiaColi": "554",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-05T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-01T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "46",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "46",
                "escherichiaColi": "161",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-09T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "30",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-29T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "247",
                "rating": 1,
                "comment": "Sichttiefe wieder einwandfrei"
            },
            {
                "date": "2012-08-01T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe grenzwertig"
            },
            {
                "date": "2012-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-06T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-03T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "105",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-08T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-11T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "30",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-08T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "30",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-10T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "126",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-10T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "94",
                "escherichiaColi": "179",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "30",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
        "images": [],
        "city": "Meinhard",
        "heightAboveSeaLevel": 200,
        "areaHa": 12.3,
        "depthMax": 5.7,
        "depthAvg": 2.3,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Werra-Meissner-Camping",
            "street": "Freizeitzentrum 2",
            "zipcodeCity": "37276 Meinhard",
            "email": "info@werra-meissner-camping.de",
            "telephone": "05651 6200",
            "fax": "05651 9920301",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Werra-Meißner-Kreis",
            "address": "Fachbereich Gesundheit- Verbraucherschutz und Veterinärwesen",
            "addressAdditional": "Fachdienst Hygiene",
            "street": "Luisenstr. 23c",
            "zipcodeCity": "37269 Eschwege",
            "telephone": "05651 959230"
        }
    },
    {
        "name": "Badesee Niedernhausen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/darmstadt-dieburg/badesee-niedernhausen.html",
        "latitude": "49.776300",
        "longitude": "8.807700",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Bei dem Freibad \"Odenwaldidyll\" handelt es sich um ein 1934 fertiggestelltes Naturschwimmbad. Ein großes Schwimmbecken und ein Nichtschwimmerbecken werden von einem kleinen Bach gespeist.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 0,50m"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 0,30m"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,10m"
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "266",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "177",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-11T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "10",
                "escherichiaColi": "287",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "324",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt-Dieburg/Niedernhausen/Badesee_Niedernhausen03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt-Dieburg/Niedernhausen/Badesee_Niedernhausen02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt-Dieburg/Niedernhausen/Badesee_Niedernhausen01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Fischbachtal",
        "heightAboveSeaLevel": 190,
        "areaHa": 0.2,
        "depthMax": 2.8,
        "depthAvg": 1.7,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Familie Marx",
            "street": "Campingplatz",
            "zipcodeCity": "64405 Fischbachtal-Niedernhausen",
            "email": "",
            "telephone": "06166 / 8577",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Darmstadt-Dieburg",
            "address": "Verwaltungsverband Darmstadt-Dieburg",
            "addressAdditional": "Stadt-und Kreisgesundheitsamt",
            "street": "Niersteiner Str. 3",
            "zipcodeCity": "64295 Darmstadt",
            "telephone": "06151 3309-0"
        }
    },
    {
        "name": "Arheilger Mühlchen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/stadt-darmstadt/arheilger-muehlchen.html",
        "latitude": "49.904500",
        "longitude": "8.671300",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Idyllisch im Stadtteil Arheilgen gelegen, wird dieses mit 1,4 Hektar relativ kleine Gewässer als städtisches Freibad genutzt. Die flachen Ufer sind von Wiesen umgeben, der See gehört zu einem Naherholungsgebiet. Ein Badestrand ist ausgewiesen.",
        "measurements": [
            {
                "date": "2014-08-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichtiefe 1,00 m"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 1,10m"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,10m"
            },
            {
                "date": "2014-06-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1.90m"
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 0,70m"
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 0,90cm"
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,00m"
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 0,75"
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "46",
                "escherichiaColi": "197",
                "rating": 1,
                "comment": "Sichttiefe 0,70m"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "213",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,05 m"
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,76 m"
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "108",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "77",
                "escherichiaColi": "179",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "109",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "900",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Arheilger_Muehlchen/Arheilger_Muehlchen03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Arheilger_Muehlchen/Arheilger_Muehlchen02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Arheilger_Muehlchen/Arheilger_Muehlchen01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Darmstadt",
        "heightAboveSeaLevel": 140,
        "areaHa": 1.1,
        "depthMax": 2.97,
        "depthAvg": 1.9,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Eigenbetrieb Bäder",
            "street": "Frankfurter Str. 71",
            "zipcodeCity": "64293 Darmstadt",
            "email": "sportamt@darmstadt.de ",
            "telephone": "06151 132974 und 132972",
            "fax": "06151 132940",
            "website": "www.baeder.darmstadt.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Darmstadt-Dieburg",
            "address": "Verwaltungsverband Darmstadt-Dieburg",
            "addressAdditional": "Stadt-und Kreisgesundheitsamt",
            "street": "Niersteiner Str. 3",
            "zipcodeCity": "64295 Darmstadt",
            "telephone": "06151 3309-0"
        }
    },
    {
        "name": "Naturbadesee Beiseförth",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/schwalm-eder-kreis/naturbadesee-beisefoerth.html",
        "latitude": "51.078359",
        "longitude": "9.550157",
        "openFrom": "2014-05-15T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Der Naturbadesee Beiseförth hat eine Fläche von 2 ha und ist durch den Abbau von Kies in der Fuldaaue entstanden. Das Badegewässer liegt direkt am Fernradweg R1 und direkt an der Fulda, die von Kanuten für die Ausübung des Wassersportes genutzt wird. Ein Campingplatz für Zelte, Caravans und Wohnmobile sowie eine Gaststätte ergänzen das touristische Angebot des Naturbadesees Beiseförth. ",
        "measurements": [
            {
                "date": "2014-08-10T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-27T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-15T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "127",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": null
            },
            {
                "year": "2012",
                "rating": 7
            },
            {
                "year": "2013",
                "rating": null
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Schwalm-Eder-Kreis/Beisefoerter_See/Beisefoerther_See_3.jpg",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Schwalm-Eder-Kreis/Beisefoerter_See/Beidefoerther_See_4.jpg",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Malsfeld",
        "heightAboveSeaLevel": 200,
        "areaHa": 2,
        "depthMax": 3,
        "depthAvg": 2,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Gemeindevorstand der Gemeinde Malsfeld",
            "street": "Lindenstraße 1",
            "zipcodeCity": "34323 Malsfeld",
            "email": "",
            "telephone": "05664 - 500270",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Schwalm-Eder-Kreis",
            "address": "Schwalm-Eder-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Waßmuthshäuser Str.52",
            "zipcodeCity": "34576 Homberg (Efze)",
            "telephone": "05681 775-0"
        }
    },
    {
        "name": "Diemeltalsperre - Strandbad Helminghausen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/diemeltalsperre-strandbad-helminghausen.html",
        "latitude": "51.371600",
        "longitude": "8.708000",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Umgeben von bewaldeten Bergen des Sauerlandes (Hessen/NRW) erstreckt sich der Diemelsee über eine Länge von mehr als 7 Kilometern. Im Naturpark gleichen Namens gelegen lädt die bläulich schimmernde 166 ha große und bis zu 34 m tiefe Wasserfläche des 1924 vollendeten Stausees zu einer Vielzahl wasserfreudiger Aktivitäten ein.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "208",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "290",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "5",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "42",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "150",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "5",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "6",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "8",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "8",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Diemelsee",
        "heightAboveSeaLevel": 360,
        "areaHa": 104.4,
        "depthMax": 28.5,
        "depthAvg": 12,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Gemeinde Diemelsee",
            "street": "Am Kahlenberg1",
            "zipcodeCity": "34519 Diemelsee-Adorf",
            "email": "gemeinde@diemelsee.de",
            "telephone": "05633-9899-0",
            "fax": "05633-9888-30",
            "website": "www.diemelsee.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Ulmbachtalsperre",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/lahn-dill-kreis/ulmbachtalsperre.html",
        "latitude": "50.602400",
        "longitude": "8.268500",
        "openFrom": "2014-05-18T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "12 km südwestlich von Herborn liegt der fast 7 ha große Stausee. Umgeben von Wiesen dient er dem Hochwasserschutz. Im Badebereich ist das Ufer flach, sonst steil und bewachsen.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "21",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "32",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "21",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "43",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-15T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
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
                "rating": null
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Ulmbachtalsperre/Ulmbachtalsperre02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Ulmbachtalsperre/Ulmbachtalsperre01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Greifenstein",
        "heightAboveSeaLevel": 300,
        "areaHa": 6.7,
        "depthMax": 11.4,
        "depthAvg": 4.04,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Herr Henning Weller",
            "street": "Ulmbachtalsperre",
            "zipcodeCity": "35753 Greifenstein",
            "email": "nospam@ulmtal.com",
            "telephone": "02779 349",
            "fax": "02779 1538",
            "website": "www.ulmtal.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Lahn-Dill-Kreis",
            "address": "Lahn-Dill-Kreis",
            "addressAdditional": "-Abt. Gesundheit-",
            "street": "Schlossstr. 20",
            "zipcodeCity": "35745 Herborn",
            "telephone": "06441 407-1616"
        }
    },
    {
        "name": "Stauweiher Ewersbach",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/lahn-dill-kreis/stauweiher-ewersbach.html",
        "latitude": "50.835600",
        "longitude": "8.298500",
        "openFrom": "2014-05-18T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Im nördlichen Lahn-Dill-Kreis am Fuße des Rothaargebirges wurde in den Jahren 1925/26 im Rahmen der \"Erwerbslosenfürsorge\" von 30 Arbeitslosen in Handarbeit der 2 ha große Stauweiher Ewersbach angelegt. Er diente der Erzeugung von Elektrizität, sollte aber auch den Einwohnern der Gemeinde \"für alle Zeiten frei und unentgeltlich als Badeweiher zur Verfügung stehen.\" Das tut er bis heute.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "21",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "110",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "32",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": 9,
                "enterocsocci": "10",
                "escherichiaColi": "220",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "360",
                "escherichiaColi": "234",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "134",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "Stauweiher war nur zur Hälfte befüllt"
            },
            {
                "date": "2012-05-13T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "43",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "32",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "110",
                "escherichiaColi": "288",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-15T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "76",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "135",
                "escherichiaColi": "234",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "21",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "122",
                "escherichiaColi": "146",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "43",
                "escherichiaColi": "375",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "146",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Stauweiher_Ewersbach/Stauweiher_Ewersbach03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Stauweiher_Ewersbach/Stauweiher_Ewersbach02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Stauweiher_Ewersbach/Stauweiher_Ewersbach01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Dietzhölztal",
        "heightAboveSeaLevel": 362,
        "areaHa": 1.9,
        "depthMax": 3.85,
        "depthAvg": 2,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeinde Dietzhölztal",
            "street": "Hauptstrasse 92",
            "zipcodeCity": "35716 Dietzhölztal-Ewersbach",
            "email": "info@dietzhoelztal.de",
            "telephone": "02774/807 -0",
            "fax": "02774/807 50",
            "website": "www.dietzhoelztal.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Lahn-Dill-Kreis",
            "address": "Lahn-Dill-Kreis",
            "addressAdditional": "-Abt. Gesundheit-",
            "street": "Schlossstr. 20",
            "zipcodeCity": "35745 Herborn",
            "telephone": "06441 407-1616"
        }
    },
    {
        "name": "Wißmarer See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/giessen/wissmarer-see.html",
        "latitude": "50.641400",
        "longitude": "8.688800",
        "openFrom": "2014-05-31T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Dieser Baggersee liegt umgeben von Wald und Wiesen in einer Lahnschleife. Nach dem Ende des Kiesabbaus wurde das Gelände renaturiert und zu einem Erholungsgebiet gestaltet. Über 9,6 ha erstreckt sich nun die blaugrüne Wasserfläche.",
        "measurements": [
            {
                "date": "2014-08-18T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "30",
                "escherichiaColi": "368",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "30",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "161",
                "escherichiaColi": "327",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "120",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-27T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "51",
                "escherichiaColi": "92",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "75",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-03T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "161",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-13T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-29T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-15T22:00:00.000Z",
                "waterTemperature": 9,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "178",
                "escherichiaColi": "15",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "151",
                "escherichiaColi": "127",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "75",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "154",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "9",
                "escherichiaColi": "327",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "28",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "294",
                "escherichiaColi": "403",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "304",
                "escherichiaColi": "289",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "63",
                "escherichiaColi": "126",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-05-24T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "575",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "20",
                "escherichiaColi": "45",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "26",
                "escherichiaColi": "77",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "5",
                "escherichiaColi": "61",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-16T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "37",
                "escherichiaColi": "127",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "204",
                "escherichiaColi": "144",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "99",
                "escherichiaColi": "23",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "61",
                "rating": 0,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 4
            },
            {
                "year": "2012",
                "rating": 2
            },
            {
                "year": "2013",
                "rating": 2
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Wissmarer_See/Wissmarer_See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Wissmarer_See/Wissmarer_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Wissmarer_See/Wissmarer_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Wettenberg",
        "heightAboveSeaLevel": 170,
        "areaHa": 9.6,
        "depthMax": 4.3,
        "depthAvg": 2.35,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeindeverwaltung Wettenberg",
            "street": "Sorguesplatz 2",
            "zipcodeCity": "35435 Wettenberg",
            "email": "",
            "telephone": "06406 / 75697",
            "fax": "",
            "website": "www.wissmarer-see.de "
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
        "name": "Bärensee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/main-kinzig-kreis/baerensee.html",
        "latitude": "50.152200",
        "longitude": "8.954500",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Der max., nur 3,8 m tiefe Baggersee von 6 ha mit flachem Ufer und zwei Badestränden liegt in einem bewaldeten Erholungsgebiet.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "21",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "8",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "12",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "3",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "69",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "91",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "27",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "21",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "1",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "9",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "28",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-05T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<1",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-24T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "7",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "20",
                "escherichiaColi": "110",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "8",
                "escherichiaColi": "77",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "59",
                "escherichiaColi": "760",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Baerensee/Baerensee03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Baerensee/Baerensee02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Baerensee/Baerensee01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Hanau",
        "heightAboveSeaLevel": 107,
        "areaHa": 6,
        "depthMax": 3.83,
        "depthAvg": 2.63,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Stadt Bruchköbel",
            "street": "Hauptstrasse 32",
            "zipcodeCity": "63486 Bruchköbel",
            "email": "Ralf.Keim@bruchkoebel.de",
            "telephone": "06181-975224",
            "fax": "06181-975271",
            "website": "www.bruchkoebel.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Main-Kinzig-Kreis",
            "address": "Main-Kinzig-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Barbarossastr. 24",
            "zipcodeCity": "63571 Gelnhausen",
            "telephone": "06051 85 14370"
        }
    },
    {
        "name": "Schwimmbad Vogel",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/schwimmbad-vogel-geinsheim.html",
        "latitude": "49.875600",
        "longitude": "8.380200",
        "openFrom": "2014-05-09T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "An diesem Baggersee wird schon seit 1953 gebadet. Das Gewässer (3,6 ha) wird zum Ufer hin von Schilf gesäumt, am Grund des Sees wachsen Wasserpflanzen. Die ausgewiesenen Vogelschutzzonen beeindrucken durch ihre Artenvielfalt. Man findet Störche, Eulen, Eisvögel, um nur einige zu nennen. Die Wasserqualität ist meist sehr gut. Ans Wasser gelangt man nur vom Badestrand.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "30",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-22T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-05-23T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "94",
                "escherichiaColi": "287",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-05-04T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "353",
                "rating": 2,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "126",
                "rating": 2,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "30",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "93",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2009-09-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "20",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "40",
                "escherichiaColi": "215",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "20",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "20",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "20",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Schwimmbad_Vogel_Geinsheim/Vogel_See_Geinsh03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Schwimmbad_Vogel_Geinsheim/Vogel_See_Geinsh02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Schwimmbad_Vogel_Geinsheim/Vogel_See_Geinsh01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Trebur",
        "heightAboveSeaLevel": 80,
        "areaHa": 3.5,
        "depthMax": 5.1,
        "depthAvg": 3.66,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Badesee Vogel, J. Vogel",
            "street": "Außerhalb 171",
            "zipcodeCity": "65468  Trebur",
            "email": "info@badesee-vogel.de",
            "telephone": "Tel. 0179/7802999",
            "fax": "",
            "website": "http://www.badesee-vogel.de/hp/portal.php"
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
        "name": "Riedsee Leeheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/riedsee-leeheim.html",
        "latitude": "49.859200",
        "longitude": "8.423500",
        "openFrom": "2014-03-31T22:00:00.000Z",
        "openTo": "2014-09-29T22:00:00.000Z",
        "introtext": "Der Riedsee entstand in Folge eines Kiesabbaus. Sein klares Wasser nimmt eine Fläche von 24 Hektar ein. Der See liegt an der Landstraße von Leeheim nach Geinsheim in einem Erholungsgebiet, umgeben von Ackerland. Die Uferzone im Badebereich ist flach, zum Baden erreicht man das Wasser über den ausgewiesenen Badestrand.",
        "measurements": [
            {
                "date": "2014-09-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-12T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-17T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-05-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-22T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-03-25T23:00:00.000Z",
                "waterTemperature": 9,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-22T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-05-23T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-03-27T23:00:00.000Z",
                "waterTemperature": 4,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "76",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-04-26T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-03-27T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-04-26T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-09-12T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-04-26T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2009-08-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Riedsee__Leeheim/Riedsee_Leeheim_noerdl_See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Riedsee__Leeheim/Riedsee_Leeheim_noerdl_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Riedsee__Leeheim/Riedsee_Leeheim_noerdl_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Riedstadt",
        "heightAboveSeaLevel": 80,
        "areaHa": 24,
        "depthMax": 22.11,
        "depthAvg": 9.11,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Riedsee GmbH",
            "street": "Schöneweibergasse 96",
            "zipcodeCity": "64347 Griesheim",
            "email": "info@riedsee.de",
            "telephone": "06155/8779606",
            "fax": "06155/8779607",
            "website": "http://www.riedsee.de"
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
        "name": "Badesee Walldorf",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/badesee-walldorf.html",
        "latitude": "50.013900",
        "longitude": "8.596200",
        "openFrom": "2014-05-09T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Dieser 17.3 ha große Baggersee liegt zwischen B 44 und der BAB 5 im Bereich Frankfurt-Aschaffenburgerstraße. Auf Gefährdungen durch Wasserpflanzen wird hingewiesen, das westliche Seeufer ist für den Badebetrieb gesperrt.Hier muss man schwimmen können. Es geht überall recht steil ins Wasser, Flachzonen sind nicht vorhanden.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Verschmutzungen wie z.B teerhaltige Rückstände, Glas, Plastik, Gummi oder andere Abfälle i.R.d. Sichtkontrolle"
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "125",
                "escherichiaColi": "697",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "60",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "368",
                "rating": 2,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2009-08-25T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-28T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "20",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "38",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "11",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Badesee_Walldorf/Badesee_Walldorf02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Badesee_Walldorf/Badesee_Walldorf01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Mörfelden-Walldorf",
        "heightAboveSeaLevel": 107,
        "areaHa": 17.3,
        "depthMax": 14.12,
        "depthAvg": 5.05,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Der Magistrat der Stadt Mörfelden-Walldorf, Sport- und Kulturamt, Manfred Dammel",
            "street": "Postfach 1455",
            "zipcodeCity": "64529  Mörfelden-Walldorf",
            "email": "yvonne.gerbig@moerfelden-walldorf.de",
            "telephone": "06105 938 775",
            "fax": "06105 938 310",
            "website": ""
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
        "name": "Grube Prinz von Hessen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/stadt-darmstadt/grube-prinz-von-hessen.html",
        "latitude": "49.900400",
        "longitude": "8.733900",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Die Grube Prinz von Hessen ist eine mit Grundwasser gefüllte ehemalige Braunkohlegrube. Sie ist mitten im Wald zwischen Darmstadt und Dieburg gelegen und besitzt einen idyllischen Badestrand. ",
        "measurements": [
            {
                "date": "2014-08-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2,10 m"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2,40m"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 2,10 m"
            },
            {
                "date": "2014-06-03T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,10 m"
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,35m"
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,55m"
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 1,40m"
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,50m"
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,65m"
            },
            {
                "date": "2013-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,40m"
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,55"
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 1,80m"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,25m"
            },
            {
                "date": "2012-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichtiefe 2,00m"
            },
            {
                "date": "2012-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,50m"
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "159",
                "rating": 2,
                "comment": "Sichttiefe 2,00m"
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,84 m"
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "94",
                "escherichiaColi": "215",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "127",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "77",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "110",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "93",
                "escherichiaColi": "449",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Grube_Prinz_von_Hessen/Grube_Prinz_von_Hessen02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Grube_Prinz_von_Hessen/Grube_Prinz_von_Hessen01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Darmstadt",
        "heightAboveSeaLevel": 170,
        "areaHa": 6.3,
        "depthMax": 13,
        "depthAvg": 5.41,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Magistrat der Stadt Darmstadt, Grünflächen- und Umweltamt",
            "street": "Bessunger Straße 125",
            "zipcodeCity": "64295  Darmstadt",
            "email": "",
            "telephone": "06151 - 132902",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Darmstadt-Dieburg",
            "address": "Verwaltungsverband Darmstadt-Dieburg",
            "addressAdditional": "Stadt-und Kreisgesundheitsamt",
            "street": "Niersteiner Str. 3",
            "zipcodeCity": "64295 Darmstadt",
            "telephone": "06151 3309-0"
        }
    },
    {
        "name": "Seeweiher Mengerskirchen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/limburg-weilburg/seeweiher-mengerskirchen.html",
        "latitude": "50.546600",
        "longitude": "8.149600",
        "openFrom": "2014-05-02T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Sei es nun ein See oder ein Weiher, das Wasser wurde schon 1452 aufgestaut. Zwischen Waldernbach und Mengerskirchen bedeckt das blaugraue Gewässer eine Fläche von ca. 14 ha. Das flache Ufer ist mit Bäumen und Sträuchern bewachsen, ins Wasser darf man nur vom Badestrand am westlichen Ufer.",
        "measurements": [
            {
                "date": "2014-08-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "10",
                "escherichiaColi": "302",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "32",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-27T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-21T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "<10",
                "escherichiaColi": "20",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-28T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-12T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-22T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-29T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "53",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "32",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "158",
                "escherichiaColi": "247",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "32",
                "escherichiaColi": "98",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "693",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "21",
                "escherichiaColi": "851",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "375",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "220",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-05T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "65",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "110",
                "escherichiaColi": "65",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "10",
                "escherichiaColi": "274",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "330",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "87",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 2
            },
            {
                "year": "2012",
                "rating": 2
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Limburg-Weilburg/Seeweiher_Mengerskirchen/Seeweiher_Mengerskirchen_Waldernbach03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Limburg-Weilburg/Seeweiher_Mengerskirchen/Seeweiher_Mengerskirchen_Waldernbach02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Limburg-Weilburg/Seeweiher_Mengerskirchen/Seeweiher_Mengerskirchen_Waldernbach01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Mengerskirchen",
        "heightAboveSeaLevel": 370,
        "areaHa": 11.2,
        "depthMax": 4.05,
        "depthAvg": 1.91,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Düngen Freibad und Gastronomie",
            "street": "Am Seeweiher",
            "zipcodeCity": "35794  Mengerskirchen",
            "email": "info@seeweiher.de",
            "telephone": "06476 / 2263",
            "fax": "06476 / 1580",
            "website": "www.seeweiher.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Limburg-Weilburg",
            "address": "Landkreis Limburg-Weilburg",
            "addressAdditional": "Gesundheits und Umweltamt",
            "street": "Schiede 43",
            "zipcodeCity": "65549 Limburg",
            "telephone": "06431 296-0"
        }
    },
    {
        "name": "Strandbad Nieder-Roden",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/kreis-offenbach/strandbad-nieder-roden.html",
        "latitude": "50.007900",
        "longitude": "8.869700",
        "openFrom": "2014-04-25T22:00:00.000Z",
        "openTo": "2014-09-19T22:00:00.000Z",
        "introtext": "Der Baggersee liegt am Stadtrand von Rodgau, ist 26,3 ha groß und wird seit 1977 als Badesee genutzt. Das Ufer ist flach, teilweise terrassiert, denn die hellblaue Wasserfläche liegt ca. 15 m unter Landschaftsniveau. Zugang hat man nur vom Badestrand. Das Wasser ist durch den noch stattfindenden Kiesabbau im nördlichen Bereich leicht getrübt.",
        "measurements": [
            {
                "date": "2014-09-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-19T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-21T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-09T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 9,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-09-12T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-06T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-19T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Strandbad_Nieder-Roden/Strandbad_Nieder_Roden03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Strandbad_Nieder-Roden/Strandbad_Nieder_Roden02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Strandbad_Nieder-Roden/Strandbad_Nieder_Roden01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Rodgau",
        "heightAboveSeaLevel": 130,
        "areaHa": 38.5,
        "depthMax": 35.8,
        "depthAvg": 10.51,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Stadt Rodgau",
            "street": "Hintergasse 15",
            "zipcodeCity": "63110 Rodgau",
            "email": "strandbad@rodgau.de",
            "telephone": "06106-693-1128",
            "fax": "06106-693-2000",
            "website": "www.rodgau.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Offenbach",
            "address": "Landkreis Offenbach",
            "addressAdditional": "Fachdienst Gefahrenabwehr und Gesundheitszentrum",
            "street": "Gottlieb-Daimler-Str. 10",
            "zipcodeCity": "63128 Dietzenbach",
            "telephone": "06074 8180-0"
        }
    },
    {
        "name": "Badesee Mainflingen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/kreis-offenbach/badesee-mainflingen.html",
        "latitude": "50.022300",
        "longitude": "9.020400",
        "openFrom": "2014-04-25T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Dieser Baggersee ist 7,5 ha groß und liegt inmitten der Mainflinger Seenplatte. Das Ufer ist steil, nur der Nichtschwimmerbereich ist flach. Zugang zum See findet man nur über den Badestrand. Benachbart liegen ein Naturschutz- und ein Anglersee. Hunde sind verboten!",
        "measurements": [
            {
                "date": "2014-09-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-21T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-09-12T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-06T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-19T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Badesee_Mainflingen/Badesee_Mainflingen004.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Badesee_Mainflingen/Badesee_Mainflingen002.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Badesee_Mainflingen/Badesee_Mainflingen001_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Mainhausen",
        "heightAboveSeaLevel": 111,
        "areaHa": 7.6,
        "depthMax": 6,
        "depthAvg": 2.33,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Eigenbetrieb Campingplatz und Badeseen Mainhausen",
            "street": "Seestraße 11",
            "zipcodeCity": "63533 Mainhausen",
            "email": "info@seecamping-mainflingen.de",
            "telephone": "06182-8900-34",
            "fax": "06182-8900-40",
            "website": "www.seecamping-mainflingen.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Offenbach",
            "address": "Landkreis Offenbach",
            "addressAdditional": "Fachdienst Gefahrenabwehr und Gesundheitszentrum",
            "street": "Gottlieb-Daimler-Str. 10",
            "zipcodeCity": "63128 Dietzenbach",
            "telephone": "06074 8180-0"
        }
    },
    {
        "name": "Badesee Klein-Krotzenburg",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/kreis-offenbach/badesee-klein-krotzenburg.html",
        "latitude": "50.065400",
        "longitude": "8.974000",
        "openFrom": "2014-04-25T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Ein 6,4 ha großer Baggersee am Ortsrand, entstanden durch Sand und Kiesabbau. Das südliche Ufer ist flach, ein Badestrand ist ausgewiesen und bietet Zugang zum See.",
        "measurements": [
            {
                "date": "2014-09-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-21T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-09-12T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "720",
                "escherichiaColi": "330",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "46",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "46",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-26T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-31T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-03T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Klein-Krotzenburg/_Badesee_Klein_Krotzenburg004.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Klein-Krotzenburg/_Badesee_Klein_Krotzenburg002.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Klein-Krotzenburg/Badesee_Klein_Krotzenburg001_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "",
        "heightAboveSeaLevel": 109,
        "areaHa": 6.1,
        "depthMax": 5.92,
        "depthAvg": 3.26,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeinde Hainburg",
            "street": "Hauptstraße 44",
            "zipcodeCity": "63512 Hainburg",
            "email": "gemeinde@hainburg.de",
            "telephone": "06182-7809-0",
            "fax": "06182-4336",
            "website": "www.hainburg.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Offenbach",
            "address": "Landkreis Offenbach",
            "addressAdditional": "Fachdienst Gefahrenabwehr und Gesundheitszentrum",
            "street": "Gottlieb-Daimler-Str. 10",
            "zipcodeCity": "63128 Dietzenbach",
            "telephone": "06074 8180-0"
        }
    },
    {
        "name": "Guckaisee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/fulda/guckaisee.html",
        "latitude": "50.485000",
        "longitude": "9.921400",
        "openFrom": "2014-05-31T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "In der Rhön, zwischen Pferdskopf und Eube, ist dieser Natursee ein beliebtes Ausflugziel. Mit 0,5 ha nicht gerade groß, gibt er dem Freizeitpark Guckaisee seinen Namen.",
        "measurements": [
            {
                "date": "2014-08-06T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "Sichttiefe 0,60m"
            },
            {
                "date": "2014-07-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "22",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 0,80m"
            },
            {
                "date": "2014-07-02T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2 m"
            },
            {
                "date": "2014-06-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe: 2 m"
            },
            {
                "date": "2014-05-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sittiefe 2,00m "
            },
            {
                "date": "2013-08-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "14",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 0,45 m"
            },
            {
                "date": "2013-07-24T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "48",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 0,50 m"
            },
            {
                "date": "2013-07-03T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "11",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 1,30 m"
            },
            {
                "date": "2013-06-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "9",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "0,65 m"
            },
            {
                "date": "2013-05-22T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "380",
                "escherichiaColi": "160",
                "rating": 1,
                "comment": "Sichttiefe 0,75 m"
            },
            {
                "date": "2012-08-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2,0m"
            },
            {
                "date": "2012-07-18T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "60",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": "Sichttiefe 1,0m"
            },
            {
                "date": "2012-06-27T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,5 m"
            },
            {
                "date": "2012-06-13T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,5 m"
            },
            {
                "date": "2012-05-22T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2 m"
            },
            {
                "date": "2011-08-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,80 m"
            },
            {
                "date": "2011-07-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "13",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "68",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,40m"
            },
            {
                "date": "2011-06-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2 m"
            },
            {
                "date": "2011-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2 m"
            },
            {
                "date": "2010-08-16T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "26",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-26T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "210",
                "escherichiaColi": "30",
                "rating": 2,
                "comment": "Sichttiefe 1,30 m"
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "64",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": "Sichttiefe 1,40 m"
            },
            {
                "date": "2010-06-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2 m"
            },
            {
                "date": "2010-06-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-24T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-27T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "43",
                "escherichiaColi": "160",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "53",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-11T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-16T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Fulda/Guckaisee/Guckaisee01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Poppenhausen (Wasserkuppe)",
        "heightAboveSeaLevel": 690,
        "areaHa": 0.5,
        "depthMax": 2.85,
        "depthAvg": 1.75,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeinde Poppenhausen",
            "street": "Von-Steinrück-Platz 1",
            "zipcodeCity": "36163 Poppenhausen",
            "email": "Info@Poppenhausen-Wasserkuppe.de",
            "telephone": "06658/9600-0",
            "fax": "06658/9600-22",
            "website": "www.poppenhausen-wasserkuppe.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Fulda",
            "address": "Gesundheitsamt des Landkreises Fulda",
            "addressAdditional": "",
            "street": "Otfrid-von-Weißenburg-Str.3",
            "zipcodeCity": "36043 Fulda",
            "telephone": "0661 6006-667"
        }
    },
    {
        "name": "Kärcher-Surfsee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/bergstrasse/kaercher-surfsee.html",
        "latitude": "49.685288",
        "longitude": "8.428023",
        "openFrom": "2014-06-30T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "",
        "measurements": [
            {
                "date": "2014-08-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 3,2 m"
            },
            {
                "date": "2014-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "Sichttiefe 2,9 m"
            },
            {
                "date": "2014-07-29T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "31",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 3,8 m"
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe: 3,0"
            },
            {
                "date": "2014-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,5 m"
            },
            {
                "date": "2014-06-24T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1, 80 m"
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "20",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 3,9 m"
            },
            {
                "date": "2013-08-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "34",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "Sichttiefe 3,2 m"
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,6 m"
            },
            {
                "date": "2013-07-16T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,6 m"
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichtiefe 3,1 m"
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,6 m"
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "<15",
                "escherichiaColi": "161",
                "rating": 1,
                "comment": "Sichttiefe 2,4 m"
            },
            {
                "date": "2012-08-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,1 m"
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 3,3 m"
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2,8 m"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 3,1 m"
            },
            {
                "date": "2012-06-25T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,9 m"
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "4",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "7m"
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<1",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-05T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-27T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "22",
                "escherichiaColi": "40",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "25",
                "escherichiaColi": "144",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2001-08-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe: 3,2"
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Kaercher-Surfsee/Kaercher_See_Riedsee_Biblis03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Kaercher-Surfsee/Kaercher_See_Riedsee_Biblis02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Kaercher-Surfsee/Kaercher-See_Riedsee_Biblis01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Biblis",
        "heightAboveSeaLevel": 80,
        "areaHa": 50.6,
        "depthMax": 27.87,
        "depthAvg": 11.75,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Baden",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Herr Demel",
            "street": "Kärcher-Surfsee Biblis",
            "zipcodeCity": "68647 Biblis",
            "email": "",
            "telephone": "06245/5959",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Bergstraße",
            "address": "Landkreis Bergstraße",
            "addressAdditional": "Haus der Gesundheit",
            "street": "Kettelerstraße 29",
            "zipcodeCity": "64646 Heppenheim",
            "telephone": "06252 / 15-0"
        }
    },
    {
        "name": "Gederner See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/wetteraukreis/gederner-see-campingpark.html",
        "latitude": "50.430400",
        "longitude": "9.180300",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Ein Erholungsgebiet mit Campingplatz und Feriendorf bilden den Rahmen für diesen Badesee, der landschaftlich schön am Wald gelegen ist und eine Fläche von 13 ha einnimmt. Der Zugang zum Wasser erfolgt über den eigens angelegten Sandstrand. Durch das flach abfallende Ufer eignet sich der Badesee bestens für einen Besuch mit Kindern.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "872",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "Sichtkontrolle: Keine Auffälligkeiten"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "Sichtkontrolle: Keine Auffälligkeiten"
            },
            {
                "date": "2014-06-01T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-08T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichtkontrolle: Keine Auffälligkeiten"
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "109",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "< 15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "143",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2013-05-07T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "126",
                "escherichiaColi": "504",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-08-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "110",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-06-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "46",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-05-28T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2012-05-06T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-08-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "500",
                "escherichiaColi": "30",
                "rating": 2,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-07-24T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "36",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "120",
                "escherichiaColi": "<15",
                "rating": 2,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-06-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "28",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-06-13T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "51",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "ohne Beanstandung"
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "ohne Beanstandung"
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 7
            },
            {
                "year": "2012",
                "rating": 2
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Wetteraukreis/Gederner_See_Campingpark/Gederner_See04.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Wetteraukreis/Gederner_See_Campingpark/Gederner_See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Wetteraukreis/Gederner_See_Campingpark/Gederner_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Gedern",
        "heightAboveSeaLevel": 350,
        "areaHa": 13,
        "depthMax": 3,
        "depthAvg": 1.79,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Wirtschaftliche Eigenbetriebe der Stadt Gedern / Betriebszweig Campingpark",
            "street": "Schloßberg 7",
            "zipcodeCity": "63688 Gedern",
            "email": "Campingpark@Gedern.de",
            "telephone": "0 60 45 / 60 08 - 0",
            "fax": "0 60 45 / 60 08 - 33",
            "website": "www.gedern.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Wetteraukreis",
            "address": "Wetteraukreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Europaplatz",
            "zipcodeCity": "61169 Friedberg",
            "telephone": "0 60 31/ 83 - 0"
        }
    },
    {
        "name": "Werratalsee Südufer",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/werra-meissner-kreis/werratalsee-suedufer.html",
        "latitude": "51.192200",
        "longitude": "10.069000",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Der Werratalsee ist durch Abgrabungen von Kies entstanden und befindet sich in der Werraaue nördlich der Stadt Eschwege und westlich der Gemeinde Meinhard. Der See wird als Badegewässer, zum Segeln und für den Rudersport genutzt. Entlang seiner Uferstrecke lädt die Auenlandschaft die Spaziergänger zur stillen Erholung ein. In jüngster Zeit wird auch eine Fahrgastschifffahrt betrieben. ",
        "measurements": [
            {
                "date": "2014-09-03T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "94",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Nachbeprobung"
            },
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "5700",
                "escherichiaColi": "1000",
                "rating": 0,
                "comment": "Eine Nachbeprobung nach §7 Abs. 2 wurde berauftragt"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-05T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-01T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-19T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "94",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "8",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "390",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "47",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-06T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "18",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "8",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "16",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-06T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "28",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "6",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-11T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "42",
                "escherichiaColi": "470",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-08T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-11T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "1",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "2",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-10T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "3",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
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
        "images": [],
        "city": "Eschwege",
        "heightAboveSeaLevel": 160,
        "areaHa": 117,
        "depthMax": 8.5,
        "depthAvg": 4.9,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Sporttauchen",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Magistrat der Stadt Eschwege",
            "street": "Obermarkt 22",
            "zipcodeCity": "37269 Eschwege",
            "email": "Stadtverwaltung@eschwege-rathaus.de",
            "telephone": "05651 304-0",
            "fax": "05651 304-12",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Werra-Meißner-Kreis",
            "address": "Fachbereich Gesundheit- Verbraucherschutz und Veterinärwesen",
            "addressAdditional": "Fachdienst Hygiene",
            "street": "Luisenstr. 23c",
            "zipcodeCity": "37269 Eschwege",
            "telephone": "05651 959230"
        }
    },
    {
        "name": "Edertalsperre - Strandbad Waldeck",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/edertalsperre-strandbad-waldeck.html",
        "latitude": "51.199900",
        "longitude": "9.047900",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Was für ein Stausee! Mehr als 25 Millionen Goldmark hat er das Königreich Preussen gekostet! 1914 war das gewaltige Bauwerk fertiggestellt: Stärke der Staumauer an der Sohle 36 m, Länge an der Krone 400 m, Stauhöhe 47 m, Länge des Sees 27 km mit einer Uferlänge von 69 km. Als das Wasser der Eder sich staute, mussten etwa 900 Menschen ihre Häuser verlassen. Die Errichtung eines großen Wasserreservoirs war erforderlich für die Speisung des neu gebauten Mittellandkanals. Zusätzlich schützte man so das untere Edertal und die Fulda gegen Hochwasser und konnte die Wasserkraft zur Gewinnung von Elektrizität nutzen. Der See wirkt aber auch elektrisierend auf Freunde des Wassersports und Erholungssuchende aus ganz Deutschland, in dessen Mitte dieses Ferienparadies liegt.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "32",
                "escherichiaColi": "87",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "158",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "14",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "7",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "47",
                "escherichiaColi": "160",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "12",
                "escherichiaColi": "270",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "54",
                "escherichiaColi": "800",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "6",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Waldeck",
        "heightAboveSeaLevel": 245,
        "areaHa": 1.05,
        "depthMax": 35,
        "depthAvg": 14,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Sporttauchen",
            "Wassersport",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Magistrat der Stad Waldeck",
            "street": "Am Rathaus 1",
            "zipcodeCity": "34513 Sachsenhausen",
            "email": "stadt@waldeck.de",
            "telephone": "05634-709-0",
            "fax": "05634-709-38",
            "website": "www.waldeck.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Diemeltalsperre - Strandbad Heringhausen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/diemeltalsperre-strandbad-heringhausen.html",
        "latitude": "51.363300",
        "longitude": "8.724600",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Umgeben von bewaldeten Bergen des Sauerlandes (Hessen/NRW) erstreckt sich der Diemelsee über eine Länge von mehr als 7 Kilometern. Im Naturpark gleichen Namens gelegen lädt die bläulich schimmernde 166 ha große und bis zu 34 m tiefe Wasserfläche des 1924 vollendeten Stausees zu einer Vielzahl wasserfreudiger Aktivitäten ein.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "53",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "5",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "3",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "98",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "3",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "6",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<1",
                "escherichiaColi": "226",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "31",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Diemelsee",
        "heightAboveSeaLevel": 360,
        "areaHa": 104.4,
        "depthMax": 28.5,
        "depthAvg": 12,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Gemeinde Diemelsee",
            "street": "Am Kahlenberg 1",
            "zipcodeCity": "34519 Adorf",
            "email": "gemeinde@diemelsee.de",
            "telephone": "05633-9899-0",
            "fax": "05633-9899-30",
            "website": "www.diemelsee.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Nidda-Stausee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/vogelsbergkreis/nidda-stausee.html",
        "latitude": "50.479700",
        "longitude": "9.099100",
        "openFrom": "2014-07-04T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Zwischen Schotten und Rainrod im Niddatal gelegen, wurde dieses 44 ha große Rückhaltebecken 1970 fertiggestellt. Bis auf die naturgeschützten Bereiche ist der See frei zugänglich, das Wasser neigt zu einer leichten Algenbildung.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "46",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "30",
                "escherichiaColi": "161",
                "rating": 1,
                "comment": "Vorortbesichtigung durch Gesundheitsamt am 02.07.2014"
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "13",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-11T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-16T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "55",
                "escherichiaColi": "73",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "11",
                "escherichiaColi": "40",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "40",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "85",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "224",
                "escherichiaColi": "288",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "261",
                "escherichiaColi": "682",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "8",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "8",
                "escherichiaColi": "17",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "12",
                "escherichiaColi": "20",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "345",
                "escherichiaColi": "418",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "91",
                "escherichiaColi": "187",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "54",
                "escherichiaColi": "144",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "26",
                "escherichiaColi": "18",
                "rating": 0,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 2
            },
            {
                "year": "2012",
                "rating": 2
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Nidda-Stausee/Nidda-Stausee03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Nidda-Stausee/Nidda-Stausee02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Nidda-Stausee/Nidda-Stausee01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Schotten",
        "heightAboveSeaLevel": 230,
        "areaHa": 43.8,
        "depthMax": 26.2,
        "depthAvg": 9.68,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Sporttauchen",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Wirtschafts- und Versorgungsbetriebe der Stadt Schotten",
            "street": "Vogelsbergstrasse 180",
            "zipcodeCity": "63679 Schotten",
            "email": "",
            "telephone": "06044 6653",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Vogelsbergkreis",
            "address": "Vogelsbergkreis",
            "addressAdditional": "-Gesundheitsamt-",
            "street": "Gartenstr. 27",
            "zipcodeCity": "36341 Lauterbach",
            "telephone": "06641 977-0"
        }
    },
    {
        "name": "Nieder-Mooser-See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/vogelsbergkreis/nieder-mooser-see.html",
        "latitude": "50.464700",
        "longitude": "9.376300",
        "openFrom": "2014-07-04T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Die Freiherren zu Riedesel beschlossen einst, Fische zu züchten. Dazu legten sie im 16. Jahrhundert am Südhang des Vogelberges diesen See an. Mit ca. 30 ha bietet er nicht nur Fischen genug Platz zum Schwimmen. Das blaugrüne Wasser hat zeitweilig Probleme mit Algen, der See wird hierauf jedoch regelmäßig überwacht. Das Strandbad besitzt eine große Liegewiese, einen Badesteg und einen Nichtschwimmerbereich.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "46",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Vorortbesichtigung durch Gesundheitsamt am 02.07.2014"
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-22T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-08T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-06T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-11T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-05T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "18",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-17T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "42",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-04T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "12",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-20T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "95",
                "escherichiaColi": "759",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "20",
                "escherichiaColi": "93",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "168",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "228",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Nieder-Mooser-See/Nieder-Mooser-See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Nieder-Mooser-See/Nieder-Mooser-See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Nieder-Mooser-See/Nieder-Mooser-See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Freiensteinau",
        "heightAboveSeaLevel": 460,
        "areaHa": 30.6,
        "depthMax": 2.8,
        "depthAvg": 1.52,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Camping Heitzenröder GmbH",
            "street": "Karlstraße 21",
            "zipcodeCity": "36399  Freiensteinau-Nieder-Moos",
            "email": "",
            "telephone": "066441433",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Vogelsbergkreis",
            "address": "Vogelsbergkreis",
            "addressAdditional": "-Gesundheitsamt-",
            "street": "Gartenstr. 27",
            "zipcodeCity": "36341 Lauterbach",
            "telephone": "06641 977-0"
        }
    },
    {
        "name": "Silbersee Frielendorf",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/schwalm-eder-kreis/silbersee-frielendorf.html",
        "latitude": "50.980300",
        "longitude": "9.343000",
        "openFrom": "2014-05-15T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Im Jahre 1197 wird das mittelalterliche Frielendorf erstmals erwähnt. Es erlangte als Marktflecken Bedeutung für die ganze Region. 26,5 Millionen Tonnen Braunkohle wurden hier im Laufe von 150 Jahren gefördert. Die daraus gepressten Briketts haben sich längst in Rauch aufgelöst. Ende der sechziger Jahre wurde der Tagebau eingestellt und die Natur hat die Landschaft zurückerobert. In sanfte Hügel eingebettet entstand der Silbersee als ein 8 ha großes, idyllisches Badegewässer.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "61",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-16T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "144",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-13T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-28T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-24T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-26T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "61",
                "escherichiaColi": "461",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-26T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-27T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-13T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
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
        "images": [],
        "city": "Frielendorf",
        "heightAboveSeaLevel": 240,
        "areaHa": 8.2,
        "depthMax": 14.1,
        "depthAvg": 6.65,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeindevorstand der Gemeinde Frielendorf",
            "street": "Ziegenhainer Straße 2",
            "zipcodeCity": "34621 Frielendorf",
            "email": "info@ferienpark-silbersee.de",
            "telephone": "05684 / 9999-0",
            "fax": "05684 / 8560 ",
            "website": "www.ferienpark-silbersee.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Schwalm-Eder-Kreis",
            "address": "Schwalm-Eder-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Waßmuthshäuser Str.52",
            "zipcodeCity": "34576 Homberg (Efze)",
            "telephone": "05681 775-0"
        }
    },
    {
        "name": "Strandbad Spessartblick",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/main-kinzig-kreis/strandbad-spessartblick.html",
        "latitude": "50.084800",
        "longitude": "8.996900",
        "openFrom": "2014-04-18T22:00:00.000Z",
        "openTo": "2014-09-27T22:00:00.000Z",
        "introtext": "In den Ausläufern der Berge des Spessarts liegt der See Freigericht-West oder auch Großkrotzenburger See genannt, der aus einem alten Braunkohletagebau entstand. Zugang zum See hat man nur über den Badestrand der sich an der 10 ha großen Liegewiese anschließt.. Das sehr saubere Wasser des Sees erstreckt sich über eine Fläche von 21,2 Hektar.",
        "measurements": [
            {
                "date": "2014-09-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "101",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "39",
                "escherichiaColi": "250",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "8",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-14T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "10",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-23T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "13",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "8",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-15T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "75",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-09T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "37",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-11T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-20T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "3",
                "escherichiaColi": "100",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "18",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "17",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-05T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-12T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "1",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "12",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-24T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "21",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "17",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "11",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "22",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Strandbad_Spessartblick/_Strandbad_Spessartblick_Grkrotzenb03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Strandbad_Spessartblick/Strandbad_Spessartblick_Grkrotzenb01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "",
        "heightAboveSeaLevel": 105,
        "areaHa": 21,
        "depthMax": 18.73,
        "depthAvg": 9.79,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Gemeinde Großkrotzenburg",
            "street": "Anne-Frank-Platz 9-11",
            "zipcodeCity": "63538  Großkrotzenburg",
            "email": "Petra.Abt@grosskrotzenburg.de",
            "telephone": "06186-200969     ",
            "fax": "06186-200957 ",
            "website": "www.grosskrotzenburg.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Main-Kinzig-Kreis",
            "address": "Main-Kinzig-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Barbarossastr. 24",
            "zipcodeCity": "63571 Gelnhausen",
            "telephone": "06051 85 14370"
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
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-15T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "268",
                "escherichiaColi": "606",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "46",
                "escherichiaColi": "213",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "142",
                "escherichiaColi": "126",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "127",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "127",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "108",
                "escherichiaColi": "304",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "380",
                "escherichiaColi": "<15",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "32",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "250",
                "escherichiaColi": "61",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "28",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "29",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-15T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "18",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "26",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "70",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "8",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "19",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "28",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "8",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "28",
                "escherichiaColi": "179",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-01T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "14",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "11",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "0",
                "rating": 0,
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
    },
    {
        "name": "Krombachtalsperre",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/lahn-dill-kreis/krombachtalsperre.html",
        "latitude": "50.617600",
        "longitude": "8.140200",
        "openFrom": "2014-05-18T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Der Stausee wurde zur Stromerzeugung angelegt und 1947 fertiggestellt. Seine 82,1 ha sind von flachen Ufern eingefasst. Das klare Gewässer ist umgeben von Wäldern und Wiesen. Der nördliche Teil gehört zu Rheinland-Pfalz.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "87",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "53",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "53",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "21",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "53",
                "escherichiaColi": "210",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "43",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "32",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "13",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-13T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "245",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "110",
                "escherichiaColi": "53",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "65",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-15T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "53",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<10",
                "escherichiaColi": "76",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-01T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Krombachtalsperre/Krombachtalsperre03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Krombachtalsperre/Krombachtalsperre02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Krombachtalsperre/Krombachtalsperre01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "",
        "heightAboveSeaLevel": 510,
        "areaHa": 82.1,
        "depthMax": 9.5,
        "depthAvg": 4.57,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Herr Dieter Tobey",
            "street": "An der Krombachtalsperre 4",
            "zipcodeCity": "35759 Driedorf - Mademühlen",
            "email": "campingplatz.tobey@t-online.de",
            "telephone": "02775 300",
            "fax": "02775 577487",
            "website": "http://www.driedorf.de/tourismus/krombachtalsperre.html "
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Lahn-Dill-Kreis",
            "address": "Lahn-Dill-Kreis",
            "addressAdditional": "-Abt. Gesundheit-",
            "street": "Schlossstr. 20",
            "zipcodeCity": "35745 Herborn",
            "telephone": "06441 407-1616"
        }
    },
    {
        "name": "Aartal See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/lahn-dill-kreis/aartal-see.html",
        "latitude": "50.699500",
        "longitude": "8.474200",
        "openFrom": "2014-05-18T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "In der Nähe der B 255 eingebettet in die sanften Hügel des Lahn-Dill-Berglandes wurde die Aar zum Schutz vor Hochwasser gestaut. Der insgesamt 82,9 ha große See ist im Bereich des Badestrandes meist klar.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "Sichttiefe 0,60 m"
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "345",
                "escherichiaColi": "122",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<10",
                "escherichiaColi": "87",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "98",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-13T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-15T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "32",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Aartal_See/Aartalsperre003.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Aartal_See/Aartalsperre002.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Aartal_See/Aartalsperre001_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Bischoffen",
        "heightAboveSeaLevel": 270,
        "areaHa": 82.9,
        "depthMax": 8.2,
        "depthAvg": 2.6,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Dieter Basseng",
            "street": "Am See 12",
            "zipcodeCity": "35449 Bischoffen",
            "email": "info@seabeachbaar.de",
            "telephone": "06444-9313999",
            "fax": "-----------",
            "website": "www.seabeachbaar.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Lahn-Dill-Kreis",
            "address": "Lahn-Dill-Kreis",
            "addressAdditional": "-Abt. Gesundheit-",
            "street": "Schlossstr. 20",
            "zipcodeCity": "35745 Herborn",
            "telephone": "06441 407-1616"
        }
    },
    {
        "name": "Königsee Zellhausen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/kreis-offenbach/koenigsee-zellhausen.html",
        "latitude": "50.021800",
        "longitude": "8.996300",
        "openFrom": "2014-04-25T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Auch hier, in einer alten Flussniederung des Mains, wurde nach Kies gebaggert. Der See hat 14,6 ha Wasserfläche und ist von Wald und Wiesen umgeben. Das Ufer ist nur am Badestrand flach.",
        "measurements": [
            {
                "date": "2014-09-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-21T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-09-12T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "30",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "197",
                "escherichiaColi": "<15",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "30",
                "escherichiaColi": "144",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-04-19T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<30",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "45",
                "escherichiaColi": "968",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "46",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Koenigsee_Zellhausen/_Koenigsee_Zellhsn03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Koenigsee_Zellhausen/_Koenigsee_Zellhsn02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Koenigsee_Zellhausen/Koenigsee_Zellhsn01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Mainhausen",
        "heightAboveSeaLevel": 115,
        "areaHa": 14.6,
        "depthMax": 14.52,
        "depthAvg": 6.49,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Eigenbetrieb Campingplatz und Badeseen Mainhausen",
            "street": "Seestraße 11",
            "zipcodeCity": "63533 Mainhausen",
            "email": "info@seecamping-mainflingen.de",
            "telephone": "06182-8900-34",
            "fax": "06182-8900-40",
            "website": "www.seecamping-mainflingen.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Offenbach",
            "address": "Landkreis Offenbach",
            "addressAdditional": "Fachdienst Gefahrenabwehr und Gesundheitszentrum",
            "street": "Gottlieb-Daimler-Str. 10",
            "zipcodeCity": "63128 Dietzenbach",
            "telephone": "06074 8180-0"
        }
    },
    {
        "name": "Hattsteinweiher",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/hochtaunuskreis/hattsteinweiher.html",
        "latitude": "50.344000",
        "longitude": "8.507600",
        "openFrom": "2014-04-30T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der Hattsteinweiher bei Usingen ist der einzige Badesee im Taunus. Er ist vor ca. 90 Jahren durch die Aufschüttung eines Erdwalles entstanden und wird durch einen kleinen Bach gespeist. Das östliche Ufer ist zum Schwimmen freigegeben und besitzt einen abgetrennten Nichtschwimmerbereich. Man erreicht das öfters durch Algen getrübte Wasser über den an der Liegewiese angrenzenden Badestrand und über große Holzstege.",
        "measurements": [
            {
                "date": "2014-08-12T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "43",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "14",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-17T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-22T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "54",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "17",
                "escherichiaColi": "145",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "144",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "10",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "31",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "82",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "125 cm"
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "130 cm"
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-22T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "22",
                "escherichiaColi": "330",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 170 cm"
            },
            {
                "date": "2010-08-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Algenbl?te, reduzierte Sichttiefe"
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-13T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-18T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-25T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "9",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-13T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "12",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "100",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-17T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<9",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-26T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<5",
                "escherichiaColi": "<5",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "50",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "60",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-04-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "50",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Hochtaunuskreis/Hattsteinweiher/Hattsteinweiher_Usingen03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Hochtaunuskreis/Hattsteinweiher/Hattsteinweiher_Usingen02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Hochtaunuskreis/Hattsteinweiher/Hattsteinweiher_Usingen01-T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Usingen",
        "heightAboveSeaLevel": 340,
        "areaHa": 1.6,
        "depthMax": 4.01,
        "depthAvg": 2.14,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Magistrat der Stadt Usingen",
            "street": "Wilhelmistraße 1",
            "zipcodeCity": "61250 Usingen",
            "email": "friedrich@usingen.de",
            "telephone": "0 60 81 - 10 24 0",
            "fax": "0 60 81 - 10 24 90 10",
            "website": "stadt@usingen.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Hochtaunuskreis",
            "address": "Hochtaunuskreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Ludwig-Erhardt-Anl. 1-4",
            "zipcodeCity": "61348 Bad Homburg",
            "telephone": "06172 999-0"
        }
    },
    {
        "name": "Schultheis-Weiher",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/stadt-offenbach/schultheis-weiher.html",
        "latitude": "50.130200",
        "longitude": "8.778400",
        "openFrom": "2014-04-30T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Der Baggersee (11 ha) entstand, weil man hier über viele Jahre Kies abbaute. 1986 wurden diese Arbeiten beendet, seitdem kann hier gebadet werden. Das Ufer im Badebereich ist flach und das klare Wasser nur von dort zugänglich.",
        "measurements": [
            {
                "date": "2014-08-26T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "161",
                "escherichiaColi": "292",
                "rating": 1,
                "comment": "Sichttiefe 95 cm bis Grund"
            },
            {
                "date": "2014-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "Sichttiefe 70 cm"
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 75 cm"
            },
            {
                "date": "2014-06-24T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-03T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 80 cm (bis Grund)"
            },
            {
                "date": "2014-05-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 105 m bis Grund"
            },
            {
                "date": "2014-04-22T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "Sichttiefe 110 bis Grund"
            },
            {
                "date": "2013-08-27T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 92 cm bis Grund"
            },
            {
                "date": "2013-08-07T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "< 15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 100 cm bis Grund"
            },
            {
                "date": "2013-07-16T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "Sichttiefe 105 cm bis Grund"
            },
            {
                "date": "2013-06-25T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "Sichttiefe 100 cm bis Grund"
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "Sichttiefe 90 cm bis Grund"
            },
            {
                "date": "2013-05-14T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 110 cm"
            },
            {
                "date": "2013-04-23T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 100 cm "
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "179",
                "escherichiaColi": "270",
                "rating": 1,
                "comment": "Sichttiefe 82 cm bis Grund"
            },
            {
                "date": "2012-08-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "94",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 100 cm bis Grund"
            },
            {
                "date": "2012-07-17T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 110 cm bis Grund"
            },
            {
                "date": "2012-06-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 80 cm bis Grund"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 90 cm bis Grund"
            },
            {
                "date": "2012-05-15T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 105 cm bis Grund"
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichtiefe 115 cm bis Grund"
            },
            {
                "date": "2011-09-12T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "272",
                "escherichiaColi": "387",
                "rating": 2,
                "comment": "Sichttiefe 80 cm bis Grund"
            },
            {
                "date": "2011-09-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "7090",
                "escherichiaColi": "1430",
                "rating": 2,
                "comment": "Sichttiefe 88 cm bis Grund"
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "75",
                "escherichiaColi": "58",
                "rating": 1,
                "comment": "Sichttiefe 95 cm bis Grund"
            },
            {
                "date": "2011-08-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "82",
                "escherichiaColi": "200",
                "rating": 2,
                "comment": "Sichttiefe 80 cm bis Wasserpflanzen"
            },
            {
                "date": "2011-07-25T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "54",
                "escherichiaColi": "91",
                "rating": 1,
                "comment": "Sichttiefe 80 cm bis Wasserpflanzen"
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "38",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "Sichttiefe 94 cm wegen Wasserpflanzen nicht tiefer messbar"
            },
            {
                "date": "2011-06-27T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "164",
                "escherichiaColi": "77",
                "rating": 2,
                "comment": "Sichttiefe 95 cm"
            },
            {
                "date": "2011-06-13T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "48",
                "escherichiaColi": "39",
                "rating": 1,
                "comment": "Sichttiefe 95 cm"
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "342",
                "escherichiaColi": "145",
                "rating": 2,
                "comment": "Sichttiefe 60 cm"
            },
            {
                "date": "2011-05-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "61",
                "escherichiaColi": "20",
                "rating": 1,
                "comment": "Sichttiefe 110 cm bis Grund"
            },
            {
                "date": "2011-05-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "131",
                "escherichiaColi": "23",
                "rating": 2,
                "comment": "Sichttiefe 130 cm bis Grund"
            },
            {
                "date": "2011-05-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "323",
                "escherichiaColi": "19",
                "rating": 2,
                "comment": "Sichttiefe 135 cm bis Grund"
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "220",
                "escherichiaColi": "21",
                "rating": 2,
                "comment": "Sichttiefe 135 cm bis Grund"
            },
            {
                "date": "2011-04-04T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "181",
                "escherichiaColi": "34",
                "rating": 2,
                "comment": "Sichttiefe 138 cm bis Grund"
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": null
            },
            {
                "year": "2012",
                "rating": null
            },
            {
                "year": "2013",
                "rating": null
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Stadt_Offenbach/Schultheis-Weiher/Schultheisweiher_Rumpenh03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Stadt_Offenbach/Schultheis-Weiher/Schultheisweiher_Rumpenh02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Stadt_Offenbach/Schultheis-Weiher/Schultheisweiher_Rumpenh01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Offenbach am Main",
        "heightAboveSeaLevel": 98,
        "areaHa": 10.4,
        "depthMax": 3.11,
        "depthAvg": 2.49,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Amt für Umwelt, Energie und Mobilität",
            "street": "Berlinerstr. 60",
            "zipcodeCity": "63065 Offenbach",
            "email": "umweltamt@offenbach.de",
            "telephone": "069/8065-2190",
            "fax": "069/8065-2276",
            "website": "www.offenbach.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Offenbach",
            "address": "Stadt Offenbach",
            "addressAdditional": "Stadtgesundheitsamt",
            "street": "Berliner Straße 60",
            "zipcodeCity": "63065 Offenbach",
            "telephone": "069 8065-3130"
        }
    },
    {
        "name": "Marbach-Stausee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/odenwaldkreis/marbach-stausee.html",
        "latitude": "49.608900",
        "longitude": "8.967700",
        "openFrom": "2014-06-30T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der Bereich hinter dem Staudamm (abzügl. einer Sicherheitszone) ist für Surfer und Segelboote reserviert. Daran angrenzend befindet sich der Bade- und Vergnügungsbereich. Im hinteren Teil des Sees befindet sich der Vogelschutzbereich mit einer kleinen Insel. Dieser Bereich darf nicht betreten und nicht mit Booten befahren werden. Um den See führt ein drei Kilometer langer Wanderweg. ",
        "measurements": [
            {
                "date": "2014-08-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte kühles Wetter mit zeitweilig leichten Schauern, wie auch an den Vortagen"
            },
            {
                "date": "2014-08-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte warmes Sommerwetter (wie auch an den Vortagen"
            },
            {
                "date": "2014-07-23T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte heißes Hochsommerwetter (wie auch an den Vortagen)"
            },
            {
                "date": "2014-07-09T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "32",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probeentnahme herrschte kühles und trübes Wetter, wie an den Tagen zuvor"
            },
            {
                "date": "2014-06-25T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probeentnahme herrschte bewölktes Wetter; während der letzten 48 Stunden davor zeitweilig Niederschläge"
            },
            {
                "date": "2013-08-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte warmes, trockenes Sommerwetter"
            },
            {
                "date": "2013-07-31T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte warmes Hochsommerwetter; kein sichtbarer Film auf der Wasseroberfläche; keine Schaumbildung; kein spezifischer Geruch"
            },
            {
                "date": "2013-07-17T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-03T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "21",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte warmes Wetter; am Vortag Niederschläge."
            },
            {
                "date": "2013-06-26T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "28",
                "escherichiaColi": "50",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-15T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "20",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "warmes Wetter, in der Nacht zuvor leichte Niederschläge"
            },
            {
                "date": "2012-08-01T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "8",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "warmes Wetter, keine Niederschläge"
            },
            {
                "date": "2012-07-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "11",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "warmes Wetter, bedeckt, aber keine Niederschläge"
            },
            {
                "date": "2012-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "bei der Probenahme herrschte warmes, schwüles Sommerwetter"
            },
            {
                "date": "2012-06-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "9",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "22",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Zum Zeitpunkt der Probenahme herrschte warmes Sommerwetter"
            },
            {
                "date": "2011-08-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Das Wetter war schw?l-warm"
            },
            {
                "date": "2011-07-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "20",
                "escherichiaColi": "3",
                "rating": 1,
                "comment": "Das Wetter war schw?l-warm"
            },
            {
                "date": "2011-06-21T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "40",
                "escherichiaColi": "248",
                "rating": 2,
                "comment": "es herrscht Trockenwetter / Sonnenschein w?hrend der Proenentnahme, w?hrend der letzten 48 Stunden davor zeitweilig Niederschl?ge"
            },
            {
                "date": "2010-08-18T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "78",
                "escherichiaColi": "162",
                "rating": 2,
                "comment": "zum Zeitpunkt der Probename herrschte unbest?ndiges Wetter mit Niederschl?gen (wie auch in den Tagen zuvor)"
            },
            {
                "date": "2010-08-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "22",
                "escherichiaColi": "29",
                "rating": 1,
                "comment": "es herrschte unbest?ndiges Wetter mit zeitweiligen Niederschl?gen (wie auch in den tagen zuvor)"
            },
            {
                "date": "2010-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "14",
                "escherichiaColi": "9",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "6",
                "rating": 1,
                "comment": "es herrschte trockenes, hei?es Sommerwetter"
            },
            {
                "date": "2010-06-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "3",
                "escherichiaColi": "7",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "55",
                "escherichiaColi": "17",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-24T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "<1",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "11",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "31",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "20",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Odenwaldkreis/Marbach-Stausee/Marbachtalsperre03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Odenwaldkreis/Marbach-Stausee/Marbachtalsperre02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Odenwaldkreis/Marbach-Stausee/Marbachtalsperre01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Beerfelden",
        "heightAboveSeaLevel": 250,
        "areaHa": 22,
        "depthMax": 8.6,
        "depthAvg": 3.21,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Wasserverband Mümling Landratsamt Odenwaldkreis",
            "street": "Michelstädter Straße 12",
            "zipcodeCity": "64711 Erbach",
            "email": "m.sottong@wv-muemling-gersprenz.de",
            "telephone": "06062/ 70 288",
            "fax": "06062/ 70 287",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Odenwaldkreis",
            "address": "Odenwaldkreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Michelstädter Str. 12",
            "zipcodeCity": "64711 Erbach",
            "telephone": "06062 70-0"
        }
    },
    {
        "name": "Perfstausee Breidenstein",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/marburg-biedenkopf/perfstausee-breidenstein.html",
        "latitude": "50.908800",
        "longitude": "8.458200",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der Perfstausee in Biedenkopfs Stadtteil Breidenstein ist ein beliebter Badesee. Direkt an der B 253 gelegen, ist er gut erreichbar. Ein angrenzendes Naturschutzgebiet bietet vor allem Wasservögeln ein Refugium. Ein Badestrand der auch für kleine Kinder gut geeignet ist, mit Liegewiese steht für Badegäste zur Verfügung. Die anderen Uferbereiche sind jedoch relativ steil abfallend.",
        "measurements": [
            {
                "date": "2014-08-24T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "234",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "179",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "16740",
                "rating": 3,
                "comment": ""
            },
            {
                "date": "2014-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "232",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-27T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "2305",
                "escherichiaColi": "309",
                "rating": 3,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "23670",
                "escherichiaColi": "23670",
                "rating": 3,
                "comment": ""
            },
            {
                "date": "2014-07-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "45",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-22T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "669",
                "escherichiaColi": "92",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "563",
                "escherichiaColi": "20795",
                "rating": 3,
                "comment": "Sichttiefe nur 0,4m"
            },
            {
                "date": "2013-08-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "386",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": ">1200",
                "escherichiaColi": ">1500",
                "rating": 5,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "32",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "27",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "7",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sehr schwach bräunliche Wasserfärbung"
            },
            {
                "date": "2013-06-09T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "23",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-12T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "110",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-05T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "1274",
                "escherichiaColi": "<15",
                "rating": 4,
                "comment": ""
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1758",
                "escherichiaColi": "143",
                "rating": 5,
                "comment": ""
            },
            {
                "date": "2012-07-22T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "594",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-15T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "4723",
                "escherichiaColi": "4491",
                "rating": 4,
                "comment": ""
            },
            {
                "date": "2012-07-01T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "302",
                "escherichiaColi": "437",
                "rating": 1,
                "comment": "Sichttiefe: 0,9m"
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "316",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-03T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "6",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "17",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-05T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "130",
                "escherichiaColi": "306",
                "rating": 2,
                "comment": "Zustatzbeprobung"
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "759",
                "escherichiaColi": "350",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<1",
                "escherichiaColi": "272",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-06T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "14",
                "escherichiaColi": "55",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "4",
                "escherichiaColi": "31",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "14",
                "escherichiaColi": "16",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-22T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<1",
                "escherichiaColi": "8",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<1",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "5",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "6",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "37",
                "escherichiaColi": "60",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "79",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "39",
                "rating": 0,
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
                "rating": 3
            },
            {
                "year": "2013",
                "rating": 4
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Marburg-Biedenkopf/Perfstausee_Breidenstein/Perftalsperre04.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Marburg-Biedenkopf/Perfstausee_Breidenstein/Perftalsperre02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Marburg-Biedenkopf/Perfstausee_Breidenstein/Perftalsperre01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Biedenkopf",
        "heightAboveSeaLevel": 301,
        "areaHa": 18,
        "depthMax": 4.4,
        "depthAvg": 3.33,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Perfstausee-Betreiber GmbH",
            "street": "Im Lichtenholz 60",
            "zipcodeCity": "35043 Marburg",
            "email": "HauptV@marburg-biedenkopf.de",
            "telephone": "06421 / 405 1535",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Marburg-Biedenkopf",
            "address": "Landkreis Marburg-Biedenkopf",
            "addressAdditional": "",
            "street": "Schwanallee 23",
            "zipcodeCity": "35037 Marburg",
            "telephone": "06421 40540"
        }
    },
    {
        "name": "Kinzigsee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/main-kinzig-kreis/kinzigsee.html",
        "latitude": "50.165700",
        "longitude": "9.033100",
        "openFrom": "2014-05-31T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Der Kinzigsee entstand Ende der 70er Jahre als für den Autobahnbau in der Kinzigaue im Main-Kinzig-Kreis bei Langenselbold Erde ausgebaggert wurde in Form eines Restlochs. Der See steht im Wasseraustausch mit dem nahe gelegenen Ruhlsee und der Kinzig, über die er einen ständigen Eintrag von Phosphorverbindungen erfährt. Anfang der 90er Jahre kam es zu einem verstärkten Algenwachstum und deshalb von 1998-2004 zu einem Badeverbot. Erst im Frühjahr 2004 konnte mittels einer 6,2 m tiefen und 436 m langen schwimmenden Tauchwand eine saisonalen Teilrestaurierung im abtrennten Teilbereiches erfolgen und das Badeverbot für diesen Teilbereich wieder aufgehoben werden.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "22",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "26",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-26T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "21",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-10T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "11",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-27T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "16",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "8",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-12T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "19",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "36",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "48",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-02T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "13",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-24T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-07T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-24T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "2",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-24T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 1",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Kinzigsee/Kinzigsee03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Kinzigsee/Kinzigsee02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Kinzigsee/Kinzigsee01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Langenselbold",
        "heightAboveSeaLevel": 111,
        "areaHa": 23.3,
        "depthMax": 15.07,
        "depthAvg": 9.1,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Stadt Langenselbold",
            "street": "Schloßpark 2",
            "zipcodeCity": "63505 Langenselbold",
            "email": "A.Kempski@Langenselbold.de",
            "telephone": "06184-8020",
            "fax": "06184-80221",
            "website": "www.Langenselbold.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Main-Kinzig-Kreis",
            "address": "Main-Kinzig-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Barbarossastr. 24",
            "zipcodeCity": "63571 Gelnhausen",
            "telephone": "06051 85 14370"
        }
    },
    {
        "name": "Grüner See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/werra-meissner-kreis/gruener-see.html",
        "latitude": "51.295300",
        "longitude": "9.854000",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Der teilweise von steilen Hängen umgebene grüne See entstand 1940, als ein Gipssteinbruch sich mit Oberflächenwasser füllte. Das 5000 m2-Gewässer ist reich an Phytoplankton, daher die grüne Farbe. In der Nähe wird immer noch Gipsstein gebrochen und Gips produziert. In manchen Uferbereichen besteht Steinschlaggefahr. Das Wasser ist über Stege zu erreichen. Hunde werden nicht geduldet.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-05T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-01T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sicht Grenzwertig < 1m"
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sicht Grenzwertig < 1m"
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-09T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-06T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-08T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-11T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "250",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "179",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
        "images": [],
        "city": "Witzenhausen",
        "heightAboveSeaLevel": 220,
        "areaHa": 0.39,
        "depthMax": 4.05,
        "depthAvg": 2.24,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Magistrat der Stadt Witzenhausen",
            "street": "Am Markt 1",
            "zipcodeCity": "37213 Witzenhausen",
            "email": "stadtverwaltung@witzenhausen.de",
            "telephone": "05542 508 0",
            "fax": "05542 508 100",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Werra-Meißner-Kreis",
            "address": "Fachbereich Gesundheit- Verbraucherschutz und Veterinärwesen",
            "addressAdditional": "Fachdienst Hygiene",
            "street": "Luisenstr. 23c",
            "zipcodeCity": "37269 Eschwege",
            "telephone": "05651 959230"
        }
    },
    {
        "name": "Werratalsee Ostufer",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/werra-meissner-kreis/werratalsee-ostufer.html",
        "latitude": "51.191600",
        "longitude": "10.094000",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Der Werratalsee ist durch Abgrabungen von Kies entstanden und befindet sich in der Werraaue nördlich der Stadt Eschwege und westlich der Gemeinde Meinhard. Der See wird als Badegewässer, zum Segeln und für den Rudersport genutzt. Entlang seiner Uferstrecke lädt die Auenlandschaft die Spaziergänger zur stillen Erholung ein. In jüngster Zeit wird auch eine Fahrgastschifffahrt betrieben.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-05T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-01T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-09T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "170",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "157",
                "escherichiaColi": "170",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-06T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "26",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "35",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "7",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "22",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "12",
                "escherichiaColi": "87",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-11T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "60",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "3",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-11T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "6",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-10T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "1",
                "escherichiaColi": "76",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "20",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "50",
                "escherichiaColi": "43",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-10T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "110",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
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
        "images": [],
        "city": "Meinhard",
        "heightAboveSeaLevel": 160,
        "areaHa": 117,
        "depthMax": 8.5,
        "depthAvg": 4.9,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Sporttauchen",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Gemeindevorstand  der Gemeinde Meinhard",
            "street": "Sandstraße 15",
            "zipcodeCity": "37276 Meinhard",
            "email": "hauptamt@gemeinde-meinhard.kgrz-kassel.de",
            "telephone": "05651 74 80 0",
            "fax": "05651 74 80 55",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Werra-Meißner-Kreis",
            "address": "Fachbereich Gesundheit- Verbraucherschutz und Veterinärwesen",
            "addressAdditional": "Fachdienst Hygiene",
            "street": "Luisenstr. 23c",
            "zipcodeCity": "37269 Eschwege",
            "telephone": "05651 959230"
        }
    },
    {
        "name": "Campingplatz Teichmann",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/campingplatz-teichmann-voehl.html",
        "latitude": "51.174500",
        "longitude": "8.890900",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Das Badegewässer Campingplatz Teichmann ist ein Ederauensee oberhalb der Stauwurzel der Edertalsperre in Vöhl-Herzhausen, der durch den Abbau von Kies entstanden ist. An dem Badegewässer befindet sich der gleichnamige Campingplatz.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "21",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "234",
                "escherichiaColi": "220",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "5",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "7",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "20",
                "escherichiaColi": "20",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "9",
                "escherichiaColi": "1100",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "14",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "23",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "6",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "22",
                "escherichiaColi": "200",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "7",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "5",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "7",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o."
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "38",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "17",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "4",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "13",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Vöhl",
        "heightAboveSeaLevel": 244,
        "areaHa": 6.9,
        "depthMax": 4.13,
        "depthAvg": 2.48,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Baden",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Grundstücksgemeinschaft Teichmann / Müller",
            "street": "Zum Träumen 1 a",
            "zipcodeCity": "34516 Vöhl-Herzhausen",
            "email": "info@camping-teichmann.de",
            "telephone": "05635-245",
            "fax": "",
            "website": "www.Ferienpark-Teichmann.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Edertalsperre - Strandbad Rehbach",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/edertalsperre-strandbad-rehbach.html",
        "latitude": "51.183800",
        "longitude": "9.023200",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Was für ein Stausee! Mehr als 25 Millionen Goldmark hat er das Königreich Preussen gekostet! 1914 war das gewaltige Bauwerk fertiggestellt: Stärke der Staumauer an der Sohle 36 m, Länge an der Krone 400 m, Stauhöhe 47 m, Länge des Sees 27 km mit einer Uferlänge von 69 km. Als das Wasser der Eder sich staute, mussten etwa 900 Menschen ihre Häuser verlassen. Die Errichtung eines großen Wasserreservoirs war erforderlich für die Speisung des neu gebauten Mittellandkanals. Zusätzlich schützte man so das untere Edertal und die Fulda gegen Hochwasser und konnte die Wasserkraft zur Gewinnung von Elektrizität nutzen. Der See wirkt aber auch elektrisierend auf Freunde des Wassersports und Erholungssuchende aus ganz Deutschland, in dessen Mitte dieses Ferienparadies liegt.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "98",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "6",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "19",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "7",
                "escherichiaColi": "230",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "98",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "5",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "145",
                "escherichiaColi": "65",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "3",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "5",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "6",
                "escherichiaColi": "<19",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "32",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "23",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Edertal",
        "heightAboveSeaLevel": 245,
        "areaHa": 1.05,
        "depthMax": 32,
        "depthAvg": 14.3,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Sporttauchen",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Gemeinde Edertal ",
            "street": "Bahhofstr.25",
            "zipcodeCity": "34549 Giflitz",
            "email": "gemeinde@edertal.de",
            "telephone": "05623-808-0 ",
            "fax": "05623-808-28",
            "website": "www.edertal.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Twistetalsperre - Strandbad Wetterburg",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/waldeck-frankenberg/twistetalsperre-strandbad-wetterburg.html",
        "latitude": "51.373400",
        "longitude": "9.061500",
        "openFrom": "2014-06-15T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "In den siebziger Jahren wurde dieser Stausee zum Hochwasserschutz gebaut. Der See ist 121 ha groß und hat Trinkwasserqualität. Gesäumt von Wiesen und Wald liegt das klare Gewässer in einem Naturschutzgebiet. Kraftfahrzeuge werden vom umgebenden Rundweg ferngehalten. Hunde müssen an die Leine und dürfen nicht ins Wasser.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "21",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "98",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "32",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "170",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-04T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-28T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "76",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "5",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-28T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "14",
                "escherichiaColi": "130",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "22",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "8",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-07T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "56",
                "escherichiaColi": "230",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "1",
                "escherichiaColi": "160",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-18T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "4",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "6",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": "o.B."
            },
            {
                "date": "2010-06-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "87",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "2",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "12",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-28T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-02T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "70",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "11",
                "escherichiaColi": "43",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
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
        "images": [],
        "city": "Bad Arolsen",
        "heightAboveSeaLevel": 200,
        "areaHa": 61.2,
        "depthMax": 13.5,
        "depthAvg": 7.67,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen",
            "Wasserski"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Magistrat der Stadt Bad Arolsen",
            "street": "Rauchstr.2",
            "zipcodeCity": "34454 Bad Arolsen",
            "email": "ggz@bad-arolsen.de",
            "telephone": "05691-801-240",
            "fax": "05691-801-238",
            "website": "www.bad-arolsen.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Waldeck-Frankenberg",
            "address": "Kreis Waldeck-Frankenberg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Am Kniep 50",
            "zipcodeCity": "34497 Korbach",
            "telephone": "05631 954-0"
        }
    },
    {
        "name": "Großer Pfordter See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/vogelsbergkreis/grosser-pfordter-see.html",
        "latitude": "50.651300",
        "longitude": "9.598400",
        "openFrom": "2014-07-04T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "In einer Kiesgrube entstand auf fast 14 ha Fläche in der Fuldaaue der Pfordter See. Das Ufer ist mal steil, mal flach. Es ist geplant, hier ein Freizeit- und Erholungsgebiet entstehen zu lassen.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Vorortbesichtigung durch Gesundheitsamt am 03.07.2014"
            },
            {
                "date": "2013-08-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "45",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-22T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-08T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "160",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "143",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "412",
                "escherichiaColi": "393",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "616",
                "escherichiaColi": "1227",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "20",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-05T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "188",
                "escherichiaColi": "179",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "38",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-17T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "264",
                "escherichiaColi": "75",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "13",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "59",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-22T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "9",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-19T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-22T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "19",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "38",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "17",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 2
            },
            {
                "year": "2012",
                "rating": 3
            },
            {
                "year": "2013",
                "rating": 3
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Grosser_Pfordter_See/Grosser_Pfordter_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Vogelsbergkreis/Grosser_Pfordter_See/Grosser_Pfordter_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Schlitz",
        "heightAboveSeaLevel": 277,
        "areaHa": 11.5,
        "depthMax": 12,
        "depthAvg": 4.6,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Stadtverwaltung Schlitz",
            "street": "An der Kirche 4",
            "zipcodeCity": "36110 Schlitz",
            "email": "",
            "telephone": "06642 9700",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Vogelsbergkreis",
            "address": "Vogelsbergkreis",
            "addressAdditional": "-Gesundheitsamt-",
            "street": "Gartenstr. 27",
            "zipcodeCity": "36341 Lauterbach",
            "telephone": "06641 977-0"
        }
    },
    {
        "name": "Neuenhainer See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/schwalm-eder-kreis/neuenhainer-see.html",
        "latitude": "50.993400",
        "longitude": "9.269100",
        "openFrom": "2014-05-15T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "1969 beendete man hier den Abbau von Braunkohle. Die Grube füllte sich auf einer Fläche von 5 ha zu einem See. Das blaugrüne Wasser ist im Badebereich über einen Sandstrand zu erreichen. In den übrigen Bereichen ist das Ufer steil.",
        "measurements": [
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-16T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "30",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-22T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-28T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-24T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "46",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-26T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-27T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "61",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "46",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "30",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
        "images": [],
        "city": "Neuental",
        "heightAboveSeaLevel": 190,
        "areaHa": 4.4,
        "depthMax": 14.1,
        "depthAvg": 6.32,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Gemeindevorstand der Gemeinde Neuental",
            "street": "Hauptstraße 8",
            "zipcodeCity": "34599 Neuental",
            "email": "info@neuenhainer-see.de",
            "telephone": "06693 / 1287",
            "fax": "06693 / 803771",
            "website": "www.neuenhainer-see.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Schwalm-Eder-Kreis",
            "address": "Schwalm-Eder-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Waßmuthshäuser Str.52",
            "zipcodeCity": "34576 Homberg (Efze)",
            "telephone": "05681 775-0"
        }
    },
    {
        "name": "Stockelache",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/schwalm-eder-kreis/stockelache.html",
        "latitude": "51.065000",
        "longitude": "9.242200",
        "openFrom": "2014-05-15T22:00:00.000Z",
        "openTo": "2014-09-29T22:00:00.000Z",
        "introtext": "Zwischen Altenburg und Kuhberg, in der \"Schwalmpforte\", liegt der 10 ha große Naturbadesee Stockelache. Seinem klaren, blaugrünen Wasser sieht man nicht an, dass hier bis in die achtziger Jahre Braunkohle gefördert wurde. Die Umgebung ist waldig und geprägt durch die Auenlandschaft der Schwalm.",
        "measurements": [
            {
                "date": "2014-09-01T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-01T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-21T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "61",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-11T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-28T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-24T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "110",
                "escherichiaColi": "61",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "61",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-26T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-26T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-27T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-13T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "30",
                "rating": 0,
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
        "images": [],
        "city": "Borken (Hessen)",
        "heightAboveSeaLevel": 170,
        "areaHa": 8.5,
        "depthMax": 17.4,
        "depthAvg": 6.48,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Baden",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Magistrat der Stadt Borken",
            "street": "Am Rathaus 7",
            "zipcodeCity": "34582 Borken",
            "email": "stadtverwaltung@borken-hessen.de",
            "telephone": "05682 / 808-160",
            "fax": "05682 / 808-165",
            "website": "www.borken-hessen.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Schwalm-Eder-Kreis",
            "address": "Schwalm-Eder-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Waßmuthshäuser Str.52",
            "zipcodeCity": "34576 Homberg (Efze)",
            "telephone": "05681 775-0"
        }
    },
    {
        "name": "Niederweimarer See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/marburg-biedenkopf/niederweimarer-see.html",
        "latitude": "50.759700",
        "longitude": "8.739400",
        "openFrom": "2014-04-30T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Eine Kies- und Sandgrube mit einer Ausdehnung von 15 ha füllte sich mit Wasser. Der so entstandene klare Baggersee dient nun als Naherholungsgebiet dem sommerlichem Badevergnügen. Es gibt ein vielfältiges Freizeitangebot bis hin zu einer Wasserskianlage. Seine Wasserqualität gehört zu den besten aller hessischen Seen. Eisen- und Autobahn sind nicht weit entfernt.",
        "measurements": [
            {
                "date": "2014-08-31T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-22T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-05T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-13T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-26T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "46",
                "escherichiaColi": "179",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-15T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-18T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-23T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "177",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-11T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "504",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-04-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "0",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Marburg-Biedenkopf/Niederweimarer_See/Niederweimarer_See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Marburg-Biedenkopf/Niederweimarer_See/Niederweimarer_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Marburg-Biedenkopf/Niederweimarer_See/Niederweimarer_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Weimar",
        "heightAboveSeaLevel": 170,
        "areaHa": 15,
        "depthMax": 13.9,
        "depthAvg": 7.52,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Wasserski",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Hot Sport Sportschulen GmbH Günter Gerkau",
            "street": "Seepark 1",
            "zipcodeCity": "35096 Niederweimar",
            "email": "seepark@hotsport.de",
            "telephone": "06421 / 972370",
            "fax": "06421 / 972372",
            "website": "www.hotsport.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Marburg-Biedenkopf",
            "address": "Landkreis Marburg-Biedenkopf",
            "addressAdditional": "",
            "street": "Schwanallee 23",
            "zipcodeCity": "35037 Marburg",
            "telephone": "06421 40540"
        }
    },
    {
        "name": "Strandbad Rodenbach",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/main-kinzig-kreis/strandbad-rodenbach.html",
        "latitude": "50.152000",
        "longitude": "9.031600",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-08-11T22:00:00.000Z",
        "introtext": "Obwohl das Strandbad nur 200 m vom Ortsrand Niederrodenbachs entfernt liegt und ein Supermarkt ganz in der Nähe ist, gilt der See mit seinen 3,4 ha bei Insidern als Idyll und Geheimtipp. Nun denn, geheim ist er jetzt nicht mehr.",
        "measurements": [
            {
                "date": "2014-07-30T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "27",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "16",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "2",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "48",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "19",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "11",
                "escherichiaColi": "160",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<1",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "220",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 1",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "20",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "8",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-30T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-02T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "6",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-05T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-24T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "9",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "7",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "7",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "16",
                "escherichiaColi": "180",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "56",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Strandbad_Rodenbach/Strandbad_Rodenbach03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Strandbad_Rodenbach/Strandbad_Rodenbach02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Main-Kinzig-Kreis/Strandbad_Rodenbach/Strandbad_Rodenbach01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Rodenbach",
        "heightAboveSeaLevel": 130,
        "areaHa": 2.6,
        "depthMax": 4.04,
        "depthAvg": 2.82,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Gemeinde Rodenbach",
            "street": "Buchbergstrasse 2",
            "zipcodeCity": "63517 Rodenbach",
            "email": "denise.puth@rodenbach.de",
            "telephone": "06184-59933",
            "fax": "06184-50472",
            "website": "www.rodenbach.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Main-Kinzig-Kreis",
            "address": "Main-Kinzig-Kreis",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Barbarossastr. 24",
            "zipcodeCity": "63571 Gelnhausen",
            "telephone": "06051 85 14370"
        }
    },
    {
        "name": "Waldsee Mengerskirchen",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/limburg-weilburg/waldsee-mengerskirchen.html",
        "latitude": "50.551800",
        "longitude": "8.190700",
        "openFrom": "2014-05-02T22:00:00.000Z",
        "openTo": "2014-09-06T22:00:00.000Z",
        "introtext": "Der kleine Stausee - 2,1 ha Wasserfläche - wurde als Erholungsgebiet angelegt. Das Wasser ist durch Algenwachstum und einer oberhalb liegenden Tongrube teilweise getrübt. In der Umgebung findet man Wald, Wiesen und Felder. Der See liegt zwischen Winkels und Probbach.",
        "measurements": [
            {
                "date": "2014-08-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "Sichttiefe 0,5 m"
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-27T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-21T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "406",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-28T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-12T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": "Vorsicht beim Baden geboten, aufgrund der geringen Sichtiefe im Wasserkörper"
            },
            {
                "date": "2012-07-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-29T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "76",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "43",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "76",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-26T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-05T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "43",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Limburg-Weilburg/Waldsee_Mengerskirchen/Waldsee_Mengerskirchen_Winkels03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Limburg-Weilburg/Waldsee_Mengerskirchen/Waldsee_Mengerskirchen_Winkels02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Limburg-Weilburg/Waldsee_Mengerskirchen/Waldsee_Mengerskirchen_Winkels01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Mengerskirchen",
        "heightAboveSeaLevel": 260,
        "areaHa": 2.1,
        "depthMax": 6.35,
        "depthAvg": 3.32,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Düngen Freibad & Gastronomie",
            "street": "Am Seeweiher",
            "zipcodeCity": "35794 Mengerskirchen",
            "email": "info@seeweiher.de",
            "telephone": "06476 / 2263",
            "fax": "06476 / 1580",
            "website": "www.seeweiher.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Limburg-Weilburg",
            "address": "Landkreis Limburg-Weilburg",
            "addressAdditional": "Gesundheits und Umweltamt",
            "street": "Schiede 43",
            "zipcodeCity": "65549 Limburg",
            "telephone": "06431 296-0"
        }
    },
    {
        "name": "Heisterberger Weiher",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/lahn-dill-kreis/heisterberger-weiher.html",
        "latitude": "50.654000",
        "longitude": "8.163200",
        "openFrom": "2014-05-18T22:00:00.000Z",
        "openTo": "2014-08-31T22:00:00.000Z",
        "introtext": "Auf dem Hochplateau des Westerwaldes, an der Grenze zu Rheinland-Pfalz und NRW liegt auf 530 m Höhe inmitten von Wäldern und Wiesen dieser 9,6 ha große klare See, der bereits 1711 als Wasserspeicher und Fischteich aufgestaut wurde.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-29T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-18T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "53",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "Nilgänse"
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-16T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-26T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-12T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "53",
                "escherichiaColi": "134",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "32",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "134",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-17T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-13T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-10T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-19T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "32",
                "escherichiaColi": "76",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-29T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-15T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-22T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "53",
                "escherichiaColi": "220",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-11T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "21",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "21",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-30T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "32",
                "escherichiaColi": "53",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-12T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<10",
                "escherichiaColi": "316",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-01T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-13T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "53",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "10",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Heisterberger_Weiher/Heisterberger_Weiher03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Heisterberger_Weiher/Heisterberger_Weiher02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Lahn-Dill-Kreis/Heisterberger_Weiher/Heisterberger_Weiher01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Driedorf",
        "heightAboveSeaLevel": 530,
        "areaHa": 9.4,
        "depthMax": 7.16,
        "depthAvg": 2.99,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Wassersport"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Herr Dieter Tobey",
            "street": "Am Weiher 3",
            "zipcodeCity": "35759 Driedorf - Heisterberg",
            "email": "info@driedorf.de",
            "telephone": "02775 458",
            "fax": "02775 578617",
            "website": "http://www.driedorf.de/tourismus/heisterberger-weiher.html "
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Lahn-Dill-Kreis",
            "address": "Lahn-Dill-Kreis",
            "addressAdditional": "-Abt. Gesundheit-",
            "street": "Schlossstr. 20",
            "zipcodeCity": "35745 Herborn",
            "telephone": "06441 407-1616"
        }
    },
    {
        "name": "FKK-Orplid",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/kreis-offenbach/fkk-orplid.html",
        "latitude": "50.058700",
        "longitude": "8.728100",
        "openFrom": "2014-04-25T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Dies ist ein kleiner See von 0,3 ha Wasserfläche zwischen Neu-Isenburg und Gravenbruch für Vereinsmitglieder des Freikörperkultur-Vereins. Für Gäste gibt es Möglichkeiten zur Tagesmitgliedschaft.",
        "measurements": [
            {
                "date": "2014-09-08T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "177",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-21T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 11,
                "enterocsocci": "<15",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-09-12T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-15T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "46",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-19T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/FKK-Orplid_e._V/FKK_Orplid_Neu-Isenburg02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/FKK-Orplid_e._V/FKK_Orplid_Neu-Isenburg01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Neu-Isenburg",
        "heightAboveSeaLevel": 128,
        "areaHa": 0.3,
        "depthMax": 3.8,
        "depthAvg": 2,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "FKK-Orplid e.V.",
            "street": "Offenbacher Straße 246",
            "zipcodeCity": "63263 Neu-Isenburg",
            "email": "geschaeftsstelle@orplid-frankfurt.de",
            "telephone": "06102-39357",
            "fax": "0180 506 034 609 370",
            "website": "www.orplid-frankfurt.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Offenbach",
            "address": "Landkreis Offenbach",
            "addressAdditional": "Fachdienst Gefahrenabwehr und Gesundheitszentrum",
            "street": "Gottlieb-Daimler-Str. 10",
            "zipcodeCity": "63128 Dietzenbach",
            "telephone": "06074 8180-0"
        }
    },
    {
        "name": "Langener Waldsee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/kreis-offenbach/langener-waldsee.html",
        "latitude": "50.018500",
        "longitude": "8.620900",
        "openFrom": "2014-04-25T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Dieser Baggersee beeindruckt schon durch seine Größe: 100 Hektar Wasserfläche stehen hier den Erholung suchenden Bewohnern des Rhein-Main-Gebietes zum sommerlichen Freizeitvergnügen zur Verfügung. Der See ist von Wald umgeben, der zu Spaziergängen oder Radtouren einlädt und die Nähe zur Großstadt Frankfurt leicht vergessen lässt. Odenwald, Spessart und Taunus sind nicht weit entfernt. Da die Ufer steil sind, ist das Wasser nur über den Badestrand zugänglich.",
        "measurements": [
            {
                "date": "2014-09-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-19T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-21T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-09-09T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-12T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-17T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-20T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-10T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-11T22:00:00.000Z",
                "waterTemperature": 10,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-06T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "45",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-12T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-19T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Langener_Waldsee/Langener_Waldsee03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Langener_Waldsee/Langener_Waldsee02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Kreis_Offenbach/Langener_Waldsee/Langener_Waldsee01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Langen",
        "heightAboveSeaLevel": 115,
        "areaHa": 90,
        "depthMax": 18.8,
        "depthAvg": 8,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Bäder- und Hallenmanagement Langen GmbH",
            "street": "Weserstraße 14",
            "zipcodeCity": "63225 Langen",
            "email": "magistrat@langen.de",
            "telephone": "06103-203-450",
            "fax": "06103-203-49450",
            "website": "www.langen.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Landkreis Offenbach",
            "address": "Landkreis Offenbach",
            "addressAdditional": "Fachdienst Gefahrenabwehr und Gesundheitszentrum",
            "street": "Gottlieb-Daimler-Str. 10",
            "zipcodeCity": "63128 Dietzenbach",
            "telephone": "06074 8180-0"
        }
    },
    {
        "name": "BUGA-See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/region-kassel/buga-see.html",
        "latitude": "51.291700",
        "longitude": "9.502700",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-04T22:00:00.000Z",
        "introtext": "In den sechziger Jahren begann man in der Fuldaaue in der Nähe des Ortsteils Waldau nach Kies und Sand zu baggern. Mit Grundwasser gefüllt entstand dieser Auesee mit einer Ausdehnung von 34 ha (10 ha als Naturschutzgebiet ausgewiesen) und einer Wassertiefe von 3 - 6 m. 1980 wurde die von Badestränden und Rasenböschungen umgebene Anlage fertiggestellt, die seitdem der stadtnahen Erholung dient. Hunde müssen an die Leine und dürfen nicht ans Ufer.",
        "measurements": [
            {
                "date": "2014-08-31T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "< 10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 10",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "21",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-09T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "21",
                "escherichiaColi": "200",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-11T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 10",
                "escherichiaColi": "43",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "32",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-06T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-09-05T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<10",
                "escherichiaColi": "130",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-05T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-05T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-06T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-09-07T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "6",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "5",
                "escherichiaColi": "120",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "120",
                "escherichiaColi": "98",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-08T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "22",
                "escherichiaColi": "930",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-08T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "28",
                "escherichiaColi": "220",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "7",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-08T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "10",
                "escherichiaColi": "160",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-06-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "9",
                "escherichiaColi": "170",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "4",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-02T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "19",
                "escherichiaColi": "170",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "92",
                "escherichiaColi": "110",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-05T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "21",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-07T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "17",
                "escherichiaColi": "98",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-12T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "53",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "42",
                "escherichiaColi": "110",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "53",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "21",
                "rating": 0,
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
        "images": [],
        "city": "Kassel",
        "heightAboveSeaLevel": 138,
        "areaHa": 33.7,
        "depthMax": 6.78,
        "depthAvg": 3.35,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Baden",
            "Segeln",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Stadt Kassel, Umwelt- u. Gartenamt",
            "street": "Bosestraße 15",
            "zipcodeCity": "34121 Kassel",
            "email": "umwelt-gartenamt@stadt-kassel.de",
            "telephone": "0561/ 787- 7005",
            "fax": "0561/ 787- 6090",
            "website": "www.stadt-kassel.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Region Kassel",
            "address": "Gesundheitsamt Region Kassel",
            "addressAdditional": "",
            "street": "Wilhelmshöher Allee 19-21",
            "zipcodeCity": "34117 Kassel",
            "telephone": "0561 1003-0"
        }
    },
    {
        "name": "Seepark Kirchheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/hersfeld-rotenburg/seepark-kirchheim.html",
        "latitude": "50.816000",
        "longitude": "9.522500",
        "openFrom": "2015-06-30T22:00:00.000Z",
        "openTo": "2015-08-30T22:00:00.000Z",
        "introtext": "Die aus Gründen des Hochwasserschutzes erbaute Talsperre im Ibratal wird auch für Freizeit und Erholung genutzt. Hierzu sind Campingplätze, Ferienhäuser, Wasserskianlagen und ein Tagungshotel vorhanden. ",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "87",
                "escherichiaColi": "87",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "234",
                "escherichiaColi": "150",
                "rating": 1,
                "comment": "Nachkontrolle"
            },
            {
                "date": "2014-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "632",
                "escherichiaColi": "2400",
                "rating": 0,
                "comment": "Eine Nachbeprobung nach §7 Abs. 2 wurde veranlasst"
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "180",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "< 10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "< 10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "< 10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "851",
                "escherichiaColi": "98",
                "rating": 0,
                "comment": "Nach der Verordnung §7 Abs. 2 ist der Wert für I.E. erhöht. Eine Nachbeprobung wurde veranlasst."
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "13",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "56",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "28",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "55",
                "escherichiaColi": "360",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "40",
                "escherichiaColi": "17",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "33",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "84",
                "escherichiaColi": "208",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "80",
                "escherichiaColi": "247",
                "rating": 2,
                "comment": "-"
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-20T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-22T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "288",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "65",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "134",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "76",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "195",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "21",
                "rating": 0,
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
        "images": [],
        "city": "Kirchheim",
        "heightAboveSeaLevel": 200,
        "areaHa": 8.6,
        "depthMax": 8,
        "depthAvg": 5,
        "lakeType": "Talsprerre",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Wasserski"
        ],
        "blueGreenAlgeaRisk": "hoch",
        "operator": {
            "name": "Gemeindevorstand der Gemeinde Kirchheim",
            "street": "Hauptstraße 20",
            "zipcodeCity": "36275 Kirchheim",
            "email": "",
            "telephone": "06625 / 920013",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Hersfeld-Rotenburg",
            "address": "Landkreis Hersfeld-Rotenburg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Friedloser Str. 12",
            "zipcodeCity": "36251 Bad Hersfeld",
            "telephone": "06621 87-0"
        }
    },
    {
        "name": "Fuldasee Bebra-Breitenbach",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/hersfeld-rotenburg/fuldasee-bebra-breitenbach.html",
        "latitude": "50.959900",
        "longitude": "9.787500",
        "openFrom": "2015-06-30T22:00:00.000Z",
        "openTo": "2015-08-30T22:00:00.000Z",
        "introtext": "Der Fuldasee ist ein Abgrabungsgewässer in de Fuldaaue in der Nähe des Ortsteiles Breitenbach und nahe der Bundesstraße B 27. Der See dient als Badegewässer, sowie für den Angel- und Segelsport.",
        "measurements": [
            {
                "date": "2014-08-17T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "53",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-06T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-22T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<10",
                "escherichiaColi": "690",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "53",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "< 10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "12",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "45",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "208",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "66",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "96",
                "escherichiaColi": "13",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "40",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "20",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "-"
            },
            {
                "date": "2010-08-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "65",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-03T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "260",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 1,
                "comment": "Algenwachstum in den Uferbereichen zur?ckgegangen"
            },
            {
                "date": "2010-07-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<10",
                "escherichiaColi": "21",
                "rating": 1,
                "comment": "Algenwachstum in den Uferbereichen"
            },
            {
                "date": "2010-06-22T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<10",
                "escherichiaColi": "10",
                "rating": 1,
                "comment": "Algenwachstum in den Uferbereichen"
            },
            {
                "date": "2009-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "76",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "32",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<10",
                "escherichiaColi": "<10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "87",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "21",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "10",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "170",
                "rating": 0,
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
        "images": [],
        "city": "Bebra",
        "heightAboveSeaLevel": 190,
        "areaHa": 13.7,
        "depthMax": 6.6,
        "depthAvg": 4.44,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Baden",
            "Segeln",
            "Sporttauchen",
            "Windsurfen"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Magistrat der Stadt Bebra",
            "street": "Rathausmarkt 1",
            "zipcodeCity": "36179 Bebra",
            "email": "alexander.dupont@bebra.de",
            "telephone": "06622 / 501-100",
            "fax": "06622 / 501-200",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Hersfeld-Rotenburg",
            "address": "Landkreis Hersfeld-Rotenburg",
            "addressAdditional": "Kreisgesundheitsamt",
            "street": "Friedloser Str. 12",
            "zipcodeCity": "36251 Bad Hersfeld",
            "telephone": "06621 87-0"
        }
    },
    {
        "name": "Waldschwimmbad Rüsselsheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/waldschwimmbad-ruesselsheim.html",
        "latitude": "49.993700",
        "longitude": "8.453600",
        "openFrom": "2014-05-01T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Hier gibt es 3,4 Hektar See im Wald, denn 1969 wurde zum Autobahnbau Sand gebaggert. Das Ufer ist flach und das Wasser durch die Belüftungsanlagen meist klar. Man erreicht das Wasser über einen Sandstrand.",
        "measurements": [
            {
                "date": "2014-08-12T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-07-15T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-06-17T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-05-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-04-22T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2013-09-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-22T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-06-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-05-23T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-08-13T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "141",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-04-26T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?ligkeiten"
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": "keien Auff?llikeiten"
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 8,
                "enterocsocci": "15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2009-08-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "< 10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 10",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 10",
                "escherichiaColi": "159",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "9",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Waldschwimmbad_Ruesselsheim/Waldschwimmbad_Ruesselsheim01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Rüsselsheim",
        "heightAboveSeaLevel": 90,
        "areaHa": 3.1,
        "depthMax": 7.9,
        "depthAvg": 4.24,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Der Magistrat der Stadt Rüsselsheim, Sportamt / Bäderverwaltung, Anette Tettenborn, Betriebsleiterin Bäder",
            "street": "Hans-Sachs-Straße 57",
            "zipcodeCity": "65428  Rüsselsheim",
            "email": "",
            "telephone": "06142 17 60 90 / 17 60 9 11",
            "fax": "06142 17 60 915",
            "website": ""
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
        "name": "Badesee Gernsheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/badesee-gernsheim.html",
        "latitude": "49.743700",
        "longitude": "8.479400",
        "openFrom": "2014-05-10T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "SEin Baggersee mit 4,5 ha Wasserfläche. Er befindet sich unmittelbar vor dem Rheinhochwasserdamm der Weschnitz am Ortsrand von Gernsheim. Das Ufer ist teilweise steil, jedoch am südlich gelegenen Badestrand relativ flach und deshalb dort eher für Kinder geeignet.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2013-05-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auffälligkeiten"
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-29T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": 28,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": "keine Auff?lligkeiten"
            },
            {
                "date": "2009-09-15T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-20T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "< 10",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-21T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "< 10",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 10",
                "escherichiaColi": "< 15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-27T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "11",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Badesee_Gernsheim/Badesee_Gernsheim03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Badesee_Gernsheim/Badesee_Gernsheim02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Gross-Gerau/Badesee_Gernsheim/Badesee_Gernsheim01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Gernsheim",
        "heightAboveSeaLevel": 88,
        "areaHa": 3.8,
        "depthMax": 10.68,
        "depthAvg": 5.03,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "keine",
        "operator": {
            "name": "Magistrat der Stadt Gernsheim",
            "street": "Stadthausplatz 1",
            "zipcodeCity": "64579  Gernsheim",
            "email": "",
            "telephone": "06258/108-161",
            "fax": "06258/3027",
            "website": ""
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
        "name": "Launsbacher See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/giessen/launsbacher-see.html",
        "latitude": "50.618000",
        "longitude": "8.672600",
        "openFrom": "2014-05-31T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der Launsbacher See besteht aus 3 relativ flachen Becken einer ehemaligen Kiesgrube und liegt zwischen Lahn und Autobahn. Der mittlere Teil wird zum Baden genutzt und besitzt durch seine vielen Wasserpflanzen meist klares Wasser.",
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
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-27T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "46",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "250",
                "escherichiaColi": "15",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "17",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "100",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "19",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "5",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "23",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "11",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-24T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "5",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "21",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "20",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-16T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "92",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "27",
                "escherichiaColi": "61",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "57",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "20",
                "escherichiaColi": "30",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Launsbacher_See/Launsbacher_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Launsbacher_See/Launsbacher_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Wettenberg",
        "heightAboveSeaLevel": 158,
        "areaHa": 6.4,
        "depthMax": 4.3,
        "depthAvg": 2.65,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeindeverwaltung Wettenberg",
            "street": "Sorguesplatz 2",
            "zipcodeCity": "35435 Wettenberg",
            "email": "",
            "telephone": "",
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
        "name": "Licher Waldschwimmbad",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/giessen/licher-waldschwimmbad.html",
        "latitude": "50.529700",
        "longitude": "8.814500",
        "openFrom": "2014-04-30T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der kleine Teich liegt idyllisch im Wald am Stadtrand von Lich. Das Wasser ist etwas getrübt durch den Schlamm am Grund des Sees. 6000 m² seiner 3,6 ha Wasserfläche sind als Schwimmbereich geeignet. ",
        "measurements": [
            {
                "date": "2014-08-18T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-08-04T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "110",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-04-27T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "60",
                "escherichiaColi": "92",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "108",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "110",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "40",
                "escherichiaColi": "307",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "35",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "44",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "25",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-16T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "86",
                "escherichiaColi": "87",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-24T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "1599",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-04-26T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "6",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "18",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "37",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "17",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "109",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "75",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "26",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-04-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Waldschwimmbad_Lich/Waldschwimmbad_Lich04.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Waldschwimmbad_Lich/Waldschwimmbad_Lich02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Waldschwimmbad_Lich/Waldschwimmbad_Lich01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Lich",
        "heightAboveSeaLevel": 190,
        "areaHa": 4,
        "depthMax": 2.78,
        "depthAvg": 1.52,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Baden"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Sport-.Erholung und Kulturverein Lich",
            "street": "Waldschwimmbad 16",
            "zipcodeCity": "35423 Lich",
            "email": "info@sek-lich.de",
            "telephone": "06404/668661",
            "fax": " ",
            "website": " www.sek-lich.de"
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
        "name": "Trais-Horloffer See",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/giessen/trais-horloffer-see.html",
        "latitude": "50.455300",
        "longitude": "8.905500",
        "openFrom": "2014-05-31T22:00:00.000Z",
        "openTo": "2014-08-30T22:00:00.000Z",
        "introtext": "Der See liegt im Zentrum eines Naherholungsgebietes. Der Baggersee ist bei Wassersportfreunden besonders beliebt. Die hessischen Segler haben daher hier ihr Leistungszentrum eingerichtet.",
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
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "< 15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "< 15",
                "escherichiaColi": "< 15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-25T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-27T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "389",
                "escherichiaColi": "15",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "133",
                "escherichiaColi": "619",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "70",
                "escherichiaColi": "197",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "240",
                "escherichiaColi": "668",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "25",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "14",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "660",
                "escherichiaColi": "759",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "210",
                "escherichiaColi": "112",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "50",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "25",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-24T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "16",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-19T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "15",
                "escherichiaColi": "16",
                "rating": 0,
                "comment": "Zus?tzliche Probenahme"
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "35",
                "escherichiaColi": "1064",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-23T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "22",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "24",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "12",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 3
            },
            {
                "year": "2012",
                "rating": 3
            },
            {
                "year": "2013",
                "rating": 2
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Trais-Horloffer_See/Trais-Horloffer_See03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Trais-Horloffer_See/Trais-Horloffer_See02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Giessen/Trais-Horloffer_See/Trais-Horloffer_See01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Hungen",
        "heightAboveSeaLevel": 128,
        "areaHa": 35.1,
        "depthMax": 27.2,
        "depthAvg": 10.37,
        "lakeType": "Tagebausee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Segeln"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Stadtverwaltung Hungen",
            "street": "Kaiserstraße 7",
            "zipcodeCity": "35410 Hungen",
            "email": "",
            "telephone": "06402/8544",
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
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "75",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "< 15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-05-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-27T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "195",
                "escherichiaColi": "234",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-18T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-21T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "19",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "20",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-07-11T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-20T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "7",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "37",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-21T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-24T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "8",
                "escherichiaColi": "77",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-13T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-16T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "16",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "127",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-24T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-15T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "47",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-25T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
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
        "name": "Erlensee",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/darmstadt-dieburg/erlensee.html",
        "latitude": "49.769600",
        "longitude": "8.587500",
        "openFrom": "2014-05-14T22:00:00.000Z",
        "openTo": "2014-09-14T22:00:00.000Z",
        "introtext": "Die Kiesbagger hinterließen hier eine 13 ha große Wasserfläche. Der See ist von leicht grünlicher Farbe, dient als Fischgewässer und ist als Vogelschutzgebiet ausgewiesen. Der See ist vom Ufer her überall zugänglich und besitzt am westlichen Ufer einen Badestrand.",
        "measurements": [
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "30",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": "Sichttiefe >2m"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe >2m"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "144",
                "rating": 1,
                "comment": "Sichttiefe >2m"
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-19T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-29T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-07-01T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-05-06T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-08-20T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-30T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "251",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "126",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2012-05-07T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-01T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "126",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-04T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "30",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-09T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "61",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "127",
                "escherichiaColi": "350",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "93",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-09T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "15",
                "escherichiaColi": "127",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "30",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-03T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-07T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "10",
                "escherichiaColi": "77",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-09T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "30",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-11T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "48",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "10",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "18",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "27",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "500",
                "escherichiaColi": "1701",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt-Dieburg/Erlensee/Erlensee_Bickenbach03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt-Dieburg/Erlensee/Erlensee_Bickenbach02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt-Dieburg/Erlensee/Erlensee_Bickenbach01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Bickenbach",
        "heightAboveSeaLevel": 92,
        "areaHa": 13,
        "depthMax": 15.41,
        "depthAvg": 6.02,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Gemeinde Bickenbach",
            "street": "Darmstädter Straße 7",
            "zipcodeCity": "64404  Bickenbach",
            "email": "",
            "telephone": "06257 - 933013",
            "fax": "",
            "website": ""
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Darmstadt-Dieburg",
            "address": "Verwaltungsverband Darmstadt-Dieburg",
            "addressAdditional": "Stadt-und Kreisgesundheitsamt",
            "street": "Niersteiner Str. 3",
            "zipcodeCity": "64295 Darmstadt",
            "telephone": "06151 3309-0"
        }
    },
    {
        "name": "Großer Woog",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/stadt-darmstadt/grosser-woog.html",
        "latitude": "49.873100",
        "longitude": "8.668300",
        "openFrom": "2014-05-17T22:00:00.000Z",
        "openTo": "2014-09-13T22:00:00.000Z",
        "introtext": "Seit 1820 wird der 5,9 ha Fläche einnehmende \"Große Woog\" als Badesee genutzt. Der See liegt an der Landgraf-Georg- und Heinrich-Fuhr-Straße im Stadtgebiet Darmstadt. Ins Wasser, das oft etwas trüb ist, gelangt man über den ausgewiesenen öffentlichen Badestrand oder über Stege.",
        "measurements": [
            {
                "date": "2014-08-27T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 0,78 m"
            },
            {
                "date": "2014-08-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "45",
                "escherichiaColi": "307",
                "rating": 1,
                "comment": "Sichttiefe 0,65 m"
            },
            {
                "date": "2014-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 0,80m"
            },
            {
                "date": "2014-06-30T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "Sichttiefe 0,85m"
            },
            {
                "date": "2014-06-03T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1.10m"
            },
            {
                "date": "2014-05-05T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2013-08-18T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": "Sichttiefe 0,60m"
            },
            {
                "date": "2013-07-28T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 0,65m"
            },
            {
                "date": "2013-06-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "213",
                "rating": 1,
                "comment": "Sichttiefe 1,00m"
            },
            {
                "date": "2013-06-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 0,75m"
            },
            {
                "date": "2013-05-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,55m"
            },
            {
                "date": "2012-08-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 0,55m"
            },
            {
                "date": "2012-07-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "144",
                "escherichiaColi": "648",
                "rating": 1,
                "comment": "Sichttiefe 0,70m"
            },
            {
                "date": "2012-07-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "94",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 0.85m"
            },
            {
                "date": "2012-06-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "46",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 0,70m"
            },
            {
                "date": "2012-05-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1.60m"
            },
            {
                "date": "2011-08-22T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 0,61m"
            },
            {
                "date": "2011-07-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichtiefe 0,78m"
            },
            {
                "date": "2011-07-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-23T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "176",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-08-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "94",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "144",
                "escherichiaColi": "393",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-06-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "109",
                "escherichiaColi": "324",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2010-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "144",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2009-08-30T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "30",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-02T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-05T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "61",
                "escherichiaColi": "882",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "110",
                "escherichiaColi": "77",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-24T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "94",
                "escherichiaColi": "77",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "144",
                "escherichiaColi": "436",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "15",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            }
        ],
        "yearratings": [
            {
                "year": "2011",
                "rating": 2
            },
            {
                "year": "2012",
                "rating": 2
            },
            {
                "year": "2013",
                "rating": 1
            }
        ],
        "images": [
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Grosser_Woog/Grosser_Woog03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Grosser_Woog/Grosser_Woog02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Darmstadt/Grosser_Woog/Grosser_Woog01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Darmstadt",
        "heightAboveSeaLevel": 160,
        "areaHa": 6,
        "depthMax": 4,
        "depthAvg": 1.9,
        "lakeType": "Weiher",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "mittel",
        "operator": {
            "name": "Eigenbetrieb Bäder",
            "street": "Frankfurter Straße 71",
            "zipcodeCity": "64293 Darmstadt",
            "email": "sportamt@darmstadt.de ",
            "telephone": "06151 132974 und 132972",
            "fax": "06151 132940",
            "website": "www.baeder.darmstadt.de "
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Darmstadt-Dieburg",
            "address": "Verwaltungsverband Darmstadt-Dieburg",
            "addressAdditional": "Stadt-und Kreisgesundheitsamt",
            "street": "Niersteiner Str. 3",
            "zipcodeCity": "64295 Darmstadt",
            "telephone": "06151 3309-0"
        }
    },
    {
        "name": "Badesee Lampertheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/bergstrasse/badesee-lampertheim.html",
        "latitude": "49.594000",
        "longitude": "8.451700",
        "openFrom": "2014-04-30T22:00:00.000Z",
        "openTo": "2014-09-29T22:00:00.000Z",
        "introtext": "Dieser mit 3,3 ha relativ kleine See liegt in einem Naturschutzgebiet der Rheinauen. Er gehört mit einem Freibad und Hallenbad zu den Biedensand-Bädern.",
        "measurements": [
            {
                "date": "2014-09-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe: 2,5 m"
            },
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 3,0 m"
            },
            {
                "date": "2014-08-04T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe: 2,30 m"
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe: 2,0m"
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,50 m"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe > 4,0 m"
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2m"
            },
            {
                "date": "2014-04-23T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,5 m"
            },
            {
                "date": "2013-09-16T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,2 m"
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,7 m"
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,2 m"
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 3,5 m"
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "30",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 4,5 m"
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,5 m"
            },
            {
                "date": "2013-05-13T22:00:00.000Z",
                "waterTemperature": 14,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 3,0 m"
            },
            {
                "date": "2013-04-22T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,0 m"
            },
            {
                "date": "2012-09-17T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,5 m"
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,5 m"
            },
            {
                "date": "2012-08-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 1,9 m"
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,0 m"
            },
            {
                "date": "2012-06-25T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,5 m"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,7 m"
            },
            {
                "date": "2012-05-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<15",
                "escherichiaColi": "46",
                "rating": 1,
                "comment": "Sichttiefe 3,5 m"
            },
            {
                "date": "2012-04-24T22:00:00.000Z",
                "waterTemperature": 13,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 1,5 m"
            },
            {
                "date": "2011-09-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-08T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "29",
                "escherichiaColi": "134",
                "rating": 2,
                "comment": ""
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-27T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "18",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-05-16T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-26T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "6",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "4",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 27,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<10",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "46",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "42",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "55",
                "escherichiaColi": "144",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-27T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-09-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "54",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-12T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "26",
                "escherichiaColi": "61",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-14T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-17T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-04-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Lampertheim/Stadt_Lampertheim_2.jpg",
                "copyright": "http://badeseen.hlug.de© Stadt Lampertheim"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Lampertheim/Stadt_Lampertheim_1.jpg",
                "copyright": "http://badeseen.hlug.de© Stadt Lamperteim"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Lampertheim/Badesee_Lampertheim001_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Lampertheim",
        "heightAboveSeaLevel": 90,
        "areaHa": 3.4,
        "depthMax": 15.39,
        "depthAvg": 7.17,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden",
            "Sporttauchen"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "Biedensandbäder Lampertheim GmbH",
            "street": "Römerstr. 102",
            "zipcodeCity": "68623 Lampertheim",
            "email": "info@biedensand-baeder.de",
            "telephone": "06206/935265",
            "fax": "06206/935234",
            "website": "www.biedensand-baeder.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Bergstraße",
            "address": "Landkreis Bergstraße",
            "addressAdditional": "Haus der Gesundheit",
            "street": "Kettelerstraße 29",
            "zipcodeCity": "64646 Heppenheim",
            "telephone": "06252 / 15-0"
        }
    },
    {
        "name": "Badesee Bensheim",
        "hlugurl": "http://badeseen.hlug.de/badegewaesser/bergstrasse/badesee-bensheim.html",
        "latitude": "49.686700",
        "longitude": "8.604200",
        "openFrom": "2014-04-30T22:00:00.000Z",
        "openTo": "2014-09-29T22:00:00.000Z",
        "introtext": "Der Baggersee ist gefüllt mit grünlich-klarem Wasser. Vom Ufer geht es gleich steil ins kühle Nass. Der See ist nur für Schwimmer geeignet! In der Nähe liegt ein Wohngebiet, die Autobahn und Sportanlagen.",
        "measurements": [
            {
                "date": "2014-09-15T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "30",
                "escherichiaColi": "144",
                "rating": 1,
                "comment": "Sichttiefe 4,60 m"
            },
            {
                "date": "2014-08-25T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "<15",
                "escherichiaColi": "61",
                "rating": 1,
                "comment": "Sichttiefe 5,40 m"
            },
            {
                "date": "2014-08-04T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "94",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe: 1,30"
            },
            {
                "date": "2014-07-14T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe: 4,50"
            },
            {
                "date": "2014-06-23T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 2,20 m"
            },
            {
                "date": "2014-06-02T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 2,0 m"
            },
            {
                "date": "2014-05-12T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<15",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "Sichttiefe 5,5 m"
            },
            {
                "date": "2014-04-23T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "<15",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "Sichttiefe 3,3 m"
            },
            {
                "date": "2013-09-16T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "35",
                "escherichiaColi": "92",
                "rating": 1,
                "comment": "2,5 m Sichttiefe"
            },
            {
                "date": "2013-08-26T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "120",
                "escherichiaColi": "344",
                "rating": 1,
                "comment": "2,5 m Sichttiefe"
            },
            {
                "date": "2013-08-05T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "6",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "2,8 m Sichttiefe"
            },
            {
                "date": "2013-07-15T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "4,0 m Sichttiefe"
            },
            {
                "date": "2013-06-24T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "8",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "5,2 m Sichttiefe"
            },
            {
                "date": "2013-06-03T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "3,0 m Sichttiefe"
            },
            {
                "date": "2013-05-13T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "3,0 m Sichttiefe"
            },
            {
                "date": "2012-09-17T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "4",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "5,8 m Sichttiefe"
            },
            {
                "date": "2012-08-27T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "2",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "3,7 m Sichttiefe"
            },
            {
                "date": "2012-08-06T22:00:00.000Z",
                "waterTemperature": 24,
                "enterocsocci": "<1",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "3,8 m Sichttiefe"
            },
            {
                "date": "2012-07-16T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "408",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "4,8 m Sichttiefe"
            },
            {
                "date": "2012-06-25T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "5,5 m Sichttiefe"
            },
            {
                "date": "2012-06-04T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "9",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "5,5 m Sichttiefe"
            },
            {
                "date": "2012-05-14T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "3",
                "escherichiaColi": "15",
                "rating": 1,
                "comment": "4,1 m Sichttiefe"
            },
            {
                "date": "2012-04-23T22:00:00.000Z",
                "waterTemperature": 12,
                "enterocsocci": "5",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": "2,4 m Sichttiefe"
            },
            {
                "date": "2011-09-19T22:00:00.000Z",
                "waterTemperature": 19,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-29T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-08-08T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "8",
                "escherichiaColi": "110",
                "rating": 2,
                "comment": "5m Sichttiefe"
            },
            {
                "date": "2011-07-18T22:00:00.000Z",
                "waterTemperature": 21,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-27T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "3",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-06-06T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": "7 m Sichttiefe"
            },
            {
                "date": "2011-05-16T22:00:00.000Z",
                "waterTemperature": 18,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2011-04-25T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-09-20T22:00:00.000Z",
                "waterTemperature": 17,
                "enterocsocci": "8",
                "escherichiaColi": "45",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-30T22:00:00.000Z",
                "waterTemperature": 20,
                "enterocsocci": "2",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-08-09T22:00:00.000Z",
                "waterTemperature": 23,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-07-19T22:00:00.000Z",
                "waterTemperature": 26,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-28T22:00:00.000Z",
                "waterTemperature": 25,
                "enterocsocci": "18",
                "escherichiaColi": "30",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-06-07T22:00:00.000Z",
                "waterTemperature": 22,
                "enterocsocci": "2",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-05-17T22:00:00.000Z",
                "waterTemperature": 15,
                "enterocsocci": "4",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2010-04-26T22:00:00.000Z",
                "waterTemperature": 16,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 1,
                "comment": ""
            },
            {
                "date": "2009-09-21T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "14",
                "escherichiaColi": "94",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-31T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "5",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-08-10T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-07-20T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "2",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-29T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-06-08T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "6",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-05-19T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2009-04-26T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "<1",
                "escherichiaColi": "<15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-08-07T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "7",
                "escherichiaColi": "30",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-07-09T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-06-01T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "17",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-05-04T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "1",
                "escherichiaColi": "15",
                "rating": 0,
                "comment": ""
            },
            {
                "date": "2008-04-03T22:00:00.000Z",
                "waterTemperature": null,
                "enterocsocci": "0",
                "escherichiaColi": "15",
                "rating": 0,
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
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Bensheim/Badesee_Bensheim03.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Bensheim/Badesee_Bensheim02.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            },
            {
                "src": "http://badeseen.hlug.de/fileadmin/img_content/badeseen/Bergstrasse/Bensheim/Badesee_Bensheim01_T.JPG",
                "copyright": "http://badeseen.hlug.de© HLUG"
            }
        ],
        "city": "Bensheim",
        "heightAboveSeaLevel": 95,
        "areaHa": 7.7,
        "depthMax": 16.98,
        "depthAvg": 10.56,
        "lakeType": "Baggersee",
        "extracurricularActivity": [
            "Angelsport",
            "Baden"
        ],
        "blueGreenAlgeaRisk": "gering",
        "operator": {
            "name": "GGEW Bergstraße AG",
            "street": "Dammstr. 68",
            "zipcodeCity": "64625 Bensheim",
            "email": "info@ggew.de",
            "telephone": "06251/1301300",
            "fax": "06251/1301341",
            "website": "www.ggew.de"
        },
        "appropriateAuthority": {
            "name": "Gesundheitsamt Bergstraße",
            "address": "Landkreis Bergstraße",
            "addressAdditional": "Haus der Gesundheit",
            "street": "Kettelerstraße 29",
            "zipcodeCity": "64646 Heppenheim",
            "telephone": "06252 / 15-0"
        }
    }
]
    			localStorage.setItem('lakes', JSON.stringify(lakes));
			}
		};

		return service;
	})