const MAX_NICKNAMES = 100;

const adjectives = ['sweet', 'adorable', 'loving', 'kind', 'beautiful','affectionate','amiable','compassionate','considerate','courteous','friendly','gentle', 'gracious','kindhearted','precious', 'sympathetic','thoughtful','understanding', 'divine', 'celestial', 'hot', 'sexy']

const nouns = ['pea', 'angel', 'person', 'one', 'lamb', 'butterfly', 'ladybug', 'bunny', 'darling', 'superstar', 'lady', 'woman', 'pumpkin', 'muffin', 'baby', 'pie', 'heart', 'tart', 'sugar', 'foot', 'bee', 'godess', 'nymph', 'treasure', 'monkey']

// generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a nickname
const generateNickname = () => `${adjectives[rand(adjectives.length - 1)]} ${nouns[rand(nouns.length - 1)]}`

//create a nickname
const createNickname = () => ({nickname: generateNickname()})

// compare two contacts for alphabetizing
export const compareNames = (name1, name2) => name1.nickname > name2.nickname

// add keys to based on index
const addKeys = (val, key) => ({key, ...val})

//Filter out duplicate pairs
const uniquePairs = (arr) => {
	return Array.from(new Set(arr.map(a => a.nickname))).map(nickname => {return arr.find(a => a.nickname === nickname)})
}

// create an array of length MAX_NICKNAMES and add keys
export default uniquePairs(Array.from({length: MAX_NICKNAMES}, createNickname)).map(addKeys)