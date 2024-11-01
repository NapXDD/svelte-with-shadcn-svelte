<script lang="ts">
	import Select from '$lib/components/select/Select.svelte';
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';

	let inputValue = $state('');
	let singleSelectValue = $state('');
	let multipleSelectValue = $state<string[]>([]);

	const handleClick = () => {
		console.log('lmao');
	};

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];

	$effect(() => {
		console.log(inputValue);
	});

	const handleOnSelectSingleChange = (value: string) => {
		console.log(value);
	};

	const handleOnSelectMultiChange = (value: string[]) => {
		console.log(value);
	};
</script>

<div class="flex flex-col gap-2">
	<div>
		<Button class={'bg-red-400'} href="./map">Go to map page</Button>
		<Button class={'bg-red-400'} target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			>Click me!</Button
		>
		<Button onclick={handleClick} threshold={500}>threshhold click test</Button>
	</div>
	<div>
		<Input bind:value={inputValue} placeholder={'Type something...'} />
	</div>
	<div>
		<Popover.Root>
			<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Open</Popover.Trigger>
			<Popover.Content class="w-80">Popover content here</Popover.Content>
		</Popover.Root>
	</div>
	<div>
		<Select
			type={'single'}
			bind:value={singleSelectValue}
			placeholder="Select a Single item"
			name={'banana?'}
			className={'w-96'}
			onChange={handleOnSelectSingleChange}
			data={fruits}
		/>
		<Select
			type={'multiple'}
			bind:value={multipleSelectValue}
			placeholder="Select multi Item"
			name={'banana?'}
			className={'w-96 mt-2'}
			onChange={handleOnSelectMultiChange}
			data={fruits}
		></Select>
	</div>
</div>
