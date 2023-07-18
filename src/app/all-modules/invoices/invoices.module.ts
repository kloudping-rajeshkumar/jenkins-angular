import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicesGridComponent } from './invoices-grid/invoices-grid.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { InvoicesSettingsComponent } from './invoices-settings/invoices-settings.component';
import { TaxSettingsComponent } from './tax-settings/tax-settings.component';
import { BankSettingsComponent } from './bank-settings/bank-settings.component';
import { InvoicesPaidComponent } from './invoices-paid/invoices-paid.component';
import { InvoicesOverdueComponent } from './invoices-overdue/invoices-overdue.component';
import { InvoicesDraftComponent } from './invoices-draft/invoices-draft.component';
import { InvoicesRecurringComponent } from './invoices-recurring/invoices-recurring.component';
import { InvoicesCancelledComponent } from './invoices-cancelled/invoices-cancelled.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesListComponent,
    InvoicesGridComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
    ViewInvoiceComponent,
    InvoicesSettingsComponent,
    TaxSettingsComponent,
    BankSettingsComponent,
    InvoicesPaidComponent,
    InvoicesOverdueComponent,
    InvoicesDraftComponent,
    InvoicesRecurringComponent,
    InvoicesCancelledComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class InvoicesModule { }
