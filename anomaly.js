var data = require ("./IDfile.json")

var arr = []

recoverHappy(data, arr)

function recoverHappy(data, arr) {
    var fs = require("fs")
    var	index = 0
    var anomaly = []
    
    for (var idx = 0; idx <= data[idx].length; idx++) {
	arr = data[idx]
	if (calculateAnomalie(arr) == 1) {
	    anomaly[index] = idx
	    var json = JSON.stringify(anomaly)
	    fs.writeFile('anomaly.json', json, 'utf8')
	}
    }
}

function calculateAnomalie(arr) {
    var	idx = 0
    var	Interval = 5

    var average = getValueOneMonth(arr)

    function getValueOneMonth(arr) {
	var	sum = 0
	while (idx != arr.length) {
	    sum += arr[idx]
	    idx++
	}
	return sum / arr.length
    }

    idx = 0

    var ret = checkAnomalies(arr, average, idx, Interval)

    function checkAnomalies(arr, average, idx, Interval) {
	var	index = 0
	var	i = 0
	var	avg = 0
	var	averageInterval = []

	while (idx != Interval) {
	    averageInterval[i] = arr[idx]
	    i++
	    idx++
	}
	while (index != averageInterval.length) {
	    avg += averageInterval[index]
	    index++
	}
	avg /= index
	Interval += 5
	if (avg < average - 20)
	    return 1
	if (idx == arr.length)
	    return 0
	checkAnomalies(arr, average, idx, Interval)
    }
    return ret
}
