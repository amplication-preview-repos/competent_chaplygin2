/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GymWhereUniqueInput } from "../../gym/base/GymWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class GymServiceWhereInput {
  @ApiProperty({
    required: false,
    type: () => GymWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GymWhereUniqueInput)
  @IsOptional()
  @Field(() => GymWhereUniqueInput, {
    nullable: true,
  })
  gym?: GymWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  serviceDescription?: StringNullableFilter;
}

export { GymServiceWhereInput as GymServiceWhereInput };
