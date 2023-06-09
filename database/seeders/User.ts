import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Encryption from '@ioc:Adonis/Core/Encryption'



export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'virk@adonisjs.com',
        password: Encryption.encrypt('encrypt'),
      },
      {
        name: 'romain@adonisjs.com',
        password: Encryption.encrypt('supersecret')
      }
    ]);
  }
}
