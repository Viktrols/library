import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0;i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).addClasses('tab-item--active');
            $(this[i]).siblings().removeClasses('tab-item--active');
            $(this[i]).closest('.tab').find('.tab-content').removeClasses('tab-content--active')
                .eq($(this[i]).index()).addClasses('tab-content--active');
        });
    }
};

$('[data-tabpanel] .tab-item').tab();