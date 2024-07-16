document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-button").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        /*Combinación de usuarios y contraseñas*/
        var validCredentials = [
            { username: "Coder", password: "House" },
            { username: "Hola", password: "Tutor" }
        ];

        var isValid = false;

         validCredentials.forEach(function(credential) {
            if (credential.username === username && credential.password === password) {
                isValid = true;
            }
        });

        if (isValid) {
            alert("Login successful!");
            window.location.href = "aviso.html"
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

let selectedCardNumber = null;

const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const signEquivalencies = {
    "0": "The Fool, the starting point, the innocence of youth, the starting of the path",
    "1": "The Magician, the coming back from the journey, the acquiring of experience",
    "2": "The High Priestess, the female counterpart of The Fool, the young mistress",
    "3": "The Empress, the female counterpart of both Magician and Emperor, the very face of Morgana",
    "4": "The Emperor, both fiery strength and calm perseverance",
    "5": "The Hierophant, The Pope, the golden bull of tradition",
    "6": "The Lovers, a union of opposites, the merging of paths",
    "7": "The Chariot, the triumph of willpower, the journey forward",
    "8": "Strength, the mastery of emotions, the inner fortitude",
    "9": "The Hermit, the search for inner truth, the solitary path",
    "10": "Wheel of Fortune, the cycles of fate, the turning point",
    "11": "Justice, the balance of truth, the scales of karma",
    "12": "The Hanged Man, the sacrifice for insight, the pause in action",
    "13": "Death, the end of a cycle, the transformation through letting go",
    "14": "Temperance, the blending of opposites, the path of moderation",
    "15": "The Devil, the bondage of materialism, the challenge of freedom",
    "16": "The Tower, the sudden upheaval, the destruction of falsehoods",
    "17": "The Star, the hope and inspiration, the guidance from above",
    "18": "The Moon, the realm of dreams, the illusion and intuition",
    "19": "The Sun, the clarity and vitality, the joy of life",
    "20": "Judgement, the awakening and renewal, the call to higher purpose",
    "21": "The World, the completion of a journey, the integration of experience"
};

const tarotCards = [
    "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
    "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
    "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World"
];

const planetAssociations = {
    "0": "Uranus",
    "1": "Mercury",
    "2": "Moon",
    "3": "Venus",
    "4": "Mars",
    "5": "Jupiter",
    "6": "Mercury",
    "7": "Moon",
    "8": "Sun",
    "9": "Mercury",
    "10": "Jupiter",
    "11": "Venus",
    "12": "Neptune",
    "13": "Pluto",
    "14": "Jupiter",
    "15": "Saturn",
    "16": "Mars",
    "17": "Uranus",
    "18": "Neptune",
    "19": "Sun",
    "20": "Pluto",
    "21": "Saturn"
};

const kabbalisticMeanings = {
    "0": "The Fool represents the pure soul before entering the physical world, the start of the journey on the Tree of Life.",
    "1": "The Magician symbolizes the first step into the material world, bringing spiritual truths into physical reality.",
    "2": "The High Priestess stands for intuition and the hidden knowledge that must be unlocked.",
    "3": "The Empress embodies the nurturing aspect of the Divine, the power of creation and abundance.",
    "4": "The Emperor represents order, structure, and the application of wisdom and authority.",
    "5": "The Hierophant signifies tradition, spiritual teachings, and the passing of knowledge.",
    "6": "The Lovers symbolize the balance between opposites and the union of dualities.",
    "7": "The Chariot stands for willpower, victory, and the triumph of the spirit over the material.",
    "8": "Strength represents inner power, the mastery of one's emotions, and the courage to face challenges.",
    "9": "The Hermit signifies introspection, spiritual enlightenment, and the search for inner truth.",
    "10": "Wheel of Fortune symbolizes the cyclical nature of life and the karmic lessons to be learned.",
    "11": "Justice stands for fairness, balance, and the karmic consequences of one's actions.",
    "12": "The Hanged Man represents sacrifice, the reversal of perspectives, and the suspension of the material world for spiritual insights.",
    "13": "Death symbolizes transformation, the end of one phase, and the beginning of another.",
    "14": "Temperance stands for balance, moderation, and the harmonious blending of opposites.",
    "15": "The Devil represents materialism, bondage, and the challenges of spiritual freedom.",
    "16": "The Tower signifies sudden change, upheaval, and the breaking down of false structures.",
    "17": "The Star symbolizes hope, inspiration, and the guidance of spiritual light.",
    "18": "The Moon represents the realm of dreams, illusions, and the intuitive insights from the subconscious.",
    "19": "The Sun stands for clarity, enlightenment, and the joy of spiritual realization.",
    "20": "Judgement symbolizes awakening, renewal, and the call to a higher purpose.",
    "21": "The World represents the completion of the spiritual journey and the integration of all experiences."
};

const cardImages = {
    "The Fool": "assets/fool.jpg",
    "The Magician": "assets/magician.jpg",
    "The High Priestess": "assets/high_priestess.jpg",
    "The Empress": "assets/empress.jpg",
    "The Emperor": "assets/emperor.jpg",
    "The Hierophant": "assets/hierophant.jpg",
    "The Lovers": "assets/lovers.jpg",
    "The Chariot": "assets/chariot.jpg",
    "Strength": "assets/strength.jpg",
    "The Hermit": "assets/hermit.jpg",
    "Wheel of Fortune": "assets/wheel_of_fortune.jpg",
    "Justice": "assets/justice.jpg",
    "The Hanged Man": "assets/hanged_man.jpg",
    "Death": "assets/death.jpg",
    "Temperance": "assets/temperance.jpg",
    "The Devil": "assets/devil.jpg",
    "The Tower": "assets/tower.jpg",
    "The Star": "assets/star.jpg",
    "The Moon": "assets/moon.jpg",
    "The Sun": "assets/sun.jpg",
    "Judgement": "assets/judgement.jpg",
    "The World": "assets/world.jpg"
};

    let selectedCard = tarotCards[selectedCardNumber];
    let selectedSign = signEquivalencies[selectedCardNumber];
    let associatedPlanet = planetAssociations[selectedCardNumber];
    let kabbalisticMeaning = kabbalisticMeanings[selectedCardNumber];
    let signo = '';



// Function to select a card number between 0 and 21
function selectANumber() {
    selectedCardNumber = parseInt(prompt("Please, select a number between 0 and 21"));
    if (isNaN(selectedCardNumber) || selectedCardNumber < 0 || selectedCardNumber > 21) {
        alert("Error, please select a valid number");
    } else {
        let selectedCard = tarotCards[selectedCardNumber];
        let selectedImage = cardImages[selectedCard];
        let imgElement = document.getElementById('cardImage');
        imgElement.classList.remove('show');
        imgElement.src = selectedImage;
        setTimeout(() => imgElement.classList.add('show'), 10);
    }
}

function signEq() {
    if (selectedCardNumber === null) {
        alert("Please select a card number first.");
        return;
    }

    let cardDescription = signEquivalencies[selectedCardNumber];

    const signs = document.querySelectorAll('.sign');
    signs.forEach(sign => {
        sign.classList.remove('center');
    });

    let signElement;
    switch (selectedCardNumber) {
        case 4:
            signElement = document.getElementById('signAries');
            alert(cardDescription + " matches with Aries");
            break;
        case 5:
            signElement = document.getElementById('signTaurus');
            alert(cardDescription + " matches with Taurus");
            break;
        case 6:
            signElement = document.getElementById('signGemini');
            alert(cardDescription + " matches with Gemini");
            break;
        case 7:
            signElement = document.getElementById('signCancer');
            alert(cardDescription + " matches with Cancer");
            break;
        case 8:
            signElement = document.getElementById('signLeo');
            alert(cardDescription + " matches with Leo");
            break;
        case 9:
            signElement = document.getElementById('signVirgo');
            alert(cardDescription + " matches with Virgo");
            break;
        case 11:
            signElement = document.getElementById('signLibra');
            alert(cardDescription + " matches with Libra");
            break;
        case 13:
            signElement = document.getElementById('signScorpio');
            alert(cardDescription + " matches with Scorpio");
            break;
        case 14:
            signElement = document.getElementById('signSagittarius');
            alert(cardDescription + " matches with Sagittarius");
            break;
        case 15:
            signElement = document.getElementById('signCapricorn');
            alert(cardDescription + " matches with Capricorn");
            break;
        case 17:
            signElement = document.getElementById('signAquarius');
            alert(cardDescription + " matches with Aquarius");
            break;
        case 18:
            signElement = document.getElementById('signPisces');
            alert(cardDescription + " matches with Pisces");
            break;
        default:
            alert(cardDescription + " is not related to any zodiac sign.");
            return;
    }

    if (signElement) {
        signElement.classList.add('center');
    }
}