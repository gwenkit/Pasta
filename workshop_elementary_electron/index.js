// require('cat-picture');


var picture = require('cat-picture');
var image = require('lightning-image-poly');
var remote = require('electron').remote; // doesn't work #FIXME 
var fs = require('fs');


var src = picture.src;

picture.remove();

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});


function save() {
    if (!remote) {
        alert('[ERROR] remote: NOT FOUND');
        return;
    }

    var currentWebContents = remote.getCurrentWebContents();
    if (!currentWebContents) {
        alert('[ERROR] currentWebContents: NOT FOUND');
        return;
    }

    currentWebContents.printToPDF(
        {
            portrait: true,
        },
        function (err, data) {
            fs.writeFile('annotation.pdf', data, function (err) {
                if (err) alert('error generating pdf! ' + err.message);
                else alert('pdf saved!');
            });
        }
    );
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 80) { // 'P'
        save();
    }
});


