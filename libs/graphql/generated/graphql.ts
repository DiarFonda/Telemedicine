import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
}

/** columns and relationships of "booking" */
export interface Booking {
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  datetime: Scalars['date'];
  employee?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_paid?: Maybe<Scalars['Boolean']>;
  service: Scalars['Int'];
  /** An object relationship */
  serviceByService: Services;
}

/** aggregated selection of "booking" */
export interface Booking_Aggregate {
  aggregate?: Maybe<Booking_Aggregate_Fields>;
  nodes: Array<Booking>;
}

export interface Booking_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<Booking_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Booking_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Booking_Aggregate_Bool_Exp_Count>;
}

export interface Booking_Aggregate_Bool_Exp_Bool_And {
  arguments: Booking_Select_Column_Booking_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Booking_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Booking_Aggregate_Bool_Exp_Bool_Or {
  arguments: Booking_Select_Column_Booking_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Booking_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Booking_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Booking_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Booking_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "booking" */
export interface Booking_Aggregate_Fields {
  avg?: Maybe<Booking_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Booking_Max_Fields>;
  min?: Maybe<Booking_Min_Fields>;
  stddev?: Maybe<Booking_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Sum_Fields>;
  var_pop?: Maybe<Booking_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Var_Samp_Fields>;
  variance?: Maybe<Booking_Variance_Fields>;
}


/** aggregate fields of "booking" */
export interface Booking_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Booking_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "booking" */
export interface Booking_Aggregate_Order_By {
  avg?: InputMaybe<Booking_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Booking_Max_Order_By>;
  min?: InputMaybe<Booking_Min_Order_By>;
  stddev?: InputMaybe<Booking_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Booking_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Booking_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Booking_Sum_Order_By>;
  var_pop?: InputMaybe<Booking_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Booking_Var_Samp_Order_By>;
  variance?: InputMaybe<Booking_Variance_Order_By>;
}

/** input type for inserting array relation for remote table "booking" */
export interface Booking_Arr_Rel_Insert_Input {
  data: Array<Booking_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_On_Conflict>;
}

/** aggregate avg on columns */
export interface Booking_Avg_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "booking" */
export interface Booking_Avg_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "booking". All fields are combined with a logical 'AND'. */
export interface Booking_Bool_Exp {
  _and?: InputMaybe<Array<Booking_Bool_Exp>>;
  _not?: InputMaybe<Booking_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Bool_Exp>>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  datetime?: InputMaybe<Date_Comparison_Exp>;
  employee?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_paid?: InputMaybe<Boolean_Comparison_Exp>;
  service?: InputMaybe<Int_Comparison_Exp>;
  serviceByService?: InputMaybe<Services_Bool_Exp>;
}

/** unique or primary key constraints on table "booking" */
export enum Booking_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingPkey = 'booking_pkey'
}

/** input type for incrementing numeric columns in table "booking" */
export interface Booking_Inc_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  service?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "booking" */
export interface Booking_Insert_Input {
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  datetime?: InputMaybe<Scalars['date']>;
  employee?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_paid?: InputMaybe<Scalars['Boolean']>;
  service?: InputMaybe<Scalars['Int']>;
  serviceByService?: InputMaybe<Services_Obj_Rel_Insert_Input>;
}

/** aggregate max on columns */
export interface Booking_Max_Fields {
  company_id?: Maybe<Scalars['Int']>;
  datetime?: Maybe<Scalars['date']>;
  employee?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  service?: Maybe<Scalars['Int']>;
}

/** order by max() on columns of table "booking" */
export interface Booking_Max_Order_By {
  company_id?: InputMaybe<Order_By>;
  datetime?: InputMaybe<Order_By>;
  employee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Booking_Min_Fields {
  company_id?: Maybe<Scalars['Int']>;
  datetime?: Maybe<Scalars['date']>;
  employee?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  service?: Maybe<Scalars['Int']>;
}

/** order by min() on columns of table "booking" */
export interface Booking_Min_Order_By {
  company_id?: InputMaybe<Order_By>;
  datetime?: InputMaybe<Order_By>;
  employee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "booking" */
export interface Booking_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking>;
}

/** on_conflict condition type for table "booking" */
export interface Booking_On_Conflict {
  constraint: Booking_Constraint;
  update_columns?: Array<Booking_Update_Column>;
  where?: InputMaybe<Booking_Bool_Exp>;
}

/** Ordering options when selecting data from "booking". */
export interface Booking_Order_By {
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  datetime?: InputMaybe<Order_By>;
  employee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_paid?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
  serviceByService?: InputMaybe<Services_Order_By>;
}

/** primary key columns input for table: booking */
export interface Booking_Pk_Columns_Input {
  id: Scalars['Int'];
}

/** select columns of table "booking" */
export enum Booking_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Employee = 'employee',
  /** column name */
  Id = 'id',
  /** column name */
  IsPaid = 'is_paid',
  /** column name */
  Service = 'service'
}

/** select "booking_aggregate_bool_exp_bool_and_arguments_columns" columns of table "booking" */
export enum Booking_Select_Column_Booking_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPaid = 'is_paid'
}

/** select "booking_aggregate_bool_exp_bool_or_arguments_columns" columns of table "booking" */
export enum Booking_Select_Column_Booking_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPaid = 'is_paid'
}

/** input type for updating data in table "booking" */
export interface Booking_Set_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  datetime?: InputMaybe<Scalars['date']>;
  employee?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_paid?: InputMaybe<Scalars['Boolean']>;
  service?: InputMaybe<Scalars['Int']>;
}

/** aggregate stddev on columns */
export interface Booking_Stddev_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "booking" */
export interface Booking_Stddev_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Booking_Stddev_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "booking" */
export interface Booking_Stddev_Pop_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Booking_Stddev_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "booking" */
export interface Booking_Stddev_Samp_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "booking" */
export interface Booking_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Booking_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Booking_Stream_Cursor_Value_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  datetime?: InputMaybe<Scalars['date']>;
  employee?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_paid?: InputMaybe<Scalars['Boolean']>;
  service?: InputMaybe<Scalars['Int']>;
}

/** aggregate sum on columns */
export interface Booking_Sum_Fields {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  service?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "booking" */
export interface Booking_Sum_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** update columns of table "booking" */
export enum Booking_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Employee = 'employee',
  /** column name */
  Id = 'id',
  /** column name */
  IsPaid = 'is_paid',
  /** column name */
  Service = 'service'
}

export interface Booking_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Booking_Var_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "booking" */
export interface Booking_Var_Pop_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Booking_Var_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "booking" */
export interface Booking_Var_Samp_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Booking_Variance_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  service?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "booking" */
export interface Booking_Variance_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
}

/** columns and relationships of "company" */
export interface Company {
  /** An array relationship */
  bookings: Array<Booking>;
  /** An aggregate relationship */
  bookings_aggregate: Booking_Aggregate;
  /** An array relationship */
  customers: Array<Customer>;
  /** An aggregate relationship */
  customers_aggregate: Customer_Aggregate;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  /** An array relationship */
  services: Array<Services>;
  /** An aggregate relationship */
  services_aggregate: Services_Aggregate;
  slug: Scalars['String'];
}


/** columns and relationships of "company" */
export interface CompanyBookingsArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


/** columns and relationships of "company" */
export interface CompanyBookings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


/** columns and relationships of "company" */
export interface CompanyCustomersArgs {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


/** columns and relationships of "company" */
export interface CompanyCustomers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


/** columns and relationships of "company" */
export interface CompanyServicesArgs {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
}


/** columns and relationships of "company" */
export interface CompanyServices_AggregateArgs {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
}

/** aggregated selection of "company" */
export interface Company_Aggregate {
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
}

/** aggregate fields of "company" */
export interface Company_Aggregate_Fields {
  avg?: Maybe<Company_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
}


/** aggregate fields of "company" */
export interface Company_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface Company_Avg_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export interface Company_Bool_Exp {
  _and?: InputMaybe<Array<Company_Bool_Exp>>;
  _not?: InputMaybe<Company_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Bool_Exp>>;
  bookings?: InputMaybe<Booking_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Bool_Exp>;
  customers?: InputMaybe<Customer_Bool_Exp>;
  customers_aggregate?: InputMaybe<Customer_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  services?: InputMaybe<Services_Bool_Exp>;
  services_aggregate?: InputMaybe<Services_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "company" */
export enum Company_Constraint {
  /** unique or primary key constraint on columns "id" */
  CompanyPkey = 'company_pkey'
}

/** input type for incrementing numeric columns in table "company" */
export interface Company_Inc_Input {
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "company" */
export interface Company_Insert_Input {
  bookings?: InputMaybe<Booking_Arr_Rel_Insert_Input>;
  customers?: InputMaybe<Customer_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Services_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface Company_Max_Fields {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface Company_Min_Fields {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "company" */
export interface Company_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company>;
}

/** input type for inserting object relation for remote table "company" */
export interface Company_Obj_Rel_Insert_Input {
  data: Company_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Company_On_Conflict>;
}

/** on_conflict condition type for table "company" */
export interface Company_On_Conflict {
  constraint: Company_Constraint;
  update_columns?: Array<Company_Update_Column>;
  where?: InputMaybe<Company_Bool_Exp>;
}

/** Ordering options when selecting data from "company". */
export interface Company_Order_By {
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Order_By>;
  customers_aggregate?: InputMaybe<Customer_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  services_aggregate?: InputMaybe<Services_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
}

/** primary key columns input for table: company */
export interface Company_Pk_Columns_Input {
  id: Scalars['Int'];
}

/** select columns of table "company" */
export enum Company_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "company" */
export interface Company_Set_Input {
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface Company_Stddev_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface Company_Stddev_Pop_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface Company_Stddev_Samp_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** Streaming cursor of the table "company" */
export interface Company_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Company_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
}

/** aggregate sum on columns */
export interface Company_Sum_Fields {
  id?: Maybe<Scalars['Int']>;
}

/** update columns of table "company" */
export enum Company_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Slug = 'slug'
}

export interface Company_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Company_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Company_Set_Input>;
  /** filter the rows which have to be updated */
  where: Company_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Company_Var_Pop_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface Company_Var_Samp_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface Company_Variance_Fields {
  id?: Maybe<Scalars['Float']>;
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer" */
export interface Customer {
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

/** aggregated selection of "customer" */
export interface Customer_Aggregate {
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
}

export interface Customer_Aggregate_Bool_Exp {
  count?: InputMaybe<Customer_Aggregate_Bool_Exp_Count>;
}

export interface Customer_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Customer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "customer" */
export interface Customer_Aggregate_Fields {
  avg?: Maybe<Customer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
  stddev?: Maybe<Customer_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Sum_Fields>;
  var_pop?: Maybe<Customer_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Var_Samp_Fields>;
  variance?: Maybe<Customer_Variance_Fields>;
}


/** aggregate fields of "customer" */
export interface Customer_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "customer" */
export interface Customer_Aggregate_Order_By {
  avg?: InputMaybe<Customer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_Max_Order_By>;
  min?: InputMaybe<Customer_Min_Order_By>;
  stddev?: InputMaybe<Customer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customer_Sum_Order_By>;
  var_pop?: InputMaybe<Customer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customer_Var_Samp_Order_By>;
  variance?: InputMaybe<Customer_Variance_Order_By>;
}

/** input type for inserting array relation for remote table "customer" */
export interface Customer_Arr_Rel_Insert_Input {
  data: Array<Customer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_On_Conflict>;
}

/** aggregate avg on columns */
export interface Customer_Avg_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "customer" */
export interface Customer_Avg_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export interface Customer_Bool_Exp {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomerPkey = 'customer_pkey'
}

/** input type for incrementing numeric columns in table "customer" */
export interface Customer_Inc_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "customer" */
export interface Customer_Insert_Input {
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface Customer_Max_Fields {
  company_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "customer" */
export interface Customer_Max_Order_By {
  company_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Customer_Min_Fields {
  company_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "customer" */
export interface Customer_Min_Order_By {
  company_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "customer" */
export interface Customer_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
}

/** on_conflict condition type for table "customer" */
export interface Customer_On_Conflict {
  constraint: Customer_Constraint;
  update_columns?: Array<Customer_Update_Column>;
  where?: InputMaybe<Customer_Bool_Exp>;
}

/** Ordering options when selecting data from "customer". */
export interface Customer_Order_By {
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
}

/** primary key columns input for table: customer */
export interface Customer_Pk_Columns_Input {
  id: Scalars['Int'];
}

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "customer" */
export interface Customer_Set_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface Customer_Stddev_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "customer" */
export interface Customer_Stddev_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Customer_Stddev_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "customer" */
export interface Customer_Stddev_Pop_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Customer_Stddev_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "customer" */
export interface Customer_Stddev_Samp_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "customer" */
export interface Customer_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Customer_Stream_Cursor_Value_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** aggregate sum on columns */
export interface Customer_Sum_Fields {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "customer" */
export interface Customer_Sum_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Username = 'username'
}

export interface Customer_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Customer_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customer_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Customer_Var_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "customer" */
export interface Customer_Var_Pop_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Customer_Var_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "customer" */
export interface Customer_Var_Samp_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Customer_Variance_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "customer" */
export interface Customer_Variance_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface Date_Comparison_Exp {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
}

/** columns and relationships of "employees" */
export interface Employees {
  company_id: Scalars['Int'];
  cost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
}

/** aggregated selection of "employees" */
export interface Employees_Aggregate {
  aggregate?: Maybe<Employees_Aggregate_Fields>;
  nodes: Array<Employees>;
}

/** aggregate fields of "employees" */
export interface Employees_Aggregate_Fields {
  avg?: Maybe<Employees_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Employees_Max_Fields>;
  min?: Maybe<Employees_Min_Fields>;
  stddev?: Maybe<Employees_Stddev_Fields>;
  stddev_pop?: Maybe<Employees_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Employees_Stddev_Samp_Fields>;
  sum?: Maybe<Employees_Sum_Fields>;
  var_pop?: Maybe<Employees_Var_Pop_Fields>;
  var_samp?: Maybe<Employees_Var_Samp_Fields>;
  variance?: Maybe<Employees_Variance_Fields>;
}


/** aggregate fields of "employees" */
export interface Employees_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Employees_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface Employees_Avg_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export interface Employees_Bool_Exp {
  _and?: InputMaybe<Array<Employees_Bool_Exp>>;
  _not?: InputMaybe<Employees_Bool_Exp>;
  _or?: InputMaybe<Array<Employees_Bool_Exp>>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  cost?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "employees" */
export enum Employees_Constraint {
  /** unique or primary key constraint on columns "name" */
  EmployeesNameKey = 'employees_name_key',
  /** unique or primary key constraint on columns "id" */
  EmployeesPkey = 'employees_pkey'
}

/** input type for incrementing numeric columns in table "employees" */
export interface Employees_Inc_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "employees" */
export interface Employees_Insert_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface Employees_Max_Fields {
  company_id?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface Employees_Min_Fields {
  company_id?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "employees" */
export interface Employees_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Employees>;
}

/** on_conflict condition type for table "employees" */
export interface Employees_On_Conflict {
  constraint: Employees_Constraint;
  update_columns?: Array<Employees_Update_Column>;
  where?: InputMaybe<Employees_Bool_Exp>;
}

/** Ordering options when selecting data from "employees". */
export interface Employees_Order_By {
  company_id?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** primary key columns input for table: employees */
export interface Employees_Pk_Columns_Input {
  id: Scalars['Int'];
}

/** select columns of table "employees" */
export enum Employees_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Cost = 'cost',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "employees" */
export interface Employees_Set_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface Employees_Stddev_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface Employees_Stddev_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface Employees_Stddev_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** Streaming cursor of the table "employees" */
export interface Employees_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Employees_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Employees_Stream_Cursor_Value_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}

/** aggregate sum on columns */
export interface Employees_Sum_Fields {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
}

/** update columns of table "employees" */
export enum Employees_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Cost = 'cost',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export interface Employees_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Employees_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employees_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employees_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Employees_Var_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface Employees_Var_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface Employees_Variance_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** mutation root */
export interface Mutation_Root {
  /** delete data from the table: "booking" */
  delete_booking?: Maybe<Booking_Mutation_Response>;
  /** delete single row from the table: "booking" */
  delete_booking_by_pk?: Maybe<Booking>;
  /** delete data from the table: "company" */
  delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  delete_company_by_pk?: Maybe<Company>;
  /** delete data from the table: "customer" */
  delete_customer?: Maybe<Customer_Mutation_Response>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk?: Maybe<Customer>;
  /** delete data from the table: "employees" */
  delete_employees?: Maybe<Employees_Mutation_Response>;
  /** delete single row from the table: "employees" */
  delete_employees_by_pk?: Maybe<Employees>;
  /** delete data from the table: "services" */
  delete_services?: Maybe<Services_Mutation_Response>;
  /** delete single row from the table: "services" */
  delete_services_by_pk?: Maybe<Services>;
  /** insert data into the table: "booking" */
  insert_booking?: Maybe<Booking_Mutation_Response>;
  /** insert a single row into the table: "booking" */
  insert_booking_one?: Maybe<Booking>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** insert data into the table: "customer" */
  insert_customer?: Maybe<Customer_Mutation_Response>;
  /** insert a single row into the table: "customer" */
  insert_customer_one?: Maybe<Customer>;
  /** insert data into the table: "employees" */
  insert_employees?: Maybe<Employees_Mutation_Response>;
  /** insert a single row into the table: "employees" */
  insert_employees_one?: Maybe<Employees>;
  /** insert data into the table: "services" */
  insert_services?: Maybe<Services_Mutation_Response>;
  /** insert a single row into the table: "services" */
  insert_services_one?: Maybe<Services>;
  /** update data of the table: "booking" */
  update_booking?: Maybe<Booking_Mutation_Response>;
  /** update single row of the table: "booking" */
  update_booking_by_pk?: Maybe<Booking>;
  /** update multiples rows of table: "booking" */
  update_booking_many?: Maybe<Array<Maybe<Booking_Mutation_Response>>>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
  /** update multiples rows of table: "company" */
  update_company_many?: Maybe<Array<Maybe<Company_Mutation_Response>>>;
  /** update data of the table: "customer" */
  update_customer?: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  update_customer_by_pk?: Maybe<Customer>;
  /** update multiples rows of table: "customer" */
  update_customer_many?: Maybe<Array<Maybe<Customer_Mutation_Response>>>;
  /** update data of the table: "employees" */
  update_employees?: Maybe<Employees_Mutation_Response>;
  /** update single row of the table: "employees" */
  update_employees_by_pk?: Maybe<Employees>;
  /** update multiples rows of table: "employees" */
  update_employees_many?: Maybe<Array<Maybe<Employees_Mutation_Response>>>;
  /** update data of the table: "services" */
  update_services?: Maybe<Services_Mutation_Response>;
  /** update single row of the table: "services" */
  update_services_by_pk?: Maybe<Services>;
  /** update multiples rows of table: "services" */
  update_services_many?: Maybe<Array<Maybe<Services_Mutation_Response>>>;
}


/** mutation root */
export interface Mutation_RootDelete_BookingArgs {
  where: Booking_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Booking_By_PkArgs {
  id: Scalars['Int'];
}


/** mutation root */
export interface Mutation_RootDelete_CompanyArgs {
  where: Company_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Company_By_PkArgs {
  id: Scalars['Int'];
}


/** mutation root */
export interface Mutation_RootDelete_CustomerArgs {
  where: Customer_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Customer_By_PkArgs {
  id: Scalars['Int'];
}


/** mutation root */
export interface Mutation_RootDelete_EmployeesArgs {
  where: Employees_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Employees_By_PkArgs {
  id: Scalars['Int'];
}


/** mutation root */
export interface Mutation_RootDelete_ServicesArgs {
  where: Services_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Services_By_PkArgs {
  id: Scalars['Int'];
}


/** mutation root */
export interface Mutation_RootInsert_BookingArgs {
  objects: Array<Booking_Insert_Input>;
  on_conflict?: InputMaybe<Booking_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Booking_OneArgs {
  object: Booking_Insert_Input;
  on_conflict?: InputMaybe<Booking_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_CompanyArgs {
  objects: Array<Company_Insert_Input>;
  on_conflict?: InputMaybe<Company_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Company_OneArgs {
  object: Company_Insert_Input;
  on_conflict?: InputMaybe<Company_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_CustomerArgs {
  objects: Array<Customer_Insert_Input>;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Customer_OneArgs {
  object: Customer_Insert_Input;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_EmployeesArgs {
  objects: Array<Employees_Insert_Input>;
  on_conflict?: InputMaybe<Employees_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Employees_OneArgs {
  object: Employees_Insert_Input;
  on_conflict?: InputMaybe<Employees_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_ServicesArgs {
  objects: Array<Services_Insert_Input>;
  on_conflict?: InputMaybe<Services_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Services_OneArgs {
  object: Services_Insert_Input;
  on_conflict?: InputMaybe<Services_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootUpdate_BookingArgs {
  _inc?: InputMaybe<Booking_Inc_Input>;
  _set?: InputMaybe<Booking_Set_Input>;
  where: Booking_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Booking_By_PkArgs {
  _inc?: InputMaybe<Booking_Inc_Input>;
  _set?: InputMaybe<Booking_Set_Input>;
  pk_columns: Booking_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Booking_ManyArgs {
  updates: Array<Booking_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_CompanyArgs {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Company_By_PkArgs {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Company_ManyArgs {
  updates: Array<Company_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_CustomerArgs {
  _inc?: InputMaybe<Customer_Inc_Input>;
  _set?: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Customer_By_PkArgs {
  _inc?: InputMaybe<Customer_Inc_Input>;
  _set?: InputMaybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Customer_ManyArgs {
  updates: Array<Customer_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_EmployeesArgs {
  _inc?: InputMaybe<Employees_Inc_Input>;
  _set?: InputMaybe<Employees_Set_Input>;
  where: Employees_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Employees_By_PkArgs {
  _inc?: InputMaybe<Employees_Inc_Input>;
  _set?: InputMaybe<Employees_Set_Input>;
  pk_columns: Employees_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Employees_ManyArgs {
  updates: Array<Employees_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_ServicesArgs {
  _inc?: InputMaybe<Services_Inc_Input>;
  _set?: InputMaybe<Services_Set_Input>;
  where: Services_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Services_By_PkArgs {
  _inc?: InputMaybe<Services_Inc_Input>;
  _set?: InputMaybe<Services_Set_Input>;
  pk_columns: Services_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Services_ManyArgs {
  updates: Array<Services_Updates>;
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export interface Query_Root {
  /** fetch data from the table: "booking" */
  booking: Array<Booking>;
  /** fetch aggregated fields from the table: "booking" */
  booking_aggregate: Booking_Aggregate;
  /** fetch data from the table: "booking" using primary key columns */
  booking_by_pk?: Maybe<Booking>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** An array relationship */
  services: Array<Services>;
  /** An aggregate relationship */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
}


export interface Query_RootBookingArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


export interface Query_RootBooking_AggregateArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


export interface Query_RootBooking_By_PkArgs {
  id: Scalars['Int'];
}


export interface Query_RootCompanyArgs {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
}


export interface Query_RootCompany_AggregateArgs {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
}


export interface Query_RootCompany_By_PkArgs {
  id: Scalars['Int'];
}


export interface Query_RootCustomerArgs {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


export interface Query_RootCustomer_AggregateArgs {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


export interface Query_RootCustomer_By_PkArgs {
  id: Scalars['Int'];
}


export interface Query_RootEmployeesArgs {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
}


export interface Query_RootEmployees_AggregateArgs {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
}


export interface Query_RootEmployees_By_PkArgs {
  id: Scalars['Int'];
}


export interface Query_RootServicesArgs {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
}


export interface Query_RootServices_AggregateArgs {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
}


export interface Query_RootServices_By_PkArgs {
  id: Scalars['Int'];
}

/** columns and relationships of "services" */
export interface Services {
  /** An array relationship */
  bookings: Array<Booking>;
  /** An aggregate relationship */
  bookings_aggregate: Booking_Aggregate;
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
}


/** columns and relationships of "services" */
export interface ServicesBookingsArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


/** columns and relationships of "services" */
export interface ServicesBookings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}

/** aggregated selection of "services" */
export interface Services_Aggregate {
  aggregate?: Maybe<Services_Aggregate_Fields>;
  nodes: Array<Services>;
}

export interface Services_Aggregate_Bool_Exp {
  count?: InputMaybe<Services_Aggregate_Bool_Exp_Count>;
}

export interface Services_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Services_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "services" */
export interface Services_Aggregate_Fields {
  avg?: Maybe<Services_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Services_Max_Fields>;
  min?: Maybe<Services_Min_Fields>;
  stddev?: Maybe<Services_Stddev_Fields>;
  stddev_pop?: Maybe<Services_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Services_Stddev_Samp_Fields>;
  sum?: Maybe<Services_Sum_Fields>;
  var_pop?: Maybe<Services_Var_Pop_Fields>;
  var_samp?: Maybe<Services_Var_Samp_Fields>;
  variance?: Maybe<Services_Variance_Fields>;
}


/** aggregate fields of "services" */
export interface Services_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "services" */
export interface Services_Aggregate_Order_By {
  avg?: InputMaybe<Services_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Services_Max_Order_By>;
  min?: InputMaybe<Services_Min_Order_By>;
  stddev?: InputMaybe<Services_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Services_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Services_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Services_Sum_Order_By>;
  var_pop?: InputMaybe<Services_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Services_Var_Samp_Order_By>;
  variance?: InputMaybe<Services_Variance_Order_By>;
}

/** input type for inserting array relation for remote table "services" */
export interface Services_Arr_Rel_Insert_Input {
  data: Array<Services_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Services_On_Conflict>;
}

/** aggregate avg on columns */
export interface Services_Avg_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "services" */
export interface Services_Avg_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export interface Services_Bool_Exp {
  _and?: InputMaybe<Array<Services_Bool_Exp>>;
  _not?: InputMaybe<Services_Bool_Exp>;
  _or?: InputMaybe<Array<Services_Bool_Exp>>;
  bookings?: InputMaybe<Booking_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Bool_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "services" */
export enum Services_Constraint {
  /** unique or primary key constraint on columns "id" */
  ServicesPkey = 'services_pkey'
}

/** input type for incrementing numeric columns in table "services" */
export interface Services_Inc_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "services" */
export interface Services_Insert_Input {
  bookings?: InputMaybe<Booking_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface Services_Max_Fields {
  company_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "services" */
export interface Services_Max_Order_By {
  company_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Services_Min_Fields {
  company_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "services" */
export interface Services_Min_Order_By {
  company_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "services" */
export interface Services_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Services>;
}

/** input type for inserting object relation for remote table "services" */
export interface Services_Obj_Rel_Insert_Input {
  data: Services_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Services_On_Conflict>;
}

/** on_conflict condition type for table "services" */
export interface Services_On_Conflict {
  constraint: Services_Constraint;
  update_columns?: Array<Services_Update_Column>;
  where?: InputMaybe<Services_Bool_Exp>;
}

/** Ordering options when selecting data from "services". */
export interface Services_Order_By {
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** primary key columns input for table: services */
export interface Services_Pk_Columns_Input {
  id: Scalars['Int'];
}

/** select columns of table "services" */
export enum Services_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "services" */
export interface Services_Set_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface Services_Stddev_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "services" */
export interface Services_Stddev_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Services_Stddev_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "services" */
export interface Services_Stddev_Pop_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Services_Stddev_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "services" */
export interface Services_Stddev_Samp_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "services" */
export interface Services_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Services_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Services_Stream_Cursor_Value_Input {
  company_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}

/** aggregate sum on columns */
export interface Services_Sum_Fields {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "services" */
export interface Services_Sum_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** update columns of table "services" */
export enum Services_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export interface Services_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Services_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Services_Set_Input>;
  /** filter the rows which have to be updated */
  where: Services_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Services_Var_Pop_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "services" */
export interface Services_Var_Pop_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Services_Var_Samp_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "services" */
export interface Services_Var_Samp_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Services_Variance_Fields {
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "services" */
export interface Services_Variance_Order_By {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

export interface Subscription_Root {
  /** fetch data from the table: "booking" */
  booking: Array<Booking>;
  /** fetch aggregated fields from the table: "booking" */
  booking_aggregate: Booking_Aggregate;
  /** fetch data from the table: "booking" using primary key columns */
  booking_by_pk?: Maybe<Booking>;
  /** fetch data from the table in a streaming manner: "booking" */
  booking_stream: Array<Booking>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table in a streaming manner: "company" */
  company_stream: Array<Company>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table in a streaming manner: "employees" */
  employees_stream: Array<Employees>;
  /** An array relationship */
  services: Array<Services>;
  /** An aggregate relationship */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table in a streaming manner: "services" */
  services_stream: Array<Services>;
}


export interface Subscription_RootBookingArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


export interface Subscription_RootBooking_AggregateArgs {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


export interface Subscription_RootBooking_By_PkArgs {
  id: Scalars['Int'];
}


export interface Subscription_RootBooking_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Booking_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Bool_Exp>;
}


export interface Subscription_RootCompanyArgs {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
}


export interface Subscription_RootCompany_AggregateArgs {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
}


export interface Subscription_RootCompany_By_PkArgs {
  id: Scalars['Int'];
}


export interface Subscription_RootCompany_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Company_Bool_Exp>;
}


export interface Subscription_RootCustomerArgs {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


export interface Subscription_RootCustomer_AggregateArgs {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


export interface Subscription_RootCustomer_By_PkArgs {
  id: Scalars['Int'];
}


export interface Subscription_RootCustomer_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Bool_Exp>;
}


export interface Subscription_RootEmployeesArgs {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
}


export interface Subscription_RootEmployees_AggregateArgs {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
}


export interface Subscription_RootEmployees_By_PkArgs {
  id: Scalars['Int'];
}


export interface Subscription_RootEmployees_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Employees_Stream_Cursor_Input>>;
  where?: InputMaybe<Employees_Bool_Exp>;
}


export interface Subscription_RootServicesArgs {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
}


export interface Subscription_RootServices_AggregateArgs {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
}


export interface Subscription_RootServices_By_PkArgs {
  id: Scalars['Int'];
}


export interface Subscription_RootServices_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Services_Stream_Cursor_Input>>;
  where?: InputMaybe<Services_Bool_Exp>;
}

export type EmployeesQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars['Int']>;
}>;


export type EmployeesQuery = { employees: Array<{ cost?: string | undefined, email?: string | undefined, id: number, name: string }> };

export type ServicesQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars['Int']>;
}>;


export type ServicesQuery = { services: Array<{ id: number, name: string, description?: string | undefined }> };


export const EmployeesDocument = /*#__PURE__*/ gql`
    query Employees($companyId: Int) {
  employees(where: {company_id: {_eq: $companyId}}) {
    cost
    email
    id
    name
  }
}
    `;

/**
 * __useEmployeesQuery__
 *
 * To run a query within a React component, call `useEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeesQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
      }
export function useEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
        }
export type EmployeesQueryHookResult = ReturnType<typeof useEmployeesQuery>;
export type EmployeesLazyQueryHookResult = ReturnType<typeof useEmployeesLazyQuery>;
export type EmployeesQueryResult = Apollo.QueryResult<EmployeesQuery, EmployeesQueryVariables>;
export const ServicesDocument = /*#__PURE__*/ gql`
    query Services($companyId: Int) {
  services(where: {company_id: {_eq: $companyId}}) {
    id
    name
    description
  }
}
    `;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useServicesQuery(baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
      }
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
        }
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;