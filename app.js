//Budget Controller

let budgetController = (function () {
    //Some code

})();

// UI Controller
let UIController = (function () {
    //Some code
    return {
        getinput: function () {
            let type = document.querySelector('.add__type').value //will be inc or exp
            let description = document.querySelector('.add__description').value
            let value = document.querySelector('.add__value').value
        }
    }
})();

//Global App Controller
let controller = (function (budgetCtrl, UICtrl) {
    let ctrlAddItem = function () {
        //1. Get the field input data

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
        console.log('working')
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })
})(budgetController, UIController);
