import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  // GET /ninjas?weapon --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'Stars' | 'Nunchucks') {
    return this.ninjaService.getNinjas(weapon);
  }

  // GET /ninjas:id --> { ... }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(+id);
  }

  // POST /ninjas --> { ... }
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  // PUT /ninjas:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto);
  }

  // DELETE /ninjas:id --> { ... }
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjaService.deleteNinja(+id);
  }
}
