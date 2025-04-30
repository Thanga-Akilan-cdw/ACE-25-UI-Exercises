

//Friends data JSON
displayCards();

// Retrieve Json data
async function getFriends(){
    const response = await fetch("../public/Friends.json")

    const friendsData = await response.json();
    friends = await friendsData.data;
    console.log(friends)
    return friends;
}

// A Function to create a single card 
function createCard(friend, cardContainerFragment){

    // Image tag
    let cardImage = document.createElement('img');
    cardImage.setAttribute('src',friend.img)
    cardImage.setAttribute('alt',friend.first_name+" "+friend.last_name)
    cardImage.classList.add("card-image")


    // Image Wrapper
    let imageWrapper = document.createElement("div")
    imageWrapper.classList.add("card-image-wrapper")

    imageWrapper.appendChild(cardImage);

    // Email Content
    let email = document.createElement("h3")
    email.classList.add("card-mail")
    email.innerText = friend.email;

    // Name Content
    let name = document.createElement("h2")
    name.classList.add("card-name")
    name.innerText = friend.first_name + " " + friend.last_name;


    // Card Content 
    let cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    cardContent.appendChild(name);
    cardContent.appendChild(email);


    // Card Element
    const card = document.createElement("div")
    card.classList.add("card")
    card.appendChild(imageWrapper);
    card.appendChild(cardContent)


    // Add card to root
    cardContainerFragment.appendChild(card);
}

// Display the cards
async function displayCards(){

    // Root element where the cards are added
    let root = document.getElementById("root")
    root.classList.add("root-container")

    // Fragment for card container
    let cardContainerFragment = new DocumentFragment();

    // Map all data of friends to execute the createCard function
    let friends = await getFriends();
    friends.forEach((friend)=>{
        createCard(friend, cardContainerFragment);
    })
    root.append(cardContainerFragment);

}




