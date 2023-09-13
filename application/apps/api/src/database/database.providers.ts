import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        'type': 'postgres',
        'host': 'dpg-ck0a4695mpss73di36e0-a.oregon-postgres.render.com',
        'port': 5432,
        'username': 'grouphelpcife',
        'password': '2ghZjOyh4ExNp3pNSa2vWJWdiFR7I1K7',
        'database': 'dbhelpcife',
        'entities': [__dirname + '/../**/*.entity.{ts,js}'],
        'synchronize': true,
        ssl: true
      });

      return dataSource.initialize();
    },
  },
];
