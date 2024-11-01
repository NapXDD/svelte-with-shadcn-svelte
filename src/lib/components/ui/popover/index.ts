import { Popover as PopoverPrimitive } from 'bits-ui';

import Content from './popover-content.svelte';
const { Root } = PopoverPrimitive;
const { Trigger } = PopoverPrimitive;
const { Close } = PopoverPrimitive;

export {
	Close,
	Content,
	//
	Root as Popover,
	Close as PopoverClose,
	Content as PopoverContent,
	Trigger as PopoverTrigger,
	Root,
	Trigger
};
