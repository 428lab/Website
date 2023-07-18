<script lang="ts">
  import { format } from "date-fns";
  import axios from "axios";
  import type { AxiosResponse } from "axios";
  import { XMLParser } from "fast-xml-parser";
  import type { RssFeed, RssItem } from "$lib/types";
  // @ts-ignore
  // import fetchJsonp from "node-fetch-jsonp";
  import jsonp from "jsonp";

  let articles: RssItem[] = [];
  (async () => {
    const response: AxiosResponse<any> = await axios.get(
      "https://blog.428lab.net/rss"
    );
    const parser = new XMLParser();
    const rss: RssFeed = parser.parse(response.data);
    articles = rss.rss.channel.item.slice(0, 5);
  })();
  // let events: any[] = [];
  // (async () => {
  //   const response: AxiosResponse<any> = await axios.get(
  //     "/api/v1/event/?series_id=9445&order=2&count=7"
  //   );
  // })();
</script>

<article class="container">
  <div class="row">
    <section class="col-12 col-lg-6 mt-3">
      <div
        class="py-1 mb-2 border-bottom border-success h4 d-flex justify-content-between align-items-center"
      >
        <div>ブログ新着</div>
        <a href="https://blog.428lab.net" class="text-dark">
          <img src="/blandlogo/hatena_text.svg" alt="" height="40" />
        </a>
      </div>
      {#each articles as item}
        <div class="mt-3">
          <a href={item.link} target="_blank">
            <span class="text-dark">{item.title}</span>
          </a>
          <br />
          <small>{format(new Date(item.pubDate), "yyyy/MM/dd HH:mm")}</small>
          <div class="mt-2 text-wrap">
            {#each item.category as cat}
              <div class="p-1 me-2 border rounded badge d-inline-block">
                {cat}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </section>
    <section class="col-12 col-lg-6 mt-3">
      <div
        class="py-1 mb-2 border-bottom border-primary h4 d-flex justify-content-between align-items-center"
      >
        <div>開催イベント</div>
        <a href="https://428lab.connpass.com" class="p-2">
          <img src="/blandlogo/connpass_logo_2.png" alt="" height="20" />
        </a>
      </div>
      <!-- {#each events as item}
        <div class="mt-3">
          <a href={item.event_url} target="_blank">
            <span class="text-dark">{item.title}</span>
          </a>
          <br />
          <div class="d-flex align-items-center mt-1">
            <small>{dateFormat(item.started_at)}</small>
            <div class="badge border p-1 ms-3">{item.hash_tag}</div>
          </div>
        </div>
      {/each} -->
    </section>
    <hr />
  </div>
  <div class="row mt-4">
    <section class="col-lg-4">
      <h3>ラボ所在地</h3>
      <p class="h5">
        〒160-0004
        <br />東京都 新宿区 四谷二丁目 8-8
        <br />第5三和ビル 802号室
      </p>
    </section>
    <section class="col-lg-8 px-0">
      <iframe
        title="google maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.080352925273!2d139.72523855578095!3d35.68720744886242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa49500887322918a!2z56ysNeS4ieWSjOODk-ODqw!5e0!3m2!1sja!2sjp!4v1580548401896!5m2!1sja!2sjp"
        width="100%"
        height="400"
        frameborder="0"
        style="border:0;"
        allowfullscreen
      />
    </section>
  </div>
  <div class="row mt-4" />
  <div class="p-5" />
</article>
