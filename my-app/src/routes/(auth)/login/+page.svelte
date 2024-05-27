<script>
	import '$lib/styles.css';
	import { auth } from '$lib/mock/auth';
  import Button from "$lib/components/Button.svelte";

  let username = '';
  let password = '';
  let user = auth.getUser();

  function handleLogin() {
    if (auth.login(username, password)) {
      user = auth.getUser();
    } else {
      alert('Login failed');
    }
  }

  function handleLogout() {
    auth.logout();
    user = null;
  }
</script>

{#if user}
  <p>Welcome, {user.name}</p>
  <button on:click={handleLogout}>Logout</button>
{:else}
  <form on:submit|preventDefault={handleLogin}>
    <label>
      Username:
      <input type="text" bind:value={username} />
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
    <Button type="submit"> Login </Button>
  </form>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
  }
  label {
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
</style>