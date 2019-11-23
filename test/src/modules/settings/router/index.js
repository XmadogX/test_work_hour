import Settings from '../views/Settings.vue'
import WorkingHours from '../views/WorkingHours.vue'
export default [
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    children: [
      {
        path: 'working-hours',
        name: 'working-hours',
        component: WorkingHours
      }
    ]
  }
]
