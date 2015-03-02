/**
Factory LakeDataImport pulls the required data for every lake from the backend and stores it in the localStorage.
*/
'use strict';
angular.module('badeseenApp').factory('LakeDataImport',
	function () {
		var service = {
			getData: function () {
				var lakes = [{
        					"name": "Waldsee Raunheim",
        					"hlugurl": "http://badeseen.hlug.de/badegewaesser/gross-gerau/waldsee-raunheim.html",
        					"latitude": "50.012900",
       						"longitude": "8.482000",
        					"openFrom": "2014-05-15",
        					"openTo": "2014-09-13",
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
            					}
        					],
        					"yearratings": [
            					{
                				"year": "2011",
                				"rating": 2
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
        					"openFrom": "2014-06-15",
        					"openTo": "2014-08-31",
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
    					}]
    			localStorage.setItem('lakes', JSON.stringify(lakes));
			}
		};

		return service;
	})