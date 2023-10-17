/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Users as users } from './users.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(users),
    inject: ['DATA_SOURCE'],
  },
];
