
        // Add 11 players in an array
        let players = ["Akil","Hari","Muruga","Saran","Saro","Prasanth","Mike","Beni","Rishi","Aurum","Ram"]

        // First Player removed due to injury
        console.log(`${players.shift()} is removed due to injury`)

        // Display number of players after removing injured.
        console.log(`The number of players is ${players.length}`)

        // Add another player to list
        players.push("Dhoni")

        // Sort the players list and assign jersey number
        players.sort();
        console.log("Team Players and Jersey number : ")
        for(let iterator = 0; iterator < players.length; iterator++){
            console.log(`${players[iterator]} - ${iterator+1}`);
        }

        // Print Player names in upper case along with jersey number
        let playersForJersey= [];
        for(let iterator = 0; iterator < players.length; iterator++){
            playersForJersey.push({"name": players[iterator].toUpperCase(), "jerseyNumber":iterator+1});
        }

        console.log("Team Players and Jersey number : ")
        for(let iterator = 0; iterator < playersForJersey.length; iterator++){
            console.log(`${playersForJersey[iterator].name} - ${playersForJersey[iterator].jerseyNumber}`);
        }