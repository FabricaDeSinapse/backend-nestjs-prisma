import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PokemonModule],
})
export class AppModule {}
