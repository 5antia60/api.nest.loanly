import { ApiPropertyOptional } from '@nestjs/swagger';

export class TenderPayload {
  @ApiPropertyOptional()
  public date1?: string;

  @ApiPropertyOptional()
  public date2?: string;

  @ApiPropertyOptional()
  public clientId?: string;

  @ApiPropertyOptional()
  public data_reserva?: string;

  @ApiPropertyOptional()
  public equipmentId?: string;
}
