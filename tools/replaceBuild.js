const fs = require('fs');

fs.readFile('build/index.html', 'utf8', onReadFile);

function onReadFile(error, data) {
    if (error) throw error;

    const replacedData = data
        .replaceAll('src="', 'src="build')
        .replaceAll('href="', 'href="build');

    writeFile(replacedData);
}

function writeFile(data) {
    fs.writeFile('index.html', data, function (error) {

        if (error) throw error;

        console.log('index.html был создан успешно.');
    });
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
