/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const mainCard = document.querySelector('.cards')
axios.get('https://api.github.com/users/dangus1924')
.then(res => {
  console.log(res.data);
  mainCard.appendChild(cardCreator(res.data));
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [  
  'KryoKorpz',
  'KingAtoki',
  'tetondan',
  'dustinmyers',
  'bigknell'
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    console.log(res.data);
    mainCard.appendChild(cardCreator(res.data));
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cardCreator = (obj) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const cardIMG = document.createElement('img');
  cardIMG.src = obj.avatar_url;

  const innerCardDiv = document.createElement('div');
  innerCardDiv.classList.add('card-info');

  const innerCardH3 = document.createElement('h3');
  innerCardH3.classList.add('name');
  innerCardH3.textContent = `${obj.name}`;

  const innerCardP = document.createElement('p');
  innerCardP.classList.add('username');
  innerCardP.textContent = `${obj.login}`;

  const innerCardP2 = document.createElement('p');
  if (obj.location !== null) {
    innerCardP2.textContent = `Location: ${obj.location}`;
  }
  else {
    innerCardP2.textContent = 'Location: Unknown'
  }

  const innerCardP3 = document.createElement('p');
  innerCardP3.textContent = 'Profile: ';

  const innerCardATag = document.createElement('a');
  innerCardATag.href = obj.html_url;
  innerCardATag.textContent = obj.html_url;

  const innerCardP4 = document.createElement('p');
  innerCardP4.textContent = `Followers: ${obj.followers}`

  const innerCardP5 = document.createElement('p');
  innerCardP5.textContent = `Following: ${obj.following}`

  const innerCardP6 = document.createElement('p');
  if (obj.bio !== null) {
    innerCardP6.textContent = `Bio: ${obj.bio}`
  }
  else {
    innerCardP6.textContent = 'No bio!'
  }

  cardContainer.appendChild(cardIMG);
  cardContainer.appendChild(innerCardDiv);
  innerCardDiv.appendChild(innerCardH3);
  innerCardDiv.appendChild(innerCardP);
  innerCardDiv.appendChild(innerCardP2);
  innerCardP3.append(innerCardATag);
  innerCardDiv.appendChild(innerCardP3);
  innerCardDiv.appendChild(innerCardP4);
  innerCardDiv.appendChild(innerCardP5);
  innerCardDiv.appendChild(innerCardP6);

  return cardContainer;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
