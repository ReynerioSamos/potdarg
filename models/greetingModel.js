class GreetingModel {
    constructor() {
this.greetings = [
    { language: "English", greeting: "Hello, space traveler!" },
    { language: "Spanish", greeting: "¡Hola, viajero espacial!" },
    { language: "French", greeting: "Bonjour, voyageur spatial!" },
    { language: "German", greeting: "Hallo, Weltraumreisender!" },
    { language: "Italian", greeting: "Ciao, viaggiatore spaziale!" },
    { language: "Japanese", greeting: "こんにちは、宇宙旅行者！" },
    { language: "Chinese", greeting: "你好，太空旅行者！" },
    { language: "Russian", greeting: "Привет, космический путешественник!" },
    { language: "Arabic", greeting: "مرحبا أيها المسافر الفضائي!" },
    { language: "Hindi", greeting: "नमस्ते, अंतरिक्ष यात्री!" },
    { language: "Portuguese", greeting: "Olá, viajante espacial!" },
    { language: "Korean", greeting: "안녕하세요, 우주 여행자!" },
    { language: "Swedish", greeting: "Hej, rymdresenär!" },
    { language: "Dutch", greeting: "Hallo, ruimtereiziger!" },
    { language: "Greek", greeting: "Γεια σου, ταξιδιώτη του διαστήματος!" }
];
}

getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * this.greetings.length);
    return this.greetings[randomIndex];
}
}

module.exports = new GreetingModel();
