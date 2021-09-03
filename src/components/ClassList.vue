<template>
  <div>
    <h3 :class="'text-' + brand" class="mb-4">{{ title }}</h3>

    <div class="row row-cols-1 row-cols-sm2-3 row-cols-md-3 row-cols-xl-4 g-4">
      <div class="col" v-for="(item, index) in classes" :key="index">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h6>{{ item.name }}</h6>
            <div class="fw-light">
              <div>{{ item.start_time }} - {{ item.end_time }}</div>
              <div>Age {{ item.min_age }} - {{ item.max_age }}</div>
              <div
                v-for="(day, index) in item.meeting_days.daylist"
                :key="index"
              >
                {{ day }}
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center p-1">
            <div class="p-1">
              {{ item.tuition.fee }} <span class="small">/month</span>
            </div>
            <div class="p-1">
              <button
                class="btn btn-sm text-white px-4"
                :class="'btn-' + brand"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <table class="table table-hover">
      <thead>
        <tr class="table-dark">
          <th>Class Registration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in classes" :key="index">
          <td>
            <div>{{ item.name }}</div>
            <div class="small fw-light">
              {{ item.category1 }} | {{ item.category2 }} | {{ item.category3 }}
            </div>
          </td>
          <td class="text-end">
            <a
              :href="item.online_reg_link"
              role="button"
              target="_blank"
              class="btn btn-sm text-white"
              :class="'btn-' + brand"
              >Register</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../../node_modules/axios";

export default {
  name: "ClassList",
  props: {
    title: String,
    brand: String,
    cat1: String,
    cat2: String,
    cat3: String,
  },
  data() {
    return {
      classes: null,
    };
  },
  methods: {
    convertTime24to12: function (time) {
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) {
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(""); // return adjusted time or original string
    },
    convertAgeString: function (agestring) {
      agestring = agestring.substr(1); // remove first "P" character
      var agepcs = agestring.match(/.{1,3}/g);
      for (var i = 0; i < agepcs.length; i++) {
        agepcs[i] = agepcs[i].substring(0, agepcs[i].length - 1);
        agepcs[i] = agepcs[i].replace(/^0+/, "");
      }
      var newagestring = agepcs[0] * 1 + agepcs[1] / 12;
      return newagestring;
    },
  },
  mounted() {
    axios
      .get("https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON", {
        headers: {
          "Content-Type": undefined,
        },
        params: {
          OrgId: "520628",
          //   ClassDays: day,
          Status: "Active",
          Cat1: this.cat1,
          Cat2: this.cat2,
          Cat3: this.cat3,
        },
      })
      .then((response) => {
        var classdata = response.data.rows;

        // manipulate class data as needed
        classdata.forEach((item) => {
          // convert times from 24h to 12h
          item.start_time = this.convertTime24to12(item.start_time);
          item.end_time = this.convertTime24to12(item.end_time);

          // format age strings to readable format
          // console.log(item);
          if (item.min_age) {
            item.min_age = this.convertAgeString(item.min_age);
          }
          if (item.max_age) {
            item.max_age = this.convertAgeString(item.max_age);
          }

          var daylist = new Array();
          for (const key in item.meeting_days) {
            let value = item.meeting_days[key];
            if (value) {
              daylist.push(key);
            }
          }
          item.meeting_days.daylist = daylist;

          item.online_reg_link = item.online_reg_link.replaceAll("&amp;", "&");
        });
        this.classes = response.data.rows;
        console.log(this.classes);
      });
  },
};
</script>
