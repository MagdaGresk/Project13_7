var fs = require('fs')
var colors = require('colors')

fs.readdir('./', function(err, files) {
	if (err) {
		console.log('error!')
	} else {
		console.log(files)
		fs.writeFile('directoryContent.txt', files, function(err) {
			if (err) throw err;
        	console.log('done!'.blue)
        })
	}
})




