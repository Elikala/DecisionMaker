<script>
	import logo from '$lib/images/DMlogo.svg';
    import homeIcon from '$lib/images/home.svg';
    import choicesIcon from '$lib/images/choices.svg';
    import resultsIcon from '$lib/images/results.svg';
    import groupsIcon from '$lib/images/groups.svg';
    import premiumIcon from '$lib/images/premium.svg';
    import logoutIcon from '$lib/images/logout.svg';

    import { goto } from "$app/navigation";

</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        background: #ffffff;
        width: max-content;

        border: 1px solid black;
        box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.24);
        border-radius: 0px 10px 10px 0px;

        padding: 20px;
    }

    .logo {
        display: flex;
        gap: 20px;
        padding: 20px;
        height: max-content;
        min-width: 200px;
        align-items: center;
    }

    .menu-item {
        display: flex;
        gap: 20px; 
        padding: 10px 30px; 
        border-radius: 40px;
        height: max-content;
        min-width: 200px;
        align-items: center;

    }

    .menu-item:hover,
    .menu-item.active {
        background: #CFFFCB;
        cursor: pointer;
    }
</style>

<div class="container">
    <div class="logo">
        <img src={logo} alt="logo"/>
        <p>Desicion Maker</p>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="menu-item" on:click={() => goto("/")} on:keydown>
        <img src={homeIcon} alt="Home icon" width="35px" height="35px"/>
        <p>Peamenüü</p>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="menu-item" on:click={() => goto("/otsuse_tegija")} on:keydown>
        <img src={choicesIcon} alt="Choices icon" width="35px"/>
        <p>Otsuste tegija</p>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="menu-item" on:click={() => goto("/tulemused")} on:keydown>
        <img src={resultsIcon} alt="Results icon" width="35px"/>
        <p>Tulemused</p>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="menu-item" on:click={() => goto("/grupid")} on:keydown>
        <img src={groupsIcon} alt="Groups icon" width="35px"/>
        <p>Grupid</p>
    </div>
    <div class="menu-item">
        <img src={premiumIcon} alt="Premium icon" width="35px"/>
        <p>Osta tasuline</p>
    </div>

    <div class="menu-item">
        <img src={logoutIcon} alt="Log Out" width="35px"/>
        <p>Logi välja</p>
    </div>
</div>