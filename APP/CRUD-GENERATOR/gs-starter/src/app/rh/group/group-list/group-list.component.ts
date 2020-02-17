import { ViewChild,Component, OnInit } from '@angular/core';
import { GroupFilter } from '../group-filter';
import { GroupService } from '../group.service';
import { Group } from '../group';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


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


  get groupList(): Group[] {
    return this.groupService.groupList;
  }

  constructor(private groupService: GroupService) {

  }

  ngOnInit() {



  }

  ngAfterViewInit() {
    this.search();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }







  search(): void {
    this.groupService.load(this.filter).then((data)=>{


      setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<Group>(this.groupService.groupList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

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
