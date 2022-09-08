<template>
  <div id="pump">
    <h1>Pump</h1>
    <p>Active: {{this.$parent.db_data.pump}}</p>
  </div>
</template>

<script>

export default {
    name: "Pump"
}

</script>

<style scoped>
    #pump {
        margin-bottom: 400px;
    }
</style>
