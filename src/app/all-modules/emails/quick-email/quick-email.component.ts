import { Component, OnInit, ViewChild,ElementRef } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { DataService } from "src/app/shared/data/data.service";
import { ToasterService, routes } from "src/app/shared/core.index";
import { formatDate } from '@angular/common';
import { GroupGuard } from 'src/app/group.guard';
import * as _ from 'lodash';
import { QuickEmail } from './quick-email.model';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import{AngularEditorConfig} from'@kolkov/angular-editor';
@Component({
  selector: 'app-quick-email',
  templateUrl: './quick-email.component.html',
  styleUrls: ['./quick-email.component.scss']
})
export class QuickEmailComponent implements OnInit {
  public lstTrigger: any = [];
  public routes = routes;
  public Trigger: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public showAccordion: any;
  public template: any = [];
  public quickEmailForm: UntypedFormGroup;
  public isActive: boolean = false;
  public quickEmail: QuickEmail;
  public saveEmail: boolean = false;
  public modelError: boolean | undefined;
  @ViewChild('auto') auto: any; //this is here to help tslint to see this variable and not complain about it.
  @ViewChild('input') input: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  // @ViewChild(Sort) matSort!: Sort;
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('quickCloseButton') quickCloseButton: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };
  constructor(private data: DataService, private fb: UntypedFormBuilder, private guard: GroupGuard ,private toast: ToasterService) {
    this.quickEmail = new QuickEmail({});
    this.quickEmailForm = this.createquickEmailForm();
    
  }

  ngOnInit() {

    this.getEmailtemplate();
  }
  
//email trigger
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  emailcc: Array<any> = [];
  emailto: Array<any> = [];
  emailbcc: Array<any> = [];

  add(event: MatChipInputEvent,list:Array<any>): void {
    const value = (event.value || '').trim();
   
    // Add our item
    if (value) {
      list.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: Array<any>,list:Array<any>): void {
    const index = list.indexOf(item);

    if (index >= 0) {
      list.splice(index, 1);
    }
    
  } 

  resetform() {

    this.quickEmailForm.reset(new QuickEmail({ date: null }));
    this.emailto=[];
    this.emailcc=[];
    this.emailbcc=[];   
  
  }

  QueuSave(model: any) {
    this.data.AddStatus(model.id).subscribe((res: any) => {
    });
  }


 queueEmailtrigger() {
    
      let model = this.quickEmailForm.getRawValue();
      model.emailTo=this.emailto.toString();
      model.emailCc=this.emailcc.toString();
      model.emailBcc=this.emailbcc.toString();
      this.data.queueEmailTrigger(model).subscribe((res: any) => {
        this.quickCloseButton.nativeElement.click();  
        this.toast.typeSuccess("Email successfuly sent");
        
    });
    this.resetform();
  }
 

  getEmailtemplate() {
    var model = { type: "Get Email Trigger", recentIds: [] };
    this.data.getEmailTemplate(model).subscribe((res: any) => {
      this.template = res.data;
     
    });

  }

  createquickEmailForm(): UntypedFormGroup {
    return this.fb.group({
     templateId: ['', [Validators.required,]],
     fromEmail: ['',[Validators.required,]],
     emailTo: [''],
     emailCc: [''],
     emailBcc: [''],
     saveToSendItems: [false],
     emailMonitor: [false]
    });
  }
  showAccordions(data: string) {
    if (this.showAccordion === data) {
      this.showAccordion = '';
    } else {
      this.showAccordion = data;
    }
  }

}

