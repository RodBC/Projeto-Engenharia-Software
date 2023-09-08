import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InitiativeService } from './initiative.service';

@Injectable()
export class FetchInitiativePipe implements PipeTransform {
  constructor(private readonly initiativeService: InitiativeService) {}

  async transform(id: string, metadata: ArgumentMetadata) {
    const initiative = await this.initiativeService.findOneById(id);
    if (!initiative) {
      throw new NotFoundException(`Initiative with ID ${id} not found`);
    }
    return initiative;
  }
}
