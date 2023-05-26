import $ from '../core';

$.prototype.addClasses = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }
    return this;
};

$.prototype.removeClasses = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }
    return this;
};

$.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        if (this[i].classList.contains(className)){
            this[i].classList.remove(className);
        }else {
            this[i].classList.add(className);
        }
    }
    return this;
};