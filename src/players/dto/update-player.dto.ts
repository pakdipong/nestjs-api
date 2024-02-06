import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlayerDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    imgUrl: string;
}
