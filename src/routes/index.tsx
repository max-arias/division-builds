import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div>todo</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Division 2 builds",
  meta: [
    {
      name: "description",
      content: "TODO",
    },
  ],
};
