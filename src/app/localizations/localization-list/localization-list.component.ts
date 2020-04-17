import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';
import { Localization } from '../localization';

@Component({
  selector: 'app-student-list',
  templateUrl: './localization-list.component.html',
  styleUrls: ['./localization-list.component.css']
})
export class LocalizationListComponent implements OnInit {
  public localizations: Localization[] = [];
  public localization: Localization;


  constructor(
    private localizationService: LocalizationService
  ) {
    /* this.student1 = new Student1("","","",""); */
  }

  ngOnInit(): void {
    console.log('Componente de register cargado...');
    this.getLocalization();
  }
  getLocalization(){
    this.localizationService.getLocalizations().subscribe((localizations) => {
      this.localizations = localizations;
    });
  }
}
