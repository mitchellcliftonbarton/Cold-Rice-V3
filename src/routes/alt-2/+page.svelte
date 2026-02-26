<script>
  import WorkItem from '$lib/components/WorkItem.svelte';
  import CopyButton from '$lib/components/CopyButton.svelte';

  const workItems = [
    {
      title: 'Skowhegan School of Painting & Sculpture',
      description: 'Custom Wordpress theme. Design by <a href="https://newinfo.studio/" target="_blank" class="def-link">New Information</a>.',
      link: 'https://skowheganart.org/'
    },
    {
      title: 'Kevin Kramer Gallery',
      description: 'Sanity + SvelteKit. Design by <a href="https://www.noahbeckwith.com/" target="_blank" class="def-link">Noah Beckwith</a>.',
      link: 'https://www.kevinkramergallery.com/'
    },
    {
      title: 'American Literary Translators Association',
      description: 'Custom Wordpress theme. Design by <a href="https://newinfo.studio/" target="_blank" class="def-link">New Information</a>.',
      link: 'https://literarytranslators.org/'
    },
    {
      title: 'Antenne Books',
      description: 'Custom Shopify OS 2.0 theme. Design by <a href="https://actualsource.work/" target="_blank" class="def-link">Actual Source</a>.',
      link: 'https://antennebooks.com/'
    },
    {
      title: 'States of Change',
      description: 'Custom Shopify OS 2.0 theme built in collaboration with <a href="https://matthewbooth.info/" target="_blank" class="def-link">Matthew Booth</a>.',
      link: 'https://statesofchange.us/'
    },
    {
      title: 'Storefront for Art & Architecture',
      description: 'Custom Wordpress theme. Design by <a href="https://newinfo.studio/" target="_blank" class="def-link">New Information</a>.',
      link: 'https://storefront.nyc/'
    },
    {
      title: 'Gallery98',
      description: 'Custom Wordpress theme built in collaboration with <a href="https://folder.studio/" target="_blank" class="def-link">Folder Studio</a>. Design by <a href="https://folder.studio/" target="_blank" class="def-link">Folder Studio</a>.',
      link: 'https://gallery98.org/'
    },
    {
      title: 'Utah Museum of Contemporary Art',
      description: 'Custom Wordpress theme. Design by <a href="https://actualsource.work/" target="_blank" class="def-link">Actual Source</a> and <a href="https://alotofmoving.parts/" target="_blank" class="def-link">A Lot of Moving Parts</a>.',
      link: 'https://utahmoca.org/'
    },
    {
      title: 'June Rings',
      description: 'Custom Shopify OS 2.0 theme. Design by <a href="https://christiansant.com/" target="_blank" class="def-link">Christian Sant</a>.',
      link: 'https://junerings.com/'
    },
    {
      title: 'Krink',
      description: 'Custom Shopify OS 2.0 theme. Design by <a href="https://newinfo.studio/" target="_blank" class="def-link">New Information</a>.',
      link: 'https://krink.com/'
    },
  ];
</script>

<header class="flex flex-col justify-center items-center px-6 lg:px-12 pt-12">
  <a href="/" class="font-secondary text-base-minus">Cold Rice LLC</a>
</header>

<div class="flex justify-center items-center mt-8">
  <div class="text-center max-w-[254px] leading-[1.2]">Cold Rice is a web development studio founded by <a href="https://mitchellbarton.com" class="def-link">Mitchell Barton</a>.</div>
</div>

<div class="grid grid-cols-4 px-6 lg:px-md pb-60 gap-base">
  <div class="order-1 col-span-4 lg:col-span-1 vert-spacing-md hidden lg:block">
    <section class="contact relative pt-16">
      <div class="relative">
        <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30">1.</span>

        <h2 class="font-secondary uppercase text-red text-base-minus">Contact</h2>
        <div class="leading-[1.2] mt-4">Get in touch:<br><br><CopyButton textToCopy="mail@cold-rice.info" buttonText="mail@cold-rice.info" /><br><a href="https://instagram.com/coldrice.info" class="def-link">Instagram</a></div>
      </div>
    </section>

    <figure class="image w-full lg:w-3/4">
      <div class="aspect-[4/5] bg-grey-1">
        <img src="/desk-detail-2.jpg" alt="A tape dispenser, scissors, and two clay figurines under a computer monitor on a desk." loading="lazy" class="w-full h-full object-cover object-center">
      </div>

      <figcaption class="text-sm mt-3 italic">Desk detail, 2.02.26</figcaption>
    </figure>
  </div>

  <div class="order-1 lg:order-2 col-span-4 lg:col-span-1 pt-16">
    <div class="vert-spacing-md">
      <section class="vert-spacing-base relative pl-10 lg:pl-0">
        <div class="relative">
          <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30 hidden lg:block">2.</span>
          <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30 block lg:hidden">1.</span>

          <h2 class="font-secondary uppercase text-red text-base-minus">Studio</h2>
          <div class="leading-[1.2] mt-4">Based in Salt Lake City, UT, Cold Rice builds bespoke websites for cultural and commercial clients. We create fast and accessible sites that emphasize design integrity and long-term impact through ongoing partnership and care.</div>
        </div>

        <div>
          <h3 class="font-secondary text-base-minus">Capabilities</h3>
          <div class="leading-[1.2] mt-4">
            Frontend Development<br>
            Backend Development<br>
            Ecommerce Development<br> 
            CMS Architecture<br>
            ADA Compliance/Accessibility
          </div>
        </div>

        <div>
          <h3 class="font-secondary text-base-minus">Services</h3>
          <div class="leading-[1.2] mt-4">
            Shopify (Headless & Themes)<br>
            Informational/Marketing Websites<br>
            Sanity, Wordpress, Craft<br>
            Site Maintenance/Support<br>
            Data Migration<br>
            Third Party Integrations<br>
          </div>
        </div>
      </section>

      <section class="vert-spacing-base lg:hidden">
        <section class="relative pl-10 lg:pl-0">
          <div class="relative">
            <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30">2.</span>

            <h2 class="font-secondary uppercase text-red text-base-minus">Contact</h2>
            <div class="leading-[1.2] mt-4">Get in touch:<br><br><CopyButton textToCopy="mail@cold-rice.info" buttonText="mail@cold-rice.info" /><br><a href="https://instagram.com/coldrice.info" class="def-link">Instagram</a></div>
          </div>
        </section>

        <figure class="image w-full lg:w-3/4">
          <div class="aspect-[4/5] bg-grey-1">
            <img src="/desk-detail-2.jpg" alt="A tape dispenser, scissors, and two clay figurines under a computer monitor on a desk." loading="lazy" class="w-full h-full object-cover object-center">
          </div>

          <figcaption class="text-sm mt-3 italic">Desk detail, 2.02.26</figcaption>
        </figure>
      </section>

      <section class="vert-spacing-base relative pl-10 lg:pl-0">
        <div class="relative">
          <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30">3.</span>

          <h2 class="font-secondary uppercase text-red text-base-minus">Work</h2>
          <div class="leading-[1.2] mt-4">Much of Cold Rice’s success comes from tight collaborations with incredible designers and artists. Since 2018, Cold Rice has partnered with various institutions, studios, agencies, and brands. Collaborators include <a href="https://abbr.projects" class="def-link">Abbr. Projects</a>, <a href="https://actualsource.com" class="def-link">Actual Source</a>, <a href="https://christiansant.com/" class="def-link">Christian Sant</a>, <a href="https://folderstudio.com" class="def-link">Folder Studio</a>, <a href="https://info.co" class="def-link">IN-FO.CO</a>, <a href="https://matthewbooth.com" class="def-link">Matthew Booth</a>, <a href="https://newinformation.com" class="def-link">New Information</a>, <a href="https://noahbeckwith.com" class="def-link">Noah Beckwith</a>, <a href="https://noideas.com" class="def-link">No Ideas</a>, <a href="https://othermeans.com" class="def-link">Other Means</a>, <a href="https://thisjanuary.com" class="def-link">This January</a>, and others.</div>
        </div>

        <div>
          <h3 class="font-secondary text-base-minus">Select Clients</h3>
          <div class="leading-[1.2] mt-4">
            American Literary Translators Association<br>
            Antenne Books<br>
            Aspen Art Museum<br>
            June Rings<br>
            Krink<br>
            Monkeypaw Productions<br>
            Skowhegan School of Painting & Sculpture<br>
            Storefront for Art & Architecture<br>
            Queens Museum<br>
            Utah Jazz<br>
            Utah Museum of Contemporary Art<br>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div class="order-3 col-span-4 lg:col-span-1 pt-16">
    <div class="vert-spacing-md">
      <figure class="image">
        <div class="aspect-[5.5/4] bg-grey-1">
          <img src="/desk-detail-1.jpg" alt="A tape dispenser, scissors, and two clay figurines under a computer monitor on a desk." loading="lazy" class="w-full h-full object-cover object-center">
        </div>

        <figcaption class="text-sm mt-3 italic">Desk detail, 2.26.26</figcaption>
      </figure>
      
      <section class="vert-spacing-base relative pl-10 lg:pl-0">
        <div class="relative">
          <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30">4.</span>

          <h2 class="font-secondary uppercase text-red text-base-minus">Pricing/Process</h2>
          <div class="leading-[1.2] mt-4">New project builds normally take 3-6 months to complete and typically range from $20k - $50k, depending on complexity and ongoing needs. Smaller or experimental projects are also occasionally a fit when timelines are short or the work is especially aligned.
          <br>
          <br>
          A typical project follows 4 phases:
          <br>
          <br>
          <h3>
            <span class="italic">Setup</span>
            <span class="opacity-30">(2-4 weeks)</span>
          </h3>
          <div>
            We like to get involved in projects early — getting a sense of where design is headed from the get-go prevents scope creep and allows for more thoughtful dev planning. Once development is ready to kickoff, we define milestones and start a setup process that involves building the foundations of the website.
          </div>
          <br>
          <h3>
            <span class="italic">Development</span>
            <span class="opacity-30">(4-8 weeks)</span>
          </h3>
          <div>
            In this phase we work towards a beta site. Once layouts, styling, and functionality are finished, we provide a staging link and hold a CMS training in preparation for content input and QA.
          </div>
          <br>
          <h3>
            <span class="italic">QA/Launch</span>
            <span class="opacity-30">(4-8 weeks)</span>
          </h3>
          <div>
            Here, we make the final push to get the site ready to go live. After content input, we go through multiple rounds of bug tracking and fixing until the site is ready for launch.
          </div>
          <br>
          <h3>
            <span class="italic">Support/Maintenance</span>
            <span class="opacity-30">(Ongoing)</span>
          </h3>
          <div>
            After launch, we provide 30 days of post-launch support for any bugs or questions that might come up. After this period, we offer ongoing support in the form of maintenance retainers. These usually end up in the $500 - $1,500/month range.
          </div></div>
        </div>
      </section>
    </div>
  </div>

  <div class="order-4 col-span-4 lg:col-span-1 pt-16">
    <section class="vert-spacing-base relative pl-10 lg:pl-20">
      <div class="relative">
        <span class="absolute left-0 top-0 translate-x-[calc(-100%-1.3rem)] opacity-30">5.</span>

        <h2 class="font-secondary uppercase text-red text-base-minus">Featured Work</h2>
        
        <div class="mt-4 vert-spacing-base">
          {#each workItems as workItem}
            <WorkItem {workItem} hideImage />
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  @media (min-width: 1024px) {
    .contact {
      position: sticky;
      top: 0px;
    }

    .contact::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 200%;
      background: linear-gradient(to bottom, white 20%, transparent);
    }
  }
</style>