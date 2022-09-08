<template>
  <div id="fan">
    <h1>Fan</h1>
    <p>Active: {{this.$parent.db_data.fan}}</p>
  </div>
</template>

<script>
export default {
    name: "Pump"
}
</script>

<style scoped>
    #fan {
        margin-bottom: 400px;
    }
</style>
