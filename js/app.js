(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //BUY CONTROLLER
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;


    toBuy.showBuyList = ShoppingListCheckOffService.getBuyItems();
    toBuy.checkOffItem = function (itemIndex) {
      ShoppingListCheckOffService.checkOff(itemIndex);
    };

  }


  //BOUGHT CONTROLLER
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.showBoughtList = ShoppingListCheckOffService.getBoughtItems();
  }

  //CHECK OFF SERVICE
  function ShoppingListCheckOffService() {
    var checkOffService = this;
    var buyItems = [
      {
        name: "cookies",
        quantity: 2
      },
      {
        name: "chocolates",
        quantity: 5
      },
      {
        name: "cakes",
        quantity: 3
      },
      {
        name: "chips",
        quantity: 4
      },
      {
        name: "pirulin",
        quantity: 6
      }
    ];

    var boughtItems = [];

    checkOffService.checkOff = function (itemIndex) {
      var item = buyItems[itemIndex];
      boughtItems.push(item);
      buyItems.splice(itemIndex, 1);
    };

    checkOffService.getBuyItems = function () {
      return buyItems;
    };

    checkOffService.getBoughtItems = function () {
      return boughtItems;
    };


  }



})();
