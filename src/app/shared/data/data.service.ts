import { HttpClient,HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { routes } from '../core.index';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  httpOptions = {
        headers: new HttpHeaders({
         'Content-Type': 'application/json',
         "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
        })
  };


  constructor(private http: HttpClient) { }
  url = environment.apiUrl;
  allAppliedCandidates: any;
  


  public post(url:any,model:any):Observable<any> {
    return this.http.post(url,model,this.httpOptions).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public get(url:any):Observable<any> {
    return this.http.get(url,this.httpOptions).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public delete(url:any):Observable<any> {
    return this.http.delete(url,this.httpOptions).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public uploadFile(url:any,file: Blob): Observable<HttpEvent<void>> {
        const formData = new FormData();
        formData.append('file', file);
     
        return this.http.request(new HttpRequest(
          'POST',`${environment.apiUrl}`+url ,formData,
          {reportProgress: true}));
      }

  public getContacts(): Observable<any> {
    return this.get(this.url + 'Contact/GetAll');
  }

  public updateContacts(model: any): Observable<any> {

    return this.post(this.url + 'Contact/Update', model);
  }
  public updateAccount(model: any): Observable<any> {

    return this.post(this.url + 'Account/Update', model);
  }
  public updateEmailTemplate(model: any): Observable<any> {

    return this.post(this.url + 'EmailTemplate/Update', model)
  }
  public updateSignature(model: any): Observable<any> {

    return this.post(this.url + 'Signature/Update', model)
  }
  public AddStatus(id: any): Observable<any> {
    
    return this.post(this.url + 'EmailTemplate/Add/' + id , null);
  }
  public AddQuickTrigger(model: any): Observable<any> {
    return this.post(this.url + 'QuickEmailTrigger/Add/' , model);
  }
  
  public DeleteTemplate(id: any): Observable<any> {
    return this.delete(this.url + 'EmailTemplate/Delete/' + id)
  }
  public DeleteSignature(id: any): Observable<any> {
    return this.delete(this.url + 'Signature/Delete/' + id)
  }
  public updateEmailTrigger(name: any): Observable<any> {
    return this.post(this.url + 'EmailTrigger/Update', name);
  }

  public queueEmailTrigger(name: any): Observable<any> {
    return this.post(this.url + 'EmailTrigger/QuickEmail', name);
  }

  public DeleteTriggers(id: any): Observable<any> {
    return this.delete(this.url + 'EmailTrigger/Delete/' + id)
  }

  public getEmailTemplate(model:any): Observable<any> {
    return this.post(this.url + 'EmailTemplate/GetAll',model);
  }
  public getSignature(): Observable<any> {
    return this.get(this.url + 'Signature/GetAll')
  }
  public getSign(signName:any): Observable<any> {
    return this.get(this.url + 'Signature/GetSignature/'+signName);
  }
  public getEmailTrigger(model:any): Observable<any> {
    return this.post(this.url + 'EmailTrigger/GetAll',model);
  }
  
  public getSocialTrigger(model:any): Observable<any> {
    return this.post(this.url + 'SocialTrigger/GetAll',model);
  }

  public updateSocialTrigger(name: any): Observable<any> {
    return this.post(this.url + 'SocialTrigger/Update', name);
  }

  public DeleteSocialTriggers(id: any): Observable<any> {

    return this.delete(this.url + 'SocialTrigger/Delete/' + id)
  }

  public queueSocialTrigger(name: any): Observable<any> {
    return this.post(this.url + 'SocialTrigger/queuesent', name);
  }

  public DeleteContacts(id: any): Observable<any> {

    return this.delete(this.url + 'Contact/Delete/' + id)
  }

  public DeleteAccount(id: any): Observable<any> {

    return this.delete(this.url + 'Account/Delete/' + id)
  }

  public updateCompany(name: any): Observable<any> {
    return this.post(this.url + 'Company/Update', name);
  }

  public DeleteCompany(id: any): Observable<any> {
    return this.delete(this.url + 'Company/Delete/' + id)
  }

  public updateLeads(name: any): Observable<any> {
    return this.post(this.url + 'Leads/Update', name);
  }

  public getLeadsGetAll(model: any): Observable<any> {
    return this.post(this.url + 'Leads/GetAll', model);
  }
  public Deleteleads(id: any): Observable<any> {
    return this.delete(this.url + 'Leads/Delete/' + id)
  }

  public getCompanyNames(): Observable<any> {
    return this.get(this.url + 'Company/GetCompanyNames');
  }

  public getCompanyGetAll(model: any): Observable<any> {
    return this.post(this.url + 'Company/GetAll', model);
  }

  public AddFollower(id: any, type: any): Observable<any> {
    return this.post(this.url + 'Follower/Add/' + id + "/" + type, null);
  }

  public getContactGetAll(model: any): Observable<any> {
    return this.post(this.url + 'Contact/GetAll', model);
  }

  public getAccountGetAll(model: any): Observable<any> {
    return this.post(this.url + 'Account/GetAll', model);
  }

  public getConactFollower(): Observable<any> {
    return this.get(this.url + 'Contact/GetAllFollows');
  }

  public updateDeals(name: any): Observable<any> {
    return this.post(this.url + 'Deal/Update', name)
  }
  
  public deleteDeals(id: any): Observable<any> {
    return this.delete(this.url + 'Deal/Delete/' + id)
  }

  public getDealGetAll(model: any): Observable<any> {;
    return this.post(this.url + 'Deal/GetAll', model)
  }

  public updateProject(name: any): Observable<any> {
    return this.post(this.url + 'Project/Update', name)
  }
  
  public getProjectGetAll(model: any): Observable<any> {
    return this.post(this.url + 'Project/GetAll', model)
  }

  public DeleteProject(id: any): Observable<any> {
    return this.delete(this.url + 'Project/Delete/' + id)
  }
  public updateWorkflows(name: any): Observable<any> {
    return this.post(this.url + 'Project/Update', name)
  }
  
  public getWorkflowsGetAll(model: any): Observable<any> {
    return this.post(this.url + 'Project/GetAll', model)
  }

  public DeleteWorkflows(id: any): Observable<any> {
    return this.delete(this.url + 'Project/Delete/' + id)
  }
  public getActivities(): Observable<any> {
    return this.get('assets/json/activities.json')
  }

  public getReports(): Observable<any> {
    return this.get('assets/json/reports.json')
  }

  public getInvoicesList(): Observable<any> {
    return this.get('assets/json/invoicelist.json')
  }

  public getDataTable(): Observable<any> {
    return this.get('assets/json/data-tables.json')
  }

  public getInvoicesCancelled(): Observable<any> {
    return this.get('assets/json/invoices-cancelled.json')
  }

  public getInvoicesDraft(): Observable<any> {
    return this.get('assets/json/invoices-draft.json')
  }

  public getInvoicesOverdue(): Observable<any> {
    return this.get('assets/json/invoices-overdue.json')
  }

  public getInvoicesPaid(): Observable<any> {
    return this.get('assets/json/invoices-paid.json')
  }

  public getInvoicesRecurring(): Observable<any> {
    return this.get('assets/json/invoices-recurring.json')
  }

  public listtemplate(): Observable<any> {
    return this.get('addtemplate/GetAll')
  }
  
    public getTask(): Observable<any> {
    return this.get('assets/json/task.json')
  }

  public sideBar = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'dashboard',
          icon: 'home',
          subMenus: [
            {
              menuValue: 'Deals Dashboard',
              route: routes.dealsDashboard,
              base: routes.dealsDashboard,
            },
            {
              menuValue: 'Projects Dashboard',
              route: routes.projectsDashboard,
              base: routes.projectsDashboard,
            },
            {
              menuValue: 'Leads Dashboard',
              route: routes.leadsDashboard,
              base: routes.leadsDashboard,
            },
          ],
        },
        {
          menuValue: 'Tasks',
          route: routes.tasks,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'check-square',
          base: routes.tasks,
          subMenus: [],
        },
        {
          menuValue: 'Accounts',
          route: routes.accounts,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'smartphone',
          base: routes.accounts,
          subMenus: [],
        },
        {
          menuValue: 'Contacts',
          route: routes.contacts,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'smartphone',
          base: routes.contacts,
          subMenus: [],
        },
        {
          menuValue: 'Companies',
          route: routes.companies,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'database',
          base: routes.companies,
          subMenus: [],
        },
        {
          menuValue: 'Leads',
          route: routes.leads,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user',
          base: routes.leads,
          subMenus: [],
        },
        {
          menuValue: 'Deals',
          route: routes.deals,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'radio',
          base: routes.deals,
          subMenus: [],
        },
        {
          menuValue: 'Projects',
          route: routes.projects,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          base: routes.projects,
          subMenus: [],
        },
        {
          menuValue: 'Workflows',
          route: routes.workflows,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'list',
          base: routes.workflows,
          subMenus: [],
        },
        {
          menuValue: 'Templates',
          route: routes.templates,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'inbox',
          base: routes.templates,
          subMenus: [],
        },
        {
          menuValue: 'Emails',
          base: routes.emails,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'mail',
          subMenus: [
            {
              menuValue: 'Quick Email',
              route: routes.quickemail,
              base: routes.quickemail,
             },
            {
              menuValue: 'Scheduled Email',
              route: routes.scheduledEmail,
              base: routes.scheduledEmail,
            },
            {
              menuValue: 'Signature',
              route: routes.signature,
              base: routes.signature,
            }
          ],
        },
        {
          menuValue: 'Socials',
          base: routes.socials,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'zap',
          subMenus: [
            {
              menuValue: 'Quick Trigger',
              route: routes.quicktrigger,
              base: routes.quicktrigger,
             },
            {
              menuValue: 'Scheduled Trigger',
              route: routes.scheduledTrigger,
              base: routes.scheduledTrigger,
            }
          ],
        },
        {
          menuValue: 'reports',
          route: routes.reports,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bar-chart-2',
          base: routes.reports,
          subMenus: [],
        },
        {
          menuValue: 'Activities',
          route: routes.activities,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
          base: routes.activities,
          subMenus: [],
        },

        {
          menuValue: 'Invoices',
          base: 'invoices',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'clipboard',
          subMenus: [
            {
              menuValue: 'Invoices List',
              route: routes.invoicesList,
              base: routes.invoicesList,
            },
            {
              menuValue: 'Invoices Grid',
              route: routes.invoicesGrid,
              base: routes.invoicesGrid,
            },
            {
              menuValue: 'Add Invoices',
              route: routes.addInvoice,
              base: routes.addInvoice,
            },
            {
              menuValue: 'Edit Invoices',
              route: routes.editinvoice,
              base: routes.editinvoice,
            },
            {
              menuValue: 'Invoices Details',
              route: routes.viewinvoice,
              base: routes.viewinvoice,
            },
            {
              menuValue: 'Invoices Settings',
              route: routes.invoicesSettings,
              base: routes.invoicesSettings,
            },
          ],
        },
        
        {
          menuValue: 'Settings',
          route: routes.generalSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'settings',
          base: 'settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Error Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'alert-triangle',
          base: '1',
          subMenus: [
            {
              menuValue: '404 Error',
              route: routes.errorPage404,
              base: routes.errorPage404,
            },
            {
              menuValue: '500 Error',
              route: routes.errorPage500,
              base: routes.errorPage500,
            },
          ],
        },
        {
          menuValue: 'Pages',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'pages',
          icon: 'list',
          subMenus: [
            {
              menuValue: 'FAQ',
              route: routes.faq,
              base: routes.faq,
            },
            {
              menuValue: 'Terms',
              route: routes.terms,
              base: routes.terms,
            },
            {
              menuValue: 'Privacy Policy',
              route: routes.privacyPolicy,
              base: routes.privacyPolicy,
            },
            {
              menuValue: 'Blank Page',
              route: routes.blankPage,
              base: routes.blankPage,
            },
          ],
        },
      ],
    },
    {
      tittle: 'UI Interface',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Components',
          route: routes.components,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layout',
          base: routes.components,
          subMenus: [],
        },
        {
          menuValue: 'Elements',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'element',
          icon: 'box',
          subMenus: [
            {
              menuValue: 'Sweet Alerts',
              route: routes.sweetAlert,
              base: routes.sweetAlert,
            },
            {
              menuValue: 'Tooltip',
              route: routes.tooltip,
              base: routes.tooltip,
            },
            {
              menuValue: 'Popover',
              route: routes.popover,
              base: routes.popover,
            },
            {
              menuValue: 'Ribbon',
              route: routes.ribbon,
              base: routes.ribbon,
            },
            {
              menuValue: 'Clipboard',
              route: routes.clipboard,
              base: routes.clipboard,
            },
            {
              menuValue: 'Drag & Drop',
              route: routes.drag_drop,
              base: routes.drag_drop,
            },
            {
              menuValue: 'Range Slider',
              route: routes.range_slider,
              base: routes.range_slider,
            },
            {
              menuValue: 'Rating',
              route: routes.rating,
              base: routes.rating,
            },
            {
              menuValue: 'Toastr',
              route: routes.toastr,
              base: routes.toastr,
            },
            {
              menuValue: 'Text Editor',
              route: routes.text_editor,
              base: routes.text_editor,
            },
            {
              menuValue: 'Counter',
              route: routes.counter,
              base: routes.counter,
            },
            {
              menuValue: 'Scrollbar',
              route: routes.scrollbar,
              base: routes.scrollbar,
            },
            {
              menuValue: 'Spinner',
              route: routes.spinner,
              base: routes.spinner,
            },
            {
              menuValue: 'Notification',
              route: routes.notification,
              base: routes.notification,
            },
            {
              menuValue: 'Lightbox',
              route: routes.light_box,
              base: routes.light_box,
            },
            {
              menuValue: 'Timeline',
              route: routes.timeline,
              base: routes.timeline,
            },
            {
              menuValue: 'Horizontal Timeline',
              route: routes.horizontal_timeline,
              base: routes.horizontal_timeline,
            },
            {
              menuValue: 'Form Wizard',
              route: routes.form_wizard,
              base: routes.form_wizard,
            },
          ],
        },
        {
          menuValue: 'Charts',
          base: 'charts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'bar-chart-2',
          subMenus: [
            {
              menuValue: 'Apexcharts',
              route: routes.apex_charts,
              base: routes.apex_charts,
            },
            {
              menuValue: 'Ng2 Charts',
              route: routes.ng2_charts,
              base: routes.ng2_charts,
            },
          ],
        },
        {
          menuValue: 'Icons',
          base: 'icons',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'award',
          subMenus: [
            {
              menuValue: 'Fontawesome',
              route: routes.fontawesome,
              base: routes.fontawesome,
            },
            {
              menuValue: 'Feather',
              route: routes.feather,
              base: routes.feather,
            },
            {
              menuValue: 'Ionic',
              route: routes.ionic,
              base: routes.ionic,
            },
            {
              menuValue: 'Material',
              route: routes.material,
              base: routes.material,
            },
            {
              menuValue: 'Pe7',
              route: routes.pe7,
              base: routes.pe7,
            },
            {
              menuValue: 'Simpleline',
              route: routes.simple_line,
              base: routes.simple_line,
            },
            {
              menuValue: 'Themify',
              route: routes.themify,
              base: routes.themify,
            },
            {
              menuValue: 'Weather',
              route: routes.weather,
              base: routes.weather,
            },
            {
              menuValue: 'Typicon',
              route: routes.typicon,
              base: routes.typicon,
            },
            {
              menuValue: 'Flag',
              route: routes.flag,
              base: routes.flag,
            },
          ],
        },
        {
          menuValue: 'Forms',
          base: 'forms',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'credit-card',
          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.basicinputs,
              base: routes.basicinputs,
            },
            {
              menuValue: 'Input Groups',
              route: routes.inputgroups,
              base: routes.inputgroups,
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.horizontalform,
              base: routes.horizontalform,
            },
            {
              menuValue: 'Vertical Form',
              route: routes.verticalform,
              base: routes.verticalform,
            },
            {
              menuValue: 'Form Mask',
              route: routes.formmask,
              base: routes.formmask,
            },
            {
              menuValue: 'Form Validation',
              route: routes.formvalidation,
              base: routes.formvalidation,
            },
          ],
        },
        {
          menuValue: 'Tables',
          base: 'tables',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'box',
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.basictables,
              base: routes.basictables,
            },
            {
              menuValue: 'Data Table',
              route: routes.datatables,
              base: routes.datatables,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Extras',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Multi Level',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'command',
          subMenus: [
            {
              menuValue: 'Level 1',
              route: '',
            },
            {
              menuValue: 'Level 1',
              route: '',
            },
          ],
        },
      ],
    },
  ];

  public invoicesGrid = [
    {
      gridId: "IN093439#@09",
      category: "Software",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount: "$5200",
      dueDate: "23 June 2022",
      status: "Paid",
      img: "assets/img/profiles/avatar-04.jpg"
    },
    {
      gridId: "IN093439#@10",
      category: "Food",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount: "$3800",
      dueDate: "24 June 2022",
      status: "Overdue",
      text: "Overdue   14 days",
      img: "assets/img/profiles/avatar-06.jpg"
    },
    {
      gridId: "IN093439#@11",
      category: "Marketing",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount: "$1800",
      dueDate: "26 June 2022",
      status: "Cancelled",
      img: "assets/img/profiles/avatar-08.jpg"
    },
    {
      gridId: "IN093439#@12",
      category: "Repairs",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount: "$4800",
      dueDate: "28 June 2022",
      status: "Sent",
      img: "assets/img/profiles/avatar-10.jpg"
    },
    {
      gridId: "IN093439#@13",
      category: "Software",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount: "$6200",
      dueDate: "30 June 2022",
      status: "Cancelled",
      img: "assets/img/profiles/avatar-11.jpg"
    },
    {
      gridId: "IN093439#@14",
      category: "Repairs",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount: "$3200",
      dueDate: "30 June 2022",
      status: "Sent",
      img: "assets/img/profiles/avatar-09.jpg"
    },
    {
      gridId: "IN093439#@15",
      category: "Food",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount: "$4300",
      dueDate: "30 June 2022",
      status: "Overdue",
      text: "Overdue 10 days",
      img: "assets/img/profiles/avatar-12.jpg"
    },
    {
      gridId: "IN093439#@16",
      category: "Marketing",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount: "$6200",
      dueDate: "05 July 2022",
      status: "Paid",
      img: "assets/img/profiles/avatar-03.jpg"
    },
  ];

  socialLinks = [
    {
      icon: "facebook",
      placeholder: "https://www.facebook.com"
    },
    {
      icon: "twitter",
      placeholder: "https://www.twitter.com"

    },
    {
      icon: "youtube",
      placeholder: "https://www.youtube.com"

    },
    {
      icon: "linkedin",
      placeholder: "https://www.linkedin.com"
    }
  ];
  reportPreview = [
    {
      reportName: "Evaluation",
      dateCreated: "02, june 2020",
      createdBy: "John Doe",
      company: "umbrella"
    },
    {
      reportName: "Inventry",
      dateCreated: "07, Aug 2020",
      createdBy: "John Doe",
      company: "Solemen"
    },
    {
      reportName: "Project Management",
      dateCreated: "02, April 2020",
      createdBy: "John Doe",
      company: "Claimpett"
    }
  ]
}
