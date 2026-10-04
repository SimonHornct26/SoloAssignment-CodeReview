<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.card-header {
  margin-bottom: 10px;
  font-weight: bold;
}

.card-footer {
  margin-top: 15px;
}
</style>
