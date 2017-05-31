"use strict";
console.log("FlavorFactory");
app.factory("FlavorFactory", function($q, $http) {

  let getFlavors = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get('./data/flavors.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        console.log("itemCollection", itemCollection);
        // Object.keys(itemCollection).forEach((key) => {
        //   itemCollection[key].id = key;
        //   items.push(itemCollection[key]);
        // });
        resolve(itemCollection.flavors);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getOneFlavor = () => {
    console.log("getOneFlavor");
  };

  // return getFlavors(); //returns the promise, invoking it, which resolves it.
  return {getFlavors, getOneFlavor};
});