/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { InitiativeService } from './initiative.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateInitiativeDto } from './dto/create_initiative.dto';
import { User } from 'src/users/user.entity';
import { OwnerGuard } from 'src/auth/owner.guard';
import { Initiative } from './initiative.entity';
import { UpdateInitiativeDto } from './dto/update_initiative.dto';
import { InitiativeOwnerGuard } from './initiative_owner.guard';

@Controller('initiative')
@UseGuards(AuthGuard('jwt'))
export class InitiativeController {
    constructor(private readonly initiativeService: InitiativeService) { }

    @Get('/')
    async findAll() {
        const initiatives = await this.initiativeService.findAll();

        return initiatives;
    }

    @Get('/own/')
    async findAllOwnedByUserId(@Req() request) {
        const user = request.user;
        const initiatives = await this.initiativeService.findAllOwnedByUserId(user.sub);

        return initiatives;
    }

    @Post('/')
    async create(@Body() createInitiativeDto: CreateInitiativeDto, @Req() request: Request) {
        const user = (request as any).user;
        const initiative = await this.initiativeService.create(createInitiativeDto, user.sub);

        return initiative;
    }

    @UseGuards(InitiativeOwnerGuard)
    @Post('/update/:id')
    async update(@Req() req, @Body() updateInitiative: UpdateInitiativeDto) {
        const initiative = req.initiative;
        const initiative_updated = await this.initiativeService.update(initiative, updateInitiative);
        return initiative_updated;
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        const initiative = await this.initiativeService.findOneById(id);

        return initiative;
    }
}