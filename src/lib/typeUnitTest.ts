export type Expect<T extends true> = T;
export type Equal<X, Y> =
	(<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

//example 1
// type Hello = 'world';
// export type Test = Expect<Equal<Hello, 'world'>>;
// export type Test1 = Expect<Equal<Hello, 'hello'>>;

//example 2
// type ValueType<T extends 'single' | 'multiple'> = T extends 'single' ? string : string[];
// export type Test2 = Expect<Equal<ValueType<'single'>, string>>;
// export type Test3 = Expect<Equal<ValueType<'multiple'>, string>>;
