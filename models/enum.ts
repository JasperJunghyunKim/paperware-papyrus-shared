export type PackagingType = 'ROLL' | 'REAM' | 'SKID' | 'BOX';
export type OfficialPriceType = 'NONE' | 'MANUAL_NONE' | 'RETAIL' | 'WHOLESALE';
export type PriceUnit = 'WON_PER_TON' | 'WON_PER_REAM' | 'WON_PER_BOX';
export type DiscountRateUnit =
  | 'WON_PER_TON'
  | 'WON_PER_REAM'
  | 'WON_PER_BOX'
  | 'PERCENT';
export type ShippingType = 'DELIVERY' | 'PICKUP' | 'STORE';
export type StockEventStatus = 'NORMAL' | 'CANCELLED' | 'PENDING';
export type TaskType = 'CONVERTING' | 'GUILLOTINE' | 'RELEASE';
export type DiscountType = 'NONE' | 'MANUAL_NONE' | 'DEFAULT' | 'SPECIAL';
export type BusinessRelationshipRequestStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'REJECTED';
export type OrderType = 'NORMAL' | 'DEPOSIT' | 'OUTSOURCE_PROCESS' | 'ETC';

export type OrderStatus =
  | 'ORDER_PREPARING'
  | 'ORDER_REQUESTED'
  | 'ORDER_REJECTED'
  | 'OFFER_PREPARING'
  | 'OFFER_REQUESTED'
  | 'OFFER_REJECTED'
  | 'ACCEPTED'
  | 'ORDER_CANCELLED'
  | 'OFFER_CANCELLED';
export type TaskStatus =
  | 'PREPARING'
  | 'PROGRESSING'
  | 'PROGRESSED'
  | 'CANCELLED';
export type Method =
  | 'ACCOUNT_TRANSFER'
  | 'PROMISSORY_NOTE'
  | 'CARD_PAYMENT'
  | 'CASH'
  | 'OFFSET'
  | 'ETC'
  | 'All';
export type Subject =
  /// paid: 외상 매출금 collected: 외상 매입금
  | 'ACCOUNTS_RECEIVABLE'
  /// paid: 미수금 collected: 미지급금
  | 'UNPAID'
  /// paid: 선수금 collected: 선지급금
  | 'ADVANCES'
  /// paid: 잡이익 collected: 잡손실
  | 'MISCELLANEOUS_INCOME'
  /// paid: 상품 매출 collected: 상품 매입
  | 'PRODUCT_SALES'
  | 'ETC'
  | 'All';
export type AccountedType = 'PAID' | 'COLLECTED';
export type OfficialPriceMapType = 'WHOLESALE' | 'RETAIL';
export type AccountType = 'DEPOSIT';
export type Bank =
  | 'KAKAO_BANK'
  | 'KOOKMIN_BANK'
  | 'KEB_HANA_BANK'
  | 'NH_BANK'
  | 'SHINHAN_BANK'
  | 'IBK'
  | 'WOORI_BANK'
  | 'CITI_BANK_KOREA'
  | 'HANA_BANK'
  | 'SC_FIRST_BANK'
  | 'KYONGNAM_BANK'
  | 'KWANGJU_BANK'
  | 'DAEGU_BANK'
  | 'DEUTSCHE_BANK'
  | 'BANK_OF_AMERICA'
  | 'BUSAN_BANK'
  | 'NACF'
  | 'SAVINGS_BANK'
  | 'NACCSF'
  | 'SUHYUP_BANK'
  | 'NACUFOK'
  | 'POST_OFFICE'
  | 'JEONBUK_BANK'
  | 'JEJU_BANK'
  | 'K_BANK'
  | 'TOS_BANK';
export type CardCompany =
  | 'BC_CARD'
  | 'KB_CARD'
  | 'SAMSUNG_CARD'
  | 'SHINHAN_CARD'
  | 'WOORI_CARD'
  | 'HANA_CARD'
  | 'LOTTE_CARD'
  | 'HYUNDAI_CARD'
  | 'NH_CARD';
export type DiscountRateMapType = 'BASIC' | 'SPECIAL';
export type DiscountRateType = 'SALES' | 'PURCHASE';
export type SecurityStatus =
  | 'NONE'
  | 'ENDORSED'
  | 'NORMAL_PAYMENT'
  | 'DISCOUNT_PAYMENT'
  | 'INSOLVENCY'
  | 'LOST'
  | 'SAFEKEEPING';
export type SecurityType =
  | 'PROMISSORY_NOTE'
  | 'ELECTRONIC_NOTE'
  | 'ELECTRONIC_BOND'
  | 'PERSONAL_CHECK'
  | 'DEMAND_DRAFT'
  | 'HOUSEHOLD_CHECK'
  | 'STATIONERY_NOTE'
  | 'ETC';
export type DrawedStatus = 'SELF' | 'ACCOUNTED';
export type EndorsementType = 'NONE' | 'SELF_NOTE' | 'OTHERS_NOTE';
export type ShippingStatus = 'PREPARING' | 'PROGRESSING' | 'DONE';
export type DepositType = 'SALES' | 'PURCHASE';
export type PlanType =
  | 'INHOUSE_CREATE'
  | 'INHOUSE_MODIFY'
  | 'INHOUSE_RELOCATION'
  | 'INHOUSE_PROCESS'
  | 'INHOUSE_STOCK_QUANTITY_CHANGE'
  | 'TRADE_NORMAL_SELLER'
  | 'TRADE_NORMAL_BUYER'
  | 'TRADE_WITHDRAW_SELLER'
  | 'TRADE_WITHDRAW_BUYER'
  | 'TRADE_OUTSOURCE_PROCESS_SELLER'
  | 'TRADE_OUTSOURCE_PROCESS_BUYER';
export type PlanStatus =
  | 'PREPARING'
  | 'PROGRESSING'
  | 'PROGRESSED'
  | 'CANCELLED';
export type InvoiceStatus =
  | 'WAIT_LOADING'
  | 'WAIT_SHIPPING'
  | 'ON_SHIPPING'
  | 'DONE_SHIPPING';
export type TaxInvoiceStatus =
  | 'PREPARING'
  | 'ON_ISSUE'
  | 'ISSUED'
  | 'ISSUE_FAILED'
  | 'ON_SEND'
  | 'SENDED'
  | 'SEND_FAILED';
export type TaxInvoicePurposeType = 'RECEIPT' | 'CHARGE';
