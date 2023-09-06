import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class OwnerGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
