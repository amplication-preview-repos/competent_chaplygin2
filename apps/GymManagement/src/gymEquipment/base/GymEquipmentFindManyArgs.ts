/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GymEquipmentWhereInput } from "./GymEquipmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GymEquipmentOrderByInput } from "./GymEquipmentOrderByInput";

@ArgsType()
class GymEquipmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GymEquipmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GymEquipmentWhereInput, { nullable: true })
  @Type(() => GymEquipmentWhereInput)
  where?: GymEquipmentWhereInput;

  @ApiProperty({
    required: false,
    type: [GymEquipmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GymEquipmentOrderByInput], { nullable: true })
  @Type(() => GymEquipmentOrderByInput)
  orderBy?: Array<GymEquipmentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GymEquipmentFindManyArgs as GymEquipmentFindManyArgs };
