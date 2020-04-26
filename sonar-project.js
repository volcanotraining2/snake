const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://35.197.170.186:9000',
       options : {
       'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
