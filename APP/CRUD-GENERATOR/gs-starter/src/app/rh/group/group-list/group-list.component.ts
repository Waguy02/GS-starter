import { ViewChild,Component, OnInit } from '@angular/core';
import { GroupFilter } from '../group-filter';
import { GroupService } from '../group.service';
import { Group } from '../group';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-group',
  styleUrls:['./group-list.scss'],
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {
filter = new GroupFilter();
selectedGroup: Group;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<Group>;
 feedback: any = {};
 displayedColumns: string[] = ['_id','name','description','statut','actions'];
 server_processing:boolean=false;

  nameFilter:GsFilter;
  
  descriptionFilter:GsFilter;
  
  filteredValues: any;
initFilters(){

        this.nameFilter=new GsFilter();

        this.nameFilter.controls.val=new FormControl();
        

        this.descriptionFilter=new GsFilter();

        this.descriptionFilter.controls.val=new FormControl();
        

    this.filteredValues={  name:this.nameFilter.values,      description:this.descriptionFilter.values,      }
  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {
    
      
        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value;this.applyFilter();});
        

      
      
        this.descriptionFilter.controls.val.valueChanges.subscribe((value) => {this.descriptionFilter.values.val = value;this.applyFilter();});
        

      

    this.dataSource.filterPredicate =
      (group: Group, filters: string) => {
        const parsedFilters = JSON.parse(filters);
      
        let nameCheck =true
          
        let descriptionCheck =true
          
      
        

          
        
              if (parsedFilters.name.val) {
                nameCheck =!group.name?false: group.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }
              
        

          
        
              if (parsedFilters.description.val) {
                descriptionCheck =!group.name?false: group.description.toLowerCase().includes(parsedFilters.description.val.toLowerCase());
              }
              
      return   nameCheck&&descriptionCheck&&true;
    }
}


  get groupList(): Group[] {
    return this.groupService.groupList;
  }
constructor(private groupService: GroupService) {
}
ngOnInit() {
this.initFilters();
}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.groupService.load(this.filter).then((data)=>{
setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<Group>(this.groupService.groupList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200)
})
}
select(selected: Group): void {
    this.selectedGroup = selected;
  }
delete(group: Group): void {
    if (confirm('Etes-vous sûr?')) {
      this.groupService.delete(group).subscribe(() => {
          this.feedback = {type: 'success', message: 'Suppression effectuée avec succès!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors de la suppression.'};
        }
      );
    }
  }
}
export class GsFilter{
values: {
    min: any;
    max: any;
    val: any;
  }={
  min:undefined,
  max:undefined,
  val:undefined,
};
controls: {
    min: FormControl;
    max: FormControl;
    val: FormControl;
  }={
    min:null,
    max:null,
    val:null,
}

reset(){
  if (this.controls.min)this.controls.min.setValue(undefined);
  if(this.controls.max)this.controls.max.setValue(undefined);
  if(this.controls.val)this.controls.val.setValue(undefined);
}


}
