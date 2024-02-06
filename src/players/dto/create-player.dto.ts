import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    imgUrl: string;
}
