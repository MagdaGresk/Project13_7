var fs = require('fs')

fs.readdir('./', function(err, files) {
	if (err) {
		console.log(err.message)
	} else {
		console.log(files)

		fs.writeFile('directoryContent.txt', files)
	}
})

