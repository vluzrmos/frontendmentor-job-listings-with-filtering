import { ref, computed, reactive } from "vue";
import * as data from "@/data.json";
import { useLanguages } from "@/composition/useLanguages";

const { languages } = useLanguages();
const jobs = ref(data.default);

const filtered = computed(() => {
  if (languages.value.length < 1) {
    return jobs.value;
  }

  return jobs.value.filter((job) => {
    const includes = (value) => languages.value.includes(value);

    return (
      job.languages.filter(includes).length ||
      includes(job.role) ||
      includes(job.level)
    );
  });
});

export const useJobs = () => {
  return { jobs, filtered };
};
