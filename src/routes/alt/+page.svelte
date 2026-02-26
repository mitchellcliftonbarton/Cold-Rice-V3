<script>
  import WorkItem from '$lib/components/WorkItem.svelte';
</script>

<header class="flex flex-col justify-center items-center px-12 pt-12">
  <a href="/" class="font-secondary">Cold Rice LLC</a>
</header>

<div class="flex justify-center items-center mt-8">
  <div class="text-center max-w-[254px] leading-[1.2]">Cold Rice is a web development studio founded by <a href="https://mitchellbarton.com" class="def-link">Mitchell Barton</a>.</div>
</div>

<div class="main-grid px-md mt-16 pb-60">
  <div class="col-span-1">
    <div class="image aspect-[5.5/4] bg-grey-1"></div>
  </div>

  <div class="col-span-1 col-start-3 grid grid-cols-2 gap-6">
    <div class="vert-spacing-md">
      <section class="vert-spacing-base relative">
        <div>
          <p class="font-secondary absolute top-0 left-0 translate-x-[-4rem] text-grey-2">1</p>

          <h2 class="font-secondary uppercase text-red">Studio</h2>
          <div class="leading-[1.2] mt-4">Based in Salt Lake City, UT, Cold Rice builds bespoke websites for cultural and commercial clients. Our process creates fast and accessible websites that emphasize design integrity and long-term impact through ongoing partnership and care.</div>
        </div>

        <div>
          <h3 class="font-secondary">Capabilities</h3>
          <div class="leading-[1.2] mt-4">
            Frontend Development<br>
            Backend Development<br>
            Ecommerce Development<br> 
            CMS Architecture<br>
            ADA Compliance/Accessibility
          </div>
        </div>

        <div>
          <h3 class="font-secondary">Services</h3>
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

      <section class="vert-spacing-base relative">
        <div>
          <p class="font-secondary absolute top-0 left-0 translate-x-[-4rem] text-grey-2">3</p>

          <h2 class="font-secondary uppercase text-red">Pricing/Process</h2>
          <div class="leading-[1.2] mt-4">New project builds normally take 3-6 months to complete and typically range from $25k - $50k, depending on complexity and ongoing needs. Smaller or experimental projects are also occasionally a fit when timelines are short or the work is especially aligned.
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

    <div class="vert-spacing-md">
      <section class="vert-spacing-base relative">
        <div>
          <p class="font-secondary absolute top-0 right-0 translate-x-[2rem] text-grey-2">2</p>

          <h2 class="font-secondary uppercase text-red">Work</h2>
          <div class="leading-[1.2] mt-4">Much of Cold Rice’s success comes from tight collaborations with incredible designers and artists. Since 2018, Cold Rice has partnered with various institutions, studios, agencies, and brands. Collaborators include <a href="https://abbr.projects" class="def-link">Abbr. Projects</a>, <a href="https://actualsource.com" class="def-link">Actual Source</a>, <a href="https://folderstudio.com" class="def-link">Folder Studio</a>, <a href="https://info.co" class="def-link">IN-FO.CO</a>, <a href="https://matthewbooth.com" class="def-link">Matthew Booth</a>, <a href="https://newinformation.com" class="def-link">New Information</a>, <a href="https://noahbeckwith.com" class="def-link">Noah Beckwith</a>, <a href="https://noideas.com" class="def-link">No Ideas</a>, <a href="https://othermeans.com" class="def-link">Other Means</a>, <a href="https://thisjanuary.com" class="def-link">This January</a>, and others.</div>
        </div>

        <div>
          <h3 class="font-secondary">Select Clients</h3>
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

      <section class="vert-spacing-base relative">
        <div>
          <p class="font-secondary absolute top-0 right-0 translate-x-[2rem] text-grey-2">4</p>

          <h2 class="font-secondary uppercase text-red">Featured Work</h2>
          
          <div class="mt-4 vert-spacing-base">
            <WorkItem hideImage/>
            <WorkItem hideImage/>
            <WorkItem hideImage/>
            <WorkItem hideImage/>
            <WorkItem hideImage/>
            <WorkItem hideImage/>
            <WorkItem hideImage/>
            <WorkItem hideImage/>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div class="col-span-1 col-start-5">
    <section class="contact relative">
      <div>
        <p class="font-secondary absolute top-0 left-0 translate-x-[-4rem] text-grey-2">5</p>

        <h2 class="font-secondary uppercase text-red">Contact</h2>
        <div class="leading-[1.2] mt-4">Get in touch:<br><br><a href="mailto:mail@cold-rice.info" class="def-link">mail@cold-rice.info</a><br><a href="https://instagram.com/coldrice.info" class="def-link">Instagram</a></div>
      </div>
    </section>
  </div>
</div>

<style>
  .main-grid {
    grid-template-columns: 250px 1fr 590px 1fr 250px;
    display: grid;
    column-gap: var(--spacing-base);
  }

  .contact {
    position: sticky;
    top: var(--spacing-md);
  }
</style>