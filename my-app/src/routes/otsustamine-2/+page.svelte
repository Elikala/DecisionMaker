<script>
    import { onMount } from "svelte";
    import Button from "$lib/components/Button.svelte";
    import { navigate } from "svelte-routing";

    let scaleValue = 50; // Initial value for the second scale
    let previousAnswers = {};

    onMount(() => {
        // Retrieve the chosen value from localStorage
        previousAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    });

    function handleScaleChange(event) {
        scaleValue = event.target.value;
    }

    function handleContinue() {
        // Save the new chosen value to localStorage
        previousAnswers.carOrAnimal = scaleValue;
        localStorage.setItem("answers", JSON.stringify(previousAnswers));
        // Navigate to the results page or another page
        navigate("/results-page");
    }
</script>


<svelte:head>
	<title>Otsustamine 2</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="back-container">
        <div class="back-container-green">
            <h2>Hinda, kas elevant on pigem auto või loom</h2>
        </div>
        <div class="action-area">
            <div class="previous-answer">
                <p>Eelmine vastus: {previousAnswers.plantOrAnimal}% Loom</p>
            </div>
            <div class="scale-labels">
                <label for="carAnimalScale" class="label-left">Auto</label>
                <input
                    id="carAnimalScale"
                    type="range"
                    min="0"
                    max="100"
                    value={scaleValue}
                    on:input={handleScaleChange} />
                <label for="carAnimalScale" class="label-right">Loom</label>
            </div>
            <div>{scaleValue}% Loom</div>
            <Button on:click={handleContinue}>Jätka</Button>
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
		margin-bottom: 20px;
		height: 100%;
	}

    .scale-labels {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		margin-bottom: 10px;
	}

	#elephantScale {
		width: 80%;
		margin: 0 10px;
	}

	.label-left, .label-right {
		font-size: 18px;
		color: #001B03;
		width: 10%;
		text-align: center;
	}

	.label-left {
		margin-right: auto;
	}

	.label-right {
		margin-left: auto;
	}

</style>
