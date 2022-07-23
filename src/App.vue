<script setup>
import * as data from "@/data.json";
import JobList from "./components/JobList.vue";
import JobFilters from "./components/JobFilters.vue";
import { ref, computed } from "vue";

const languages = ref([]);

const jobsData = computed(() => {
  if (languages.value.length < 1) {
    return data.default;
  }

  return data.default.filter((job) => {
    const includes = (value) => languages.value.includes(value);

    return job.languages.filter(includes).length || includes(job.role) || includes(job.level);
  });
});

const languageSelected = (language) => {
  if (languages.value.includes(language)) {
    return;
  }

  languages.value.push(language);

  document.querySelector('header').scrollIntoView({behavior: 'smooth'})
};

const clearLanguages = () => {
  languages.value = [];
};

const removeLanguage = (language) => {
  const index = languages.value.indexOf(language);

  if (index < 0) {
    return;
  }

  languages.value.splice(index, 1);
};
</script>

<template>
  <header>
    <div class="container">
      <JobFilters v-bind="{languages}" @remove="removeLanguage" @clear="clearLanguages"></JobFilters>
    </div>
  </header>
  <main class="container">
    <JobList v-bind:items="jobsData" @language-selected="languageSelected" ></JobList>
  </main>
</template>
