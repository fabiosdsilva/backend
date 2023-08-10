import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_DB_HOST,
        port: Number(process.env.POSTGRES_DB_PORT),
        username: process.env.POSTGRES_DB_USER,
        password: process.env.POSTGRES_DB_PASS,
        database: process.env.POSTGRES_DB_DB,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + './migrations/{.ts,.js}'],
        migrationsRun: true,
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
