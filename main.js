var fs = require('fs');
var parse = require('csv-parse');
var oprRecord = require('./model.js');
var csvData=[];
var linecount = 0;

oprRecord.collection.drop();


fs.createReadStream('OPR - Sheet1.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        linecount ++;
        if (linecount == 1)
            return null;
        //console.log(csvrow);
        var record = new oprRecord;
        record.timestamp=csvrow[0];
        record.title=csvrow[2];
        record.imageUrl=csvrow[1];
        record.description=csvrow[3];
        record.streetAddress=csvrow[4];
        record.lat=csvrow[5];
        record.lng=csvrow[6];
        record.author=csvrow[10];
        record.stars=csvrow[11];
        record.duplicate=csvrow[12];
        record.reasons=csvrow[13];
        record.JSON=csvrow[14];
        record.save();
        if (linecount % 100 == 0)
            console.log (linecount);
    })
    .on('end',function() {
        //do something wiht csvData
        console.log(csvData);
    });