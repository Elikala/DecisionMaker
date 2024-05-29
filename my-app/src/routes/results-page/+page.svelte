<script>
    import { onMount } from "svelte";

    let answers = {};
    let resultMessage = "";

    onMount(() => {
        answers = JSON.parse(localStorage.getItem("answers")) || {};

        // Determine the result based on the answers
        const isPlant = answers.plantOrAnimal <= 50;
        const isCar = answers.carOrAnimal <= 50;
        const isAnimalFromPlantQuestion = answers.plantOrAnimal > 50;
        const isAnimalFromCarQuestion = answers.carOrAnimal > 50;

        if (isAnimalFromPlantQuestion && isAnimalFromCarQuestion) {
            resultMessage = "Sinu vastuste põhjal on elevant loom.";
        } else if (!isAnimalFromPlantQuestion && !isAnimalFromCarQuestion) {
            resultMessage = "Sinu vastuste põhjal on elevant korraga nii taim kui ka loom.";
        } else if (isAnimalFromPlantQuestion && isCar) {
            resultMessage = "Sinu vastuste põhjal on elevant loom, kuid samal ajal ka auto.";
        } else if (isPlant && isAnimalFromCarQuestion) {
            resultMessage = "Sinu vastuste põhjal on elevant loom, kuid samal ajal ka taim.";
        } else if (isAnimalFromPlantQuestion) {
            resultMessage = "Sinu vastuste põhjal on elevant pigem loom ja mitte taim.";
        } else if (isAnimalFromCarQuestion) {
            resultMessage = "Sinu vastuste põhjal on elevant pigem loom ja mitte auto.";
        } else {
            resultMessage = "Tulemused on ebaselged.";
        }
    });
</script>

<svelte:head>
    <title>Tulemuste leht</title>
</svelte:head>

<section>
    <h2>Tulemused</h2>
    <p>Taim või loom: {answers.plantOrAnimal}% Loom</p>
    <p>Auto või loom: {answers.carOrAnimal}% Loom</p>
    <h3>{resultMessage}</h3>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }

    h2 {
        font-size: 24px;
        color: #001B03;
    }

    p {
        font-size: 20px;
        color: #001B03;
    }

    h3 {
        font-size: 22px;
        color: #001B03;
        margin-top: 20px;
    }
</style>
