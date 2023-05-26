import $ from '../core';

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

$.prototype.eq = function(i) {
    const elem = this[i],
          objLength = Object.keys(this).length;
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }
    this[0] = elem;
    this.length = 1;
    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode,
          childs = [...parent.children];
    const findMyIndex = (item) => {
        return item == this[0];
    }
    return childs.findIndex(findMyIndex);
};

$.prototype.find = function(selector) {
    let numberOfElems = 0,
        counter = 0;

    const copyObj = Object.assign({}, this);
    
    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length === 0) {
            continue;
        }
        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }
        numberOfElems += arr.length;
    }
    this.length = numberOfElems;
    
    return this;

};