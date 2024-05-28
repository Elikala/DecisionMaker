<script>
	import Button from "$lib/components/Button.svelte";
	import choicesIcon from '$lib/images/choices.svg';
    import resultsIcon from '$lib/images/results.svg';
    import groupsIcon from '$lib/images/groups.svg';
</script>

<svelte:head>
	<title>Otsuse tegija</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<section>
	<div class="rectangle"></div>
    <div class="name-field">
        <div class="name">
            <input type="text" class="name2" placeholder="Nimi">
        </div>
    </div>
    <div class="title">Anna oma otsusele nimi</div>
    <div class="buttons">
        <button class="back">Tagasi</button>
        <button class="proceed">Jätka</button>
    </div>


	
</section>

<style>
	.rectangle {
    width: 801px;
    height: 486px;
    position: absolute;
    left: 714px;
    top: 205px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

.name-field {
    width: 598px;
    height: 81px;
    position: absolute;
    left: 816px;
    top: 364px;
}

.name {
    width: 598px;
    height: 81px;
    background: #F8F8F8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
    border: 1px solid #DDD8D8;
    display: flex;
    align-items: center;
    padding-left: 46px;
}

.name2 {
    width: calc(100% - 46px);
    height: 33px;
    border: none;
    background: transparent;
    color: #000000;
    font-size: 20px;
    font-weight: 300;
}

.name::placeholder {
    color: #A19898;
}

.title {
    width: 536px;
    position: absolute;
    left: 847px;
    top: 263px;
    text-align: center;
    color: #001B03;
    font-size: 36px;
    font-weight: 300;
}

.buttons {
    width: 470px;
    height: 56px;
    position: absolute;
    left: 880px;
    top: 558px;
    display: flex;
    justify-content: space-between;
}

.proceed,
.back {
    width: 180px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    font-size: 20px;
    font-weight: 300;
    border: none;
    cursor: pointer;
}

.proceed {
    background: #C4F1C0;
    color: #001B03;
}

.back {
    background: #F2F1E7;
    color: #001B03;
}

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
