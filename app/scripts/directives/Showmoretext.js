'use strict';
angular.module('badeseenApp').directive('showMoreText', ['$compile',function ($compile) {
    return {
        restrict: 'A',
        scope: {
            maxChars: '=maxChars',
            showMoreText: '=showMoreText'
        },
        link: function (scope, element, attrs) {
            var collapsed = true;

            scope.content = element.find('[show-more-text-content]');
            scope.button = element.find('[show-more-text-button]');
            scope.input = element.find('[show-more-text-input]');
            scope.button.attr('ng-click', 'triggerCollapse()');
            $compile(scope.button)(scope);

            scope.input.hide();
            var getInputText = function(){
                return scope.input.html();
            };

            var reCalculate = function(){
                getInputText();
                var text = scope.showMoreText || getInputText() || '';
                var maxChars = scope.maxChars || 300;
                if(text.length > scope.maxChars){
                    if(collapsed){
                        text = text.substring(0,maxChars-1);
                        text+= ' ...';
                        scope.button.text('mehr anzeigen');
                    }else{
                        scope.button.text('weniger anzeigen');
                    }
                    scope.button.show();
                }else{
                    scope.button.hide();
                }
                scope.content.html(text);
                ionic.trigger('resize',{
                    target:'window'
                });
            };

            scope.triggerCollapse = function(){
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