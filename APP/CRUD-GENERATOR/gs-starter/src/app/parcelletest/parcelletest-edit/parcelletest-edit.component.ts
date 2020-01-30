import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('gs-cast');
import { ParcelletestService } from '../parcelletest.service';
import { Parcelletest } from '../parcelletest';
 import { EspeceService } from '../../espece/espece.service';
import { Espece} from '../../espece/espece';
import { EspeceFilter} from '../../espece/espece-filter';



@Component({
  selector: 'app-parcelletest-edit',
  templateUrl: './parcelletest-edit.component.html'
})
export class ParcelletestEditComponent implements OnInit {

  id: string;
  parcelletest: Parcelletest;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parcelletestService: ParcelletestService,
     private especeService: EspeceService, 
    )
    {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Parcelletest()); }
          return this.parcelletestService.findById(id);
        })
      )
      .subscribe(parcelletest => {
          this.parcelletest = parcelletest;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

       
        this.configureEspeceInput()
        
        
  }

  save() {
    this.parcelletestService.save(this.parcelletest).subscribe(
      parcelletest => {
        this.parcelletest = parcelletest;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/parcelletests']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/parcelletests']);
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
    this.parcelletest.espece=this.selectedEspece;
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


