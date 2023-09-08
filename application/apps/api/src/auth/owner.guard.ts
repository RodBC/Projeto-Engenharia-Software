import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class OwnerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const userIdFromRoute = parseInt(request.query.userId);

    if (user && user.sub === userIdFromRoute) {
      return true;
    }
    throw new ForbiddenException('You are not the owner of this resource');
  }
}
