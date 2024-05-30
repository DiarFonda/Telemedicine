export interface BookingState {
    services: string | null;
    location: string | null;
    employee: string | null;
    dateAndTime: string | null;
  }
  
  export type BookingAction = 
    | { type: 'SET_SERVICE'; payload: string }
    | { type: 'SET_LOCATION'; payload: string }
    | { type: 'SET_EMPLOYEE'; payload: string }
    | { type: 'SET_DATE_TIME'; payload: string };
  
    export interface RootState {
        booking: BookingState;
      }
      