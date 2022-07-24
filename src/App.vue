<script setup>
import * as data from "@/data.json";
import JobList from "@/components/JobList.vue";
import JobFilters from "@/components/JobFilters.vue";
import { useLanguages } from "@/composition/useLanguages";
import { useJobs } from "@/composition/useJobs";

const { changed } = useLanguages();
const { filtered } = useJobs();

changed(async () => {
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
});
</script>

<template>
  <header>
    <div class="container">
      <JobFilters></JobFilters>
    </div>
  </header>
  <main class="container">
    <JobList v-bind:items="filtered"></JobList>
  </main>
</template>
