<script lang="ts">
	import type { SelectProps } from './types';

	import * as Select from '$lib/components/ui/select/index.js';

	let {
		data,
		header,
		className,
		onChange,
		type,
		name,
		placeholder,
		value = $bindable()
	}: SelectProps = $props();

	let placeHolder = placeholder ? placeholder : 'Select an Item';

	const triggerContent = $derived(
		data?.find((item) => {
			if (!value) return;
			if (typeof value === 'string') {
				return item.value === value;
			} else {
				return item.value === value[value.length - 1];
			}
		})?.label ?? placeHolder
	);

	const handleOnValueChange = (value: string | string[]) => {
		if (!onChange) return;
		(onChange as (arg: string | string[]) => void)(value);
	};
</script>

<Select.Root bind:value {type} onValueChange={handleOnValueChange} {name}>
	<Select.Trigger class={className}>
		{triggerContent}
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#if header}
				<Select.GroupHeading>{header}</Select.GroupHeading>
			{/if}
			{#if data}
				{#each data as item}
					<Select.Item value={item.value} label={item.label}>{item.label}</Select.Item>
				{/each}
			{/if}
		</Select.Group>
	</Select.Content>
</Select.Root>
