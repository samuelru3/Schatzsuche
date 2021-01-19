const SchatzApp = {
    data() {
        return {
            // --- Variablen zum Sichtbarmachen ---
            displayCode1: true,
            displayFrage1: true

        }
    },

    methods: {
        ueberpruefen1() {
            if (this.code1 == 1) {
                console.log("1");
            } else {
                console.log("nicht");
            }
        }
    }
};
Vue.createApp(SchatzApp).mount('#schatz-app');