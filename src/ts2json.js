
// Node deps
var fs = require('fs');

// Get ts and TypeScript objects
eval(String(fs.readFileSync(__dirname+'/typescript.js')));

// Export function
module.exports = function(source, isDeclaration) {
    source = String(source);
    var syntaxTree = TypeScript.Parser.parse((isDeclaration ? 'source.d.ts' : 'source.ts'), TypeScript.SimpleText.fromString(source), 1 /*ES5*/, /*isDeclaration*/ !!isDeclaration);

    var cache = [];
    var json = JSON.parse(JSON.stringify(syntaxTree, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    }));
    cache = null;

    return json;
}
