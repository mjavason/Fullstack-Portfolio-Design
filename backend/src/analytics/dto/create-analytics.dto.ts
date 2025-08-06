import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAnalyticsDto {
  @ApiProperty({ description: 'Fingerprint of the user/device', type: String })
  @IsString()
  fingerprint: string;

  @ApiProperty({ description: 'State of the user/device', type: String })
  @IsString()
  state: string;

  @ApiProperty({ description: 'Type of analytics event', type: String, example: 'click' })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Content category', type: String, example: 'project' })
  @IsString()
  content: string;
}
