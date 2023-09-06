import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsInterface } from './groups.model';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    create(createGroupDto: CreateGroupDto): GroupsInterface;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGroupDto: UpdateGroupDto): string;
    remove(id: string): string;
}
