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
 

  constructor( private blocService: BlocServiceService) {}

  ngOnInit(): void {
    this.getBlocs(); // Appel de la méthode pour récupérer les blocs lors de l'initialisation du composant
  }

  getBlocs(): void {
    this.blocService.getBloc().subscribe(
      (blocs) => {
        this.blocs = blocs; // Assignation des blocs récupérés du service à la propriété du composant
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des blocs : ', error);
      }
    );
  }




}




