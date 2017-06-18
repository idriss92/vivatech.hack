const employees = [
    {
        "employee": {
            "id": 1,
            "department": 12,
            "city": "Paris",
            "recurring": 80,
            "criticity": "High", "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-01"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High", "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-02"
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
            "city": "Paris",
            "recurring": 45,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-03"
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
            "department": 21,
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-04"
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
            "department": 64,
            "city": "Paris",
            "recurring": 34,
            "criticity": "Low",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-05"
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
            "city": "Paris",
            "recurring": 10,
            "criticity": "Low",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-06"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-07"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-08"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-09"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-10"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-11"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-12"
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
            "city": "Paris",
            "recurring": 40,
            "criticity": "Low",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-13"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-14"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-15"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-16"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-17"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-18"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-19"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-20"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-21"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-22"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-23"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-24"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-25"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-26"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-27"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-28"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-29"
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
            "city": "Paris",
            "recurring": 80,
            "criticity": "High",             "advise": "You have to take care of your employee",
        },
        "date": {
            "day": "2017-05-30"
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
    }
]


export default employees;
