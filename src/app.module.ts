import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Player } from './players/entities/player.entity';


@Module({
  imports: [PlayersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'SQL23pakdi25503',
      database: 'liverpool',
      entities: [Player],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { 
  constructor(private dataSource: DataSource) {}
}
