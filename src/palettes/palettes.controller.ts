import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { Palettes } from './palettes.entity';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';

@ApiTags('palettes')
@Controller('palettes')
export class PalettesController {
  constructor(private palettesService: PalettesService) {}

  @Get()
  @ApiOperation({
    summary: 'Obter todas as paletas de cores.',
    description:
      'Recupera uma lista de todas as paletas disponíveis. Limite de 10 requisições por minuto.',
  })
  @ApiOkResponse({
    description: 'Lista de todas as peletas.',
    type: [Palettes],
  })
  @ApiTooManyRequestsResponse({
    description: 'Você atingiu o limite de requisições permitidas.',
    content: {
      'application/json': {
        example: {
          statusCode: 429,
          timestamp: '2024-06-06T17:03:14.021Z',
          path: '/palettes/1',
          message: 'ThrottlerException: Too Many Requests',
        },
      },
    },
  })
  async findAll(): Promise<Palettes[]> {
    return this.palettesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obter paleta por ID.',
    description:
      'Recupera uma paleta específica pelo seu ID. Limite de 10 requisições por minuto.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID da paleta a ser recuperada',
    type: Number,
  })
  @ApiOkResponse({
    description: 'A pelate com ID fornecido.',
    type: Palettes,
  })
  @ApiBadRequestResponse({
    description: 'Parâmetro inválido, deve ser um valor numérico.',
    content: {
      'application/json': {
        example: {
          statusCode: 400,
          timestamp: '2024-06-06T16:51:23.592Z',
          path: '/palettes/as',
          message: {
            message: 'Validation failed (numeric string is expected)',
            error: 'Bad Request',
            statusCode: 400,
          },
        },
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Paleta não encontrada.',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          timestamp: '2024-06-06T16:52:35.701Z',
          path: '/palettes/46',
          message: {
            message: 'Color with id 46 not found',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  @ApiTooManyRequestsResponse({
    description: 'Você atingiu o limite de requisições permitidas.',
    content: {
      'application/json': {
        example: {
          statusCode: 429,
          timestamp: '2024-06-06T17:03:14.021Z',
          path: '/palettes/1',
          message: 'ThrottlerException: Too Many Requests',
        },
      },
    },
  })
  async findById(
    @Param('id', ParseIntPipe)
    id: string,
  ): Promise<Palettes> {
    return this.palettesService.findById(+id);
  }
}
