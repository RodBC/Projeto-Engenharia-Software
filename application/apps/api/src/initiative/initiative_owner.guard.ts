/* eslint-disable prettier/prettier */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InitiativeService } from './initiative.service';

@Injectable()
export class InitiativeOwnerGuard implements CanActivate {
  constructor(private readonly initiativeService: InitiativeService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const initiative = await this.initiativeService.findOneById(request.params.id);

    if (!initiative) {
      throw new NotFoundException(`Initiative with ID ${request.params.id} not found`);
    }

    if (user.sub !== parseInt(initiative.ownerId)) {
      throw new ForbiddenException(
        "You don't have permission to modify this initiative.",
      );
    }
    request.initiative = initiative;

    return true;
  }
}
