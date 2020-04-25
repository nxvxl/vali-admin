<template>
  <div class="app sidebar-mini">
    <Header />
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Header from '../includes/Header'
import Sidebar from '../includes/Sidebar'

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar
  }
}
</script>