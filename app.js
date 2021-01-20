const SchatzApp = {
    data() {
        return {
            // --- Variablen zum Sichtbarmachen ---
            start1: true,
            Panel1: false,
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
            endPanel1: false,
            endPanel2: false,
            endPanel3: false,

            // start1: true,
            // Panel1: true,
            // Panel2: true,
            // Panel3: true,
            // Panel4: true,
            // Panel5: true,
            // Panel6: true,
            // Panel7: true,
            // Panel8: true,
            // Panel9: true,
            // Panel10: true,
            // Panel11: true,
            // Panel12: true,
            // Panel13: true,
            // Panel14: true,
            // Panel15: true,
            // Panel16: true,
            // endPanel1: true,
            // endPanel2: true,
            // endPanel3: true,

        }
    },

    methods: {
        start() {
            this.start1 = false;
            this.Panel1 = true;
            this.speichern();
        },

        ueberpruefen1() {
            if (this.code1 == 28) {
                console.log("28");
                this.Panel
                this.Panel1 = false;
                this.Panel2 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage1() {
            this.Panel2 = false;
            this.Panel3 = true;
            this.speichern();
        },

        ueberpruefen2() {
            if (this.code2 == 5) {
                console.log("5");
                this.Panel3 = false;
                this.Panel4 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage2() {
            this.Panel4 = false;
            this.Panel5 = true;
            this.speichern();
        },

        ueberpruefen3() {
            if (this.code3 == 35) {
                console.log("35");
                this.Panel5 = false;
                this.Panel6 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage3() {
            this.Panel6 = false;
            this.Panel7 = true;
            this.speichern();
        },

        ueberpruefen4() {
            if (this.code4 == 216) {
                console.log("216");
                this.Panel7 = false;
                this.Panel8 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage4() {
            this.Panel8 = false;
            this.Panel9 = true;
            this.speichern();
        },

        ueberpruefen5() {
            if (this.code5 == 2) {
                console.log("2");
                this.Panel9 = false;
                this.Panel10 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage5() {
            this.Panel10 = false;
            this.Panel11 = true;
            this.speichern();
        },

        ueberpruefen6() {
            if (this.code6 == 16) {
                console.log("16");
                this.Panel11 = false;
                this.Panel12 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage6() {
            this.Panel12 = false;
            this.Panel13 = true;
            this.speichern();
        },

        ueberpruefen7() {
            if (this.code7 == 7) {
                console.log("7");
                this.Panel13 = false;
                this.Panel14 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage7() {
            this.Panel14 = false;
            this.Panel15 = true;
            this.speichern();
        },

        ueberpruefen8() {
            if (this.code8 == 21) {
                console.log("21");
                this.Panel15 = false;
                this.Panel16 = true;
                this.speichern();
            } else {
                console.log("nicht");
            }
        },

        Frage8() {
            this.Panel16 = false;
            this.endPanel1 = true;
            this.speichern();
        },

        ende1() {
            this.endPanel1 = false;
            this.endPanel2 = true;
            this.speichern();
        },

        ende2() {
            this.endPanel2 = false;
            this.endPanel3 = true;
            this.speichern();
        },

        ende3() {
            this.endPanel3 = false;
            this.endPanel1 = true;
            this.speichern();
        },

        speichern() {
            // Komplettes Array mit Pokemons im 'localStorage' Speichern
            console.log("Speichern");
            const text = JSON.stringify(this.pokemonList);
            localStorage.setItem('schatzsuche', text)
            console.log(text);
        },

        laden() {
            if (localStorage.getItem('schatzsuche')) {
                let dataString = localStorage.getItem('schatzsuche');
                this.pokemonList = JSON.parse(dataString);
                console.log("Laden");
            } else {
                this.pokemonList = [];
            }
        },
    },
    mounted() {
        //Persistent gespeichertre Daten Laden
        this.laden();
    }
};
Vue.createApp(SchatzApp).mount('#schatz-app');