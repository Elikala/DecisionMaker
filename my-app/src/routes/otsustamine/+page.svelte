<script>
    import { navigate } from "svelte-routing";
    import Button from "$lib/components/Button.svelte";

    let scaleValue = 50; // Initial value for the scale

    function handleScaleChange(event) {
        scaleValue = event.target.value;
    }

    function handleContinue() {
        // Save the chosen value to localStorage
        const answers = { 
            plantOrAnimal: scaleValue
        };
        localStorage.setItem("answers", JSON.stringify(answers));
        // Navigate to the next page
        navigate("/otsustamine-2");
    }
</script>


<svelte:head>
	<title>Otsustamine</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="back-container">
        <div class="back-container-green">
            <h2>Hinda, kas elevant on pigem taim või loom</h2>
        </div>
        <div class="action-area">
            <div class="scale-labels">
                <label for="elephantScale" class="label-left">Taim</label>
                <input
                    id="elephantScale"
                    type="range"
                    min="0"
                    max="100"
                    value={scaleValue}
                    on:input={handleScaleChange} />
                <label for="elephantScale" class="label-right">Loom</label>
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
