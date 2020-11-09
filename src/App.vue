<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import screenMinix from "@/minix/screenMinix";
export default {
  mixins: [screenMinix],
  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  border: 0;
  margin: 0;
}
</style>
