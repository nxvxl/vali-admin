<template>
  <div class="app-content">
    <app-title :props="appTitle"></app-title>
  </div>
</template>

<script>
import AppTitle from '../includes/AppTitle'
export default {
  name: 'Dashboard',
  data() {
    return {
      appTitle: {
        title: 'Dashboard',
        icon: 'fa-dashboard',
        description: 'A free and open source Bootstrap 4 admin template',
        breadcrumb: ['Dasboard']
      }
    }
  },
  components: {
    AppTitle
  }
}
</script>