import { ICity } from '../models/cities-model';

// tslint:disable-next-line:typedef-whitespace
const cities : ICity[] = [
    {
        name: "Bobigny",
         
		  lat: 48.910063,
		  long: 2.395227,
          department: "Marketing",
          message: "Fun activities"
    },
        {
        name: "Pantin",
         
		  lat: 48.909178,
		  long: 2.416916,
          department: "HR",
            message: "Happy hours"
    },
        
        {
        name: "Drancy",
         
		  lat: 48.894665,
		  long: 2.391832,
          department: "IT",
          message: "Go to meeting outdoor"
    }

];

export default cities;


