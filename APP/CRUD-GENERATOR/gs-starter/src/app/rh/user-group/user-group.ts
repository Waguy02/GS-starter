

import { UserService } from "src/app/rh/user/user.service"
import { User} from "src/app/rh/user/user"

import { GroupService } from  "src/app/rh/group/group.service";
  import { Group} from  "src/app/rh/group/group";
  

export class UserGroup {
    group:Group;
     user:User;

        _id: string;
        statut: boolean;
}
