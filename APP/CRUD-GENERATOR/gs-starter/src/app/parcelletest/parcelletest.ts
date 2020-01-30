




 
    
  import { Espece} from '../espece/espece';
  
  


export class Parcelletest {
  _id: number;
  land_form: string;
  location: any;
  espece: Espece
  date_semis: Date;
  description: string;
  nombre_plant: number;

  get display(){
    return  "parcelletest_display"; // Remplacer avec la chaine que vous souhaitez afficher
  }
  
  
}


