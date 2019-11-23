<template>
  <div class="working-hours working-hours_margin" >
    <div class="working-hours__body working-hours__body_margin">
      <div class="working-hours__schedule working-hours__schedule_padding ">
        <div class="working-hours__day">Schedule</div>
        <div class="working-hours__radio">
          <input v-model="schedule" type="radio" value="fixed" id="fixed"><label for="fixed">Fixed</label>
          <input v-model="schedule" type="radio" value="flexible" id="flexible"><label for="flexible">Flexible</label>
        </div>
      </div>
      <div class="working-hours__item">
        <div class="working-hours__day">Working hours</div>
        <div class="working-hours__slider">
          <div class="working-hours__time-inputs">
            <input v-model="workingHours[0]" type="time">
             -
            <input v-model="workingHours[1]" type="time">
          </div>
          <VueSlider
            :enable-cross="false"
            v-model="workingHours"
            :data="hours"
            :height="8"
          />
        </div>
      </div>
      <div
        class="working-hours__item"
        v-for="day in Object.keys(days)"
        :key="day"
      >
        <div class="working-hours__day">
          <div class="working-hours__checkbox">
            <input v-model="days[day].enabled" type="checkbox" :id="day"  checked>
            <label :for="day">{{day}}</label>
          </div>
        </div>
        <div v-if="days[day].enabled" class="working-hours__slider">
          <div class="working-hours__time-inputs">
            <input v-model="days[day].value[0]" type="time">
            -
            <input v-model="days[day].value[1]" type="time">
          </div>
          <VueSlider
            v-model="days[day].value"
            :enable-cross="false"
            :data="hours"
            :height="8"
          />
        </div>
      </div>
    </div>
    <div class="working-hours__save">
      <button class="working-hours__save-button working-hours__save-button_margin">Save Changes</button>
      <span class="working-hours__cancel working-hours__cancel_margin">Cancel</span>
      to reset changes
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import '@/assets/css/slider/default.css'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      schedule: 'fixed',
      workingHours: ['08:00', '17:00'],
      hours: [],
      days: {
        monday: {
          enabled: true,
          value: ['08:00', '17:00']
        },
        tuesday: {
          enabled: true,
          value: ['08:00', '17:00']
        },
        wedndesday: {
          enabled: true,
          value: ['08:00', '17:00']
        },
        thursday: {
          enabled: true,
          value: ['08:00', '17:00']
        },
        friday: {
          enabled: true,
          value: ['08:00', '17:00']
        },
        saturday: {
          enabled: false,
          value: ['08:00', '17:00']
        },
        sunday: {
          enabled: false,
          value: ['08:00', '17:00']
        }
      }
    }
  },
  created () {
    for (let index = 0; index < 1440; index++) {
      this.hours.push(index % 60 === 0
        ? `${this.lessThan(index / 60)}:00`
        : `${this.lessThan(Math.floor(index / 60))}:${this.lessThan(index % 60)}`)
    }
  },
  filter: {
  },
  methods: {
    lessThan (value) {
      return value < 10 ? `0${value}` : value
    }
  }
}
</script>
<style scoped>
  .working-hours {
    color:#9B9B9B;
  }
  .working-hours_margin {
    margin: 0 0 37px 0;
  }
  .working-hours__save {
    font-weight: 400;
    border-radius: 0 0 5px 5px;
    background-color: #ECECEC;
    color:#4A4A4A;
  }
  .working-hours__save-button {
    cursor: pointer;
    font-weight: 700;
    height:36px;
    background-color: #21D366;
    border: none;
    border-radius: 5px;
    color:white;
    text-transform: uppercase;
  }
  .working-hours__save-button_margin {
    margin: 13px 10px 10px 15px;
  }
  .working-hours__cancel {
    color: #97040C;
    font-weight: 500;
    cursor: pointer;
  }
  .working-hours__cancel_margin {
    margin-right: 10px
  }
  .working-hours__body_margin {
    margin: 30px 20px 40px 20px;
  }
  .working-hours__schedule {
    border-bottom: solid 1px #E9E9E9;
    display: flex;
  }
  .working-hours__schedule_padding {
    padding: 0 0 20px 0;
  }
  .working-hours__item {
    display: flex;
    align-items: flex-end;
    height: 65px;
  }
  .working-hours__day {
    display: flex;
    align-items: center;
    width: 190px;
  }
  .working-hours__slider {
    width: 100%;
  }
  .working-hours__slider input {
    margin: 0 2px 0 2px;
  }
  .working-hours__time-inputs{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black
  }

  .working-hours__radio {
    width: 100%
  }

  .working-hours__radio input[type="radio"] {
    display: none;
  }

  .working-hours__radio label {
    cursor: pointer;
    position: relative;
    display: inline-block;
    padding-top: 2px;
    margin-right: 20px;
    padding-left: 30px;
  }

  .working-hours__radio label::before,
  .working-hours__radio label::after {
    position: absolute;
    content: "";
    display: inline-block;
  }
  .working-hours__radio label::before{
    height: 18px;
    width: 18px;
    border-radius: 100%;
    border: 1px solid;
    left: 0px;
    top: 3px;
  }
  .working-hours__radio label::after {
    height: 12px;
    width: 12px;
    background-color: #4A90E2;
    transform: rotate(-45deg);
    border-radius: 100%;
    left: 4px;
    top: 7px;
  }
  .working-hours__radio input[type="radio"] + label::after {
    content: none;
  }
  .working-hours__radio input[type="radio"]:checked + label::after {
    content: "";
  }
  .working-hours__radio input[type="radio"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }
  .working-hours__checkbox input[type="checkbox"] {
    display: none;
  }

  .working-hours__checkbox label {
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-transform: capitalize;
    padding-left: 22px;
  }

  .working-hours__checkbox label::before,
  .working-hours__checkbox label::after {
    position: absolute;
    content: "";
    display: inline-block;
  }
  .working-hours__checkbox label::before{
    height: 16px;
    width: 16px;
    border-radius: 5px;
    border: 1px solid;
    left: 0px;
    top: 3px;
  }
  .working-hours__checkbox label::after {
    height: 4px;
    width: 6px;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-color: white;
    transform: rotate(-45deg);
    left: 4px;
    top: 7px;
  }
  .working-hours__checkbox input[type="checkbox"] + label::after {
    content: none;
  }
  .working-hours__checkbox input[type="checkbox"]:checked + label::after {
    content: "";
  }
  .working-hours__checkbox input[type="checkbox"]:checked + label::before {
    background-color: #4ECE3D;
    border-color: #4ECE3D;
  }
  .working-hours__checkbox input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }
</style>
