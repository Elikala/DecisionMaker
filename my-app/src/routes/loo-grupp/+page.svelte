<script lang="ts">
	import { onMount } from 'svelte';
	import Button from "$lib/components/Button.svelte";
	import choicesIcon from '$lib/images/choices.svg';
	import resultsIcon from '$lib/images/results.svg';
	import groupsIcon from '$lib/images/groups.svg';

	function handleClick() {
		window.location.href = "/sinu-gruppid";
	}

	onMount(() => {
		const form = document.getElementById('nameForm') as HTMLFormElement | null;
		if (form) {
			form.addEventListener('submit', function (event) {
				event.preventDefault(); 
				const nameInput = document.getElementById('nameInput') as HTMLInputElement | null;
				if (nameInput) {
					const uniqueKey = `groupName_${Date.now()}`;
					localStorage.setItem(uniqueKey, nameInput.value);
				}
			});
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div id="mainTitle">
		Sinu gruppid
	</div>
</section>

<section>
	<div class="back-container">
		<div class="back-container-green">
			<img src={groupsIcon} alt="Groups icon" width="100px"/>

			<form method="POST" id="nameForm">
				<label for="nameInput">Lisa grupile nimi</label>
				<br>
				<input type="text" id="nameInput" name="nameInput" placeholder="Grupi nimi...">
				<br>
				<Button on:click={handleClick} type="submit">Loo uus grupp</Button>
			</form>
		</div>
	</div>
</section>

<section>
	<div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		gap: 40px;
	}

	.back-container {
		display: grid;
		grid-template-rows: 1fr 1fr;
		min-width: 300px;
		max-width: 393px;
		height: 250px;
		flex-shrink: 0;
		border-radius: 38px;
		background: #CFFFCB;
		box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
		z-index: 1;
	}

	.back-container-green {
		display: grid;
		place-items: center;
		grid-template-columns: 1;
		width: 100%;
		height: 100%;
		flex-shrink: 0;
		border-radius: 38px 38px 0px 0px;
		background: #CFFFCB;
		z-index: 2;
	}

	#mainTitle {
		font-size: 40px;
		color: rgb(106, 94, 94);
	}
</style>
