import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modulos de las rutas
import { FlightsModule } from './flights/flights.module';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';

// Entity para el TypeORM
import { Flights } from "./flights/flights.entity";
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '!Nanami1595',
    database: 'transportation',
    entities: [Flights],
    synchronize: true
  }), FlightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
