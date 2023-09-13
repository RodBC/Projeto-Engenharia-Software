import { DataSource } from 'typeorm';
import { RefreshToken } from './refresh_token.entity';

export const refreshTokenProviders = [
  {
    provide: 'REFRESH_TOKEN_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RefreshToken),
    inject: ['DATA_SOURCE'],
  },
];
