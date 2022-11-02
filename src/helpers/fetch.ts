import { ref } from "vue";

/**
 * Reactive Fetch API.
 *
 * @param url API url.
 * @returns Object
 */
export function useFetch(url: string) {
  const data = ref([]);
  const error = ref(null);
  const isLoading = ref(true);

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data.value = json;
      isLoading.value = false;
    })
    .catch((err) => ((error.value = err), (isLoading.value = false)));

  return { isLoading, data, error };
}
