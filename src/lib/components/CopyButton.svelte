<script>
  let { textToCopy, buttonText = 'Copy' } = $props();

  let clicked = $state(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);

    clicked = true;
      
    setTimeout(() => {
      clicked = false;
    }, 1500);
  };
</script>

<button onclick={copyToClipboard} class="inline-flex items-center gap-4 cursor-pointer">
  <span>{buttonText}</span>
  <span class:hidden={!clicked}>Copied to clipboard!</span>
</button>

<style>
  button {
    span:first-child {
      text-shadow: 1px 0px 10px #ff705b;
      text-decoration-line: underline;
      text-underline-offset: 0.14em;
      text-decoration-thickness: 0.03em;
      text-decoration-color: #a3a3a3;
      transition: text-shadow 0.3s, color 0.3s;
    }

    &:hover {
      span:first-child {
        text-shadow: 1px 0px 10px transparent;
        color: var(--color-red);
      }
    }
  }
</style>