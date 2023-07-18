import { BehaviorSubject } from 'rxjs';

export class routes {

  private static Url = '';


  public static get baseUrl(): string {
    return this.Url;
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get dealsDashboard(): string {
    return this.baseUrl + '/deals-dashboard';
  }
  public static get projectsDashboard(): string {
    return this.baseUrl + '/projects-dashboard';
  }
  public static get leadsDashboard(): string {
    return this.baseUrl + '/leads-dashboard';
  }
  public static get tasks(): string {
    return this.baseUrl + '/tasks';
  }
  public static get accounts(): string {
    return this.baseUrl + '/accounts';
  }
  public static get contacts(): string {
    return this.baseUrl + '/contacts';
  }
  public static get companies(): string {
    return this.baseUrl + '/companies';
  }
  public static get leads(): string {
    return this.baseUrl + '/leads';
  }
  public static get leadsKanbanView(): string {
    return this.baseUrl + '/leads-kanban-view';
  }
  public static get deals(): string {
    return this.baseUrl + '/deals';
  }
  public static get dealsKanbanView(): string {
    return this.baseUrl + '/deals-kanban-view';
  }
  public static get projects(): string {
    return this.baseUrl + '/projects';
  }
  public static get workflows(): string {
    return this.baseUrl + '/workflows';
  }
  public static get emails(): string {
    return this.baseUrl + '/emails';
  }
  public static get socials(): string {
    return this.baseUrl + '/socials';
  }
  public static get projectsKanbanView(): string {
    return this.baseUrl + '/projects-kanban-view';
  }
  public static get reports(): string {
    return this.baseUrl + '/reports';
  }
  public static get blog(): string {
    return this.baseUrl + '/blog';
  }

  public static get scheduledEmail(): string {
    return this.emails + '/email-trigger';
  }
  public static get quickemail(): string {
    return this.emails + '/quick-email';
  }
  public static get signature(): string {
    return this.emails + '/signature';
  }

  public static get quicktrigger(): string {
    return this.socials + '/quick-trigger';
  }
  public static get scheduledTrigger(): string {
    return this.socials + '/social-trigger';
  }
  
  public static get addblog(): string {
    return this.baseUrl + '/blog/add-blogs';
  }
  public static get editblog(): string {
    return this.baseUrl + '/blog/edit-blog';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get categoriesblog(): string {
    return this.baseUrl + '/blog/categories';
  }
  public static get pendingblog(): string {
    return this.baseUrl + '/blog/pending-blog';
  }
  public static get invoices(): string {
    return this.baseUrl + '/invoices';
  }
  public static get invoicesList(): string {
    return this.baseUrl + '/invoices/invoices-list';
  }
  public static get invoicesGrid(): string {
    return this.baseUrl + '/invoices/invoices-grid';
  }
  public static get invoicesOverdue(): string {
    return this.baseUrl + '/invoices/invoices-overdue';
  }
  public static get invoicesDraft(): string {
    return this.baseUrl + '/invoices/invoices-draft';
  }
  public static get invoicesRecurring(): string {
    return this.baseUrl + '/invoices/invoices-recurring';
  }
  public static get invoicesCancelled(): string {
    return this.baseUrl + '/invoices/invoices-cancelled';
  }
  public static get invoicesPaid(): string {
    return this.baseUrl + '/invoices/invoices-paid';
  }
  public static get addInvoice(): string {
    return this.baseUrl + '/invoices/add-invoice';
  }
  public static get editinvoice(): string {
    return this.baseUrl + '/invoices/edit-invoice';
  }
  public static get viewinvoice(): string {
    return this.baseUrl + '/invoices/view-invoice';
  }
  public static get invoicesSettings(): string {
    return this.baseUrl + '/invoices/invoices-settings';
  }
  public static get taxSettings(): string {
    return this.baseUrl + '/invoices/tax-settings';
  }
  public static get bankSettings(): string {
    return this.baseUrl + '/invoices/bank-settings';
  }
  public static get generalSettings(): string {
    return this.baseUrl + '/settings/general-settings';
  }
  public static get paymentSettings(): string {
    return this.baseUrl + '/settings/payment-settings';
  }
  public static get emailSettings(): string {
    return this.baseUrl + '/settings/email-settings';
  }
  public static get socialSettings(): string {
    return this.baseUrl + '/settings/social-settings';
  }
  public static get socialLinks(): string {
    return this.baseUrl + '/settings/social-links';
  }
  public static get seoSettings(): string {
    return this.baseUrl + '/settings/seo-settings';
  }
  public static get othersSettings(): string {
    return this.baseUrl + '/settings/others-settings';
  }
  public static get localization(): string {
    return this.baseUrl + '/settings/localization';
  }
  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get activities(): string {
    return this.baseUrl + '/activities';
  }
  public static get templates(): string {
    return this.baseUrl + '/templates';
  }

  public static get teachersedit(): string {
    return this.baseUrl + '/teachers/teachers-edit';
  }

  public static get errorPage404(): string {
    return this.baseUrl + '/error-404';
  }
  public static get errorPage500(): string {
    return this.baseUrl + '/error-500';
  }
  public static get faq(): string {
    return this.baseUrl + '/faq';
  }
  public static get terms(): string {
    return this.baseUrl + '/terms';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/privacy-policy';
  }
  public static get blankPage(): string {
    return this.baseUrl + '/blank-page';
  }
  public static get components(): string {
    return this.baseUrl + '/components';
  }
  public static get element(): string {
    return this.baseUrl + '/element';
  }
  public static get sweetAlert(): string {
    return this.baseUrl + '/element/sweet-alert';
  }
  public static get popover(): string {
    return this.baseUrl + '/element/popover';
  }
  public static get tooltip(): string {
    return this.baseUrl + '/element/tooltip';
  }
  public static get ribbon(): string {
    return this.baseUrl + '/element/ribbon';
  }
  public static get drag_drop(): string {
    return this.baseUrl + '/element/draganddrop';
  }
  public static get clipboard(): string {
    return this.baseUrl + '/element/clipboard';
  }
  public static get range_slider(): string {
    return this.baseUrl + '/element/range-slider';
  }
  public static get rating(): string {
    return this.baseUrl + '/element/rating';
  }
  public static get toastr(): string {
    return this.baseUrl + '/element/toast';
  }
  public static get text_editor(): string {
    return this.baseUrl + '/element/text-editor';
  }
  public static get counter(): string {
    return this.baseUrl + '/element/counter';
  }
  public static get scrollbar(): string {
    return this.baseUrl + '/element/scroll-bar';
  }
  public static get spinner(): string {
    return this.baseUrl + '/element/spinner';
  }
  public static get notification(): string {
    return this.baseUrl + '/element/notification';
  }
  public static get light_box(): string {
    return this.baseUrl + '/element/light-box';
  }
  public static get stickyNote(): string {
    return this.baseUrl + '/element/sticky-notes';
  }
  public static get timeline(): string {
    return this.baseUrl + '/element/timeline';
  }
  public static get horizontal_timeline(): string {
    return this.baseUrl + '/element/horizontal-timeline';
  }
  public static get form_wizard(): string {
    return this.baseUrl + '/element/form-wizard';
  }
  public static get charts(): string {
    return this.baseUrl + '/charts';
  }
  public static get apex_charts(): string {
    return this.baseUrl + '/charts/apex-charts';
  }
  public static get ng2_charts(): string {
    return this.baseUrl + '/charts/ng2-charts';
  }
  public static get primeNg(): string {
    return this.baseUrl + '/charts/prime-ng';
  }
  public static get icons(): string {
    return this.baseUrl + '/icons';
  }
  public static get flag(): string {
    return this.baseUrl + '/icons/flag';
  }
  public static get weather(): string {
    return this.baseUrl + '/icons/weather';
  }
  public static get typicon(): string {
    return this.baseUrl + '/icons/typicon';
  }
  public static get themify(): string {
    return this.baseUrl + '/icons/themify';
  }
  public static get simple_line(): string {
    return this.baseUrl + '/icons/simpleline';
  }
  public static get pe7(): string {
    return this.baseUrl + '/icons/pe7';
  }
  public static get material(): string {
    return this.baseUrl + '/icons/material';
  }
  public static get ionic(): string {
    return this.baseUrl + '/icons/ionic';
  }
  public static get feather(): string {
    return this.baseUrl + '/icons/feather';
  }
  public static get fontawesome(): string {
    return this.baseUrl + '/icons/fontawesome';
  }
  public static get forms(): string {
    return this.baseUrl + '/forms';
  }
  public static get basicinputs(): string {
    return this.baseUrl + '/form-basic-inputs';
  }
  public static get inputgroups(): string {
    return this.baseUrl + '/form-input-groups';
  }
  public static get horizontalform(): string {
    return this.baseUrl + '/form-horizontal';
  }
  public static get verticalform(): string {
    return this.baseUrl + '/form-vertical';
  }
  public static get formmask(): string {
    return this.baseUrl + '/form-mask';
  }
  public static get formvalidation(): string {
    return this.baseUrl + '/form-validation';
  }
  public static get tables(): string {
    return this.baseUrl + '/tables';
  }
  public static get basictables(): string {
    return this.baseUrl + '/tables-basic';
  }
  public static get datatables(): string {
    return this.baseUrl + '/data-tables';
  }
}
