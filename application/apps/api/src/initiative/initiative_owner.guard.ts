import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class InitiativeOwnerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const initiative = request.params.initiative;

    if (user.id !== initiative.userId) {
      throw new ForbiddenException(
        "You don't have permission to modify this initiative.",
      );
    }

    return true;
  }
}
