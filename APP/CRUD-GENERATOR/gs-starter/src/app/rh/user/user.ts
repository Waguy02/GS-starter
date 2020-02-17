





    
  import { Group} from   "src/app/rh/group/group";
  



export class User {
  
  _id: string;
  name: string;
  group: Group;
  sexe: string;
  date_naissance: Date;
  niveau: string;

  get display(){
    return  "user_display"; // Remplacer avec la chaine que vous souhaitez afficher
  }


}


