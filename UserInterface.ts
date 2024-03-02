// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Userdata {
    userUniqueId: string;
    dateCreated: string;
    userName: string;
    email: string;
    hashedPassword: string;
    dateOfBirth: string;
    bankAccounts: BankAccount[];
    assets: Asset[];
    investingTransactions: InvestingTransaction[];
    debts: Debt[];
    userTransactions: UserTransaction[];
    notifications: Notification[];
    notificationSetting: NotificationSetting;
}

//* main interface
export interface BankAccount {
    bankAccountId: string;
    favourite: boolean;
    bankAccountDisplayName: string;
    bankAccountName: string;
    bankName: string;
    currentBalance: number;
    bankAccountTransactions: BankAccountTransaction[];
}

export interface BankAccountTransaction {
    bankAccountTransactionUniqueId: string;
    transactionDatetime: string;
    transactionType: TransactionType;
    amount: number;
    note: string;
}

export enum TransactionType {
    Deposit = "Deposit",
    Withdraw = "Withdraw",
}

//* main interface
export interface Asset {
    assetUniqueId: string;
    dateFirstPurchased: string;
    assetType: string;
    assetName: string;
    amount: number;
    unitPrice: number;
}

//* main interface
export interface InvestingTransaction {
    investingTransactionUniqueId: string;
    investingTransactionDatetime: string;
    transactionCategory: string;
    assetType: string;
    assetName: string;
    amount: number;
    unitPrice: number;
}

//* main interface
export interface Debt {
    debtUniqueId: string;
    debtCreatedDate: string;
    debtDisplayName: string;
    lender: string;
    debtType: string;
    dateOfBill: string;
    numberOfInstallment: number;
    loanAmount: number;
    loanBalance: number;
    "interestRate(%)": number;
    installmentAmount: number | null;
    debtPayments: DebtPayment[];
}

export interface DebtPayment {
    debtPaymentUniqueId: string;
    paidDate: string;
    paidAmount: number;
    loanBalanceLeft: number;
}

//* main interface
export interface UserTransaction {
    transactionUniqueId: string;
    userTransactionDateCreated: string;
    category: Category;
    tagging: (IncomeTag | ExpenseTag)[];
    type: IncomeType | ExpenseType;
    senderUserBankName: null | string;
    senderUserBankAccountId: null | string;
    receiverUserBankName: null | string;
    receiverUserBankAccountId: null | string;
    amount: number;
    slipImagePath: null | string;
    note: string;
}

export enum Category {
    Expense = "รายจ่าย",
    Income = "รายรับ",
    Transfer = "ย้ายเงิน",
}

export enum IncomeTag {
    Salary = "เงินเดือนประจำ",
    Wage = "ค่าจ้าง",
    Passive = "รายได้จากการลงทุน",
}

export enum ExpenseTag {
    Static = "ค่าใช้จ่ายคงที่",
    Dynamic = "ค่าใช้จ่ายผันแปร",
    Debt = "ชำระหนี้",
}

export enum IncomeType {
    Salary = "เงินเดือน",
    Interest = "ดอกเบี้ย",
    Dividend = "ปันผล",
    Profit = "กำไร",
    Rent = "ค่าเช่า",
    Other = "อื่นๆ",
}

export enum ExpenseType {
    Food = "ค่าอาหาร",
    Transportation = "ค่าเดินทาง",
    CreditCard = "บัตรเครดิต",
    Utilities = "สาธารณูปโภค",
    Other = "อื่นๆ",
}

//* main interface
export interface Notification{
    notificationUniqueId: string;
    notificationDatetime: string;
    notificationType: NotiType;
    notificationTitle: string;
    notificationDesciption: string;
}

export enum NotiType{
    stocks = "หุ้น",
    app = "แอพ",
    debt = "เงินกู้",
    investing = "การลงทุน",
    interest = "ดอกเบี้ย"
}

//* main interface
export interface NotificationSetting {
    userTransactionRecording: Ing;
    debtPaymentsNotifying:    Ing;
}

export interface Ing {
    isnotification: boolean;
    frequency:      Frequency;
}

export interface Frequency {
    frequencyType: string;
    dayOfMonth:    number | null;
}