import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsInterface } from './groups.model';
export declare class GroupsService {
    create(createGroupDto: CreateGroupDto): GroupsInterface;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGroupDto: UpdateGroupDto): string;
    remove(id: number): string;
}
