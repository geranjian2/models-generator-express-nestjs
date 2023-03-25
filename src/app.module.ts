import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';


import { AccountTypeModule } from './modules/account-types/module/account-types.module';
import { AgreementModule } from './modules/agreements/module/agreements.module';
import { BankModule } from './modules/banks/module/banks.module';
import { BillingModule } from './modules/billings/module/billings.module';
import { BusinessModule } from './modules/businesses/module/businesses.module';
import { CityModule } from './modules/cities/module/cities.module';
import { CompanyModule } from './modules/companies/module/companies.module';
import { CompanyBankModule } from './modules/company-banks/module/company-banks.module';
import { CompanyPlanModule } from './modules/company-plans/module/company-plans.module';
import { CompanyTeamModule } from './modules/company-teams/module/company-teams.module';
import { CountryModule } from './modules/countries/module/countries.module';
import { DepartmentModule } from './modules/departments/module/departments.module';
import { GroupPayingModule } from './modules/group-payings/module/group-payings.module';
import { GroupPayoutModule } from './modules/group-payouts/module/group-payouts.module';
import { InvoicePaymentModule } from './modules/invoices-payments/module/invoices-payments.module';
import { PermissionModule } from './modules/permissions/module/permissions.module';
import { PlanModule } from './modules/plans/module/plans.module';
import { RolePermissionModule } from './modules/role-permissions/module/role-permissions.module';
import { RoleModule } from './modules/roles/module/roles.module';
import { SequelizeDatumModule } from './modules/sequelize-data/module/sequelize-data.module';
import { SequelizeMigrationModule } from './modules/sequelize-migrations/module/sequelize-migrations.module';
import { TeamPermissionModule } from './modules/team-permissions/module/team-permissions.module';
import { TeamModule } from './modules/teams/module/teams.module';
import { ThirdModule } from './modules/thirds/module/thirds.module';
import { ThirdBankModule } from './modules/third-banks/module/third-banks.module';
import { ThirdCategoryModule } from './modules/third-categories/module/third-categories.module';
import { ThirdUserModule } from './modules/third-users/module/third-users.module';
import { ThirdUserPermissionModule } from './modules/third-users-permissions/module/third-users-permissions.module';
import { TransactionModule } from './modules/transactions/module/transactions.module';
import { TransactionDetailModule } from './modules/transaction-details/module/transaction-details.module';
import { TransactionPayoutModule } from './modules/transaction-payouts/module/transaction-payouts.module';
import { TransactionPayoutDetailModule } from './modules/transaction-payouts-details/module/transaction-payouts-details.module';
import { TransactionResponseModule } from './modules/transaction-responses/module/transaction-responses.module';
import { TransactionResponseDetailModule } from './modules/transaction-responses-details/module/transaction-responses-details.module';
import { TypeDocumentModule } from './modules/type-documents/module/type-documents.module';
import { UserPermissionModule } from './modules/user-permissions/module/user-permissions.module';
import { UserModule } from './modules/users/module/users.module';
import { VoucherModule } from './modules/vouchers/module/vouchers.module';


@Module({
  imports: [DatabaseModule,
        AccountTypeModule,
        AgreementModule,
        BankModule,
        BillingModule,
        BusinessModule,
        CityModule,
        CompanyModule,
        CompanyBankModule,
        CompanyPlanModule,
        CompanyTeamModule,
        CountryModule,
        DepartmentModule,
        GroupPayingModule,
        GroupPayoutModule,
        InvoicePaymentModule,
        PermissionModule,
        PlanModule,
        RolePermissionModule,
        RoleModule,
        SequelizeDatumModule,
        SequelizeMigrationModule,
        TeamPermissionModule,
        TeamModule,
        ThirdModule,
        ThirdBankModule,
        ThirdCategoryModule,
        ThirdUserModule,
        ThirdUserPermissionModule,
        TransactionModule,
        TransactionDetailModule,
        TransactionPayoutModule,
        TransactionPayoutDetailModule,
        TransactionResponseModule,
        TransactionResponseDetailModule,
        TypeDocumentModule,
        UserPermissionModule,
        UserModule,
        VoucherModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

    
