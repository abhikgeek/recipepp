import { Component,EventEmitter,Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls : ['./header.component.css']  
})

export class HeaderCoponent{
    @Output() featureSelected = new EventEmitter<string>();

    OnSelect(feature:string){
        this.featureSelected.emit(feature);
    }
    
}