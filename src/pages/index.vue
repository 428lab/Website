<template>
  <article class="container">
    <div class="row">
      <section class="col-12 col-lg-6 mt-3">
        <div
          class="py-1 mb-2 border-bottom border-success h4 d-flex justify-content-between align-items-center"
        >
          <div>ブログ新着</div>
          <a href="https://blog.428lab.net" class="text-dark">
            <img src="/blandlogo/hatena_text.svg" alt height="40" />
            <!-- <i class="fas fa-caret-right fa-1x"></i> -->
          </a>
        </div>
        <div v-for="item in articles" :key="item.event_id" target="_blank" class="mt-3">
          <a :href="item.link[0]" target="_blank">
            <span class="text-dark">{{ item.title[0] }}</span>
          </a>
          <br />
          <small>{{ dateFormat(item.pubDate[0]) }}</small>
          <div class="d-flex mt-2">
            <div
              class="p-1 mr-2 border rounded badge"
              v-for="cat in item.category"
              :key="cat.id"
            >{{ cat }}</div>
          </div>
        </div>
        <!-- link: [ 'https://blog.428lab.net/entry/2020/01/28/230000' ],
            description: []
            pubDate: [ 'Tue, 28 Jan 2020 23:00:00 +0900' ],
            category: [ '機械学習', '自作PC', 'ハードウェア', '料理' ],
            enclosure[ $.url ]
        -->
      </section>
      <section class="col-12 col-lg-6 mt-3">
        <div
          class="py-1 mb-2 border-bottom border-primary h4 d-flex justify-content-between align-items-center"
        >
          <div>開催イベント</div>
          <a href="https://428lab.connpass.com" class="p-2">
            <img src="/blandlogo/connpass_logo_2.png" alt height="20" />
          </a>
        </div>
        <div v-for="item in events" :key="item.event_id" target="_blank" class="mt-3">
          <a :href="item.event_url" target="_blank">
            <span class="text-dark">{{ item.title }}</span>
          </a>
          <br />
          <div class="d-flex align-items-center mt-1">
            <small>{{ dateFormat(item.started_at) }}</small>
            <div class="badge border p-1 ml-3">{{ item.hash_tag }}</div>
          </div>
        </div>
      </section>
      <hr />
    </div>
    <div class="row mt-4">
      <section class="col-lg-4">
        <h3 class>ラボ所在地</h3>
        <p class="h5">
          〒160-0004
          <br />東京都 新宿区 四谷二丁目 8-8
          <br />第5三和ビル 802号室
        </p>
      </section>
      <section class="col-lg-8 px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.080352925273!2d139.72523855578095!3d35.68720744886242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa49500887322918a!2z56ysNeS4ieWSjOODk-ODqw!5e0!3m2!1sja!2sjp!4v1580548401896!5m2!1sja!2sjp"
          width="100%"
          height="400"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </section>
    </div>
    <div class="row mt-4"></div>
    <div class="p-5"></div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      tab_contents: "blog",
      events: [],
      articles: []
    };
  },
  methods: {
    dateFormat(date) {
      // TODO: 後ほどMoment.jsに入れ直す。
      var dateStr = new Date(date);
      var year = dateStr.getFullYear();
      var month = dateStr.getMonth() + 1;
      var day = dateStr.getDate();
      var week = dateStr.getDay();
      var hour = dateStr.getHours();
      var minute = dateStr.getMinutes();
      var second = dateStr.getSeconds();
      return year + "/" + month + "/" + day + " " + hour + ":" + minute;
    }
  },
  async asyncData({ app }) {
    let blogitems = {};
    let eventItems = {};
    let response;
    try {
      response = await app.$axios.$get("/api");
      eventItems = response.connpass.events;
      blogitems = response.rss.channel[0].item.slice(0, 5);
    } catch (error) {
      console.log(error.message);
    }

    return {
      events: eventItems,
      articles: blogitems
    };
  }
};
</script>
