import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsInterface } from './groups.model';
import { v4 as uuidv4 } from 'uuid4';

@Injectable()
export class GroupsService {
  create(createGroupDto: CreateGroupDto): GroupsInterface {
    const { name, array_of_members, number_of_members } = createGroupDto
    const user = {
      id: uuidv4(),
      name: name,
      array_of_members: array_of_members,
      number_of_members: number_of_members
    }
    //array_of_members: object;
    return user


  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
