import { Prisma } from '@prisma/client';

export class Pokemon implements Prisma.PokemonUncheckedCreateInput {
  id?: number;
  name: string;
  height?: number;
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
