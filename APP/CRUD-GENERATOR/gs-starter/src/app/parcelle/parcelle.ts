
  
  
  import { Espece} from '../espece/espece';
  
  
  
export class Parcelle{
_id:number;
location:any;
espece:Espece;
date_semis:Date;
description:string;
nombre_plant:number;

get display(){
  return  "parcelle_display"; // Remplacer avec la chaine que vous souhaitez afficher
}



}
