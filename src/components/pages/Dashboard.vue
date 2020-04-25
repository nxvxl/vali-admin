<template>
  <div class="app-content">
    <app-title v-bind="appTitle"></app-title>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="widget-small primary coloured-icon"><i class="icon fa fa-users fa-3x"></i>
          <div class="info">
            <h4>Users</h4>
            <p><b>5</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small info coloured-icon"><i class="icon fa fa-thumbs-o-up fa-3x"></i>
          <div class="info">
            <h4>Likes</h4>
            <p><b>25</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small warning coloured-icon"><i class="icon fa fa-files-o fa-3x"></i>
          <div class="info">
            <h4>Uploades</h4>
            <p><b>10</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small danger coloured-icon"><i class="icon fa fa-star fa-3x"></i>
          <div class="info">
            <h4>Stars</h4>
            <p><b>500</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="tile">
          <h3 class="tile-title">Monthly Sales</h3>
          <MonthlySalesChart :style="{height: '321px'}"></MonthlySalesChart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="tile">
          <h3 class="tile-title">Support Requests</h3>
          <SupportRequestsChart :style="{ height: '321px' }"></SupportRequestsChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '../includes/AppTitle'
import MonthlySalesChart from '../includes/dashboard/MonthlySalesChart'
import SupportRequestsChart from '../includes/dashboard/SupportRequestsChart'

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
    AppTitle,
    MonthlySalesChart,
    SupportRequestsChart
  }
}
</script>