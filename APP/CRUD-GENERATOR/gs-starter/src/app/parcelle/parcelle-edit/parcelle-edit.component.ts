import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ParcelleService } from '../parcelle.service';
import { Parcelle} from '../parcelle';

import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('gs-cast');

  
  
  
    import { EspeceService } from '../../espece/espece.service';
    import { Espece} from '../../espece/espece';
    import { EspeceFilter} from '../../espece/espece-filter';

  
  
  



@Component({
  selector: 'app-parcelle-edit',
  templateUrl: './parcelle-edit.component.html',
  providers:[ 
    
    
    EspeceService ,  
    
    
    
  ]
})
export class ParcelleEditComponent implements OnInit {

  id: string;
  parcelle: Parcelle;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parcelleService: ParcelleService,
             private especeService: EspeceService,         
    
    
    ) 
    {
  }



  public  initRef(){

             

      var id_espece:any=this.parcelle.espece;
      this.especeService.findById(id_espece).
      subscribe(data=>{
        caster.singleCast(data,Espece);
        this.parcelle.espece=data;
        
      });


               


  }




  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Parcelle()); }
          return this.parcelleService.findById(id);
        })
      )
      .subscribe(parcelle=> {
          this.parcelle= parcelle;
          this.initRef();
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

      

    
      
      
      
    
          this.configureEspeceInput()
        
    
    
      
      
      
      
    
  }

  save() {
    this.parcelleService.save(this.parcelle).subscribe(
      parcelle=> {
        this.parcelle= parcelle;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/parcelles']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );

  }

  cancel() {
    this.router.navigate(['/parcelles']);
  }









  
    
    
    
  

      



  

  filteredEspeceList:Espece[]=new Array<Espece>();
  especeInput:FormControl;
  selectedEspece:Espece;
  isLoadingEspece=false;

  especeClick(event: any) {
    this.selectedEspece= event.option.value;
  }
  
  checkEspece() {
    if (!this.selectedEspece|| this.selectedEspece!== this.especeInput.value) {
      this.especeInput.setValue(null);
      this.selectedEspece= null;
      return; 
    }
    this.parcelle.espece=this.selectedEspece;
  }
  
  displayEspece(espece:Espece) {
    
    if (espece) return espece.display;
    
  }
  configureEspeceInput(){
    this.especeInput=new FormControl();
  
    this.especeInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {this.isLoadingEspece= true;}),
      switchMap(value => this.especeService.find(new EspeceFilter())
      .pipe(
        finalize(() => this.isLoadingEspece= false),
        ) 
        ) 
      )
    .subscribe((resultList =>{
      caster.arrayCast(resultList,Espece);
      this.filteredEspeceList=resultList;}))
    
  }
  
    
    
    
    
  











  
}
