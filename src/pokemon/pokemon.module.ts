import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService, PrismaService],
})
export class PokemonModule {}
