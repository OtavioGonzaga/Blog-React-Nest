import * as S from './Loading.style';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
	return (
		<S.Loading>
			<AiOutlineLoading3Quarters />
		</S.Loading>
	);
}
