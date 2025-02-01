const readline = require('readline-sync');

function start() {
    const content = {};
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ["Who is", "What is", "The history of", "How to", "Why is", "Explain", "Define", "Tell me about", "Show me", "List the", "Describe"];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ');
        return prefixes[selectedPrefixIndex];
    }   

    console.log(content);
}

start();