<!-- CoachConteiner.vue -->

<script>
export default {
  name: "CoachConteiner",
  props: {
    coach: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    fullName() {
      if (this.coach && this.coach.firstName && this.coach.lastName) {
        return `${this.coach.firstName} ${this.coach.lastName}`;
      }
      return "Coach Name Not Available";
    },
    coachingSpecialty() {
      return this.coach && this.coach.coachingSpecialty
        ? this.coach.coachingSpecialty
        : "Coaching Specialty Not Available";
    },
    displayCoachImage() {
      return Object.keys(this.coach).length > 0;
    },
  },
};
</script>

<template>
  <div class="coach-container">
    <div class="coach-spacing-container">
      <div class="coach-item" v-if="displayCoachImage">
        <img :src="require('@/assets/coach.png')" alt="Coach Image" class="coach-image">
        <div class="coach-specialty">
          <p>Specialty: {{ coachingSpecialty }}</p>
        </div>
        <p class="coach-info">{{ fullName }}</p>
      </div>
      <p v-if="!displayCoachImage">Coach is Not Available</p>
    </div>
  </div>
</template>
<style scoped>
.coach-container{
    display: flex;
    background: #FFFFFF;
    justify-content: center; /* Center the content horizontally */
  align-items: center; 
  text-align: center;
  margin-top: 10px;
}
h1 {
    font-size: 48px;
    margin-top: 3%;
  }
  .coach-spacing-container{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
  margin: 0 auto;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
}
.coach-item{
  border: 3px solid #2e7d32;
  border-radius: 22px;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  background-color: #fff;
  align-items: center;
  text-align: center;
}
.coach-image{
    width: 400px;
    height: 400px;
    padding: 3px 10px;
}
.coach-container p{
 font-size: 25px;
 padding: 5px;
}
.coach-specialty{
    border: 1px solid #2e7d32;
  margin: 4px 0;
  border-left: none ;
  border-right: none;
}
</style>