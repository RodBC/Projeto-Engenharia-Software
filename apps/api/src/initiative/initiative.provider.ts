import { DataSource } from 'typeorm';
import { Initiative } from './initiative.entity';

export const initiativeProviders = [
  {
    provide: 'INITIATIVE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Initiative),
    inject: ['DATA_SOURCE'],
  },
];
