    //Angular Factory
    app.factory("customersFactory", function(){

    var customers = [

    {
        id: 1,
        name:"Shivesh",
        city : "Sydney",
        orderTotal : 100,
        joinedDate: "121212",
        orders : [
            {
                id: 1,
                product: "Shoes",
                total: 1999
            }
        ]
    },
    {
        id: 1,
        name:"Shivesh",
        city : "Sydney",
        orderTotal : 100,
        joinedDate: "121212",
        orders : [
            {
                id: 1,
                product: "Shoes",
                total: 1999
            }
        ]
    },
    {
        id: 1,
        name:"Shivesh",
        city : "Sydney",
        orderTotal : 100,
        joinedDate: "121212",
        orders : [
            {
                id: 1,
                product: "Shoes",
                total: 1999
            }
        ]
    },
    {
        id: 1,
        name:"Shivesh",
        city : "Sydney",
        orderTotal : 100,
        joinedDate: "121212",
        orders : [
            {
                id: 1,
                product: "Shoes",
                total: 1999
            }
        ]
    }
    ];

    var factory = {};

    factory.getCustomers = function(){
        return customers;
    };

    factory.getCustomer = function(customerId){
        for(var i=0, len=customers.length; i<len; i++){
            if(customers[i].id === parseInt(customerId)){
                return customers[i];
            }
        };
        return {};
    };

    return factory;

    });