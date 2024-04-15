import {Component, OnInit, SimpleChanges} from '@angular/core';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';

;
import {Bloc} from "../../models/Bloc";
@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {
  blocs!: Bloc[];
  blocsWithChambres: any[] = [];

  constructor(
    private blocService: BlocServiceService,
   
  ) {}

  ngOnInit(): void {
    this.blocService.getBloc().subscribe(
      (blocs: Bloc[]) => {
        this.blocs = blocs;
    
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }




}




