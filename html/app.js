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
        { name: "teas", quantity: 24 },
        { name: "coffees", quantity: 24 },
        { name: "cokes", quantity: 64 },
        { name: "chocolates", quantity: 34 },
        { name: "milks", quantity: 14 },
        { name: "juices", quantity: 17 }];

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
