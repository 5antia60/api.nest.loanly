import { ApiPropertyOptional } from '@nestjs/swagger';

export class DataModulePayload {
  @ApiPropertyOptional()
  public tempOff?: number;

  @ApiPropertyOptional()
  public tempOnStop?: number;

  @ApiPropertyOptional()
  public tempOnRunning?: number;

  @ApiPropertyOptional()
  public dateUpdate?: Date;

  @ApiPropertyOptional()
  public tenderId?: string;
}
