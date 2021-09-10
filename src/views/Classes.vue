<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="pb-3">
        <h1 class="text-primary">Sample List Page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere magni molestiae modi accusamus pariatur ratione odit, iure praesentium officia voluptates natus vitae deserunt, quas ducimus aliquam voluptatem! Corrupti, dolor cumque.</p>
      </div>
      <div>
        <PopoverTest />
      </div>
      <div class="ps-2">
        <ModalTest />
      </div>
    </div>

    <ClassList title="Data API Testing" brand="primary" cat1="Dance" cat2="Recreational" cat3="Kiddazzled" />
  </div>
</template>

<script>
import ClassList from "@/components/ClassList.vue";
import PopoverTest from "@/components/PopoverTest.vue";
import ModalTest from "@/components/ModalTest.vue";

export default {
  name: "Classes",
  components: {
    ClassList,
    PopoverTest,
    ModalTest,
  },
};
</script>
