(function () {
    'use strict';
    var controllerId = 'Progress';
    angular.module('app').controller(controllerId, ['common', admin]);

    function admin(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Progress';

        $('.trees li').hide();
        $('.trees li:first').show();
        $('.trees li').on('click', function (e) {
            var children = $(this).find('> ul > li');
            if (children.is(":visible")) children.hide('fast');
            else children.show('fast');
            e.stopPropagation();
        });

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Progress View'); });


        }
    }
})();