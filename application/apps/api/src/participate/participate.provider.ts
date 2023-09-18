import { DataSource } from 'typeorm';
import { Participate } from '../participate/entities/participate.entity';

export const participateProviders = [
  {
    provide: 'PARTICIPATE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Participate),
    inject: ['DATA_SOURCE'],
  },
];
