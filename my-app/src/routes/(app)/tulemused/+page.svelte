<script>
	import Button from "$lib/components/Button.svelte";
	import choicesIcon from '$lib/images/choices.svg';
    import resultsIcon from '$lib/images/results.svg';
    import groupsIcon from '$lib/images/groups.svg';

	import { onMount } from 'svelte';

	let tulemusedLoadCount = 0;

	onMount(() => {
    const savedCount = localStorage.getItem('tulemusedLoadCount');
    tulemusedLoadCount = savedCount ? parseInt(savedCount, 10) : 0;
    tulemusedLoadCount++;
    localStorage.setItem('tulemusedLoadCount', tulemusedLoadCount.toString());
  });
</script>

<section>
	<h1>Tulemused page has been loaded {tulemusedLoadCount} times</h1>
	<h1>Tulemused<h1>
	<div class="back-container" >
		<div class="back-container-green">
			<img src={choicesIcon} alt="Choices icon" width="100px"/>
		</div>
		<div class="action-area">
			<Button>Otsuse tegija</Button>
		</div>
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
		height: 400px;
		flex-shrink: 0;

		border-radius: 38px;
		background: #FFF;
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

	.action-area {
		grid-template-columns: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
		margin-bottom: 20px;
		height: 100%;
	}

</style>
