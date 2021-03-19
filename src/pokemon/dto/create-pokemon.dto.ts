import { Pokemon } from '../entities/pokemon.entity';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePokemonDto extends Pokemon {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  height?: number | null;
}
