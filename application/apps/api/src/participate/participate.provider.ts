import { DataSource } from 'typeorm';
import { Participate } from './entities/participate.entity';

export const participateProviders = [
  {
    provide: 'LIKE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Participate),
    inject: ['DATA_SOURCE'],
  },
];
