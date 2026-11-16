
// ======================================
// 🇺🇿 O'ZBEKISTON BO'YLAB SAYOHAT
// STORAGE SYSTEM
// Developer: Ulug'bek.R
// ======================================


const Storage = {



    // Eng yaxshi ballni olish

    getBest(){


        let best =

        localStorage.getItem(
            "uzbBest"
        );



        return best
        ?
        Number(best)
        :
        0;


    },







    // Rekord saqlash


    saveBest(score){


        let best =
        this.getBest();



        if(score > best){


            localStorage.setItem(

                "uzbBest",

                score

            );


            return true;


        }



        return false;


    },







    // O'yinlar soni


    getGames(){


        let games =

        localStorage.getItem(
            "uzbGames"
        );



        return games
        ?
        Number(games)
        :
        0;


    },







    addGame(){


        let games =
        this.getGames();



        games++;



        localStorage.setItem(

            "uzbGames",

            games

        );


    },







    // Oxirgi natija


    saveLast(score,name){


        let data={


            name:name,


            score:score,


            date:
            new Date()
            .toLocaleString()


        };



        localStorage.setItem(

            "uzbLast",

            JSON.stringify(data)

        );


    },







    // Oxirgi natijani olish


    getLast(){


        let data =

        localStorage.getItem(
            "uzbLast"
        );



        return data
        ?
        JSON.parse(data)
        :
        null;


    },







    // Tozalash


    clear(){


        localStorage.removeItem(
            "uzbBest"
        );


        localStorage.removeItem(
            "uzbGames"
        );


        localStorage.removeItem(
            "uzbLast"
        );


    }



};