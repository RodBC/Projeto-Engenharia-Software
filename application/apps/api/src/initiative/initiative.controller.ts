/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Query, Req, UseGuards, Delete } from '@nestjs/common';
import { InitiativeService } from './initiative.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateInitiativeDto } from './dto/create_initiative.dto';
import { User } from 'src/users/user.entity';
import { OwnerGuard } from 'src/auth/owner.guard';
import { Initiative } from './initiative.entity';
import { UpdateInitiativeDto } from './dto/update_initiative.dto';
import { InitiativeOwnerGuard } from './initiative_owner.guard';
import { UserId } from 'src/auth/userId.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Public } from 'src/auth/public.decorator';

@Controller('initiative')
@UseGuards(JwtAuthGuard)
export class InitiativeController {
    constructor(private readonly initiativeService: InitiativeService) { }

    @Get('/')
    @Public()
    async findAll() {
        const initiatives = await this.initiativeService.findAll();

        return initiatives;
    }

    @Get('/own')
    @Public()
    async findAllOwnedByUserId(@Query('userId') userId:string) {
        return await this.initiativeService.findAllOwnedByUserId(userId);
    }

    @Post('/')
    async create(@UserId() userId, @Body() createInitiativeDto: CreateInitiativeDto) {
        return await this.initiativeService.create(createInitiativeDto, userId);
    }

    @UseGuards(InitiativeOwnerGuard)
    @Put('/:id')
    async update(@Req() req, @Body() updateInitiative: UpdateInitiativeDto) {
        return await this.initiativeService.update(req.initiative, updateInitiative);
    }

    @Get('/:id')
    @Public()
    async findOne(@Param('id') id: string) {
        return await this.initiativeService.findOneById(id);
    }

    @Delete('/deleteAll')
    async deleteAll(): Promise<void> {
      await this.initiativeService.deleteAll();
    }
  
}