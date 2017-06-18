const data = require("./dataBase.json");
const cityTab = ["Paris", "Lyon"];
const dptTab = [10];
const idTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const data = [
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.991635298,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.976570729,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.952224019,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.970993031,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.966301394,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.960280662,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.975681392,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.975277295,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.969297656,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.967472803,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.996105073,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.965198191,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.963294925,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.987066482,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.961010598,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.958974335,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.970733656,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.984844330,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.989733948,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.954725366,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.995419304,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.978304704,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.957070109,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.983058720,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.989485630,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.991477216,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.957671768,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.988278000,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.965260106,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 1,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000009781477,
	    "contempt": 0.00154955313,
	    "disgust": 0.00000358993816,
	    "fear": 4.92794321e-8,
	    "happiness": 0.1217392,
	    "neutral": 0.968219364,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
{
    "employee": {
	"id": 2,
	"department": 10,
	"city": "Paris"
    },
    "date": {
	"day" : "2017-05-01"
    },
    "scores": {
	"anger": 0.000000662625,
	"contempt": 0.00000188362,
	"disgust": 0.00000929282821,
	"fear": 4.92794321e-8,
	"happiness": 0.973096624,
	"neutral": 0.00000929282821,
	"sadness": 0.000105469131,
	"surprise": 0.000006533902
    }
},
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.972078543,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.985438056,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.996524518,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.973343113,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.988527668,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.989921523,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.994397028,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.970752366,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.953606585,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.952622433,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.998569577,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.954072070,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.979198318,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.975132113,
	    "neutral": 0.00000929282821,
	    "sadness": 0.000105469131,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.958204087,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.964582010,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.961225072,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.988355662,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.971093852,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.965835630,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.957652236,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.975913785,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.992995733,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.981110295,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.978264701,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.966376210,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.987298408,
	    "sadness": 0.00505040,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.970709235,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 2,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000662625,
	    "contempt": 0.00000188362,
	    "disgust": 0.00000929282821,
	    "fear": 4.92794321e-8,
	    "happiness": 0.000105469131,
	    "neutral": 0.00000929282821,
	    "sadness": 0.977797001,
	    "surprise": 0.000006533902
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000612679,
	    "contempt": 0.00000151842,
	    "disgust": 0.00000948047,
	    "fear": 0.000000018381,
	    "happiness": 0.00010479,
	    "neutral": 0.0000095878,
	    "sadness": 0.997707528,
	    "surprise": 0.000007168
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000674492,
	    "contempt": 0.00000205848,
	    "disgust": 0.00000901530,
	    "fear": 0.000000018567,
	    "happiness": 0.00012215,
	    "neutral": 0.982990959,
	    "sadness": 0.000000603,
	    "surprise": 0.000006068
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000660613,
	    "contempt": 0.00000180937,
	    "disgust": 0.00000914141,
	    "fear": 0.000000017224,
	    "happiness": 0.00011517,
	    "neutral": 0.0000091582,
	    "sadness": 0.996241534,
	    "surprise": 0.000006749
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000615509,
	    "contempt": 0.00000151777,
	    "disgust": 0.00000908874,
	    "fear": 0.000000018482,
	    "happiness": 0.00010250,
	    "neutral": 0.0000097789,
	    "sadness": 0.962338735,
	    "surprise": 0.000006524
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000638568,
	    "contempt": 0.00000151070,
	    "disgust": 0.00000931705,
	    "fear": 0.000000017422,
	    "happiness": 0.00010173,
	    "neutral": 0.0000097011,
	    "sadness": 0.996562785,
	    "surprise": 0.000007645
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000631298,
	    "contempt": 0.00000158403,
	    "disgust": 0.00000918929,
	    "fear": 0.000000015832,
	    "happiness": 0.00012064,
	    "neutral": 0.0000094432,
	    "sadness": 0.990903723,
	    "surprise": 0.000006939
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000667201,
	    "contempt": 0.00000156396,
	    "disgust": 0.00000913457,
	    "fear": 0.000000018763,
	    "happiness": 0.00011744,
	    "neutral": 0.0000095855,
	    "sadness": 0.967026213,
	    "surprise": 0.000006233
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000647595,
	    "contempt": 0.00000192198,
	    "disgust": 0.00000949255,
	    "fear": 0.000000016831,
	    "happiness": 0.00010046,
	    "neutral": 0.0000097379,
	    "sadness": 0.986752938,
	    "surprise": 0.000006220
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000630083,
	    "contempt": 0.00000160913,
	    "disgust": 0.00000924517,
	    "fear": 0.000000013271,
	    "happiness": 0.00011555,
	    "neutral": 0.0000096062,
	    "sadness": 0.958661984,
	    "surprise": 0.000006872
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000629822,
	    "contempt": 0.00000178245,
	    "disgust": 0.00000900601,
	    "fear": 0.000000014020,
	    "happiness": 0.00010676,
	    "neutral": 0.0000092796,
	    "sadness": 0.966018028,
	    "surprise": 0.000007489
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000610572,
	    "contempt": 0.00000199715,
	    "disgust": 0.00000912272,
	    "fear": 0.000000015137,
	    "happiness": 0.00010964,
	    "neutral": 0.0000098086,
	    "sadness": 0.968899662,
	    "surprise": 0.000006123
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000604398,
	    "contempt": 0.00000185088,
	    "disgust": 0.00000910914,
	    "fear": 0.000000010602,
	    "happiness": 0.00011353,
	    "neutral": 0.0000091501,
	    "sadness": 0.953576609,
	    "surprise": 0.000007097
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000608256,
	    "contempt": 0.00000183578,
	    "disgust": 0.00000951305,
	    "fear": 0.000000019669,
	    "happiness": 0.00010936,
	    "neutral": 0.0000098693,
	    "sadness": 0.955200985,
	    "surprise": 0.000007019
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000667734,
	    "contempt": 0.00000204345,
	    "disgust": 0.00000936979,
	    "fear": 0.000000010745,
	    "happiness": 0.00010729,
	    "neutral": 0.0000096216,
	    "sadness": 0.977522227,
	    "surprise": 0.000007092
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000643869,
	    "contempt": 0.00000177051,
	    "disgust": 0.00000929179,
	    "fear": 0.000000014680,
	    "happiness": 0.00010041,
	    "neutral": 0.0000099808,
	    "sadness": 0.951170893,
	    "surprise": 0.000007650
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000664195,
	    "contempt": 0.00000152307,
	    "disgust": 0.00000925601,
	    "fear": 0.000000013473,
	    "happiness": 0.00011463,
	    "neutral": 0.0000091064,
	    "sadness": 0.961138393,
	    "surprise": 0.000006923
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000605888,
	    "contempt": 0.00000208206,
	    "disgust": 0.00000921773,
	    "fear": 0.000000011447,
	    "happiness": 0.00011640,
	    "neutral": 0.0000098310,
	    "sadness": 0.976508627,
	    "surprise": 0.000007440
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000668227,
	    "contempt": 0.00000196359,
	    "disgust": 0.00000916153,
	    "fear": 0.000000011145,
	    "happiness": 0.00010623,
	    "neutral": 0.0000090446,
	    "sadness": 0.956081194,
	    "surprise": 0.000006426
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000617119,
	    "contempt": 0.00000201015,
	    "disgust": 0.00000914869,
	    "fear": 0.000000012838,
	    "happiness": 0.00010784,
	    "neutral": 0.0000097334,
	    "sadness": 0.979686412,
	    "surprise": 0.000006046
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000606657,
	    "contempt": 0.00000185707,
	    "disgust": 0.00000939016,
	    "fear": 0.000000018180,
	    "happiness": 0.00010562,
	    "neutral": 0.0000099244,
	    "sadness": 0.951366395,
	    "surprise": 0.000007249
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000675970,
	    "contempt": 0.00000173996,
	    "disgust": 0.00000909249,
	    "fear": 0.000000013016,
	    "happiness": 0.00010294,
	    "neutral": 0.0000090937,
	    "sadness": 0.971195425,
	    "surprise": 0.000007830
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000652337,
	    "contempt": 0.00000180770,
	    "disgust": 0.00000922991,
	    "fear": 0.000000014405,
	    "happiness": 0.00011425,
	    "neutral": 0.0000097810,
	    "sadness": 0.995520707,
	    "surprise": 0.000006721
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000676046,
	    "contempt": 0.00000201922,
	    "disgust": 0.00000926692,
	    "fear": 0.000000019203,
	    "happiness": 0.00010532,
	    "neutral": 0.0000096885,
	    "sadness": 0.964211549,
	    "surprise": 0.000007680
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000630469,
	    "contempt": 0.00000159497,
	    "disgust": 0.00000950084,
	    "fear": 0.000000015901,
	    "happiness": 0.00012126,
	    "neutral": 0.0000099312,
	    "sadness": 0.965422665,
	    "surprise": 0.000006635
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000632170,
	    "contempt": 0.00000164302,
	    "disgust": 0.00000927682,
	    "fear": 0.000000013539,
	    "happiness": 0.00010026,
	    "neutral": 0.0000097143,
	    "sadness": 0.977655963,
	    "surprise": 0.000007782
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000624142,
	    "contempt": 0.00000173915,
	    "disgust": 0.00000912338,
	    "fear": 0.000000010495,
	    "happiness": 0.00010800,
	    "neutral": 0.0000094629,
	    "sadness": 0.966968387,
	    "surprise": 0.000006854
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000659130,
	    "contempt": 0.00000194465,
	    "disgust": 0.00000921591,
	    "fear": 0.000000017726,
	    "happiness": 0.00011954,
	    "neutral": 0.0000095978,
	    "sadness": 0.985900301,
	    "surprise": 0.000007101
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000633697,
	    "contempt": 0.00000209342,
	    "disgust": 0.00000937318,
	    "fear": 0.000000014341,
	    "happiness": 0.00011381,
	    "neutral": 0.0000094437,
	    "sadness": 0.953235906,
	    "surprise": 0.000006146
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000608546,
	    "contempt": 0.00000161226,
	    "disgust": 0.00000911911,
	    "fear": 0.000000013026,
	    "happiness": 0.00012012,
	    "neutral": 0.0000098708,
	    "sadness": 0.970221389,
	    "surprise": 0.000007408
	}
    },
    {
	"employee": {
	    "id": 3,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000656994,
	    "contempt": 0.00000161950,
	    "disgust": 0.00000929716,
	    "fear": 0.000000012511,
	    "happiness": 0.00011625,
	    "neutral": 0.0000099791,
	    "sadness": 0.957299776,
	    "surprise": 0.000006368
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000614016,
	    "contempt": 0.00000191920,
	    "disgust": 0.00000949608,
	    "fear": 0.000000011466,
	    "happiness": 0.00010834,
	    "neutral": 0.0000096532,
	    "sadness": 0.951615304,
	    "surprise": 0.000007279
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000612935,
	    "contempt": 0.00000201777,
	    "disgust": 0.00000952849,
	    "fear": 0.000000014395,
	    "happiness": 0.00011729,
	    "neutral": 0.0000096035,
	    "sadness": 0.988319112,
	    "surprise": 0.000007890
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000644076,
	    "contempt": 0.00000176921,
	    "disgust": 0.00000909124,
	    "fear": 0.000000010531,
	    "happiness": 0.00011023,
	    "neutral": 0.0000097760,
	    "sadness": 0.978017798,
	    "surprise": 0.000006599
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000600874,
	    "contempt": 0.00000155443,
	    "disgust": 0.00000945508,
	    "fear": 0.000000010415,
	    "happiness": 0.00010442,
	    "neutral": 0.0000091140,
	    "sadness": 0.961177001,
	    "surprise": 0.000007130
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000628775,
	    "contempt": 0.00000203436,
	    "disgust": 0.00000955484,
	    "fear": 0.000000015910,
	    "happiness": 0.00011340,
	    "neutral": 0.0000090783,
	    "sadness": 0.979756880,
	    "surprise": 0.000007100
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000602057,
	    "contempt": 0.00000206504,
	    "disgust": 0.00000901122,
	    "fear": 0.000000012777,
	    "happiness": 0.00012099,
	    "neutral": 0.0000096118,
	    "sadness": 0.988404622,
	    "surprise": 0.000007893
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000613796,
	    "contempt": 0.00000195192,
	    "disgust": 0.00000940671,
	    "fear": 0.000000011872,
	    "happiness": 0.00011574,
	    "neutral": 0.0000096578,
	    "sadness": 0.984682953,
	    "surprise": 0.000006680
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000600967,
	    "contempt": 0.00000160824,
	    "disgust": 0.00000930714,
	    "fear": 0.000000019800,
	    "happiness": 0.00011974,
	    "neutral": 0.0000094059,
	    "sadness": 0.957140798,
	    "surprise": 0.000007853
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000617307,
	    "contempt": 0.00000171588,
	    "disgust": 0.00000905567,
	    "fear": 0.000000013718,
	    "happiness": 0.00010747,
	    "neutral": 0.0000093994,
	    "sadness": 0.952802019,
	    "surprise": 0.000007724
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000608287,
	    "contempt": 0.00000172757,
	    "disgust": 0.00000910746,
	    "fear": 0.000000013850,
	    "happiness": 0.00011505,
	    "neutral": 0.0000094691,
	    "sadness": 0.990704761,
	    "surprise": 0.000006511
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000604401,
	    "contempt": 0.00000151971,
	    "disgust": 0.00000932974,
	    "fear": 0.000000011090,
	    "happiness": 0.00011162,
	    "neutral": 0.0000093483,
	    "sadness": 0.967831803,
	    "surprise": 0.000007219
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000627427,
	    "contempt": 0.00000160824,
	    "disgust": 0.00000901956,
	    "fear": 0.000000014387,
	    "happiness": 0.00011000,
	    "neutral": 0.0000099162,
	    "sadness": 0.970058794,
	    "surprise": 0.000007139
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000677340,
	    "contempt": 0.00000206718,
	    "disgust": 0.00000909298,
	    "fear": 0.000000012663,
	    "happiness": 0.00010700,
	    "neutral": 0.0000099122,
	    "sadness": 0.985635011,
	    "surprise": 0.000006685
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000631665,
	    "contempt": 0.00000182914,
	    "disgust": 0.00000911181,
	    "fear": 0.000000018464,
	    "happiness": 0.00011671,
	    "neutral": 0.0000096596,
	    "sadness": 0.962238369,
	    "surprise": 0.000006605
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000671219,
	    "contempt": 0.00000207695,
	    "disgust": 0.00000933251,
	    "fear": 0.000000012460,
	    "happiness": 0.00011725,
	    "neutral": 0.0000090034,
	    "sadness": 0.964090284,
	    "surprise": 0.000007936
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000633087,
	    "contempt": 0.00000181950,
	    "disgust": 0.00000914968,
	    "fear": 0.000000012938,
	    "happiness": 0.00010216,
	    "neutral": 0.0000094653,
	    "sadness": 0.972072740,
	    "surprise": 0.000007185
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000644767,
	    "contempt": 0.00000170523,
	    "disgust": 0.00000927934,
	    "fear": 0.000000014156,
	    "happiness": 0.00011580,
	    "neutral": 0.0000098725,
	    "sadness": 0.993634788,
	    "surprise": 0.000007273
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000612003,
	    "contempt": 0.00000179830,
	    "disgust": 0.00000907546,
	    "fear": 0.000000012306,
	    "happiness": 0.00011679,
	    "neutral": 0.0000099353,
	    "sadness": 0.976203645,
	    "surprise": 0.000006917
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000654145,
	    "contempt": 0.00000182351,
	    "disgust": 0.00000946494,
	    "fear": 0.000000010168,
	    "happiness": 0.00011816,
	    "neutral": 0.0000091891,
	    "sadness": 0.997651199,
	    "surprise": 0.000007278
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000644381,
	    "contempt": 0.00000177729,
	    "disgust": 0.00000931423,
	    "fear": 0.000000017058,
	    "happiness": 0.00010269,
	    "neutral": 0.0000098367,
	    "sadness": 0.960479429,
	    "surprise": 0.000006654
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000608142,
	    "contempt": 0.00000178430,
	    "disgust": 0.00000932941,
	    "fear": 0.000000013465,
	    "happiness": 0.988746519,
	    "neutral": 0.0000090892,
	    "sadness": 0.00010237,
	    "surprise": 0.000007759
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000614664,
	    "contempt": 0.00000150300,
	    "disgust": 0.00000915695,
	    "fear": 0.000000019159,
	    "happiness": 0.965949143,
	    "neutral": 0.0000099939,
	    "sadness": 0.00010489,
	    "surprise": 0.000007393
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000606847,
	    "contempt": 0.00000171056,
	    "disgust": 0.00000916440,
	    "fear": 0.000000016375,
	    "happiness": 0.968713360,
	    "neutral": 0.0000092075,
	    "sadness": 0.00010627,
	    "surprise": 0.000007426
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000671489,
	    "contempt": 0.00000195672,
	    "disgust": 0.00000951573,
	    "fear": 0.000000011453,
	    "happiness": 0.956942579,
	    "neutral": 0.0000099018,
	    "sadness": 0.00011649,
	    "surprise": 0.000007438
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000654703,
	    "contempt": 0.00000174075,
	    "disgust": 0.00000949977,
	    "fear": 0.000000015634,
	    "happiness": 0.994924332,
	    "neutral": 0.0000090035,
	    "sadness": 0.00011421,
	    "surprise": 0.000007803
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000656339,
	    "contempt": 0.00000156408,
	    "disgust": 0.00000953739,
	    "fear": 0.000000012934,
	    "happiness": 0.971387862,
	    "neutral": 0.0000098737,
	    "sadness": 0.00011521,
	    "surprise": 0.000007946
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000625539,
	    "contempt": 0.00000199868,
	    "disgust": 0.00000948214,
	    "fear": 0.000000019288,
	    "happiness": 0.981910495,
	    "neutral": 0.0000092822,
	    "sadness": 0.00011136,
	    "surprise": 0.000006745
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000675890,
	    "contempt": 0.00000159683,
	    "disgust": 0.00000948804,
	    "fear": 0.000000017845,
	    "happiness": 0.960300785,
	    "neutral": 0.0000093449,
	    "sadness": 0.00012045,
	    "surprise": 0.000006123
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000613268,
	    "contempt": 0.00000202046,
	    "disgust": 0.00000907737,
	    "fear": 0.000000019283,
	    "happiness": 0.955123388,
	    "neutral": 0.0000098987,
	    "sadness": 0.00011972,
	    "surprise": 0.000006836
	}
    },
    {
	"employee": {
	    "id": 4,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000675107,
	    "contempt": 0.00000203672,
	    "disgust": 0.00000913427,
	    "fear": 0.000000018645,
	    "happiness": 0.963057901,
	    "neutral": 0.0000095684,
	    "sadness": 0.00011626,
	    "surprise": 0.000007136
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000657733,
	    "contempt": 0.00000157895,
	    "disgust": 0.00000931528,
	    "fear": 0.000000019635,
	    "happiness": 0.87154,
	    "neutral": 0.0000097690,
	    "sadness": 0.00011077,
	    "surprise": 0.000007573
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000629106,
	    "contempt": 0.00000183790,
	    "disgust": 0.00000937288,
	    "fear": 0.000000017024,
	    "happiness": 0.85426,
	    "neutral": 0.0000090543,
	    "sadness": 0.00010523,
	    "surprise": 0.000007066
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000666389,
	    "contempt": 0.00000173164,
	    "disgust": 0.00000940810,
	    "fear": 0.000000019801,
	    "happiness": 0.86351,
	    "neutral": 0.0000092771,
	    "sadness": 0.00010965,
	    "surprise": 0.000007267
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000643508,
	    "contempt": 0.00000168449,
	    "disgust": 0.00000908918,
	    "fear": 0.000000012094,
	    "happiness": 0.91086,
	    "neutral": 0.0000099107,
	    "sadness": 0.00011324,
	    "surprise": 0.000006372
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000632090,
	    "contempt": 0.00000206934,
	    "disgust": 0.00000913422,
	    "fear": 0.000000017173,
	    "happiness": 0.99811,
	    "neutral": 0.0000095640,
	    "sadness": 0.00010072,
	    "surprise": 0.000007406
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000636946,
	    "contempt": 0.00000186422,
	    "disgust": 0.00000926301,
	    "fear": 0.000000013334,
	    "happiness": 0.81939,
	    "neutral": 0.0000098713,
	    "sadness": 0.00011981,
	    "surprise": 0.000007630
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000659953,
	    "contempt": 0.00000186459,
	    "disgust": 0.00000909361,
	    "fear": 0.000000015600,
	    "happiness": 0.93128,
	    "neutral": 0.0000096395,
	    "sadness": 0.00011014,
	    "surprise": 0.000006489
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000659295,
	    "contempt": 0.00000197806,
	    "disgust": 0.00000910092,
	    "fear": 0.000000019396,
	    "happiness": 0.87924,
	    "neutral": 0.0000099940,
	    "sadness": 0.00011603,
	    "surprise": 0.000007826
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000654875,
	    "contempt": 0.00000165148,
	    "disgust": 0.00000948963,
	    "fear": 0.000000012427,
	    "happiness": 0.95284,
	    "neutral": 0.0000099665,
	    "sadness": 0.00011688,
	    "surprise": 0.000007328
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000632625,
	    "contempt": 0.00000165797,
	    "disgust": 0.00000933199,
	    "fear": 0.000000011643,
	    "happiness": 0.81958,
	    "neutral": 0.0000093263,
	    "sadness": 0.00010995,
	    "surprise": 0.000006830
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000608937,
	    "contempt": 0.00000196441,
	    "disgust": 0.00000941095,
	    "fear": 0.000000014149,
	    "happiness": 0.98887,
	    "neutral": 0.0000099986,
	    "sadness": 0.00010243,
	    "surprise": 0.000007246
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000671044,
	    "contempt": 0.00000168261,
	    "disgust": 0.00000911754,
	    "fear": 0.000000013704,
	    "happiness": 0.83939,
	    "neutral": 0.0000099650,
	    "sadness": 0.00010749,
	    "surprise": 0.000006710
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000658137,
	    "contempt": 0.00000197507,
	    "disgust": 0.00000951334,
	    "fear": 0.000000018843,
	    "happiness": 0.94194,
	    "neutral": 0.0000098246,
	    "sadness": 0.00010468,
	    "surprise": 0.000007262
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000637933,
	    "contempt": 0.00000171325,
	    "disgust": 0.00000925027,
	    "fear": 0.000000011831,
	    "happiness": 0.85488,
	    "neutral": 0.0000092936,
	    "sadness": 0.00010572,
	    "surprise": 0.000006508
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000640922,
	    "contempt": 0.00000195094,
	    "disgust": 0.00000915726,
	    "fear": 0.000000015443,
	    "happiness": 0.80704,
	    "neutral": 0.0000097080,
	    "sadness": 0.00011526,
	    "surprise": 0.000006885
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000640699,
	    "contempt": 0.00000181040,
	    "disgust": 0.00000945110,
	    "fear": 0.000000014315,
	    "happiness": 0.97160,
	    "neutral": 0.0000090953,
	    "sadness": 0.00011760,
	    "surprise": 0.000006191
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000670086,
	    "contempt": 0.00000161849,
	    "disgust": 0.00000918864,
	    "fear": 0.000000013956,
	    "happiness": 0.89317,
	    "neutral": 0.0000098592,
	    "sadness": 0.00011879,
	    "surprise": 0.000006089
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000651271,
	    "contempt": 0.00000160610,
	    "disgust": 0.00000940013,
	    "fear": 0.000000017386,
	    "happiness": 0.97597,
	    "neutral": 0.0000099629,
	    "sadness": 0.00011224,
	    "surprise": 0.000007968
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000670073,
	    "contempt": 0.00000202139,
	    "disgust": 0.00000908476,
	    "fear": 0.000000016862,
	    "happiness": 0.89578,
	    "neutral": 0.0000094279,
	    "sadness": 0.00011326,
	    "surprise": 0.000007791
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000647557,
	    "contempt": 0.00000203911,
	    "disgust": 0.00000954913,
	    "fear": 0.000000018082,
	    "happiness": 0.86236,
	    "neutral": 0.0000095720,
	    "sadness": 0.00010509,
	    "surprise": 0.000007176
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000617867,
	    "contempt": 0.00000196637,
	    "disgust": 0.00000925053,
	    "fear": 0.000000013430,
	    "happiness": 0.83715,
	    "neutral": 0.0000099826,
	    "sadness": 0.00010555,
	    "surprise": 0.000006930
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000663289,
	    "contempt": 0.00000203056,
	    "disgust": 0.96708,
	    "fear": 0.000000015274,
	    "happiness": 0.00000943632,
	    "neutral": 0.0000093910,
	    "sadness": 0.00011898,
	    "surprise": 0.000006426
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000650176,
	    "contempt": 0.00000207717,
	    "disgust": 0.00000940707,
	    "fear": 0.000000014203,
	    "happiness": 0.93759,
	    "neutral": 0.0000090524,
	    "sadness": 0.00011257,
	    "surprise": 0.000007798
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000672593,
	    "contempt": 0.00000157831,
	    "disgust": 0.00000902706,
	    "fear": 0.000000011911,
	    "happiness": 0.87666,
	    "neutral": 0.0000098273,
	    "sadness": 0.00011314,
	    "surprise": 0.000007489
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000610340,
	    "contempt": 0.00000169492,
	    "disgust": 0.00000920992,
	    "fear": 0.000000019357,
	    "happiness": 0.80163,
	    "neutral": 0.0000096567,
	    "sadness": 0.00011390,
	    "surprise": 0.000007240
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000615321,
	    "contempt": 0.00000152212,
	    "disgust": 0.00000928434,
	    "fear": 0.000000016753,
	    "happiness": 0.89738,
	    "neutral": 0.0000094251,
	    "sadness": 0.00010559,
	    "surprise": 0.000006331
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000630050,
	    "contempt": 0.00000168371,
	    "disgust": 0.00000915063,
	    "fear": 0.000000011350,
	    "happiness": 0.98457,
	    "neutral": 0.0000098019,
	    "sadness": 0.00011076,
	    "surprise": 0.000006785
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000654805,
	    "contempt": 0.00000168471,
	    "disgust": 0.00000914907,
	    "fear": 0.000000011424,
	    "happiness": 0.84625,
	    "neutral": 0.0000090754,
	    "sadness": 0.00010012,
	    "surprise": 0.000007387
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000648470,
	    "contempt": 0.00000185658,
	    "disgust": 0.00000946160,
	    "fear": 0.000000011322,
	    "happiness": 0.89900,
	    "neutral": 0.0000096637,
	    "sadness": 0.00010224,
	    "surprise": 0.000007015
	}
    },
    {
	"employee": {
	    "id": 5,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000656893,
	    "contempt": 0.00000182084,
	    "disgust": 0.00000929933,
	    "fear": 0.000000017772,
	    "happiness": 0.95455,
	    "neutral": 0.0000090076,
	    "sadness": 0.00011625,
	    "surprise": 0.000006927
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000636173,
	    "contempt": 0.00000200846,
	    "disgust": 0.00000903068,
	    "fear": 0.000000014557,
	    "happiness": 0.082032,
	    "neutral": 0.83030,
	    "sadness": 0.00010406,
	    "surprise": 0.000007879
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000676174,
	    "contempt": 0.00000204261,
	    "disgust": 0.00000933990,
	    "fear": 0.000000014918,
	    "happiness": 0.094940,
	    "neutral": 0.80292,
	    "sadness": 0.00011320,
	    "surprise": 0.000006202
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000677589,
	    "contempt": 0.00000184622,
	    "disgust": 0.00000954656,
	    "fear": 0.000000011181,
	    "happiness": 0.096750,
	    "neutral": 0.98418,
	    "sadness": 0.00010886,
	    "surprise": 0.000006741
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000620433,
	    "contempt": 0.00000174372,
	    "disgust": 0.00000903163,
	    "fear": 0.000000011199,
	    "happiness": 0.080357,
	    "neutral": 0.73409,
	    "sadness": 0.00011805,
	    "surprise": 0.000006427
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000667980,
	    "contempt": 0.00000156501,
	    "disgust": 0.00000931107,
	    "fear": 0.000000013366,
	    "happiness": 0.090272,
	    "neutral": 0.82652,
	    "sadness": 0.00012113,
	    "surprise": 0.000007856
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000664877,
	    "contempt": 0.00000202721,
	    "disgust": 0.00000929299,
	    "fear": 0.000000019046,
	    "happiness": 0.085453,
	    "neutral": 0.79674,
	    "sadness": 0.00011722,
	    "surprise": 0.000006930
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000608123,
	    "contempt": 0.00000191876,
	    "disgust": 0.00000918578,
	    "fear": 0.000000018807,
	    "happiness": 0.090891,
	    "neutral": 0.81778,
	    "sadness": 0.00010958,
	    "surprise": 0.000006732
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000624272,
	    "contempt": 0.00000204007,
	    "disgust": 0.00000931326,
	    "fear": 0.000000012206,
	    "happiness": 0.080784,
	    "neutral": 0.84877,
	    "sadness": 0.00011264,
	    "surprise": 0.000006326
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000658619,
	    "contempt": 0.00000201976,
	    "disgust": 0.00000949845,
	    "fear": 0.000000018311,
	    "happiness": 0.092382,
	    "neutral": 0.76095,
	    "sadness": 0.00010536,
	    "surprise": 0.000006428
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000612043,
	    "contempt": 0.00000177963,
	    "disgust": 0.00000920402,
	    "fear": 0.000000017065,
	    "happiness": 0.080350,
	    "neutral": 0.71681,
	    "sadness": 0.00011497,
	    "surprise": 0.000007726
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000626958,
	    "contempt": 0.00000181193,
	    "disgust": 0.00000916708,
	    "fear": 0.000000017442,
	    "happiness": 0.94429,
	    "neutral": 0.0082709,
	    "sadness": 0.00011105,
	    "surprise": 0.000007329
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000638049,
	    "contempt": 0.00000209803,
	    "disgust": 0.00000925882,
	    "fear": 0.000000010751,
	    "happiness": 0.85383,
	    "neutral": 0.0090859,
	    "sadness": 0.00010710,
	    "surprise": 0.000006704
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000635210,
	    "contempt": 0.00000167324,
	    "disgust": 0.00000911414,
	    "fear": 0.000000017378,
	    "happiness": 0.94539,
	    "neutral": 0.0095869,
	    "sadness": 0.00012159,
	    "surprise": 0.000006964
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000612658,
	    "contempt": 0.00000190155,
	    "disgust": 0.00000937577,
	    "fear": 0.000000013243,
	    "happiness": 0.81586,
	    "neutral": 0.0098095,
	    "sadness": 0.00011522,
	    "surprise": 0.000006164
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000642328,
	    "contempt": 0.00000204047,
	    "disgust": 0.00000955437,
	    "fear": 0.000000018906,
	    "happiness": 0.87282,
	    "neutral": 0.0096913,
	    "sadness": 0.00012048,
	    "surprise": 0.000006547
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000639549,
	    "contempt": 0.00000186229,
	    "disgust": 0.00000930712,
	    "fear": 0.000000015176,
	    "happiness": 0.97759,
	    "neutral": 0.0074900,
	    "sadness": 0.00010529,
	    "surprise": 0.000007046
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000656510,
	    "contempt": 0.00000159205,
	    "disgust": 0.00000941577,
	    "fear": 0.000000018022,
	    "happiness": 0.80853,
	    "neutral": 0.0076797,
	    "sadness": 0.00011055,
	    "surprise": 0.000006431
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000601047,
	    "contempt": 0.00000150627,
	    "disgust": 0.00000937168,
	    "fear": 0.000000018521,
	    "happiness": 0.0095995,
	    "neutral": 0.85253,
	    "sadness": 0.00011663,
	    "surprise": 0.000007466
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000620683,
	    "contempt": 0.00000201820,
	    "disgust": 0.00000905693,
	    "fear": 0.000000015767,
	    "happiness": 0.0088027,
	    "neutral": 0.80960,
	    "sadness": 0.00010306,
	    "surprise": 0.000006834
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000612253,
	    "contempt": 0.00000192941,
	    "disgust": 0.00000938130,
	    "fear": 0.000000018397,
	    "happiness": 0.0096893,
	    "neutral": 0.84465,
	    "sadness": 0.00011564,
	    "surprise": 0.000006952
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000638734,
	    "contempt": 0.00000201894,
	    "disgust": 0.00000948474,
	    "fear": 0.000000015852,
	    "happiness": 0.0085271,
	    "neutral": 0.77303,
	    "sadness": 0.00011437,
	    "surprise": 0.000007287
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000655945,
	    "contempt": 0.00000166043,
	    "disgust": 0.00000908948,
	    "fear": 0.000000018519,
	    "happiness": 0.0096360,
	    "neutral": 0.96673,
	    "sadness": 0.00010633,
	    "surprise": 0.000006424
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000626754,
	    "contempt": 0.00000157207,
	    "disgust": 0.00000928411,
	    "fear": 0.000000011469,
	    "happiness": 0.0096509,
	    "neutral": 0.77867,
	    "sadness": 0.00010197,
	    "surprise": 0.000007626
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000606700,
	    "contempt": 0.00000205575,
	    "disgust": 0.00000900063,
	    "fear": 0.000000012737,
	    "happiness": 0.0096785,
	    "neutral": 0.97391,
	    "sadness": 0.00010069,
	    "surprise": 0.000007633
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000666899,
	    "contempt": 0.00000170138,
	    "disgust": 0.00000936085,
	    "fear": 0.000000013772,
	    "happiness": 0.0097579,
	    "neutral": 0.88860,
	    "sadness": 0.00010804,
	    "surprise": 0.000006914
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000675982,
	    "contempt": 0.00000157269,
	    "disgust": 0.00000931343,
	    "fear": 0.000000018094,
	    "happiness": 0.0095957,
	    "neutral": 0.79733,
	    "sadness": 0.00011289,
	    "surprise": 0.000006210
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000671373,
	    "contempt": 0.00000185689,
	    "disgust": 0.00000906212,
	    "fear": 0.000000010143,
	    "happiness": 0.0086658,
	    "neutral": 0.77343,
	    "sadness": 0.00011536,
	    "surprise": 0.000006465
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000624454,
	    "contempt": 0.00000171931,
	    "disgust": 0.00000932100,
	    "fear": 0.000000015973,
	    "happiness": 0.0087361,
	    "neutral": 0.76967,
	    "sadness": 0.00010483,
	    "surprise": 0.000006852
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000619234,
	    "contempt": 0.00000197701,
	    "disgust": 0.00000912290,
	    "fear": 0.000000012703,
	    "happiness": 0.0087586,
	    "neutral": 0.92382,
	    "sadness": 0.00010759,
	    "surprise": 0.000006222
	}
    },
    {
	"employee": {
	    "id": 6,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000644531,
	    "contempt": 0.00000181257,
	    "disgust": 0.00000939145,
	    "fear": 0.000000012980,
	    "happiness": 0.0093255,
	    "neutral": 0.90862,
	    "sadness": 0.00010735,
	    "surprise": 0.000006207
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000654039,
	    "contempt": 0.00000173819,
	    "disgust": 0.00000921258,
	    "fear": 0.000000016512,
	    "happiness": 0.0092149,
	    "neutral": 0.00079313,
	    "sadness": 0.85367,
	    "surprise": 0.000006741
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000625301,
	    "contempt": 0.00000195656,
	    "disgust": 0.00000945418,
	    "fear": 0.000000015917,
	    "happiness": 0.0087128,
	    "neutral": 0.00093211,
	    "sadness": 0.80485,
	    "surprise": 0.000007674
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000628562,
	    "contempt": 0.00000209840,
	    "disgust": 0.00000910289,
	    "fear": 0.000000012869,
	    "happiness": 0.0096600,
	    "neutral": 0.00071271,
	    "sadness": 0.84540,
	    "surprise": 0.000006418
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000640736,
	    "contempt": 0.00000150527,
	    "disgust": 0.00000942524,
	    "fear": 0.000000015903,
	    "happiness": 0.0089372,
	    "neutral": 0.00071074,
	    "sadness": 0.84824,
	    "surprise": 0.000006942
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000610431,
	    "contempt": 0.00000166907,
	    "disgust": 0.00000908322,
	    "fear": 0.000000019146,
	    "happiness": 0.0085856,
	    "neutral": 0.00099571,
	    "sadness": 0.77890,
	    "surprise": 0.000007297
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000653888,
	    "contempt": 0.00000207170,
	    "disgust": 0.00000934348,
	    "fear": 0.000000010937,
	    "happiness": 0.0082353,
	    "neutral": 0.00075016,
	    "sadness": 0.62323,
	    "surprise": 0.000007920
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000668097,
	    "contempt": 0.00000192412,
	    "disgust": 0.00000938639,
	    "fear": 0.000000010799,
	    "happiness": 0.0081808,
	    "neutral": 0.00073441,
	    "sadness": 0.69144,
	    "surprise": 0.000007158
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000632108,
	    "contempt": 0.00000160836,
	    "disgust": 0.00000937572,
	    "fear": 0.000000011040,
	    "happiness": 0.0087656,
	    "neutral": 0.00084616,
	    "sadness": 0.87346,
	    "surprise": 0.000006626
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000665901,
	    "contempt": 0.00000162950,
	    "disgust": 0.00000929853,
	    "fear": 0.000000014984,
	    "happiness": 0.0087216,
	    "neutral": 0.00071887,
	    "sadness": 0.74438,
	    "surprise": 0.000006242
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000652795,
	    "contempt": 0.00000192962,
	    "disgust": 0.00000940620,
	    "fear": 0.000000014207,
	    "happiness": 0.0081056,
	    "neutral": 0.00079203,
	    "sadness": 0.62762,
	    "surprise": 0.000006437
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000667854,
	    "contempt": 0.00000190430,
	    "disgust": 0.00000910724,
	    "fear": 0.000000010312,
	    "happiness": 0.0089675,
	    "neutral": 0.00082155,
	    "sadness": 0.67555,
	    "surprise": 0.000007709
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000623825,
	    "contempt": 0.00000169185,
	    "disgust": 0.00000954658,
	    "fear": 0.000000014662,
	    "happiness": 0.0097816,
	    "neutral": 0.00078931,
	    "sadness": 0.87871,
	    "surprise": 0.000007116
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000676618,
	    "contempt": 0.00000175703,
	    "disgust": 0.00000917396,
	    "fear": 0.000000018716,
	    "happiness": 0.0091990,
	    "neutral": 0.00085840,
	    "sadness": 0.75211,
	    "surprise": 0.000006480
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000620005,
	    "contempt": 0.00000183839,
	    "disgust": 0.00000916819,
	    "fear": 0.000000015766,
	    "happiness": 0.0096237,
	    "neutral": 0.00072412,
	    "sadness": 0.62643,
	    "surprise": 0.000007827
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000672662,
	    "contempt": 0.00000163528,
	    "disgust": 0.00000955112,
	    "fear": 0.000000016753,
	    "happiness": 0.0097717,
	    "neutral": 0.00075893,
	    "sadness": 0.86092,
	    "surprise": 0.000007461
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000618251,
	    "contempt": 0.00000196195,
	    "disgust": 0.00000901512,
	    "fear": 0.000000011695,
	    "happiness": 0.0097024,
	    "neutral": 0.00073370,
	    "sadness": 0.64435,
	    "surprise": 0.000006304
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000668945,
	    "contempt": 0.00000152298,
	    "disgust": 0.00000913754,
	    "fear": 0.000000018042,
	    "happiness": 0.0082922,
	    "neutral": 0.00092228,
	    "sadness": 0.84589,
	    "surprise": 0.000007860
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000658097,
	    "contempt": 0.00000203979,
	    "disgust": 0.00000941475,
	    "fear": 0.000000015254,
	    "happiness": 0.0092165,
	    "neutral": 0.00077971,
	    "sadness": 0.69119,
	    "surprise": 0.000007089
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000673511,
	    "contempt": 0.00000202620,
	    "disgust": 0.00000916739,
	    "fear": 0.000000018722,
	    "happiness": 0.0082359,
	    "neutral": 0.00092507,
	    "sadness": 0.63105,
	    "surprise": 0.000006901
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000605832,
	    "contempt": 0.00000194881,
	    "disgust": 0.00000905363,
	    "fear": 0.000000012178,
	    "happiness": 0.0095053,
	    "neutral": 0.00092228,
	    "sadness": 0.73813,
	    "surprise": 0.000007557
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000667766,
	    "contempt": 0.00000150899,
	    "disgust": 0.00000917895,
	    "fear": 0.000000019329,
	    "happiness": 0.0083833,
	    "neutral": 0.00075695,
	    "sadness": 0.61225,
	    "surprise": 0.000007957
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000612873,
	    "contempt": 0.00000179917,
	    "disgust": 0.00000916501,
	    "fear": 0.000000010231,
	    "happiness": 0.0086089,
	    "neutral": 0.00074536,
	    "sadness": 0.89520,
	    "surprise": 0.000007619
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000677541,
	    "contempt": 0.00000190478,
	    "disgust": 0.00000901066,
	    "fear": 0.000000019068,
	    "happiness": 0.0084897,
	    "neutral": 0.00093143,
	    "sadness": 0.60159,
	    "surprise": 0.000006925
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000648497,
	    "contempt": 0.00000168782,
	    "disgust": 0.00000950064,
	    "fear": 0.000000012067,
	    "happiness": 0.0092902,
	    "neutral": 0.00081524,
	    "sadness": 0.89524,
	    "surprise": 0.000007032
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000677238,
	    "contempt": 0.00000207793,
	    "disgust": 0.00000926550,
	    "fear": 0.000000014620,
	    "happiness": 0.0096846,
	    "neutral": 0.00086547,
	    "sadness": 0.70024,
	    "surprise": 0.000007401
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000601833,
	    "contempt": 0.00000204749,
	    "disgust": 0.00000941400,
	    "fear": 0.000000017630,
	    "happiness": 0.0081820,
	    "neutral": 0.00073938,
	    "sadness": 0.66148,
	    "surprise": 0.000007146
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000632962,
	    "contempt": 0.00000179270,
	    "disgust": 0.00000905616,
	    "fear": 0.000000014948,
	    "happiness": 0.0094373,
	    "neutral": 0.00096250,
	    "sadness": 0.84778,
	    "surprise": 0.000006663
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000666369,
	    "contempt": 0.00000159369,
	    "disgust": 0.00000935771,
	    "fear": 0.000000011381,
	    "happiness": 0.0099761,
	    "neutral": 0.00075197,
	    "sadness": 0.76379,
	    "surprise": 0.000007225
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000668926,
	    "contempt": 0.00000162542,
	    "disgust": 0.00000942944,
	    "fear": 0.000000015813,
	    "happiness": 0.0088354,
	    "neutral": 0.00088719,
	    "sadness": 0.75988,
	    "surprise": 0.000007321
	}
    },
    {
	"employee": {
	    "id": 7,
	    "department": 10,
	    "city": "Paris"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000636534,
	    "contempt": 0.00000184420,
	    "disgust": 0.00000923796,
	    "fear": 0.000000013718,
	    "happiness": 0.0081845,
	    "neutral": 0.00080147,
	    "sadness": 0.84054,
	    "surprise": 0.000006347
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000674953,
	    "contempt": 0.00000184487,
	    "disgust": 0.00000900770,
	    "fear": 0.000000012912,
	    "happiness": 0.0085484,
	    "neutral": 0.87007,
	    "sadness": 0.00062330,
	    "surprise": 0.000006349
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000604075,
	    "contempt": 0.00000157714,
	    "disgust": 0.00000929939,
	    "fear": 0.000000010703,
	    "happiness": 0.0088423,
	    "neutral": 0.84518,
	    "sadness": 0.00062197,
	    "surprise": 0.000007413
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000648270,
	    "contempt": 0.00000160881,
	    "disgust": 0.00000902589,
	    "fear": 0.000000018475,
	    "happiness": 0.0093128,
	    "neutral": 0.85772,
	    "sadness": 0.00077666,
	    "surprise": 0.000007094
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000672857,
	    "contempt": 0.00000168037,
	    "disgust": 0.00000905227,
	    "fear": 0.000000010625,
	    "happiness": 0.0084427,
	    "neutral": 0.74396,
	    "sadness": 0.00088295,
	    "surprise": 0.000007553
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000667732,
	    "contempt": 0.00000158408,
	    "disgust": 0.00000901960,
	    "fear": 0.000000014513,
	    "happiness": 0.0082665,
	    "neutral": 0.96933,
	    "sadness": 0.00086975,
	    "surprise": 0.000006047
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000663214,
	    "contempt": 0.00000193585,
	    "disgust": 0.00000953631,
	    "fear": 0.000000010578,
	    "happiness": 0.0080755,
	    "neutral": 0.95606,
	    "sadness": 0.00084855,
	    "surprise": 0.000006030
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000620329,
	    "contempt": 0.00000188649,
	    "disgust": 0.00000920768,
	    "fear": 0.000000016631,
	    "happiness": 0.0088891,
	    "neutral": 0.82486,
	    "sadness": 0.00087508,
	    "surprise": 0.000006530
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000632372,
	    "contempt": 0.00000150646,
	    "disgust": 0.00000931393,
	    "fear": 0.000000014597,
	    "happiness": 0.0097594,
	    "neutral": 0.85872,
	    "sadness": 0.00082921,
	    "surprise": 0.000007078
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000675013,
	    "contempt": 0.00000186358,
	    "disgust": 0.00000943290,
	    "fear": 0.000000013413,
	    "happiness": 0.0080900,
	    "neutral": 0.75436,
	    "sadness": 0.00071908,
	    "surprise": 0.000006614
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000662975,
	    "contempt": 0.00000208434,
	    "disgust": 0.00000914888,
	    "fear": 0.000000018644,
	    "happiness": 0.0086194,
	    "neutral": 0.72917,
	    "sadness": 0.00088190,
	    "surprise": 0.000007817
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000652841,
	    "contempt": 0.00000192717,
	    "disgust": 0.00000927615,
	    "fear": 0.000000018478,
	    "happiness": 0.0086226,
	    "neutral": 0.88637,
	    "sadness": 0.00086038,
	    "surprise": 0.000007277
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000604075,
	    "contempt": 0.00000178584,
	    "disgust": 0.00000953280,
	    "fear": 0.000000016313,
	    "happiness": 0.0082940,
	    "neutral": 0.91643,
	    "sadness": 0.00079678,
	    "surprise": 0.000006127
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000657914,
	    "contempt": 0.00000150814,
	    "disgust": 0.00000907706,
	    "fear": 0.000000012440,
	    "happiness": 0.0085513,
	    "neutral": 0.83880,
	    "sadness": 0.00081188,
	    "surprise": 0.000007673
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000676189,
	    "contempt": 0.00000167954,
	    "disgust": 0.00000910018,
	    "fear": 0.000000012168,
	    "happiness": 0.0083545,
	    "neutral": 0.79271,
	    "sadness": 0.00079127,
	    "surprise": 0.000006508
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000657711,
	    "contempt": 0.00000188443,
	    "disgust": 0.00000907402,
	    "fear": 0.000000014790,
	    "happiness": 0.0092449,
	    "neutral": 0.93964,
	    "sadness": 0.00080499,
	    "surprise": 0.000006107
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000651040,
	    "contempt": 0.00000156236,
	    "disgust": 0.00000921581,
	    "fear": 0.000000017986,
	    "happiness": 0.0093336,
	    "neutral": 0.0079622,
	    "sadness": 0.77176,
	    "surprise": 0.000006361
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000619475,
	    "contempt": 0.00000205741,
	    "disgust": 0.00000923011,
	    "fear": 0.000000017613,
	    "happiness": 0.0081488,
	    "neutral": 0.0072171,
	    "sadness": 0.86614,
	    "surprise": 0.000007728
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000607097,
	    "contempt": 0.00000207085,
	    "disgust": 0.00000955275,
	    "fear": 0.000000016260,
	    "happiness": 0.0090137,
	    "neutral": 0.0080561,
	    "sadness": 0.89500,
	    "surprise": 0.000007166
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000617376,
	    "contempt": 0.00000188032,
	    "disgust": 0.00000906234,
	    "fear": 0.000000011209,
	    "happiness": 0.0086259,
	    "neutral": 0.0088886,
	    "sadness": 0.67140,
	    "surprise": 0.000007332
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000609667,
	    "contempt": 0.00000208356,
	    "disgust": 0.00000953072,
	    "fear": 0.000000015975,
	    "happiness": 0.0095319,
	    "neutral": 0.0070534,
	    "sadness": 0.76850,
	    "surprise": 0.000007924
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000618130,
	    "contempt": 0.00000163212,
	    "disgust": 0.00000903530,
	    "fear": 0.000000018755,
	    "happiness": 0.0099267,
	    "neutral": 0.75595,
	    "sadness": 0.0061082,
	    "surprise": 0.000007178
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000639295,
	    "contempt": 0.00000189647,
	    "disgust": 0.00000907383,
	    "fear": 0.000000018426,
	    "happiness": 0.0099134,
	    "neutral": 0.81547,
	    "sadness": 0.0080017,
	    "surprise": 0.000006752
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000671710,
	    "contempt": 0.00000192186,
	    "disgust": 0.00000915401,
	    "fear": 0.000000019151,
	    "happiness": 0.0087548,
	    "neutral": 0.90791,
	    "sadness": 0.0076604,
	    "surprise": 0.000006261
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000603293,
	    "contempt": 0.00000162522,
	    "disgust": 0.00000922203,
	    "fear": 0.000000017248,
	    "happiness": 0.0094418,
	    "neutral": 0.71562,
	    "sadness": 0.0069647,
	    "surprise": 0.000007434
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000660979,
	    "contempt": 0.00000157947,
	    "disgust": 0.00000923078,
	    "fear": 0.000000013306,
	    "happiness": 0.0084933,
	    "neutral": 0.97692,
	    "sadness": 0.0078875,
	    "surprise": 0.000007173
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000671640,
	    "contempt": 0.00000187284,
	    "disgust": 0.00000931841,
	    "fear": 0.000000018972,
	    "happiness": 0.0086672,
	    "neutral": 0.75621,
	    "sadness": 0.0083658,
	    "surprise": 0.000007569
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000600677,
	    "contempt": 0.00000161097,
	    "disgust": 0.00000938156,
	    "fear": 0.000000013630,
	    "happiness": 0.0088661,
	    "neutral": 0.94479,
	    "sadness": 0.0075280,
	    "surprise": 0.000007399
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000646522,
	    "contempt": 0.00000200817,
	    "disgust": 0.00000937193,
	    "fear": 0.000000015276,
	    "happiness": 0.0087381,
	    "neutral": 0.79826,
	    "sadness": 0.0063104,
	    "surprise": 0.000007223
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000642465,
	    "contempt": 0.00000177329,
	    "disgust": 0.00000913784,
	    "fear": 0.000000014215,
	    "happiness": 0.0089654,
	    "neutral": 0.85234,
	    "sadness": 0.0083667,
	    "surprise": 0.000006488
	}
    },
    {
	"employee": {
	    "id": 8,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000600599,
	    "contempt": 0.00000208705,
	    "disgust": 0.00000951766,
	    "fear": 0.000000017076,
	    "happiness": 0.0095896,
	    "neutral": 0.90933,
	    "sadness": 0.0082216,
	    "surprise": 0.000007365
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000642447,
	    "contempt": 0.00000186755,
	    "disgust": 0.00000919069,
	    "fear": 0.000000013184,
	    "happiness": 0.00095536,
	    "neutral": 0.00084037,
	    "sadness": 0.70661,
	    "surprise": 0.000006321
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000646434,
	    "contempt": 0.00000191688,
	    "disgust": 0.00000930992,
	    "fear": 0.000000018906,
	    "happiness": 0.00095065,
	    "neutral": 0.00084592,
	    "sadness": 0.79941,
	    "surprise": 0.000007468
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000663879,
	    "contempt": 0.00000169302,
	    "disgust": 0.00000912222,
	    "fear": 0.000000018500,
	    "happiness": 0.00092647,
	    "neutral": 0.00090637,
	    "sadness": 0.74970,
	    "surprise": 0.000007838
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000659657,
	    "contempt": 0.00000158953,
	    "disgust": 0.00000945452,
	    "fear": 0.000000017305,
	    "happiness": 0.00083637,
	    "neutral": 0.00076761,
	    "sadness": 0.75037,
	    "surprise": 0.000006908
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000624808,
	    "contempt": 0.00000187597,
	    "disgust": 0.00000916133,
	    "fear": 0.000000019755,
	    "happiness": 0.00094657,
	    "neutral": 0.00092835,
	    "sadness": 0.63389,
	    "surprise": 0.000006955
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000654898,
	    "contempt": 0.00000191246,
	    "disgust": 0.00000950703,
	    "fear": 0.000000017479,
	    "happiness": 0.00091929,
	    "neutral": 0.00085021,
	    "sadness": 0.78205,
	    "surprise": 0.000006312
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000677176,
	    "contempt": 0.00000194732,
	    "disgust": 0.00000915717,
	    "fear": 0.000000016747,
	    "happiness": 0.00096025,
	    "neutral": 0.00070596,
	    "sadness": 0.87652,
	    "surprise": 0.000007921
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000631878,
	    "contempt": 0.00000161129,
	    "disgust": 0.00000913583,
	    "fear": 0.000000017947,
	    "happiness": 0.00088905,
	    "neutral": 0.00079179,
	    "sadness": 0.68601,
	    "surprise": 0.000006662
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000637620,
	    "contempt": 0.00000156786,
	    "disgust": 0.00000949039,
	    "fear": 0.000000017054,
	    "happiness": 0.00099794,
	    "neutral": 0.00083061,
	    "sadness": 0.81503,
	    "surprise": 0.000006979
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000640433,
	    "contempt": 0.00000171861,
	    "disgust": 0.00000934213,
	    "fear": 0.000000016319,
	    "happiness": 0.00092634,
	    "neutral": 0.00086269,
	    "sadness": 0.64406,
	    "surprise": 0.000007064
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000604980,
	    "contempt": 0.00000188720,
	    "disgust": 0.00000939770,
	    "fear": 0.000000015420,
	    "happiness": 0.00081859,
	    "neutral": 0.00084115,
	    "sadness": 0.65112,
	    "surprise": 0.000007396
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000667612,
	    "contempt": 0.00000207578,
	    "disgust": 0.00000900691,
	    "fear": 0.000000010180,
	    "happiness": 0.00082852,
	    "neutral": 0.00074678,
	    "sadness": 0.75470,
	    "surprise": 0.000007892
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000661005,
	    "contempt": 0.00000176051,
	    "disgust": 0.00000902442,
	    "fear": 0.000000015385,
	    "happiness": 0.00092569,
	    "neutral": 0.00099766,
	    "sadness": 0.88156,
	    "surprise": 0.000007097
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000662234,
	    "contempt": 0.00000167169,
	    "disgust": 0.00000946788,
	    "fear": 0.000000013023,
	    "happiness": 0.00097093,
	    "neutral": 0.00076881,
	    "sadness": 0.76584,
	    "surprise": 0.000006211
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000617896,
	    "contempt": 0.00000187824,
	    "disgust": 0.00000937413,
	    "fear": 0.000000019840,
	    "happiness": 0.00099079,
	    "neutral": 0.00099662,
	    "sadness": 0.86162,
	    "surprise": 0.000007895
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000671189,
	    "contempt": 0.00000209217,
	    "disgust": 0.00000921295,
	    "fear": 0.000000019351,
	    "happiness": 0.00088471,
	    "neutral": 0.00080413,
	    "sadness": 0.88527,
	    "surprise": 0.000007279
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000644906,
	    "contempt": 0.00000181203,
	    "disgust": 0.00000911297,
	    "fear": 0.000000014166,
	    "happiness": 0.00093554,
	    "neutral": 0.00074960,
	    "sadness": 0.78061,
	    "surprise": 0.000006896
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000663252,
	    "contempt": 0.00000180584,
	    "disgust": 0.00000910233,
	    "fear": 0.000000015088,
	    "happiness": 0.00096293,
	    "neutral": 0.00091280,
	    "sadness": 0.86416,
	    "surprise": 0.000007141
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000611775,
	    "contempt": 0.00000157147,
	    "disgust": 0.00000947388,
	    "fear": 0.000000016143,
	    "happiness": 0.00094094,
	    "neutral": 0.00078019,
	    "sadness": 0.82206,
	    "surprise": 0.000006496
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000650973,
	    "contempt": 0.00000200707,
	    "disgust": 0.00000902122,
	    "fear": 0.000000011778,
	    "happiness": 0.00085831,
	    "neutral": 0.00079330,
	    "sadness": 0.78843,
	    "surprise": 0.000006787
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000607543,
	    "contempt": 0.00000170441,
	    "disgust": 0.00000952824,
	    "fear": 0.000000011693,
	    "happiness": 0.00091275,
	    "neutral": 0.00096915,
	    "sadness": 0.72993,
	    "surprise": 0.000006019
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000620380,
	    "contempt": 0.00000181456,
	    "disgust": 0.00000937552,
	    "fear": 0.000000016742,
	    "happiness": 0.00097256,
	    "neutral": 0.00091144,
	    "sadness": 0.64804,
	    "surprise": 0.000006848
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000601870,
	    "contempt": 0.00000176108,
	    "disgust": 0.00000910771,
	    "fear": 0.000000018412,
	    "happiness": 0.00085053,
	    "neutral": 0.00081008,
	    "sadness": 0.62680,
	    "surprise": 0.000007951
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000650939,
	    "contempt": 0.00000167393,
	    "disgust": 0.00000947498,
	    "fear": 0.000000013750,
	    "happiness": 0.00084668,
	    "neutral": 0.00099626,
	    "sadness": 0.67365,
	    "surprise": 0.000007302
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000631333,
	    "contempt": 0.00000164930,
	    "disgust": 0.00000926280,
	    "fear": 0.000000017647,
	    "happiness": 0.00086299,
	    "neutral": 0.00089795,
	    "sadness": 0.86726,
	    "surprise": 0.000006220
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000669631,
	    "contempt": 0.00000161092,
	    "disgust": 0.00000907041,
	    "fear": 0.000000016954,
	    "happiness": 0.00091264,
	    "neutral": 0.00081707,
	    "sadness": 0.60320,
	    "surprise": 0.000006901
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000634891,
	    "contempt": 0.00000185867,
	    "disgust": 0.00000941789,
	    "fear": 0.000000014228,
	    "happiness": 0.00086379,
	    "neutral": 0.00081803,
	    "sadness": 0.70691,
	    "surprise": 0.000006844
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000658697,
	    "contempt": 0.00000159505,
	    "disgust": 0.00000924721,
	    "fear": 0.000000013374,
	    "happiness": 0.00080161,
	    "neutral": 0.00079712,
	    "sadness": 0.90690,
	    "surprise": 0.000006901
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000667596,
	    "contempt": 0.00000173258,
	    "disgust": 0.00000904651,
	    "fear": 0.000000017019,
	    "happiness": 0.00083146,
	    "neutral": 0.00091695,
	    "sadness": 0.66136,
	    "surprise": 0.000006080
	}
    },
    {
	"employee": {
	    "id": 9,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000669952,
	    "contempt": 0.00000155951,
	    "disgust": 0.00000908502,
	    "fear": 0.000000018083,
	    "happiness": 0.00096890,
	    "neutral": 0.00077532,
	    "sadness": 0.88194,
	    "surprise": 0.000007296
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000603983,
	    "contempt": 0.00000204339,
	    "disgust": 0.00000941132,
	    "fear": 0.000000014352,
	    "happiness": 0.00083902,
	    "neutral": 0.00074723,
	    "sadness": 0.82454,
	    "surprise": 0.000006459
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000639116,
	    "contempt": 0.00000199031,
	    "disgust": 0.00000948067,
	    "fear": 0.000000017331,
	    "happiness": 0.00083484,
	    "neutral": 0.00095399,
	    "sadness": 0.87339,
	    "surprise": 0.000007012
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000603680,
	    "contempt": 0.00000187555,
	    "disgust": 0.00000936236,
	    "fear": 0.000000016430,
	    "happiness": 0.00090529,
	    "neutral": 0.00096055,
	    "sadness": 0.77696,
	    "surprise": 0.000007598
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000674079,
	    "contempt": 0.00000180367,
	    "disgust": 0.00000944565,
	    "fear": 0.000000018922,
	    "happiness": 0.00089664,
	    "neutral": 0.00078169,
	    "sadness": 0.63549,
	    "surprise": 0.000006523
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000601124,
	    "contempt": 0.00000169825,
	    "disgust": 0.00000939821,
	    "fear": 0.000000017560,
	    "happiness": 0.00086642,
	    "neutral": 0.00096887,
	    "sadness": 0.68316,
	    "surprise": 0.000007500
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000669703,
	    "contempt": 0.00000167222,
	    "disgust": 0.00000908239,
	    "fear": 0.000000013458,
	    "happiness": 0.00097749,
	    "neutral": 0.00076525,
	    "sadness": 0.83190,
	    "surprise": 0.000006423
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000621702,
	    "contempt": 0.00000160760,
	    "disgust": 0.00000949653,
	    "fear": 0.000000016287,
	    "happiness": 0.00089739,
	    "neutral": 0.00074179,
	    "sadness": 0.75622,
	    "surprise": 0.000007522
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000677502,
	    "contempt": 0.00000155022,
	    "disgust": 0.00000951953,
	    "fear": 0.000000012185,
	    "happiness": 0.00095526,
	    "neutral": 0.00086024,
	    "sadness": 0.76795,
	    "surprise": 0.000007525
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000638393,
	    "contempt": 0.00000192764,
	    "disgust": 0.00000906193,
	    "fear": 0.000000018686,
	    "happiness": 0.00082633,
	    "neutral": 0.00070404,
	    "sadness": 0.67453,
	    "surprise": 0.000007153
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000609984,
	    "contempt": 0.00000188315,
	    "disgust": 0.00000934371,
	    "fear": 0.000000017288,
	    "happiness": 0.00088716,
	    "neutral": 0.00076623,
	    "sadness": 0.73180,
	    "surprise": 0.000007922
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000600727,
	    "contempt": 0.00000196323,
	    "disgust": 0.00000903483,
	    "fear": 0.000000010200,
	    "happiness": 0.00085219,
	    "neutral": 0.00077887,
	    "sadness": 0.79932,
	    "surprise": 0.000006828
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000643512,
	    "contempt": 0.00000172536,
	    "disgust": 0.00000916424,
	    "fear": 0.000000017636,
	    "happiness": 0.00099078,
	    "neutral": 0.00090270,
	    "sadness": 0.63511,
	    "surprise": 0.000006125
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000657277,
	    "contempt": 0.00000181588,
	    "disgust": 0.00000903224,
	    "fear": 0.000000014971,
	    "happiness": 0.00085083,
	    "neutral": 0.00081826,
	    "sadness": 0.83045,
	    "surprise": 0.000007733
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000600943,
	    "contempt": 0.00000154911,
	    "disgust": 0.00000930921,
	    "fear": 0.000000019853,
	    "happiness": 0.00081380,
	    "neutral": 0.00076252,
	    "sadness": 0.91987,
	    "surprise": 0.000006286
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000637009,
	    "contempt": 0.00000156466,
	    "disgust": 0.00000918509,
	    "fear": 0.000000015728,
	    "happiness": 0.00093004,
	    "neutral": 0.00074964,
	    "sadness": 0.72276,
	    "surprise": 0.000007668
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000604322,
	    "contempt": 0.00000182762,
	    "disgust": 0.00000925737,
	    "fear": 0.000000010602,
	    "happiness": 0.00084904,
	    "neutral": 0.00075151,
	    "sadness": 0.66412,
	    "surprise": 0.000006535
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000654259,
	    "contempt": 0.00000203166,
	    "disgust": 0.00000937679,
	    "fear": 0.000000015326,
	    "happiness": 0.00084376,
	    "neutral": 0.00094825,
	    "sadness": 0.61481,
	    "surprise": 0.000006615
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000647295,
	    "contempt": 0.00000172243,
	    "disgust": 0.00000926860,
	    "fear": 0.000000016745,
	    "happiness": 0.00089179,
	    "neutral": 0.00097953,
	    "sadness": 0.60259,
	    "surprise": 0.000006764
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000641651,
	    "contempt": 0.00000201013,
	    "disgust": 0.00000943399,
	    "fear": 0.000000011204,
	    "happiness": 0.00096642,
	    "neutral": 0.00077192,
	    "sadness": 0.83607,
	    "surprise": 0.000006410
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000671459,
	    "contempt": 0.00000166452,
	    "disgust": 0.00000901545,
	    "fear": 0.000000013133,
	    "happiness": 0.00087555,
	    "neutral": 0.00084307,
	    "sadness": 0.75835,
	    "surprise": 0.000007289
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000659062,
	    "contempt": 0.00000199832,
	    "disgust": 0.00000920074,
	    "fear": 0.000000011595,
	    "happiness": 0.00083494,
	    "neutral": 0.00098672,
	    "sadness": 0.89641,
	    "surprise": 0.000007367
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000642771,
	    "contempt": 0.00000182685,
	    "disgust": 0.00000938911,
	    "fear": 0.000000013983,
	    "happiness": 0.00083994,
	    "neutral": 0.00086994,
	    "sadness": 0.60148,
	    "surprise": 0.000007813
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000622610,
	    "contempt": 0.00000186921,
	    "disgust": 0.00000927879,
	    "fear": 0.000000015370,
	    "happiness": 0.00092450,
	    "neutral": 0.00078200,
	    "sadness": 0.87702,
	    "surprise": 0.000007545
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000602394,
	    "contempt": 0.00000158625,
	    "disgust": 0.00000944523,
	    "fear": 0.000000012187,
	    "happiness": 0.00097580,
	    "neutral": 0.00096632,
	    "sadness": 0.70716,
	    "surprise": 0.000006327
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000668520,
	    "contempt": 0.00000187518,
	    "disgust": 0.00000943491,
	    "fear": 0.000000010277,
	    "happiness": 0.00081159,
	    "neutral": 0.00086459,
	    "sadness": 0.69471,
	    "surprise": 0.000007045
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000605182,
	    "contempt": 0.00000207960,
	    "disgust": 0.00000931359,
	    "fear": 0.000000016981,
	    "happiness": 0.00096897,
	    "neutral": 0.00083490,
	    "sadness": 0.79581,
	    "surprise": 0.000007165
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000645258,
	    "contempt": 0.00000162838,
	    "disgust": 0.00000942614,
	    "fear": 0.000000015629,
	    "happiness": 0.00082922,
	    "neutral": 0.00083919,
	    "sadness": 0.65452,
	    "surprise": 0.000006404
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000608615,
	    "contempt": 0.00000155963,
	    "disgust": 0.00000951298,
	    "fear": 0.000000017202,
	    "happiness": 0.00088707,
	    "neutral": 0.00077496,
	    "sadness": 0.85751,
	    "surprise": 0.000006972
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000639876,
	    "contempt": 0.00000201685,
	    "disgust": 0.00000925975,
	    "fear": 0.000000013430,
	    "happiness": 0.00088352,
	    "neutral": 0.00074072,
	    "sadness": 0.86205,
	    "surprise": 0.000006237
	}
    },
    {
	"employee": {
	    "id": 10,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000613573,
	    "contempt": 0.00000150667,
	    "disgust": 0.00000911132,
	    "fear": 0.000000015307,
	    "happiness": 0.00097739,
	    "neutral": 0.00090313,
	    "sadness": 0.90855,
	    "surprise": 0.000006815
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000607494,
	    "contempt": 0.00000151436,
	    "disgust": 0.00000917859,
	    "fear": 0.000000018195,
	    "happiness": 0.00081415,
	    "neutral": 0.00091358,
	    "sadness": 0.73363,
	    "surprise": 0.000007351
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000643707,
	    "contempt": 0.00000207859,
	    "disgust": 0.00000920790,
	    "fear": 0.000000015020,
	    "happiness": 0.00086772,
	    "neutral": 0.00088430,
	    "sadness": 0.90299,
	    "surprise": 0.000006151
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000653389,
	    "contempt": 0.00000202089,
	    "disgust": 0.00000951198,
	    "fear": 0.000000016816,
	    "happiness": 0.00082797,
	    "neutral": 0.00090085,
	    "sadness": 0.78585,
	    "surprise": 0.000007153
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000647766,
	    "contempt": 0.00000186266,
	    "disgust": 0.00000938855,
	    "fear": 0.000000018054,
	    "happiness": 0.00089125,
	    "neutral": 0.00073592,
	    "sadness": 0.76913,
	    "surprise": 0.000007422
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000616873,
	    "contempt": 0.00000156710,
	    "disgust": 0.00000914837,
	    "fear": 0.000000019140,
	    "happiness": 0.00099357,
	    "neutral": 0.00087577,
	    "sadness": 0.88231,
	    "surprise": 0.000006331
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000624115,
	    "contempt": 0.00000183072,
	    "disgust": 0.00000931756,
	    "fear": 0.000000018508,
	    "happiness": 0.00084950,
	    "neutral": 0.00095377,
	    "sadness": 0.71966,
	    "surprise": 0.000007081
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000639755,
	    "contempt": 0.00000185713,
	    "disgust": 0.00000900679,
	    "fear": 0.000000010659,
	    "happiness": 0.00090450,
	    "neutral": 0.00096178,
	    "sadness": 0.89813,
	    "surprise": 0.000006291
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000625451,
	    "contempt": 0.00000189049,
	    "disgust": 0.00000903039,
	    "fear": 0.000000011665,
	    "happiness": 0.00080316,
	    "neutral": 0.00072185,
	    "sadness": 0.80901,
	    "surprise": 0.000006611
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000636719,
	    "contempt": 0.00000203645,
	    "disgust": 0.00000929766,
	    "fear": 0.000000015304,
	    "happiness": 0.00094673,
	    "neutral": 0.00070042,
	    "sadness": 0.66956,
	    "surprise": 0.000006812
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000655791,
	    "contempt": 0.00000167338,
	    "disgust": 0.00000944749,
	    "fear": 0.000000010439,
	    "happiness": 0.00082683,
	    "neutral": 0.00072248,
	    "sadness": 0.70612,
	    "surprise": 0.000007239
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000625654,
	    "contempt": 0.00000168029,
	    "disgust": 0.00000918361,
	    "fear": 0.000000010382,
	    "happiness": 0.00090157,
	    "neutral": 0.00070886,
	    "sadness": 0.88648,
	    "surprise": 0.000007770
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000608518,
	    "contempt": 0.00000163664,
	    "disgust": 0.00000908894,
	    "fear": 0.000000014474,
	    "happiness": 0.00083342,
	    "neutral": 0.00086173,
	    "sadness": 0.87432,
	    "surprise": 0.000006555
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000623827,
	    "contempt": 0.00000173794,
	    "disgust": 0.00000943766,
	    "fear": 0.000000016999,
	    "happiness": 0.00094172,
	    "neutral": 0.00085755,
	    "sadness": 0.65705,
	    "surprise": 0.000007725
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000655971,
	    "contempt": 0.00000187232,
	    "disgust": 0.00000953060,
	    "fear": 0.000000014563,
	    "happiness": 0.00082023,
	    "neutral": 0.00076452,
	    "sadness": 0.65209,
	    "surprise": 0.000006644
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000669941,
	    "contempt": 0.00000185457,
	    "disgust": 0.00000939247,
	    "fear": 0.000000018932,
	    "happiness": 0.00094343,
	    "neutral": 0.00092562,
	    "sadness": 0.70567,
	    "surprise": 0.000006740
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000602366,
	    "contempt": 0.00000183752,
	    "disgust": 0.00000943520,
	    "fear": 0.000000010238,
	    "happiness": 0.00096065,
	    "neutral": 0.00090254,
	    "sadness": 0.65104,
	    "surprise": 0.000006186
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000615233,
	    "contempt": 0.00000154491,
	    "disgust": 0.00000937454,
	    "fear": 0.000000012508,
	    "happiness": 0.00084049,
	    "neutral": 0.00075841,
	    "sadness": 0.66202,
	    "surprise": 0.000006611
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000618549,
	    "contempt": 0.00000159284,
	    "disgust": 0.00000910386,
	    "fear": 0.000000017258,
	    "happiness": 0.00089269,
	    "neutral": 0.00077000,
	    "sadness": 0.74952,
	    "surprise": 0.000006248
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000605711,
	    "contempt": 0.00000197643,
	    "disgust": 0.00000902894,
	    "fear": 0.000000010981,
	    "happiness": 0.00090548,
	    "neutral": 0.00071825,
	    "sadness": 0.91837,
	    "surprise": 0.000006404
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000649544,
	    "contempt": 0.00000157287,
	    "disgust": 0.00000920947,
	    "fear": 0.000000010554,
	    "happiness": 0.00088025,
	    "neutral": 0.00088223,
	    "sadness": 0.73602,
	    "surprise": 0.000007016
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000649023,
	    "contempt": 0.00000200417,
	    "disgust": 0.00000909043,
	    "fear": 0.000000015266,
	    "happiness": 0.00087520,
	    "neutral": 0.00087354,
	    "sadness": 0.78274,
	    "surprise": 0.000007593
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000613043,
	    "contempt": 0.00000151581,
	    "disgust": 0.00000914509,
	    "fear": 0.000000013098,
	    "happiness": 0.00084499,
	    "neutral": 0.00098524,
	    "sadness": 0.86838,
	    "surprise": 0.000007309
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000651920,
	    "contempt": 0.00000180795,
	    "disgust": 0.00000944164,
	    "fear": 0.000000017313,
	    "happiness": 0.00085990,
	    "neutral": 0.00097159,
	    "sadness": 0.84840,
	    "surprise": 0.000007607
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000612004,
	    "contempt": 0.00000207348,
	    "disgust": 0.00000918883,
	    "fear": 0.000000018378,
	    "happiness": 0.00093901,
	    "neutral": 0.00075756,
	    "sadness": 0.84483,
	    "surprise": 0.000006357
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000607338,
	    "contempt": 0.00000187267,
	    "disgust": 0.00000906900,
	    "fear": 0.000000013013,
	    "happiness": 0.00095347,
	    "neutral": 0.00083377,
	    "sadness": 0.80061,
	    "surprise": 0.000006552
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000627493,
	    "contempt": 0.00000152891,
	    "disgust": 0.00000947992,
	    "fear": 0.000000011744,
	    "happiness": 0.00083282,
	    "neutral": 0.00091031,
	    "sadness": 0.91081,
	    "surprise": 0.000007493
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000658703,
	    "contempt": 0.00000162379,
	    "disgust": 0.00000921410,
	    "fear": 0.000000017259,
	    "happiness": 0.00093888,
	    "neutral": 0.00093769,
	    "sadness": 0.64026,
	    "surprise": 0.000007879
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000648750,
	    "contempt": 0.00000183800,
	    "disgust": 0.00000933675,
	    "fear": 0.000000016698,
	    "happiness": 0.00084893,
	    "neutral": 0.00096859,
	    "sadness": 0.80495,
	    "surprise": 0.000007479
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000664040,
	    "contempt": 0.00000182924,
	    "disgust": 0.00000954113,
	    "fear": 0.000000010005,
	    "happiness": 0.00097970,
	    "neutral": 0.00073093,
	    "sadness": 0.78811,
	    "surprise": 0.000006948
	}
    },
    {
	"employee": {
	    "id": 11,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000629410,
	    "contempt": 0.00000182794,
	    "disgust": 0.00000934072,
	    "fear": 0.000000013060,
	    "happiness": 0.00080256,
	    "neutral": 0.00098625,
	    "sadness": 0.70334,
	    "surprise": 0.000006605
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000662025,
	    "contempt": 0.00000187674,
	    "disgust": 0.00000941189,
	    "fear": 0.000000019395,
	    "happiness": 0.00094567,
	    "neutral": 0.00094609,
	    "sadness": 0.78210,
	    "surprise": 0.000007481
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000672137,
	    "contempt": 0.00000186850,
	    "disgust": 0.00000945446,
	    "fear": 0.000000016797,
	    "happiness": 0.00098964,
	    "neutral": 0.00085121,
	    "sadness": 0.60450,
	    "surprise": 0.000007895
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000648729,
	    "contempt": 0.00000164223,
	    "disgust": 0.00000911529,
	    "fear": 0.000000011862,
	    "happiness": 0.00094796,
	    "neutral": 0.00084601,
	    "sadness": 0.70310,
	    "surprise": 0.000006270
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000625603,
	    "contempt": 0.00000164401,
	    "disgust": 0.00000952609,
	    "fear": 0.000000012832,
	    "happiness": 0.00089619,
	    "neutral": 0.00087520,
	    "sadness": 0.77464,
	    "surprise": 0.000006969
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000655028,
	    "contempt": 0.00000175074,
	    "disgust": 0.00000900397,
	    "fear": 0.000000014933,
	    "happiness": 0.00088559,
	    "neutral": 0.00084013,
	    "sadness": 0.86311,
	    "surprise": 0.000007021
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000654326,
	    "contempt": 0.00000189794,
	    "disgust": 0.00000951220,
	    "fear": 0.000000016148,
	    "happiness": 0.00080981,
	    "neutral": 0.00098934,
	    "sadness": 0.79488,
	    "surprise": 0.000007818
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000654065,
	    "contempt": 0.00000162113,
	    "disgust": 0.00000903568,
	    "fear": 0.000000015580,
	    "happiness": 0.00089638,
	    "neutral": 0.00099016,
	    "sadness": 0.70906,
	    "surprise": 0.000006300
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000640771,
	    "contempt": 0.00000206467,
	    "disgust": 0.00000929090,
	    "fear": 0.000000017106,
	    "happiness": 0.00091578,
	    "neutral": 0.00087507,
	    "sadness": 0.68010,
	    "surprise": 0.000006742
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000665550,
	    "contempt": 0.00000189586,
	    "disgust": 0.00000953830,
	    "fear": 0.000000015750,
	    "happiness": 0.00097185,
	    "neutral": 0.00096390,
	    "sadness": 0.73360,
	    "surprise": 0.000006276
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000628885,
	    "contempt": 0.00000150640,
	    "disgust": 0.00000907135,
	    "fear": 0.000000010806,
	    "happiness": 0.00093372,
	    "neutral": 0.00079734,
	    "sadness": 0.71010,
	    "surprise": 0.000007976
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000672381,
	    "contempt": 0.00000203456,
	    "disgust": 0.00000911686,
	    "fear": 0.000000013973,
	    "happiness": 0.00090111,
	    "neutral": 0.00080626,
	    "sadness": 0.84535,
	    "surprise": 0.000007342
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000600379,
	    "contempt": 0.00000159236,
	    "disgust": 0.00000924576,
	    "fear": 0.000000015866,
	    "happiness": 0.00081379,
	    "neutral": 0.00071482,
	    "sadness": 0.84777,
	    "surprise": 0.000007913
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000631611,
	    "contempt": 0.00000153657,
	    "disgust": 0.00000903625,
	    "fear": 0.000000019879,
	    "happiness": 0.00095287,
	    "neutral": 0.00095498,
	    "sadness": 0.69968,
	    "surprise": 0.000007109
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000665225,
	    "contempt": 0.00000151859,
	    "disgust": 0.00000945009,
	    "fear": 0.000000015984,
	    "happiness": 0.00085205,
	    "neutral": 0.00072254,
	    "sadness": 0.81411,
	    "surprise": 0.000006763
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000630881,
	    "contempt": 0.00000178201,
	    "disgust": 0.00000918873,
	    "fear": 0.000000017484,
	    "happiness": 0.00082624,
	    "neutral": 0.00075632,
	    "sadness": 0.84972,
	    "surprise": 0.000007360
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000626930,
	    "contempt": 0.00000177138,
	    "disgust": 0.00000903147,
	    "fear": 0.000000016382,
	    "happiness": 0.00097269,
	    "neutral": 0.00089079,
	    "sadness": 0.78401,
	    "surprise": 0.000007024
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000611779,
	    "contempt": 0.00000199799,
	    "disgust": 0.00000931987,
	    "fear": 0.000000017516,
	    "happiness": 0.00099605,
	    "neutral": 0.00098506,
	    "sadness": 0.67566,
	    "surprise": 0.000006092
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000671172,
	    "contempt": 0.00000181259,
	    "disgust": 0.00000947713,
	    "fear": 0.000000012448,
	    "happiness": 0.00080217,
	    "neutral": 0.00091064,
	    "sadness": 0.80222,
	    "surprise": 0.000007379
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000627383,
	    "contempt": 0.00000151448,
	    "disgust": 0.00000936783,
	    "fear": 0.000000013266,
	    "happiness": 0.00082942,
	    "neutral": 0.00072369,
	    "sadness": 0.84379,
	    "surprise": 0.000006006
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000630035,
	    "contempt": 0.00000202762,
	    "disgust": 0.00000936745,
	    "fear": 0.000000013468,
	    "happiness": 0.00093575,
	    "neutral": 0.00086604,
	    "sadness": 0.68280,
	    "surprise": 0.000007175
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000658479,
	    "contempt": 0.00000178357,
	    "disgust": 0.00000927213,
	    "fear": 0.000000011177,
	    "happiness": 0.00081737,
	    "neutral": 0.00090056,
	    "sadness": 0.65066,
	    "surprise": 0.000007836
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000620383,
	    "contempt": 0.00000194234,
	    "disgust": 0.00000954642,
	    "fear": 0.000000012808,
	    "happiness": 0.00085094,
	    "neutral": 0.00085931,
	    "sadness": 0.83627,
	    "surprise": 0.000007570
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000613354,
	    "contempt": 0.00000163645,
	    "disgust": 0.00000908856,
	    "fear": 0.000000012069,
	    "happiness": 0.00085931,
	    "neutral": 0.00072250,
	    "sadness": 0.88378,
	    "surprise": 0.000006827
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000631136,
	    "contempt": 0.00000155193,
	    "disgust": 0.00000935156,
	    "fear": 0.000000018809,
	    "happiness": 0.00092246,
	    "neutral": 0.00077819,
	    "sadness": 0.77435,
	    "surprise": 0.000006559
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000664007,
	    "contempt": 0.00000201591,
	    "disgust": 0.00000932940,
	    "fear": 0.000000019038,
	    "happiness": 0.00088125,
	    "neutral": 0.00093273,
	    "sadness": 0.88234,
	    "surprise": 0.000007249
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000601428,
	    "contempt": 0.00000172625,
	    "disgust": 0.00000905715,
	    "fear": 0.000000014538,
	    "happiness": 0.00098795,
	    "neutral": 0.00086295,
	    "sadness": 0.88776,
	    "surprise": 0.000006015
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000674528,
	    "contempt": 0.00000202647,
	    "disgust": 0.00000947510,
	    "fear": 0.000000012815,
	    "happiness": 0.00087450,
	    "neutral": 0.00077193,
	    "sadness": 0.75600,
	    "surprise": 0.000006997
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000668374,
	    "contempt": 0.00000175395,
	    "disgust": 0.00000937620,
	    "fear": 0.000000017117,
	    "happiness": 0.00082665,
	    "neutral": 0.00095504,
	    "sadness": 0.64937,
	    "surprise": 0.000006686
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000661471,
	    "contempt": 0.00000175101,
	    "disgust": 0.00000909134,
	    "fear": 0.000000018024,
	    "happiness": 0.00093064,
	    "neutral": 0.00098583,
	    "sadness": 0.69510,
	    "surprise": 0.000006727
	}
    },
    {
	"employee": {
	    "id": 12,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000639849,
	    "contempt": 0.00000173433,
	    "disgust": 0.00000900040,
	    "fear": 0.000000011896,
	    "happiness": 0.00097002,
	    "neutral": 0.00070744,
	    "sadness": 0.78329,
	    "surprise": 0.000006240
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-01"
	},
	"scores": {
	    "anger": 0.000000600237,
	    "contempt": 0.00000200702,
	    "disgust": 0.00000922092,
	    "fear": 0.000000011726,
	    "happiness": 0.00082499,
	    "neutral": 0.00085543,
	    "sadness": 0.83617,
	    "surprise": 0.000006612
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-02"
	},
	"scores": {
	    "anger": 0.000000629357,
	    "contempt": 0.00000166932,
	    "disgust": 0.00000951165,
	    "fear": 0.000000019610,
	    "happiness": 0.00086249,
	    "neutral": 0.00070102,
	    "sadness": 0.89532,
	    "surprise": 0.000007712
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-03"
	},
	"scores": {
	    "anger": 0.000000655306,
	    "contempt": 0.00000176911,
	    "disgust": 0.00000919601,
	    "fear": 0.000000014717,
	    "happiness": 0.00098491,
	    "neutral": 0.00091631,
	    "sadness": 0.70025,
	    "surprise": 0.000006849
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-04"
	},
	"scores": {
	    "anger": 0.000000620792,
	    "contempt": 0.00000161264,
	    "disgust": 0.00000948443,
	    "fear": 0.000000015832,
	    "happiness": 0.00090772,
	    "neutral": 0.00085132,
	    "sadness": 0.72432,
	    "surprise": 0.000006981
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-05"
	},
	"scores": {
	    "anger": 0.000000600328,
	    "contempt": 0.00000164891,
	    "disgust": 0.00000912904,
	    "fear": 0.000000015543,
	    "happiness": 0.00088753,
	    "neutral": 0.00085457,
	    "sadness": 0.89935,
	    "surprise": 0.000007897
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-06"
	},
	"scores": {
	    "anger": 0.000000673861,
	    "contempt": 0.00000161585,
	    "disgust": 0.00000937465,
	    "fear": 0.000000015190,
	    "happiness": 0.00081870,
	    "neutral": 0.00085115,
	    "sadness": 0.89161,
	    "surprise": 0.000007318
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-07"
	},
	"scores": {
	    "anger": 0.000000674346,
	    "contempt": 0.00000186634,
	    "disgust": 0.00000948189,
	    "fear": 0.000000013646,
	    "happiness": 0.00090254,
	    "neutral": 0.00098856,
	    "sadness": 0.89006,
	    "surprise": 0.000007604
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-08"
	},
	"scores": {
	    "anger": 0.000000665163,
	    "contempt": 0.00000170196,
	    "disgust": 0.00000945819,
	    "fear": 0.000000014832,
	    "happiness": 0.00083698,
	    "neutral": 0.00098542,
	    "sadness": 0.79454,
	    "surprise": 0.000007985
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-09"
	},
	"scores": {
	    "anger": 0.000000608150,
	    "contempt": 0.00000198754,
	    "disgust": 0.00000930148,
	    "fear": 0.000000013759,
	    "happiness": 0.00084302,
	    "neutral": 0.00095645,
	    "sadness": 0.90909,
	    "surprise": 0.000006005
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-10"
	},
	"scores": {
	    "anger": 0.000000627481,
	    "contempt": 0.00000180238,
	    "disgust": 0.00000913814,
	    "fear": 0.000000019630,
	    "happiness": 0.00084176,
	    "neutral": 0.00094156,
	    "sadness": 0.85239,
	    "surprise": 0.000007680
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-11"
	},
	"scores": {
	    "anger": 0.000000608647,
	    "contempt": 0.00000161439,
	    "disgust": 0.00000923319,
	    "fear": 0.000000017507,
	    "happiness": 0.00080472,
	    "neutral": 0.00072399,
	    "sadness": 0.80286,
	    "surprise": 0.000006565
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-12"
	},
	"scores": {
	    "anger": 0.000000677668,
	    "contempt": 0.00000184098,
	    "disgust": 0.00000901685,
	    "fear": 0.000000016275,
	    "happiness": 0.00092456,
	    "neutral": 0.00096036,
	    "sadness": 0.90243,
	    "surprise": 0.000006498
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-13"
	},
	"scores": {
	    "anger": 0.000000667284,
	    "contempt": 0.00000180562,
	    "disgust": 0.00000914197,
	    "fear": 0.000000012590,
	    "happiness": 0.00091581,
	    "neutral": 0.00077037,
	    "sadness": 0.89556,
	    "surprise": 0.000006995
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-14"
	},
	"scores": {
	    "anger": 0.000000603210,
	    "contempt": 0.00000174421,
	    "disgust": 0.00000921795,
	    "fear": 0.000000015598,
	    "happiness": 0.00096206,
	    "neutral": 0.00090931,
	    "sadness": 0.72020,
	    "surprise": 0.000006674
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-15"
	},
	"scores": {
	    "anger": 0.000000622844,
	    "contempt": 0.00000196650,
	    "disgust": 0.00000906092,
	    "fear": 0.000000018262,
	    "happiness": 0.00094938,
	    "neutral": 0.00098601,
	    "sadness": 0.78628,
	    "surprise": 0.000006400
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-16"
	},
	"scores": {
	    "anger": 0.000000622256,
	    "contempt": 0.00000199289,
	    "disgust": 0.00000909053,
	    "fear": 0.000000017774,
	    "happiness": 0.00080639,
	    "neutral": 0.00078853,
	    "sadness": 0.86172,
	    "surprise": 0.000007970
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-17"
	},
	"scores": {
	    "anger": 0.000000650645,
	    "contempt": 0.00000205887,
	    "disgust": 0.00000951114,
	    "fear": 0.000000017745,
	    "happiness": 0.00098010,
	    "neutral": 0.00093104,
	    "sadness": 0.66385,
	    "surprise": 0.000006635
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-18"
	},
	"scores": {
	    "anger": 0.000000659967,
	    "contempt": 0.00000163799,
	    "disgust": 0.00000944787,
	    "fear": 0.000000017037,
	    "happiness": 0.00087503,
	    "neutral": 0.00082751,
	    "sadness": 0.73318,
	    "surprise": 0.000007824
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-19"
	},
	"scores": {
	    "anger": 0.000000640687,
	    "contempt": 0.00000179664,
	    "disgust": 0.00000924985,
	    "fear": 0.000000010653,
	    "happiness": 0.00098332,
	    "neutral": 0.00085119,
	    "sadness": 0.89036,
	    "surprise": 0.000007975
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-20"
	},
	"scores": {
	    "anger": 0.000000669775,
	    "contempt": 0.00000172092,
	    "disgust": 0.00000948903,
	    "fear": 0.000000016879,
	    "happiness": 0.00096818,
	    "neutral": 0.00098926,
	    "sadness": 0.79348,
	    "surprise": 0.000007226
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-21"
	},
	"scores": {
	    "anger": 0.000000630801,
	    "contempt": 0.00000198660,
	    "disgust": 0.00000924239,
	    "fear": 0.000000015466,
	    "happiness": 0.00087834,
	    "neutral": 0.00081252,
	    "sadness": 0.72137,
	    "surprise": 0.000006260
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-22"
	},
	"scores": {
	    "anger": 0.000000603648,
	    "contempt": 0.00000206535,
	    "disgust": 0.00000906538,
	    "fear": 0.000000013286,
	    "happiness": 0.00088781,
	    "neutral": 0.00091191,
	    "sadness": 0.85567,
	    "surprise": 0.000006300
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-23"
	},
	"scores": {
	    "anger": 0.000000618776,
	    "contempt": 0.00000190556,
	    "disgust": 0.00000943860,
	    "fear": 0.000000015889,
	    "happiness": 0.00082959,
	    "neutral": 0.00092188,
	    "sadness": 0.70710,
	    "surprise": 0.000007197
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-24"
	},
	"scores": {
	    "anger": 0.000000630277,
	    "contempt": 0.00000197650,
	    "disgust": 0.00000925408,
	    "fear": 0.000000014174,
	    "happiness": 0.00086012,
	    "neutral": 0.00075413,
	    "sadness": 0.87471,
	    "surprise": 0.000006313
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-25"
	},
	"scores": {
	    "anger": 0.000000655122,
	    "contempt": 0.00000200391,
	    "disgust": 0.00000935539,
	    "fear": 0.000000013344,
	    "happiness": 0.00095098,
	    "neutral": 0.00075536,
	    "sadness": 0.91429,
	    "surprise": 0.000007085
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-26"
	},
	"scores": {
	    "anger": 0.000000624356,
	    "contempt": 0.00000160561,
	    "disgust": 0.00000904115,
	    "fear": 0.000000019015,
	    "happiness": 0.00089422,
	    "neutral": 0.00070409,
	    "sadness": 0.76606,
	    "surprise": 0.000006901
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-27"
	},
	"scores": {
	    "anger": 0.000000633437,
	    "contempt": 0.00000191771,
	    "disgust": 0.00000928741,
	    "fear": 0.000000011810,
	    "happiness": 0.00092383,
	    "neutral": 0.00089537,
	    "sadness": 0.60869,
	    "surprise": 0.000007651
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-28"
	},
	"scores": {
	    "anger": 0.000000631010,
	    "contempt": 0.00000165302,
	    "disgust": 0.00000926574,
	    "fear": 0.000000013935,
	    "happiness": 0.00090654,
	    "neutral": 0.00097913,
	    "sadness": 0.62626,
	    "surprise": 0.000006190
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-29"
	},
	"scores": {
	    "anger": 0.000000661720,
	    "contempt": 0.00000194546,
	    "disgust": 0.00000920312,
	    "fear": 0.000000014346,
	    "happiness": 0.00092519,
	    "neutral": 0.00090280,
	    "sadness": 0.82346,
	    "surprise": 0.000007123
	}
    },
    {
	"employee": {
	    "id": 13,
	    "department": 10,
	    "city": "Lyon"
	},
	"date": {
	    "day" : "2017-05-30"
	},
	"scores": {
	    "anger": 0.000000605967,
	    "contempt": 0.00000203382,
	    "disgust": 0.00000933999,
	    "fear": 0.000000013860,
	    "happiness": 0.00084229,
	    "neutral": 0.00078271,
	    "sadness": 0.72158,
	    "surprise": 0.000006706
	}
    }
]

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

const average =

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
