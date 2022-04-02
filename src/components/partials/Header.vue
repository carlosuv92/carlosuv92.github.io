<template>
  <header>
    <img src="/f-logo.png" alt="Vue.js" width="40" />
    <nav>
      <ul>
        <li v-for="({ url, name }, index) in links" :key="index">
          <router-link :to="url">{{ name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="social-icons">
      <a
        :href="url"
        v-for="({ type, url }, index) in typeIcons"
        :key="index"
        target="_blank"
      >
        <vue-feather :type="type" />
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import feather from "feather-icons";

const icons = Object.keys(feather.icons);
const links = ref([
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Works",
    url: "/works",
  },
  {
    name: "Contact",
    url: "/contact",
  },
]);

const typeIcons = ref([
  {
    name: "Facebook",
    type: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    type: "twitter",
    url: "https://twitter.com/",
  },
  {
    name: "Instagram",
    type: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "Linkedin",
    type: "linkedin",
    url: "https://www.linkedin.com/",
  },
]);
</script>