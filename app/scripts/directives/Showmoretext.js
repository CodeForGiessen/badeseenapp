'use strict';
angular.module('badeseenApp').directive('showMoreText', ['$compile',function ($compile) {
    return {
        restrict: 'A',
        scope: {
            maxChars: '=maxChars',
            showMoreText: '=showMoreText'
        },
        link: function (scope, element, attrs) {
            if(typeof scope.maxChars === 'undefined'){
                scope.maxChars = 300;
            }
            if(typeof scope.showMoreText === 'undefined'){
                scope.showMoreText = '';
            }
            var collapsed = true;

            scope.content = element.find('[show-more-text-content]');
            scope.button = element.find('[show-more-text-button]');

            scope.button.attr('ng-click', 'triggerCollapse()');
            $compile(scope.button)(scope);

            var reCalculate = function(){
                var text = scope.showMoreText;
                if(text.length > scope.maxChars){
                    if(collapsed){
                        text = text.substring(0,scope.maxChars-1);
                        text+= ' ...';
                        scope.button.text('mehr anzeigen');
                    }else{
                        scope.content.text(text);
                        scope.button.text('weniger anzeigen');
                    }
                    scope.button.show();
                }else{
                    scope.button.hide();
                }
                scope.content.text(text);
            };

            scope.triggerCollapse = function(){ 
                console.log('triggered');
                collapsed = !collapsed;
                reCalculate();

            };
            scope.$watch('maxChars', function(value){
                if(value){
                    reCalculate();
                }
            });
            scope.$watch('showMoreText', function(value){
                if(value){
                    reCalculate();
                }
            });         
        }
    };
}]);