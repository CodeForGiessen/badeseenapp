'use strict';
angular.module('badeseenApp').controller('AboutController',
	function ($scope) {
        $scope.contributors = [
        {name:'Christian Schulze',task:'Service'},
        {name:'Christian Heigele',task:'App-Prototyp'},
        {name:'Prof. Dr. Martin Przewloka',task:'Kommunikation mit dem HLUG und Organisation'},
        {name:'Marco Schäfer',task:'App'},
        {name:'Vincent Elliott Wagner',task:'Service, App und Organistation'},
        {name:'Katharina Dort',task:'App'},
        {name:'Julian Schmitt',task:'App'},
        {name:'Florian Kolb',task:'App'}
        ];
	});
