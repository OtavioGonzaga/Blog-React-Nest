import { BadRequestException, ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamID = createParamDecorator((_data, context: ExecutionContext) => {
	const id = Number(context.switchToHttp().getRequest().params.id);

	if (isNaN(id)) new BadRequestException('The param id must be a number');

	return id;
});
