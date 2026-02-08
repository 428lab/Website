<script>
  import '../assets/color.css'
  import '../assets/font.css'
  import PageHeader from '../components/PageHeader.svelte';
  import PageFooter from '../components/PageFooter.svelte';
</script>

<PageHeader></PageHeader>
<slot />
<PageFooter></PageFooter>
