(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.boughtItem = function(itemIndex) {
        ShoppingListCheckOffService.boughtItem(itemIndex);
    };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.itemsBought = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
        { name: "HTML books", quantity: 23 },
        { name: "CSS books", quantity: 35 },
        { name: "Javascript books", quantity: 53 },
        { name: "AngularJS books", quantity: 12 },
        { name: "Bootstrap books", quantity: 24 },
        { name: "PHP books", quantity: 64 }];

    var itemsBought = [];

    service.boughtItem = function(itemIndex) {
        console.log(" bought item service fired!");
        itemsBought.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
    };

    service.getItemsToBuy = function () {
        return itemsToBuy;
    };

    service.getItemsBought = function () {
        return itemsBought;
    };
}

})();
