<script>
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import choicesIcon from '$lib/images/choices.svg';
    import resultsIcon from '$lib/images/results.svg';
    import groupsIcon from '$lib/images/groups.svg';

	import { onMount } from 'svelte';

	let inputs = [{ id: 1 }, { id: 2 }]; //esialgsed inputi osad

	const addInput = () => {
		inputs = [...inputs, { id: inputs.length + 1 }]; //lisab uue inputi massiivi
	};

</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
    <div class="input-container">
		<p>Sisesta objektid, mille vahel soovid valida</p>
        {#each inputs as input}
            <div class="input-group">
                <p>Valik</p>
                <Input key={input.id}></Input> 
            </div>
			<br>
        {/each}
		<Button on:click={addInput}>Lisa valik</Button>
    </div>
</section>

<style>
    section.container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.7;
    }

    .input-container {
        background-color: white;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); /* varjuefekt */
    }

    .input-group {
        display: flex; /* sõna valik ja sisestusvälja jaoks */
        align-items: center; /* vertikaalne joondamine */
    }

    .input-group p {
        margin-right: 10px; /* lisab ruumi sõna valik ja sisestusvälja vahele */
		font-size: medium;
    }

</style>
