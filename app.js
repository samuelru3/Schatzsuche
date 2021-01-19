const SchatzApp = {
    data() {
        return {
            // --- Variablen zum Sichtbarmachen ---
            Panel1: true,
            Panel2: false,
            Panel3: false,
            Panel4: false,
            Panel5: false,
            Panel6: false,
            Panel7: false,
            Panel8: false,
            Panel9: false,
            Panel10: false,
            Panel11: false,
            Panel12: false,
            Panel13: false,
            Panel14: false,
            Panel15: false,
            Panel16: false,

        }
    },

    methods: {
        ueberpruefen1() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel
                this.Panel1 = false;
                this.Panel2 = true;

            } else {
                console.log("nicht");
            }
        },

        Frage1() {
            this.Panel2 = false;
            this.Panel3 = true;
        },

        ueberpruefen2() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel3 = false;
                this.Panel4 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage2() {
            this.Panel4 = false;
            this.Panel5 = true;
        },

        ueberpruefen3() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel5 = false;
                this.Panel6 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage3() {
            this.Panel6 = false;
            this.Panel7 = true;
        },

        ueberpruefen4() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel7 = false;
                this.Panel8 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage4() {
            this.Panel8 = false;
            this.Panel9 = true;
        },

        ueberpruefen5() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel9 = false;
                this.Panel10 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage5() {
            this.Panel10 = false;
            this.Panel11 = true;
        },

        ueberpruefen6() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel11 = false;
                this.Panel12 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage6() {
            this.Panel12 = false;
            this.Panel13 = true;
        },

        ueberpruefen7() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel13 = false;
                this.Panel14 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage7() {
            this.Panel14 = false;
            this.Panel15 = true;
        },

        ueberpruefen8() {
            if (this.code1 == 1) {
                console.log("1");
                this.Panel15 = false;
                this.Panel16 = true;
            } else {
                console.log("nicht");
            }
        },

        Frage8() {
            this.Panel16 = false;
            this.Panel17 = true;
        },

    }
};
Vue.createApp(SchatzApp).mount('#schatz-app');