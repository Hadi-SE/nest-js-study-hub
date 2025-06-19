import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

// import { AuthServviceService } from './auth-servvice/auth-servvice.service';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [UserModule,
     AuthModule,
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [User],
      synchronize: true,
    }),
     ResponseModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
