(() =>{
    // set up vue instance
    const vm = new Vue({
        el : "#app",

        data : {
            message : "Welcome to your first Vue app!",

            targetURL : "http://google.ca",

            vuemessage : "Yay! You can haz vue",

            anchorOff : true,

            deliciousFruit : [
                {name: "apple", flavour: "tasty"},
                {name: "pineapple", flavour: "tropical"},
                {name: "grapes", flavour: "sweet"},
            ],

            hazVue : true
        },

        methods : {
            logFruit(e) {
                console.log(e.currentTarget);
            }
        }
    });
})();