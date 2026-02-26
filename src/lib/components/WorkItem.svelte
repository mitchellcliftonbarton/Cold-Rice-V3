<script>
  // props
  let {
    hideImage = false,
    workItem = {}
  } = $props();

  // destructuring workItem
  const { title, description, link } = $derived(workItem);
</script>

{#if title && description && link}
  <div class="work-item">
    <div class="flex items-start gap-5">
      <span class="bg-black w-3 h-3 rounded-full block translate-y-[.4em] flex-none"></span>

      <div class="leading-[1.2] flex-1">
        <a href={link} target="_blank" class="italic def-link">{title}</a>
        
        <div>{@html description}</div>
      </div>
    </div>

    <figure class="aspect-[1.7] bg-grey-1 w-full rounded-xl mt-6" class:hidden={hideImage}></figure>
  </div>
{/if}