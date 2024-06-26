// import { renderHook, act } from '@testing-library/react-hooks';
// import { useBooking } from './useBookings';
// import * as redux from 'react-redux';

// describe('useBooking', () => {
//   const mockDispatch = jest.fn();
//   const mockState = {
//     booking: {
//       services: 'Haircut',
//       location: 'Downtown',
//       employee: 'John Doe',
//       dateAndTime: '2022-01-01T12:00'
//     }
//   };

//   beforeEach(() => {
//     jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
//     jest.spyOn(redux, 'useSelector').mockImplementation(callback => callback(mockState));
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should return the current booking state', () => {
//     const { result } = renderHook(() => useBooking());
//     expect(result.current.booking).toEqual(mockState.booking);
//   });

//   it('should dispatch the correct action when selectService is called', () => {
//     const { result } = renderHook(() => useBooking());
//     act(() => {
//       result.current.selectService('Nail Care');
//     });
//     expect(mockDispatch).toHaveBeenCalledWith({
//       type: 'SET_SERVICE',
//       payload: 'Nail Care'
//     });
//   });

//   it('should dispatch the correct action when selectLocation is called', () => {
//     const { result } = renderHook(() => useBooking());
//     act(() => {
//       result.current.selectLocation('Uptown');
//     });
//     expect(mockDispatch).toHaveBeenCalledWith({
//       type: 'SET_LOCATION',
//       payload: 'Uptown'
//     });
//   });

// });
