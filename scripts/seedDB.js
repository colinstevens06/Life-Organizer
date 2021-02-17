const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGDB_URI ||
  "mongodb://localhost/lifeOrganizer",
  { useNewUrlParser: true, useUnifiedTopology: true, 'useFindAndModify': false }
)

// const notesSeed = [
//   {
//     name: "Black Beans Recipe",
//     category: "recipe",
//     note: "You'll need lots of different things for black beans. The ingredients include: 1 lb dry black beans, 6 cups of water, 4 bay leaves, 1 sweet onion, 1 tsp adobo, 1 Tbsp cumin",
//     lastUpdated: "2021-01-23"
//   },
//   {
//     name: "Chipotle Chicken Recipe",
//     category: "recipe",
//     note: "Buy a family pack of boneless skinless chicken theighs (about 3 lbs), for every piece of chicken, add 1 tsp of adobo to a mixing bowl. Add 1/2 tsp honey. Wisk until one with the adobo. Add chicken and mix until all pieces are coated evenly. Marinade overnight. Cook at 425 for 20-25 minutes, until chicken reaches 165 internal temp.",
//     lastUpdated: "2021-01-21"
//   },
//   {
//     name: "My Girl Lyrics",
//     category: "lyrics",
//     note: "I've got sunshine on a cloudy day.    When it's cold outside.     I've got the month of May.     I guess you'd say.     What can make me feel this way.     My girl, my girl, my girl.     Talkin' 'bout my girl.     My girl.     I've got so much honey.     The bees envy me.     I've got a sweeter song.     Than the birds in the trees.     Well, I guess you'd say.     What can make me feel this way.     My girl, my girl, my girl.    Talkin' 'bout my girl.     My girl.     Ohh ohh.     Hey hey hey.     Hey hey hey.     Oh yeah.     I don't need no money, fortune, or fame.    I've got all the riches baby one man can claim.     Well I guess you'd say",
//     lastUpdated: "2019-01-21"
//   },
//   {
//     name: "Backyard Vegetable Garden",
//     category: "planning",
//     note: "Things I want to plant in my summer garden: kale, cherry tomatoes, tomatoes, lettuce, carrots, beets",
//     lastUpdated: "2021-01-02"
//   }
// ];

const usersSeed = [
  {
    name: "Black Beans Recipe",
    fireID: "wRPCubuo6eZ4rRF3tQkEmBNg9S83",
    category: "recipe",
    note: "You'll need lots of different things for black beans. The ingredients include: 1 lb dry black beans, 6 cups of water, 4 bay leaves, 1 sweet onion, 1 tsp adobo, 1 Tbsp cumin",
    lastUpdated: "2021-01-23"
  },
  {
    name: "Chipotle Chicken Recipe",
    fireID: "wRPCubuo6eZ4rRF3tQkEmBNg9S83",
    category: "recipe",
    note: "Buy a family pack of boneless skinless chicken theighs (about 3 lbs), for every piece of chicken, add 1 tsp of adobo to a mixing bowl. Add 1/2 tsp honey. Wisk until one with the adobo. Add chicken and mix until all pieces are coated evenly. Marinade overnight. Cook at 425 for 20-25 minutes, until chicken reaches 165 internal temp.",
    lastUpdated: "2021-01-21"
  },
  {
    fireID: "vJEWMqFAFAeFQguuu9QALmOXt7l2",
    name: "My Girl Lyrics",
    category: "lyrics",
    note: "I've got sunshine on a cloudy day.    When it's cold outside.     I've got the month of May.     I guess you'd say.     What can make me feel this way.     My girl, my girl, my girl.     Talkin' 'bout my girl.     My girl.     I've got so much honey.     The bees envy me.     I've got a sweeter song.     Than the birds in the trees.     Well, I guess you'd say.     What can make me feel this way.     My girl, my girl, my girl.    Talkin' 'bout my girl.     My girl.     Ohh ohh.     Hey hey hey.     Hey hey hey.     Oh yeah.     I don't need no money, fortune, or fame.    I've got all the riches baby one man can claim.     Well I guess you'd say",
    lastUpdated: "2019-01-21"

  },

  {
    fireID: "wZLceaH02IdWQl944H1g2AGbvIv1",
    name: "Backyard Vegetable Garden",
    category: "planning",
    note: "Things I want to plant in my summer garden: kale, cherry tomatoes, tomatoes, lettuce, carrots, beets",
    lastUpdated: "2021-01-02"
  }
]

console.log("userSeed", usersSeed)

db.Note
  .deleteMany({})
  .then(() => db.Note.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })