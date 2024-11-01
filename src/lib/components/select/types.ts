export type Item = {
	label: string;
	value: string;
};

export type SelectSingleProps = {
	data?: Item[];
	header?: string;
	className?: string;
	name?: string;
	onChange?: (arg: string) => void;
	value?: string;
	placeholder?: string;
};

export type ValueType<T = 'multiple'> = T extends 'multiple' ? string[] : string;

// export type SelectType<T> = T extends 'multiple' ? 'multiple' : 'single';

export type SelectType = 'multiple' | 'single';

export type OnChangeFn<T> = T extends 'multiple' ? (arg: string[]) => void : (arg: string) => void;

export type OnChangeSingleFn = {
	value: string;
	onChange: (arg: string) => void;
	type: 'single';
};

export type OnChangeMultipleFn = {
	value: string[];
	onChange: (arg: string[]) => void;
	type: 'multiple';
};

export type SelectRootProps = {
	data?: Item[];
	header?: string;
	className?: string;
	name?: string;
	placeholder?: string;
};

export type SelectProps = SelectRootProps & (OnChangeSingleFn | OnChangeMultipleFn);
