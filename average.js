const data = require("./dataBase.json");
const cityTab = ["Paris", "Lyon"];
const dptTab = [10];
const idTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function makeAverage(map)
{
    var averageGlobal;

    if (map["happiness"] > map["neutral"] &&
	map["happiness"] > (map["anger"] + map["sadness"]))
	averageGlobal = 100;
    else if ((map["anger"] + map["sadness"]) > map["happiness"] &&
	     (map["anger"] + map["sadness"]) > map["neutral"])
	averageGlobal = 0;
    else if (map["neutral"] > map["happiness"] &&
	     map["neutral"] > (map["anger"] + map["sadness"]))
	averageGlobal = 50;
    console.log(averageGlobal);
    return (averageGlobal);
}

function makeIdAverage(data)
{
    console.log("BY ID");
    var tabId = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
    for (var idxId = 0; idxId != idTab.length; ++idxId)
    {
	for (var idx = 0; idx != data.length; ++idx)
	{
	    var	map = {};	    
	    if (data[idx].employee.id == idTab[idxId])
	    {
		map["anger"] = data[idx].scores.anger;
		map["happiness"] = data[idx].scores.happiness;
		map["neutral"] = data[idx].scores.neutral;
		map["sadness"] = data[idx].scores.sadness;
		tabId[idxId].push(makeAverage(map));
	    }
	}
    }
    return (tabId);
}

function makeCityAverage(data)
{
    var tabCity = [[], []];
    for (var idxCity = 0; idxCity != cityTab.length; ++idxCity)
    {
	for (var idx = 0; idx != data.length; ++idx)
	{
	    var	map = {};
	    
	    if (data[idx].employee.city == cityTab[idxCity])
	    {
		map["anger"] = data[idx].scores.anger;
		map["happiness"] = data[idx].scores.happiness;
		map["neutral"] = data[idx].scores.neutral;
		map["sadness"] = data[idx].scores.sadness;
		tabCity[idxCity].push(makeAverage(map));
	    }
	}
    }
    return (tabCity);
}

function makeDptAverage(data)
{
    var tabDpt = [[],[]];
    for (var idxDpt = 0; idxDpt != dptTab.length; ++idxDpt)
    {
	for (var idx = 0; idx != data.length; ++idx)
	{
	    var	map = {};
	    
	    if (data[idx].employee.department == dptTab[idxDpt])
	    {
		map["anger"] = data[idx].scores.anger;
		map["happiness"] = data[idx].scores.happiness;
		map["neutral"] = data[idx].scores.neutral;
		map["sadness"] = data[idx].scores.sadness;
		tabDpt[idxDpt].push(makeAverage(map));
	    }
	}
    }
    return (tabDpt);
}

function makeEveryAverage(data)
{
    var jsonCity = JSON.stringify(makeCityAverage(data));
    var jsonID = JSON.stringify(makeIdAverage(data));
    var jsonDpt = JSON.stringify(makeDptAverage(data));
    var fs = require('fs');

    fs.writeFile('Cityfile.json', jsonCity, 'utf8');
    fs.writeFile('IDfile.json', jsonID, 'utf8');
    fs.writeFile('Dptfile.json', jsonDpt, 'utf8');
}


makeEveryAverage(data);
