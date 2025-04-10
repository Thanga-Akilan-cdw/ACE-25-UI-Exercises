
        // Add 11 players in an array
        let players = ["Akil","accum","beni","hari","Hari","Muruga","Saran","Saro","Prasanth","Mike","Beni","Rishi","Aurum","Ram"]

        // First Player removed due to injury
        console.log(`${players.shift()} is removed due to injury`)

        // Display number of players after removing injured.
        console.log(`The number of players is ${players.length}`)

        // Add another player to list
        players.push("Dhoni")

        // Sort the players list and assign jersey number
        players.sort(compareNames);

        let playersForJersey= [];
        for(let iterator = 0; iterator < players.length; iterator++){
            playersForJersey.push({"name": players[iterator].toUpperCase(), "jerseyNumber":generateRandom(100)});
            console.log(`${players[iterator]} - ${playersForJersey[iterator].jerseyNumber}`);
        }


        // Print Player names in upper case along with jersey number

        console.log("Team Players and Jersey number : ")
        for(let iterator = 0; iterator < playersForJersey.length; iterator++){
            console.log(`${playersForJersey[iterator].name} - ${playersForJersey[iterator].jerseyNumber}`);
        }


        // Comparator for arranging names in alphabetical order

        function compareNames(a,b){
            if(a.toUpperCase() < b.toUpperCase())
                return -1;
            else if(a.toUpperCase() > b.toUpperCase())
                return 1;
            else{
                if(a<b)
                    return -1;
                else
                    return 1;
            }
        }


        // Generate Random number

        function generateRandom(limit){
            return Math.floor(Math.random()*limit);
        }