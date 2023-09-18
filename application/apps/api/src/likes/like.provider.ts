import { DataSource } from 'typeorm';
import { Like } from './entities/like.entity';

export const likeProviders = [
  {
    provide: 'LIKE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Like),
    inject: ['DATA_SOURCE'],
  },
];
