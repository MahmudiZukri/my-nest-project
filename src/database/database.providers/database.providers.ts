import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
      });
      sequelize.addModels([User]);

      try {
        await sequelize.sync({ force: true });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error; // Rethrow the error after logging it
      }
      return sequelize;
    },
  },
];
