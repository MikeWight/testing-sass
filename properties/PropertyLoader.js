const propertyParse = require ("properties-parser");
const fs = require('fs');

class PropertyLoader  {

	constructor(extension='.json', path='./properties/') {
		this.extension = extension;
        this.path = path;
	}

    loadDomains() {
        let propFiles = [];
        let propertyObj;

        let files = fs.readdirSync(this.path);

        files.forEach(file => {
            let fileName = file.toLowerCase();
            if (fileName.indexOf(this.extension) > -1) {
                propFiles.push(file);
            }
        });

        if (propFiles.length > 0) {
            console.log("Property file found: " + propFiles);
            propertyObj = {};
        } else {
            console.log('No properties found.')
        }

        propFiles.forEach(file => {
            let fileName = file.split('_');
            let lang = fileName[1].split('.')[0];
            let domain = fileName[0].toLowerCase();
            if (propertyObj[domain] === undefined) {
                propertyObj[domain] = [];
            }
            propertyObj[domain].push(lang);
        });

        return propertyObj;
    }

	loadProperties(domain='app', lang='en') {
		let propFiles = [];
		let propertyObj;

		let files = fs.readdirSync(this.path);

		files.forEach(file => {
            let fileName = file.toLowerCase();
            if (fileName.indexOf(this.extension) > -1 
                && fileName.indexOf(domain) > -1
                && fileName.indexOf(lang) > -1) {
                console.log("Property file found: " + file);
                propFiles.push(file);
            }
		});

        console.log (propFiles.length);
        if (propFiles.length > 0) {
            console.log("Properties found: " + propFiles);
            propertyObj = {};
        } else {
            console.log('No properties found.')
        }
        
		propFiles.forEach(file => {
			let fileName = file.split('_');
			let lang = fileName[1].split('.')[0];
            let domain = fileName[0].toLowerCase();
			propertyObj[domain] = {};
			let properties = propertyParse.read(this.path + file);
			
			if (!(properties === undefined)) {
				propertyObj[domain][lang] = properties;
			}
		});
		console.log ("Properties Loaded.");
		console.log ();
		return propertyObj;
	}
    
};

module.exports = {PropertyLoader: PropertyLoader};
