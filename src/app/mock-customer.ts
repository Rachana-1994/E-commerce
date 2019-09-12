import { Customer } from './customer.model';

export const Customers: Customer[] = [
    { firstName: 'Rachana',
      lastName: 'Hebbar', 
      email:'rachana.abc@gmail.com', 
      dateOfBirth: new Date('19/08/1994'),
      password: 'Abc123',
      address: 'Kengeri, Bengaluru'
    },
    {
      firstName: 'ABC',
      lastName: 'XYZ', 
      email:'xyz.abc@gmail.com', 
      dateOfBirth: new Date('12/09/1994'),
      password: 'Abc1234',
      address: 'Bengaluru'
    }
]